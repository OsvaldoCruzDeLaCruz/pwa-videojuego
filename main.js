let audio = document.getElementById("audio");
    let toggleButton = document.getElementById("toggleButton");
    let volumeIcon = document.getElementById("volumeIcon");
    let muteIcon = document.getElementById("muteIcon");

    toggleButton.addEventListener("click", function () {
      if (audio.paused) {
        audio.play();
        volumeIcon.style.display = "inline-block";
        muteIcon.style.display = "none";
      } else {
        audio.pause();
        volumeIcon.style.display = "none";
        muteIcon.style.display = "inline-block";
      }
    });