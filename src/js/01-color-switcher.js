function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const refs = {
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
    body: document.querySelector('body'),
};

let intervalId = null;
const CHANGE_COLOR_INTERVAL = 1000;

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);

refs.startBtn.style.backgroundColor = 'rgba(0, 255, 0, .5)';
refs.stopBtn.setAttribute('disabled', true);
refs.stopBtn.style.cursor = 'not-allowed';

function onStartBtnClick() {
    refs.startBtn.style.backgroundColor = '';
    refs.startBtn.setAttribute('disabled', true);
    refs.startBtn.style.cursor = 'not-allowed';
    refs.stopBtn.removeAttribute('disabled');
    refs.stopBtn.style.cursor = 'pointer';
    refs.stopBtn.style.backgroundColor = 'rgba(222, 70, 80, 0.884)';
    intervalId = setInterval(changeBodyColor, CHANGE_COLOR_INTERVAL);
}

function onStopBtnClick() {
    refs.stopBtn.style.backgroundColor = '';
    refs.stopBtn.setAttribute('disabled', true);
    refs.stopBtn.style.cursor = 'not-allowed';
    refs.startBtn.removeAttribute('disabled');
    refs.startBtn.style.cursor = 'pointer';
    refs.startBtn.style.backgroundColor = 'rgba(0, 255, 0, .5)';
    clearInterval(intervalId);
}

function changeBodyColor() {
    refs.body.style.backgroundColor = getRandomHexColor()
}