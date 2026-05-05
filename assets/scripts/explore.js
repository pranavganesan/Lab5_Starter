// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById('voice-select');
  const textArea = document.getElementById('text-to-speak');
  const talkButton = document.querySelector('button');
  const faceImg = document.querySelector('img[src="assets/images/smiling.png"]');

  let voices = [];

  /**
   * Populates the dropdown with available system voices
   */
  function populateVoiceList() {
    voices = synth.getVoices();

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
        option.textContent += ' — DEFAULT';
      }

      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  // Voices load asynchronously; this event ensures they are ready before populating
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  } else {
    populateVoiceList();
  }

  /**
   * Button Click Logic
   */
  talkButton.addEventListener('click', () => {
    const utterThis = new SpeechSynthesisUtterance(textArea.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');

    // Find the correct voice object based on selection
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }

    // Visual feedback: Open mouth when talking
    utterThis.addEventListener('start', () => {
      faceImg.src = 'assets/images/smiling-open.png';
    });

    // Visual feedback: Close mouth when finished
    utterThis.addEventListener('end', () => {
      faceImg.src = 'assets/images/smiling.png';
    });

    synth.speak(utterThis);
  });
}