// Get DOM Elements
const video = document.getElementById("video");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

// Create function for clicking on the video
function toggleVideoStatus() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// Create function for updating the play/pause icons
function updatePlayIcon() {
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
  }
}

// Create function to update the progress bar
function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;

  //   Set the time for timestamp
  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) {
    mins = "0" + String(mins);
  }
  let secs = Math.floor(video.currentTime % 60);
  if (secs < 10) {
    secs = "0" + String(secs);
  }

  let tmins = Math.floor(video.duration / 60);
  if (tmins < 10) {
    tmins = "0" + String(tmins);
  }

  let tsecs = Math.floor(video.duration % 60);
  if (tsecs < 10) {
    tsecs = "0" + String(tsecs);
  }

  //   let dtmins = +tmins - +mins;
  //   if (dtmins < 10 && !dtmins < 0) {
  //     dtmins = "0" + String(dtmins);
  //   }
  //   let dtsecs = +tsecs - +secs;
  //   if (dtsecs < 10) {
  //     dtsecs = "0" + String(dtsecs);
  //   } else if (dtsecs <= 0) {
  //     dtsecs = +dtsecs * -1;
  //   }

  timestamp.innerHTML = `${mins}:${secs}/${tmins}:${tsecs}`;
}

// Create function to stop the video
function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

// Create funtion to update the progress bar using slider
function setVideoProgress() {
  video.currentTime = (+progress.value * video.duration) / 100;
}

// Create function to stop the video
// Event Listeners
// 1. Event Listeners for the video players
video.addEventListener("click", toggleVideoStatus);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("timeupdate", updateProgress);

// 2. Event Listener for Play button
play.addEventListener("click", toggleVideoStatus);

// 3. Event Listener for Stop button
stop.addEventListener("click", stopVideo);

// 4. Event Listener for Progress bar
progress.addEventListener("change", setVideoProgress);
