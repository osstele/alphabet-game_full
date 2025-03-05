document.addEventListener("DOMContentLoaded", function () {
    const letters = ["A", "B", "C", "D", "E"];
    const letterDisplay = document.getElementById("letterDisplay");
    const message = document.getElementById("message");
    const buttons = document.querySelectorAll(".letter-btn");

    function generateLetter() {
        const randomLetter = letters[Math.floor(Math.random() * letters.length)];
        letterDisplay.textContent = randomLetter;
        message.textContent = "";
    }

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-letter") === letterDisplay.textContent) {
                message.textContent = "Correct! 🎉";
                message.style.color = "green";
                setTimeout(generateLetter, 1000); // Wait 1 second before generating a new letter
            } else {
                message.textContent = "Try again! ❌";
                message.style.color = "red";
            }
        });
    });

    generateLetter(); // Start the game with a random letter
});