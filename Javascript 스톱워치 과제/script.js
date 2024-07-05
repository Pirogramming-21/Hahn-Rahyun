const appendSeconds = document.getElementById("seconds");
const appendMseconds = document.getElementById("mseconds");
const startBtn = document.querySelector('.start_btn');
const stopBtn = document.querySelector('.stop_btn');
const resetBtn = document.querySelector('.reset_btn');
const timeDisplay = document.querySelector('.white_box_in_gray span');
const recordBox = document.querySelector('.record_display');
const deleteBtn = document.getElementById('delete-btn');

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
    addRecord();
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

function addRecord() {
    const recordContainer = document.createElement('div');
    recordContainer.className = 'record_display_container';
    
    const circleIcon = document.createElement('i');
    circleIcon.className = 'fa-regular fa-circle fa-2x';
    circleIcon.addEventListener('click', () => {
        circleIcon.classList.toggle('fa-circle');
        circleIcon.classList.toggle('fa-circle-check');
    });

    const recordTime = document.createElement('p');
    recordTime.innerHTML = `<span>${appendSeconds.textContent}</span>:<span>${appendMseconds.textContent}</span>`;

    recordContainer.appendChild(circleIcon);
    recordContainer.appendChild(recordTime);
    recordBox.appendChild(recordContainer);
};

deleteBtn.onclick = function() {
    const records = document.querySelectorAll('.record_display_container');
    records.forEach(record => {
        const circleIcon = record.querySelector('i');
        if (circleIcon.classList.contains('fa-circle-check')) {
            recordBox.removeChild(record);
        }
    });
}