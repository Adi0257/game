let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

updateScoreElement();

function playgame(playermove) {
    let result = '';
    const computermove = pickcomputermove();
    if (playermove === 'scissors') {
        if (computermove === 'rock') {
            result = 'You lose.';
        } else if (computermove === 'paper') {
            result = 'You win.';
        } else if (computermove === 'scissors') {
            result = 'Tie.';
        }
    }

    else if (playermove === 'paper') {
        if (computermove === 'rock') {
            result = 'You win.';
        } else if (computermove === 'paper') {
            result = 'Tie.';
        } else if (computermove === 'scissors') {
            result = 'You lose.';
        }
    }

    else {
        if (computermove === 'rock') {
            result = 'Tie.';
        } else if (computermove === 'paper') {
            result = 'You lose.';
        } else if (computermove === 'scissors') {
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
    document.querySelector('.js-moves').innerHTML = ` You <img src="${playermove}.png" class="move-icon">
    <img src="${computermove}.png" class="move-icon">
    computer`;

}

function updateScoreElement() {
    document.querySelector('.js-score').innerHTML = `Wins : ${score.wins}, losses : ${score.losses}, Ties : ${score.ties}`;
}

function pickcomputermove() {
    let computermove = '';

    const randomnumber = Math.random();
    if (randomnumber >= 0 && randomnumber <= 1 / 3) {
        computermove = 'rock';
    } else if (randomnumber >= 1 / 3 && randomnumber <= 2 / 3) {
        computermove = 'paper';
    } else {
        computermove = 'scissors';
    }
    return computermove
}
