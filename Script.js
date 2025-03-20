// Ensure voices are loaded
function getVoices() {
    return new Promise(resolve => {
        let voices = speechSynthesis.getVoices();
        if (voices.length) {
            resolve(voices);
            return;
        }
        speechSynthesis.onvoiceschanged = () => {
            voices = speechSynthesis.getVoices();
            resolve(voices);
        };
    });
}

document.querySelectorAll('.letter').forEach(letterElement => {
    letterElement.addEventListener('click', async () => {
        const letter = letterElement.textContent.trim().toUpperCase();
        const words = {
            'A': 'Apple', 'B': 'Ball', 'C': 'Cat', 'D': 'Dog', 'E': 'Egg', 'F': 'Fish',
            'G': 'Goat', 'H': 'Hat', 'I': 'Ice', 'J': 'Jug', 'K': 'Kite', 'L': 'Lion',
            'M': 'Mouse', 'N': 'Nest', 'O': 'Owl', 'P': 'Pig', 'Q': 'Queen', 'R': 'Rat',
            'S': 'Sun', 'T': 'Tiger', 'U': 'Umbrella', 'V': 'Violin', 'W': 'Whale',
            'X': 'Xylophone', 'Y': 'Yak', 'Z': 'Zebra'
        };
        const word = words[letter] || '';

        if (word) {
            if ('speechSynthesis' in window) {
                const utterance = new SpeechSynthesisUtterance(`${letter} for ${word}`);
                
                // Choose a voice (optional)
                const voices = await getVoices();
                utterance.voice = voices.find(voice => voice.name.includes("Google")) || voices[0];

                console.log(`Speaking: ${letter} for ${word}`);
                window.speechSynthesis.speak(utterance);
            } else {
                console.error("Speech synthesis is not supported in this browser.");
            }
        }
    });
});
