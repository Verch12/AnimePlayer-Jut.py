document.getElementById("DelAnim").addEventListener("click", DelAnim, false);
document.getElementById("DelAllAnim").addEventListener("click", DelAllAnim, false);

function DataBase(){
    eel.Database(navigator.userAgent)
}

eel.expose(List);
function List(animeurl) {
    const container = document.getElementById('anime');
    container.innerHTML = '';

    for (var url = 0; url <= animeurl.length-1; url++) {
        const option = document.createElement('option');

        option.value = animeurl[url];
        option.textContent = animeurl[url];
        container.append(option);
        eel.myFunction(navigator.userAgent, container.value)
    }
}

function choiceAnime() {
    const container = document.getElementById('anime');
    eel.myFunction(navigator.userAgent, container.value)
}

function DelAnim() {
    const container = document.getElementById('anime');
    eel.DelAnime(navigator.userAgent, container.value)
    DataBase()
}

function DelAllAnim() {
    eel.DelAllAnime(navigator.userAgent)
    DataBase()
}

DataBase()