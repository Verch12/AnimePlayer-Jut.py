document.getElementById("skip").addEventListener("click", Skip, false);
document.getElementById("und").addEventListener("click", Und, false);

let anime = [];

eel.expose(Count);
function Count(x) {
    anime = x;
    let season = document.getElementById('season');
    season.innerHTML = '';
    let episode = document.getElementById('episode');
    episode.innerHTML = '';

    for (let seasonID = 0; seasonID < x.length-1; seasonID++){
        let option = document.createElement('option');

        option.textContent = 'сезон '+String(seasonID+1);
        season.append(option)
    }

    if (x[x.length-1].length > 0){
        let option = document.createElement('option');

        option.textContent = 'фильмы';
        season.append(option)
    }

    for (let episodeID = 0; episodeID <= x[season.selectedIndex].length-1; episodeID++) {
        let option = document.createElement('option');

        option.value = x[season.selectedIndex][episodeID][document.getElementById('quality').selectedIndex];
        option.textContent = 'серия '+String(episodeID+1);
        episode.append(option)
    }
    Video();
}

function seasonChange(){
    let episode = document.getElementById('episode');
    let season = document.getElementById('season');
    episode.innerHTML = '';

    for (let episodeID = 0; episodeID <= anime[season.selectedIndex].length-1; episodeID++) {
        let option = document.createElement('option');

        option.value = anime[season.selectedIndex][episodeID][document.getElementById('quality').selectedIndex];
        if (season.selectedIndex === season.length-1 && anime[anime.length-1].length > 0) {
            option.textContent = 'фильм '+String(episodeID+1);
        }
        else {
            option.textContent = 'серия ' + String(episodeID + 1);
        }
        episode.append(option)
    }
    Video();
}

function episodeChange() {
    Video();
}

function qualityChange(){
    let episode = document.getElementById('episode');
    let season = document.getElementById('season');
    episode.innerHTML = '';

    for (let episodeID = 0; episodeID <= anime[season.selectedIndex].length-1; episodeID++) {
        let option = document.createElement('option');

        option.value = anime[season.selectedIndex][episodeID][document.getElementById('quality').selectedIndex];
        option.textContent = 'серия '+String(episodeID+1);
        episode.append(option)
    }
    Video();
}

function Skip() {
    let episode = document.getElementById('episode');
    if (episode.selectedIndex < episode.length-1) {
        episode.selectedIndex++;
        Video();
    }
}

function Und() {
    let episode = document.getElementById('episode');
    if (episode.selectedIndex > 0) {
        episode.selectedIndex--;
        Video();
    }
}

function Video() {
    let perdiv = document.getElementById("div");
    let chidiv = document.getElementById("child");
    perdiv.removeChild(chidiv);
    let div = document.createElement('div')
    div.id = "child";

    let episode = document.getElementById('episode');
    div.innerHTML = "<video class=\"video-js vjs-default-skin\" id=\"video\" src=" + episode.value + " type=\"video/mp4\" lang=\"ru\" -label=\"1080p\" res=\"1080\" width=\"700\" height=\"500\" controls></video>\n";

    perdiv.append(div);
    document.getElementById("video").play();
}