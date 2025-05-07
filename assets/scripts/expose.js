// expose.js


window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const image = document.querySelector('#expose img');
  const audio = document.querySelector('audio');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('button');
  const jsConfetti = new JSConfetti();

  // Update image and audio source on horn selection
  hornSelect.addEventListener('change', () => {
    const horn = hornSelect.value;
    audio.src = `assets/audio/${horn}.mp3`;
    image.src = `assets/images/${horn}.svg`;
  });

  // Update volume icon and audio volume
  volumeSlider.addEventListener('input', () => {
    const volume = volumeSlider.value;
    audio.volume = volume / 100;

    if (volume == 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    } else if (volume < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    } else if (volume < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }
  });

  // Play sound and trigger confetti if party horn
  playButton.addEventListener('click', () => {
    audio.play();
    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}
