eel.expose(fplayPause);
function fplayPause() {
    if (video.paused) {
        video.play();
        playPauseBtn.textContent = 'Pause';
    } else {
        video.pause();
        playPauseBtn.textContent = 'Play';
    }
}

eel.expose(fsetOpening);
function fsetOpening(value) {
    durationOpening = value
    setOpenings.value = value
}

eel.expose(fskipOpening);
function fskipOpening() {
    video.currentTime += parseInt(durationOpening);
}

eel.expose(frewind);
function frewind() {
    hideButtonAfterDelay(rewindBtn);
    video.currentTime -= 5;
}

eel.expose(fforward);
function fforward() {
    hideButtonAfterDelay(forwardBtn);
    video.currentTime += 5;
}

eel.expose(ffullscreen);
function ffullscreen() {
    if (!document.fullscreenElement) {
        video.parentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}

eel.expose(fseasonChange)
function fseasonChange(setSeason) {
    let seanson = document.getElementById('season');
    if (setSeason >= 0 && setSeason < seanson.length) {
        seanson.selectedIndex = setSeason;
        seasonChange()
    }
}

eel.expose(fepisodeChange)
function fepisodeChange(setEpisode) {
    let episode = document.getElementById('episode');
        if (setEpisode >= 0 && setEpisode < episode.length) {
        episode.selectedIndex = setEpisode;
        document.getElementById("video").src = episode.value;
        fplayPause()
    }
}

eel.expose(fqualityChange)
function fqualityChange(setQuality) {
    let qualit = document.getElementById('quality');
    if (setQuality >= 0 && setQuality < qualit.length) {
        qualit.selectedIndex = setQuality;
        qualityChange()
    }
}

eel.expose(fskipEpisode)
function fskipEpisode() {
    let episode = document.getElementById('episode');
    if (episode.selectedIndex < episode.length-1) {
        episode.selectedIndex++;
        Video();
    }
}

eel.expose(fundEpisode)
function fundEpisode() {
    let episode = document.getElementById('episode');
    if (episode.selectedIndex > 0) {
        episode.selectedIndex--;
        Video();
    }
}