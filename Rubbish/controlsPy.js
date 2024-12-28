function fplayPause() {
    if (video.paused) {
        video.play();
        playPauseBtn.textContent = 'Pause';
    } else {
        video.pause();
        playPauseBtn.textContent = 'Play';
    }
}

function fskipOpening() {
    video.currentTime += 110;
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
        video.parentElement.requestFullscreen(); // Переход в полноэкранный режим для контейнера
    } else {
        document.exitFullscreen(); // Выход из полноэкранного режима
    }
}
