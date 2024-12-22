function fplayPause() {
    if (video.paused) {
        video.play();
        playPauseBtn.textContent = 'Pause';
    } else {
        video.pause();
        playPauseBtn.textContent = 'Play';
    }
}

function fsetOpenings(value) {
    durationOpening = value
    setOpenings.value = value
}

function fskipOpening() {
    video.currentTime += parseInt(durationOpening);
}

function frewind() {
    hideButtonAfterDelay(rewindBtn);
    video.currentTime -= 5;
}

function fforward() {
    hideButtonAfterDelay(forwardBtn);
    video.currentTime += 5;
}

function ffullscreen() {
    if (!document.fullscreenElement) {
        video.parentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}