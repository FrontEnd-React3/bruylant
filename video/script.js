const video = document.querySelector("video");
if (window.matchMedia('(prefers-reduced-motion)').matches) {
  video.removeAttribute("autoplay");
  video.pause();
}


document.addEventListener("DOMContentLoaded", function () {
  // Get a reference to the video element by its ID
  var video = document.getElementById("myVideo");

  // Set the playbackRate to 0.25 (25% speed)
  video.playbackRate = 0.45;
});


document.addEventListener("DOMContentLoaded", function () {
  var video = document.getElementById("myVideo");
  var toggleButton = document.getElementById("toggleButton");

  // playMusicButton
playMusicButton.addEventListener("click", function () {
  if (video.muted) {
    video.muted = false; // Unmute the video
    playMusicButton.textContent = "No Music"; // Change button text to "Mute Sound"
    video.playbackRate = 0.99;

  } else {
    video.muted = true; // Mute the video
    playMusicButton.textContent = "Play Music";
    video.play();
  }
});
  // Add a click event listener to the "Toggle Video" button
  toggleButton.addEventListener("click", function () {
    if (video.paused) {
      video.play(); // Play the video if it's paused
      toggleButton.textContent = "Pause Video"; // Change button text to "Pause Video"
      playMusicButton.disabled = false; // Disable the "Play Music" button
    } else {
      video.pause(); // Pause the video if it's playing
      toggleButton.textContent = "Play Video"; // Change button text to "Play Video"
      playMusicButton.disabled = true; // Disable the "Play Music" button
      playMusicButton.textContent = "Music & Video"; // Change button text to "Mute Sound"
    }
  });
});







