const getGuessValue = () => {
    const guessNumber = document.getElementById('guess-number');
    guessNumber.innerText = Math.round(Math.random() * 20);
    return (guessNumber.innerText);
}

const checkButton = () => {
    const guessInput = document.getElementById('guess-input');
    const guessInputValue = guessInput.value;

    const guessNumberText = getGuessValue();
    if (guessNumberText == guessInputValue) {
        document.body.style.backgroundColor = 'green';
        document.getElementById('clue').innerText = 'Correct Number!!!'
    }
    else {
        document.getElementById('guess-number').innerText = '?';
        document.getElementById('score').innerText--;
    }

}
const Clear = () => {
    document.body.style.backgroundColor = '#222';
    document.getElementById('guess-input').value = '';
    document.getElementById('score').innerText = 20;
    document.getElementById('guess-number').innerText = '?';
    document.getElementById('clue').innerText = 'Start guessing...';
}