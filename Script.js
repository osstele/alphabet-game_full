document.addEventListener("DOMContentLoaded", () => {
    const letterDisplay = document.getElementById("letterDisplay");
    const message = document.getElementById("message");
    const correctSound = document.getElementById("correctSound");
    const wrongSound = document.getElementById("wrongSound");
    const letterButtons = document.querySelectorAll(".letter-btn");

    let currentLetter = "";

    // Function to play sound based on letter
    function playLetterSound(letter) {
        const sound = document.getElementById(`${letter}Sound`);
        if (sound) {
            sound.play();
        }
    }

    // Function to display a random letter
    function displayRandomLetter() {
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        currentLetter = letters[Math.floor(Math.random() * letters.length)];
        letterDisplay.textContent = currentLetter;
    }

    letterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const letter = button.getAttribute("data-letter");
            if (letter === currentLetter) {
                message.textContent = "Correct!";
                correctSound.play();
                playLetterSound(letter);
                displayRandomLetter(); // Display a new random letter
            } else {
                message.textContent = "Try again!";
                wrongSound.play();
            }
        });
    });

    // Display the first random letter when the page loads
    displayRandomLetter();
});
