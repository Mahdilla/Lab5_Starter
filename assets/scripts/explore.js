// explore.js

// Ensure DOM is loaded
window.addEventListener('DOMContentLoaded', init);

function init() {
  const faceImg = document.querySelector('#explore img');
  const textArea = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const speakButton = document.querySelector('button');

  let voices = [];

  // Load voices into the dropdown
  function populateVoices() {
    voices = window.speechSynthesis.getVoices();
    voiceSelect.innerHTML = '<option disabled selected>Select Voice:</option>';

    voices.forEach((voice, index) => {
      const option = document.createElement('option');
      option.value = index;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });
  }

  // Some browsers (e.g., Chrome) load voices asynchronously
  window.speechSynthesis.onvoiceschanged = populateVoices;
  populateVoices();

  speakButton.addEventListener('click', () => {
    const text = textArea.value;
    const voiceIndex = voiceSelect.value;

    if (!text || voiceIndex === 'select') return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voices[voiceIndex];

    // Change face while speaking
    utterance.onstart = () => {
      faceImg.src = 'assets/images/smiling-open.png';
    };

    utterance.onend = () => {
      faceImg.src = 'assets/images/smiling.png';
    };

    window.speechSynthesis.speak(utterance);
  });
}
