import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
    calendarDate: document.querySelector('#datetime-picker'),
    startBtn: document.querySelector('button[data-start]'),
    days: document.querySelector('span[data-days]'),
    hours: document.querySelector('span[data-hours]'),
    minutes: document.querySelector('span[data-minutes]'),
    seconds: document.querySelector('span[data-seconds]'),
};

let intervalId = null;
let dateDifference = null;
let selectedDate = null;

refs.startBtn.setAttribute('disabled', true);
refs.startBtn.classList.add('disabled-btn')
refs.startBtn.addEventListener('click', onStartBtnClick);

// function onStartBtnClick() {
//   intervalId = setInterval(() => {
//     if (dateDifference > 0) {
//       const { days, hours, minutes, seconds } = convertMs(dateDifference);

//       refs.days.textContent = `${days}`;
//       refs.hours.textContent = `${hours}`;
//       refs.minutes.textContent = `${minutes}`;
//       refs.seconds.textContent = `${seconds}`;
//     } else {
//       clearInterval(intervalId);
//     }
//   }, 1000);
// };

function onStartBtnClick() {
  Notify.info('The countdown has begun');
  intervalId = setInterval(countdown, 1000);
};

function countdown() {
  const currentDate = new Date(); 
  dateDifference = selectedDate - currentDate;
  // console.log(currentDate, selectedDate);
  if (dateDifference > 0) {
    const { days, hours, minutes, seconds } = convertMs(dateDifference);
    
    refs.days.innerHTML = `${days}`;
    refs.hours.innerHTML = `${hours}`;
    refs.minutes.innerHTML = `${minutes}`;
    refs.seconds.innerHTML = `${seconds}`;
  } else {
    clearInterval(intervalId);
    Notify.warning('the countdown is over');
  }
};


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDate = selectedDates[0].getTime();
    const currentDate = options.defaultDate.getTime();
    // dateDifference = selectedDate - currentDate;
    if (selectedDate <= currentDate) {
      // window.alert('Please choose a date in the future');
      Notify.failure('Please choose a date in the future');
      refs.startBtn.classList.remove('start-btn')
      refs.startBtn.classList.add('disabled-btn')
    } else {
      Notify.success('the date is successfully selected');
      refs.startBtn.classList.remove('disabled-btn');
      refs.startBtn.classList.add('start-btn');
      refs.startBtn.removeAttribute('disabled');
    }
  },
};

flatpickr(refs.calendarDate, options)

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}