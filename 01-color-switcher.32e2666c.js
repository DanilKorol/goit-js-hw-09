const t={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]"),body:document.querySelector("body")};let o=null;function r(){t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}t.startBtn.addEventListener("click",(function(){t.startBtn.style.backgroundColor="",t.startBtn.setAttribute("disabled",!0),t.startBtn.style.cursor="not-allowed",t.stopBtn.removeAttribute("disabled"),t.stopBtn.style.cursor="pointer",t.stopBtn.style.backgroundColor="rgba(222, 70, 80, 0.884)",o=setInterval(r,1e3)})),t.stopBtn.addEventListener("click",(function(){t.stopBtn.style.backgroundColor="",t.stopBtn.setAttribute("disabled",!0),t.stopBtn.style.cursor="not-allowed",t.startBtn.removeAttribute("disabled"),t.startBtn.style.cursor="pointer",t.startBtn.style.backgroundColor="rgba(0, 255, 0, .5)",clearInterval(o)})),t.startBtn.style.backgroundColor="rgba(0, 255, 0, .5)",t.stopBtn.setAttribute("disabled",!0),t.stopBtn.style.cursor="not-allowed";
//# sourceMappingURL=01-color-switcher.32e2666c.js.map
