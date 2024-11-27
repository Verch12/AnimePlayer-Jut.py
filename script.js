const video = document.getElementById('video');
const playPauseBtn = document.getElementById('playPause');
const stopBtn = document.getElementById('stop');
const rewindBtn = document.getElementById('rewind');
const forwardBtn = document.getElementById('forward');

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

// Остановка
stopBtn.addEventListener('click', () => {
    video.pause();
    video.currentTime = 0;
    playPauseBtn.textContent = 'Play';
});

// Перемотка назад
rewindBtn.addEventListener('click', () => {
    video.currentTime -= 10;
});

// Перемотка вперёд
forwardBtn.addEventListener('click', () => {
    video.currentTime += 10;
});

const fullscreenBtn = document.getElementById('fullscreen');

// Полноэкранный режим
fullscreenBtn.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        video.parentElement.requestFullscreen(); // Переход в полноэкранный режим для контейнера
    } else {
        document.exitFullscreen(); // Выход из полноэкранного режима
    }
});
