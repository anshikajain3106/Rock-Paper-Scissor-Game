let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const resultBtn = document.getElementById("resultBtn");

const userScorePara = document.querySelector("#score-you");
const compScorePara = document.querySelector("#score-comp");

// Computer chooses randomly
function getCompChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Show the result
function showResult(userWin) {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        resultBtn.innerText = "Congratulations! You Win!";
        resultBtn.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        resultBtn.innerText = "You Lose!";
        resultBtn.style.backgroundColor = "red";
    }
}

// Play the game
function playGame(userChoice) {
    const compChoice = getCompChoice();

    if (userChoice === compChoice) {
        resultBtn.innerText = "It's a Draw! Try Again";
        resultBtn.style.backgroundColor = "gray";
        return;
    }

    let userWin = false;

    if (userChoice === "rock") {
        userWin = compChoice === "scissors";
    } else if (userChoice === "paper") {
        userWin = compChoice === "rock";
    } else {
        userWin = compChoice === "paper";
    }

    showResult(userWin);
}

// Handle clicks
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.id;
        playGame(userChoice);
    });
});