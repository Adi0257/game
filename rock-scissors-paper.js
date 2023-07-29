let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

updateScoreElement();

function playgame(playermove) {
    let result = '';
    const computermove = pickcomputermove();
    if (playermove === 'Scissors') {
        if (computermove === 'Rock') {
            result = 'You lose.';
        } else if (computermove === 'Paper') {
            result = 'You win.';
        } else if (computermove === 'Scissors') {
            result = 'Tie.';
        }
    }

    else if (playermove === 'paper') {
        if (computermove === 'Rock') {
            result = 'You win.';
        } else if (computermove === 'Paper') {
            result = 'Tie.';
        } else if (computermove === 'Scissors') {
            result = 'You lose.';
        }
    }

    else {
        if (computermove === 'Rock') {
            result = 'Tie.';
        } else if (computermove === 'Paper') {
            result = 'You lose.';
        } else if (computermove === 'Scissors') {
            result = 'You win.';
        }
    }

    if (result === 'You win.') {
        score.wins += 1;
    } else if (result === 'You lose.') {
        score.losses += 1;
    } else if (result === 'Tie.') {
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-moves').innerHTML = ` You <img src="images/${playermove}.png " class="move-icon">
    <img src=" images/${computermove}.png" class="move-icon">
    computer`;

}

function updateScoreElement() {
    document.querySelector('.js-score').innerHTML = `Wins : ${score.wins}, losses : ${score.losses}, Ties : ${score.ties}`;
}

function pickcomputermove() {
    let computermove = '';

    const randomnumber = Math.random();
    if (randomnumber >= 0 && randomnumber <= 1 / 3) {
        computermove = 'Rock';
    } else if (randomnumber >= 1 / 3 && randomnumber <= 2 / 3) {
        computermove = 'Paper';
    } else {
        computermove = 'Scissors';
    }
    return computermove
}