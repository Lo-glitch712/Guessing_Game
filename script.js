const words = ["apple", "banana", "grape", "orange", "peach", "pear", "cherry"];
let secretWord = words[Math.floor(Math.random() * words.length)];
let attemptsLeft = 5;

document.getElementById("submitGuess").addEventListener("click", makeGuess);
document.getElementById("restartGame").addEventListener("click", restartGame);
document.getElementById("guessInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        makeGuess();
    }
});

function makeGuess() {
    const guessInput = document.getElementById("guessInput").value.trim().toLowerCase();
    const messageElement = document.getElementById("message");

    if (guessInput === "") {
        messageElement.textContent = `Incorrect guess. You have ${attemptsLeft} attempts left. Try again!`;
        return;
    }

    if (guessInput === secretWord) {
        messageElement.textContent = "Congratulations! You guessed the secret word!";
        document.body.style.backgroundColor = "lightgreen";
        document.getElementById("restartGame").style.display = "block";
        return;
    }

    attemptsLeft--;

    if (attemptsLeft > 0) {
        const hint = `Hint: The word starts with '${secretWord.charAt(0).toUpperCase()}'`;
        messageElement.textContent = `Incorrect guess. You have ${attemptsLeft} attempts left. ${hint} Try again!`;
    } else {
        messageElement.textContent = `Game over! The secret word was '${secretWord}'.`;
        document.body.style.backgroundColor = "lightcoral";
        document.getElementById("restartGame").style.display = "block";
    }

    document.getElementById("guessInput").value = ""; // Clear input field
}

function restartGame() {
    secretWord = words[Math.floor(Math.random() * words.length)];
    attemptsLeft = 5;
    document.getElementById("message").textContent = "Guess the secret word!";
    document.body.style.backgroundColor = "";
    document.getElementById("restartGame").style.display = "none";
    document.getElementById("guessInput").value = ""; // Clear input field
}