document.addEventListener("DOMContentLoaded", function () {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
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

document.querySelectorAll('.letter').forEach(letterElement => {
    letterElement.addEventListener('click', () => {
        const letter = letterElement.textContent.trim().toUpperCase();
        const words = {
            'A': 'Apple',
            'B': 'Ball',
            'C': 'Cat',
            'D': 'Dog',
            'E': 'Egg',
            'F': 'Fish',
            'G': 'Goat',
            'H': 'Hat',
            'I': 'Ice',
            'J': 'Jug',
            'K': 'Kite',
            'L': 'Lion',
            'M': 'Mouse',
            'N': 'Nest',
            'O': 'Owl',
            'P': 'Pig',
            'Q': 'Queen',
            'R': 'Rat',
            'S': 'Sun',
            'T': 'Tiger',
            'U': 'Umbrella',
            'V': 'Violin',
            'W': 'Whale',
            'X': 'Xylophone',
            'Y': 'Yak',
            'Z': 'Zebra'
        };
        const word = words[letter] || '';
        if (word) {
            const utterance = new SpeechSynthesisUtterance(`${letter} for ${word}`);
            window.speechSynthesis.speak(utterance);
        } else {
    console.error("Speech synthesis is not supported in this browser.");
}
    });
});
