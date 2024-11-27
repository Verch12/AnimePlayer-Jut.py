const video = document.getElementById('video');
const playPauseBtn = document.getElementById('playPause');
const skipOpeningBtn = document.getElementById('skipOpening');
const rewindBtn = document.getElementById('rewind');
const forwardBtn = document.getElementById('forward');
const fullscreenBtn = document.getElementById('fullscreen');

// Воспроизведение и пауза
playPauseBtn.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playPauseBtn.textContent = 'Pause';
    } else {
        video.pause();
        playPauseBtn.textContent = 'Play';
    }
});

skipOpeningBtn.addEventListener('click', () =>{
    video.currentTime += 120;
});

// Перемотка назад
rewindBtn.addEventListener('click', () => {
    video.currentTime -= 10;
});

// Перемотка вперёд
forwardBtn.addEventListener('click', () => {
    video.currentTime += 10;
});

// Полноэкранный режим
fullscreenBtn.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        video.parentElement.requestFullscreen(); // Переход в полноэкранный режим для контейнера
    } else {
        document.exitFullscreen(); // Выход из полноэкранного режима
    }
});
