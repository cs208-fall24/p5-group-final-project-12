document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.getElementById('play-music-button');
    const backgroundMusic = document.getElementById('background-music');
    const clickSound = document.getElementById('click-sound');
  
    // Check if the elements exist
    if (playButton && backgroundMusic && clickSound) {
      // Play sound effect when the button is clicked
      playButton.addEventListener('click', () => {
        // Play the click sound effect
        clickSound.play().catch(error => {
          console.error("Error playing click sound:", error);
        });
  
        // Toggle the background music play/pause
        if (backgroundMusic.paused) {
          backgroundMusic.play().catch(error => {
            console.error("Error playing background music:", error);
          });
          playButton.textContent = 'Stop the fun.';  // Change button text to 'Pause Music'
        } else {
          backgroundMusic.pause();
          playButton.textContent = 'Restart the good vibezz!';  // Change button text to 'Play Music'
        }
      });
    } else {
      console.log('One or more elements not found.');
    }
  });
  