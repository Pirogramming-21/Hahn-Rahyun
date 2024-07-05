/*document.addEventListener('DOMContentLoaded', (event) => {
    let startTime;
    let elapsedTime = 0;
    let timerInterval;

    const startBtn = document.querySelector('.start_btn');
    const stopBtn = document.querySelector('.stop_btn');
    const resetBtn = document.querySelector('.reset_btn');
    const timeDisplay = document.querySelector('.white_box_in_gray span');
    const recordBox = document.querySelector('.record_display');

    function updateTime() {
        elapsedTime = Date.now() - startTime;
        timeDisplay.textContent = timeFormatter(elapsedTime);
    }

    function timeFormatter(time) {
        const totalMilliseconds = time;
        const seconds = String(Math.floor(totalMilliseconds / 1000)).padStart(2, '0');
        const milliseconds = String(totalMilliseconds % 1000).padStart(3, '0').substring(0, 2); // 2자리 밀리초
        return `${seconds}:${milliseconds}`;
    }

    startBtn.addEventListener('click', () => {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(updateTime, 100);
        //startBtn.style.display = 'none';
        //stopBtn.style.display = 'inline-block';
    });

    stopBtn.addEventListener('click', () => {
        clearInterval(timerInterval);
        addRecord(timeFormatter(elapsedTime));
        //stopBtn.style.display = 'none';
        //startBtn.style.display = 'inline-block';
    });

    resetBtn.addEventListener('click', () => {
        clearInterval(timerInterval);
        elapsedTime = 0;
        timeDisplay.textContent = '00:00';
        //stopBtn.style.display = 'none';
        //startBtn.style.display = 'inline-block';
        //recordBox.innerHTML = '';
    });

    function addRecord(time) {
        const recordContainer = document.createElement('div');
        recordContainer.className = 'record_display_container';
        
        const circleIcon = document.createElement('i');
        circleIcon.className = 'fa-regular fa-circle fa-2x';
        circleIcon.addEventListener('click', () => {
            circleIcon.classList.toggle('fa-circle');
            circleIcon.classList.toggle('fa-circle-check');
        });

        const recordTime = document.createElement('span');
        recordTime.textContent = time;

        recordContainer.appendChild(circleIcon);
        recordContainer.appendChild(recordTime);
        recordBox.appendChild(recordContainer);
    }
});*/

const appendSeconds = document.getElementById("seconds");
const appendMseconds = document.getElementById("mseconds");
const startBtn = document.querySelector('.start_btn');
const stopBtn = document.querySelector('.stop_btn');
const resetBtn = document.querySelector('.reset_btn');
const timeDisplay = document.querySelector('.white_box_in_gray span');
const recordBox = document.querySelector('.record_display');

let seconds = 0;
let mseconds = 0;
let intervalID;

resetBtn.onclick = function() {
    clearInterval(intervalID);

    seconds = 0;
    mseconds = 0;

    appendSeconds.textContent = "00";
    appendMseconds.textContent = "00";
}

startBtn.onclick = function() {
    clearInterval(intervalID);

    intervalID = setInterval(start, 10);
    //start 함수를 10밀리초마다 실행해라
}

stopBtn.onclick = function() {
    clearInterval(intervalID);
}

function start() {
    mseconds++;

    if (mseconds <= 99) {
        appendMseconds.innerHTML = mseconds;
    } else {
        seconds++;
        appendSeconds.innerHTML = `${seconds < 10 ? "0" + seconds : seconds}`;

        mseconds = 0;
        appendMseconds.innerHTML = 0;
    }
}