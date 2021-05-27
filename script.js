
const dice1 = document.getElementById("dice1");

const game = document.getElementById("game");

const btn = document.getElementById("btn");

let score = 0
let diceRoll = 0

const diceRolled = () => {
    diceRoll = Math.ceil(Math.random() * 6);
    if (diceRoll == 1){
        score = 0
        game.textContent = "You Lose! Tell me what you gonna do now?"
    }
    else if (score >= 20) {
        score = score
        game.textContent = "You Won! Throw yo hands up!!"
    }
    else {
        game.textContent = "Keep rollin'?"
    }
}

const addScore = () => {
    diceRolled()
    score += diceRoll
    console.log(score)
}

btn.addEventListener("click", () => {
    addScore()
    diceImage.src = `img/dice${diceRoll}.png`
})
