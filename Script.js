document.addEventListener("DOMContentLoaded", () => {
    const letterDisplay = document.getElementById("letterDisplay");
    const message = document.getElementById("message");
    const correctSound = document.getElementById("correctSound");
    const wrongSound = document.getElementById("wrongSound");
    const letterButtons = document.querySelectorAll(".letter-btn");

    // Function to play sound based on letter
    function playLetterSound(letter) {
        const sound = document.getElementById(`${letter}Sound`);
        if (sound) {
            sound.play();
        }
    }

    letterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const letter = button.getAttribute("data-letter");
            // Check if the letter is correct (you can add your own logic here)
            if (letter === letterDisplay.textContent) {
                message.textContent = "Correct!";
                correctSound.play();
                playLetterSound(letter);
            } else {
                message.textContent = "Try again!";
                wrongSound.play();
            }
        });
    });

    // Example logic to display a random letter (you can modify as needed)
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    letterDisplay.textContent = letters[Math.floor(Math.random() * letters.length)];
});
