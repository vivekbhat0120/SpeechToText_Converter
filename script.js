function startSpeechRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
        alert("Your browser does not support Speech Recognition. Try Chrome or Edge.");
        return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.start();

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        console.log("Transcript:", transcript); // for debugging
        document.getElementById('output').value = transcript;
    };

   recognition.onerror = (event) => {
    console.error("Speech Recognition Error:", event.error);
    if (event.error === "no-speech") {
        alert("No speech detected. Try speaking louder or check your microphone.");
    } else {
        alert("Error occurred: " + event.error);
    }
};
}
