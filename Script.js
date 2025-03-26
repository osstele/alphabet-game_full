document.addEventListener("DOMContentLoaded", function () {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const letterDisplay = document.getElementById("letterDisplay");
    const message = document.getElementById("message");
    const buttons = document.querySelectorAll(".letter-btn");
    const correctSound = document.getElementById("correctSound");
    const wrongSound = document.getElementById("wrongSound");

    function generateLetter() {
        const randomLetter = letters[Math.floor(Math.random() * letters.length)];
        letterDisplay.textContent = randomLetter;
        message.textContent = "";
    }

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-letter") === letterDisplay.textContent) {
                if ('A' === letterDisplay.textContent) {
                message.textContent = "A FOR APPLE";
                }
                message.textContent = "Correct! 🎉";
                message.style.color = "green";
                correctSound.play();
                setTimeout(generateLetter, 1000); // Wait 1 second before generating a new letter
            } else {
                message.textContent = "Try again! ❌";
                message.style.color = "red";
                wrongSound.play();
            }
        });
    });

    generateLetter(); // Start the game with a random letter
});
