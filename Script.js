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
                    else if (('B' === letterDisplay.textContent) 
                    message.textContent = "B FOR BALL";
                else if (('C' === letterDisplay.textContent) 
                    message.textContent = "C FOR BALL";
                else if (('D' === letterDisplay.textContent) 
                    message.textContent = "D FOR BALL";
                else if (('E' === letterDisplay.textContent) 
                    message.textContent = "E FOR BALL";
                else if (('F' === letterDisplay.textContent) 
                    message.textContent = "F FOR BALL";
                else if (('G' === letterDisplay.textContent) 
                    message.textContent = "G FOR BALL";
                else if (('H' === letterDisplay.textContent) 
                    message.textContent = "H FOR BALL";
                else if (('I' === letterDisplay.textContent) 
                    message.textContent = "I FOR BALL";
                else if (('J' === letterDisplay.textContent) 
                    message.textContent = "J FOR BALL";
                else if (('K' === letterDisplay.textContent) 
                    message.textContent = "K FOR BALL";
                else if (('L' === letterDisplay.textContent) 
                    message.textContent = "L FOR BALL";
                else if (('M' === letterDisplay.textContent) 
                    message.textContent = "M FOR BALL";
                else if (('N' === letterDisplay.textContent) 
                    message.textContent = "N FOR BALL";
                else if (('O' === letterDisplay.textContent) 
                    message.textContent = "O FOR BALL";
                else if (('P' === letterDisplay.textContent) 
                    message.textContent = "P FOR BALL";
                else if (('Q' === letterDisplay.textContent) 
                    message.textContent = "Q FOR BALL";
                else if (('R' === letterDisplay.textContent) 
                    message.textContent = "R FOR BALL";
                else if (('S' === letterDisplay.textContent) 
                    message.textContent = "S FOR BALL";
                else if (('T' === letterDisplay.textContent) 
                    message.textContent = "T FOR BALL";
                else if (('U' === letterDisplay.textContent) 
                    message.textContent = "U FOR BALL";
                else if (('V' === letterDisplay.textContent) 
                    message.textContent = "V FOR BALL";
                else if (('W' === letterDisplay.textContent) 
                    message.textContent = "W FOR BALL";
                else if (('X' === letterDisplay.textContent) 
                    message.textContent = "X FOR BALL";
                else if (('Y' === letterDisplay.textContent) 
                    message.textContent = "Y FOR BALL";
                else if (('Z' === letterDisplay.textContent) 
                    message.textContent = "Z FOR BALL";
                
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
