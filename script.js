console.log("Ping Pong 🏓")

let player1Btn = document.querySelector('#player1-btn');
let player2Btn = document.querySelector('#player2-btn');

const scorePlayer1 = document.querySelector('#score-player1');
const scorePlayer2 = document.querySelector('#score-player2');

const scoreSelect = document.querySelector('#score-select');

const finalScore = () => parseInt(scoreSelect.value);

player1Btn.addEventListener('click', () => {
    // console.log("player 1 button clicked");
    let scoreCounterP1 = parseInt(scorePlayer1.innerText);
    scoreCounterP1 += 1;
    scorePlayer1.innerText = scoreCounterP1;

    if (scoreCounterP1 === finalScore()) {
        // console.log("Player 1 won");
        scorePlayer1.classList.add('winning');
        scorePlayer2.classList.add('loser');
        disableButton();
    }
})

player2Btn.addEventListener('click', () => {
    // console.log("player 2 button clicked");
    let scoreCounterP2 = parseInt(scorePlayer2.innerText);
    scoreCounterP2 += 1;
    scorePlayer2.innerText = scoreCounterP2;
    if (scoreCounterP2 === finalScore()) {
        // console.log("Player 2 won");
        scorePlayer1.classList.add('winning');
        scorePlayer2.classList.add('loser');

        disableButton();
    }
})

const reset = document.querySelector('#reset-btn');

const callReset = () => {
    enableButton();
    scorePlayer1.classList.remove(scorePlayer1.classList[1]);
    scorePlayer2.classList.remove(scorePlayer2.classList[1]);

    scorePlayer1.innerText = '0';
    scorePlayer2.innerText = '0';

    // scoreSelect.value = '5';
}

reset.addEventListener('click', callReset)

scoreSelect.addEventListener('change', () => {
    callReset();
    this.value = finalScore();
})


const disableButton = () => {
    player1Btn.disabled = true;
    player2Btn.disabled = true;
}

const enableButton = () => {
    player1Btn.disabled = false;
    player2Btn.disabled = false;
}





