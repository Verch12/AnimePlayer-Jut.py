const video = document.getElementById('video');
const playPauseBtn = document.getElementById('playPause');
const playPauseFullScreenBtn = document.getElementById('playPauseFullScreen');
const skipOpeningBtn = document.getElementById('skipOpening');
const rewindBtn = document.getElementById('rewind');
const forwardBtn = document.getElementById('forward');
const fullscreenBtn = document.getElementById('fullscreen');
const progress = document.getElementById('progress');
const timeDisplay = document.getElementById('timeDisplay');
const setOpenings = document.getElementById('settingOpenings');
const controls = document.querySelector('.controls');

let durationOpening = 110;
setOpenings.value = durationOpening;

function hideButtonAfterDelay(button) {
    button.style.opacity = '1'; // Показываем кнопку при нажатии
    setTimeout(() => {
        button.style.opacity = '0'; // Скрываем кнопку через 0.5 сек
    }, 750);
}

setOpenings.addEventListener('input', (event) => {
    durationOpening = event.target.value;
});

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
    video.currentTime += parseInt(durationOpening);
});

let lastClickTime = null;

// Перемотка назад
rewindBtn.addEventListener('click', () => {
    const currentTime = new Date().getTime();
    const timeDiff = currentTime - lastClickTime;
    if (lastClickTime !== null) {
        if (timeDiff < 500) {
            hideButtonAfterDelay(rewindBtn);
            video.currentTime -= 5;
        }
    }
    lastClickTime = currentTime;
});

// Перемотка вперёд
forwardBtn.addEventListener('click', () => {
    const currentTime = new Date().getTime();
    const timeDiff = currentTime - lastClickTime;
    if (lastClickTime !== null) {
        if (timeDiff < 500) {
            hideButtonAfterDelay(forwardBtn);
            video.currentTime += 5;
        }
    }
    lastClickTime = currentTime;
});

// Полноэкранный режим
fullscreenBtn.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        video.parentElement.requestFullscreen(); // Переход в полноэкранный режим для контейнера
    } else {
        document.exitFullscreen(); // Выход из полноэкранного режима
    }
});

// Скрытие панели управления при бездействии
let hideControlsTimeout;

const showControls = () => {
    controls.style.opacity = '1';
    rewindBtn.style.cursor = "auto";
    forwardBtn.style.cursor = "auto";
    playPauseFullScreenBtn.style.cursor = "auto";
    if (hideControlsTimeout) clearTimeout(hideControlsTimeout);
    hideControlsTimeout = setTimeout(() => {
        if (document.fullscreenElement) {
            controls.style.opacity = '0';
            rewindBtn.style.cursor = "none";
            forwardBtn.style.cursor = "none";
            playPauseFullScreenBtn.style.cursor = "none";
        }
    }, 2000); // Скрыть через 3 секунды бездействия
};

// Показывать панель управления при движении мыши
video.parentElement.addEventListener('mousemove', showControls);

// Убедитесь, что панель видима при выходе из полноэкранного режима
document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
        controls.style.opacity = '1';
    }
});

// Обновление слайдера при воспроизведении видео
video.addEventListener('timeupdate', () => {
    const percentage = (video.currentTime / video.duration) * 100;
    progress.value = percentage;
});

// Перемотка видео при изменении позиции слайдера
progress.addEventListener('input', () => {
    const newTime = (progress.value / 100) * video.duration;
    video.currentTime = newTime;
});

// Обновление диапазона слайдера при загрузке видео
video.addEventListener('loadedmetadata', () => {
    progress.max = 100;
    progress.value = 0;
});

// Форматирование времени в часы:минуты:секунды
function formatTime(seconds) {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    if (hrs > 0) {
        // Формат с часами
        return `${hrs}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    // Формат без часов
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Обновление таймера
video.addEventListener('timeupdate', () => {
    const currentTime = formatTime(video.currentTime);
    const totalTime = formatTime(video.duration || 0); // Если видео ещё не загрузилось, duration может быть NaN
    timeDisplay.textContent = `${currentTime} / ${totalTime}`;
});

// Установка общего времени при загрузке метаданных видео
video.addEventListener('loadedmetadata', () => {
    const totalTime = formatTime(video.duration);
    timeDisplay.textContent = `0:00 / ${totalTime}`;
});

playPauseFullScreenBtn.addEventListener('click', () => {
    const currentTime = new Date().getTime();
    const timeDiff = currentTime - lastClickTime;
    if (lastClickTime !== null) {
        if (timeDiff > 150) {
            if (video.paused) {
                video.play();
                playPauseBtn.textContent = 'Pause';
            } else {
                video.pause();
                playPauseBtn.textContent = 'Play';
            }
        }
    }
    lastClickTime = currentTime;
});