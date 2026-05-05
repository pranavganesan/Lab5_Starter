// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const hornImg = document.querySelector('#expose img');
  const hornAudio = document.querySelector('audio');
  
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  
  const playButton = document.querySelector('button');
  const jsConfetti = new JSConfetti();

  /**
   * 1. Horn Selection Logic
   */
  hornSelect.addEventListener('change', (event) => {
    const selectedHorn = event.target.value;
    
    // Update Image and Audio source based on selection
    hornImg.src = `assets/images/${selectedHorn}.svg`;
    hornAudio.src = `assets/audio/${selectedHorn}.mp3`;
    
    // Ensure alt text stays relevant
    hornImg.alt = `${selectedHorn} selected`;
  });

  /**
   * 2. Volume Slider Logic
   */
  volumeSlider.addEventListener('input', (event) => {
    const volValue = event.target.value;
    
    // Update actual audio volume (Scale 0-100 to 0.0-1.0)
    hornAudio.volume = volValue / 100;

    // Update Volume Icon based on ranges
    if (volValue == 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
      volumeIcon.alt = 'Volume level 0';
    } else if (volValue >= 1 && volValue < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
      volumeIcon.alt = 'Volume level 1';
    } else if (volValue >= 33 && volValue < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
      volumeIcon.alt = 'Volume level 2';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
      volumeIcon.alt = 'Volume level 3';
    }
  });

  /**
   * 3. Play Button & Confetti Logic
   */
  playButton.addEventListener('click', () => {
    // Play the audio
    hornAudio.play();

    // Trigger confetti if Party Horn is selected
    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}