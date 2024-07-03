let count = 9;
let correctNumbers = [];

// 정답 생성 함수
function correctAnswer() {
    const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let numbers = [];

    while (numbers.length < 3) {
        let num = Math.floor(Math.random() * 10);
        if (!numbers.includes(num)) {
            numbers.push(num);
        }
    }
    return numbers;
}

// input 확인 함수
function inputCheck() {
    let input1 = document.querySelector('#number1').value;
    let input2 = document.querySelector('#number2').value;
    let input3 = document.querySelector('#number3').value;

    if (input1 === '' || input2 === '' || input3 === '') {
        return false;
    }
    return [parseInt(input1), parseInt(input2), parseInt(input3)];
}

// html 비우기 함수
function initialize() {
    document.querySelector('#number1').value = '';
    document.querySelector('#number2').value = '';
    document.querySelector('#number3').value = '';
    document.querySelector('.result-display').innerHTML = '';
}

// 결과 업데이트 함수
function display(userNumbers, result) {
    let resultDiv = document.querySelector(".result-display");
    let newResult = document.createElement("div");
    newResult.className = "check-result";

    let leftDiv = document.createElement("div");
    leftDiv.className = "left";
    leftDiv.textContent = userNumbers.join(' ');

    let rightDiv = document.createElement("div");
    rightDiv.className = "right";
    
    if (result.strikes === 0 && result.balls === 0) {
        let outDiv = document.createElement("div");
        outDiv.className = "out num-result";
        outDiv.textContent = "O";
        rightDiv.appendChild(outDiv);
    } else {
        if (result.strikes > 0) {
            let strikeCountDiv = document.createElement("div");
            strikeCountDiv.textContent = result.strikes + " ";
            rightDiv.appendChild(strikeCountDiv);
            
            let strikeDiv = document.createElement("div");
            strikeDiv.className = "strike num-result";
            strikeDiv.textContent = "S";
            rightDiv.appendChild(strikeDiv);
        }

        if (result.balls > 0) {
            let ballCountDiv = document.createElement("div");
            ballCountDiv.textContent = result.balls + " ";
            rightDiv.appendChild(ballCountDiv);
            
            let ballDiv = document.createElement("div");
            ballDiv.className = "ball num-result";
            ballDiv.textContent = "B";
            rightDiv.appendChild(ballDiv);
        }
    }

    newResult.appendChild(leftDiv);
    newResult.appendChild(document.createTextNode(" : "));
    newResult.appendChild(rightDiv);
    resultDiv.appendChild(newResult);
}


// 결과 계산 함수
function getResult(userNumbers) {
    let strikes = 0;
    let balls = 0;

    for (let i = 0; i < 3; i++) {
        if (userNumbers[i] === correctNumbers[i]) {
            strikes++;
        } else if (correctNumbers.includes(userNumbers[i])) {
            balls++;
        }
    }

    return { strikes, balls };
}

// 게임 종료 함수
function endGame(isWin) {
    let endingImg = document.querySelector("#game-result-img");
    if (isWin) {
        endingImg.src = "success.png";
    } else {
        endingImg.src = "fail.png";
    }

    document.querySelector(".submit-button").disabled = true;
}

// 게임 시작 함수
function gameStart() {
    correctNumbers = correctAnswer();
    initialize();
}

// 숫자 확인 함수
function check_numbers() {
    let userNumbers = inputCheck();

    let result = getResult(userNumbers);
    display(userNumbers, result);

    if (result.strikes === 3) {
        endGame(true);
    } else if (--count === 0) {
        endGame(false);
    }
}

// 페이지 로드 시 게임 시작
document.addEventListener("DOMContentLoaded", function () {
    gameStart();
});