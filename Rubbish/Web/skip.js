document.getElementById("skip").addEventListener("click", Skip, false);
document.getElementById("und").addEventListener("click", Und, false);

var epi = -1
var qual = 0

eel.expose(Count);
function Count(x) {
    var sel = document.getElementById('season');
    while (sel.options.length) {
        sel.options[0] = null;
    }
    var sel = document.getElementById('episode');
    while (sel.options.length) {
        sel.options[0] = null;
    }

    cnt = x;

    console.log(cnt)

    window.vid = []
    for (var s = 0; s < cnt[0].length; s++) {
      vid.push(cnt[0][s][qual])
    }

    for (var sens = 0; sens <= cnt.length-1; sens++) {
    const container = document.getElementById('season');
    const option = document.createElement('option');
    option.value = sens+1;
    if (sens < cnt.length-1) {
    option.textContent = 'сезон '+String(sens+1);
    }
    else {
    option.textContent = 'фильм';
    }
    container.append(option);
    }

    for (var epis = 0; epis < vid.length; epis++) {
    const container = document.getElementById('episode');
    const episode = document.createElement('option');
    episode.value = epis + 1;
    episode.textContent = 'серия ' + String(epis + 1);
    container.append(episode);
    }
}

function seasonChange() {
  const selectElement = document.getElementById('season');
  const sen = parseInt(selectElement.value)-1;
  window.vid = []
  for (var s = 0; s < cnt[sen].length; s++) {
    vid.push(cnt[sen][s][qual])
  }
  const clear = document.getElementById('episode');
  clear.innerHTML = '';
  for (var epis = 0; epis < vid.length; epis++) {
    const container = document.getElementById('episode');
    const episode = document.createElement('option');
    episode.value = epis + 1;
    episode.textContent = 'серия ' + String(epis + 1);
    container.append(episode);
  }
  epi -= 1
  Skip()
}

function episodeChange() {
  const selectElement = document.getElementById('episode');
  epiq = parseInt(selectElement.value)-2;
  epi = epiq
  Skip()
  return epi
}

function qualityChange() {
  const selectElement = document.getElementById('quality');
  qual = parseInt(selectElement.value)-1;
  const selectElement2 = document.getElementById('season');
  const sen = parseInt(selectElement2.value)-1;
  window.vid = []
  for (var s = 0; s < cnt[sen].length; s++) {
    vid.push(cnt[sen][s][qual])
  }
  epi -= 1
  Skip()
}

function filmChange() {
  const selectElement = document.getElementById('film');
  film = parseInt(selectElement.value)-1;
  window.vid = []
  vid.push(cnt[1][film][qual])
}


function Skip() {
  if (epi < vid.length-1) {
    var perdiv = document.getElementById("div");
    var chidiv = document.getElementById("child");
    perdiv.removeChild(chidiv);
    let div = document.createElement('div')
    div.id = "child";

    epi += 1
    episode = document.getElementById('episode').value = epi+1;
    div.innerHTML = "<video class=\"video-js vjs-default-skin\" id=\"video\" src=" + vid[epi] + " type=\"video/mp4\" lang=\"ru\" label=\"1080p\" res=\"1080\" width=\"700\" height=\"500\" controls></video>\n";

    perdiv.append(div);
    document.getElementById("video").play();
  }
}

function Und() {
  if (epi > 0) {
    var perdiv = document.getElementById("div");
    var chidiv = document.getElementById("child");
    perdiv.removeChild(chidiv);
    let div = document.createElement('div')
    div.id = "child";

    epi -= 1
    episode = document.getElementById('episode').value = epi+1;
    div.innerHTML = "<video class=\"video-js vjs-default-skin\" id=\"video\" src=" + vid[epi] + " type=\"video/mp4\" lang=\"ru\" label=\"1080p\" res=\"1080\" width=\"700\" height=\"500\" controls></video>\n";

    perdiv.append(div);
    document.getElementById("video").play();
  }
}