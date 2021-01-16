let getPictures = function(picturesString) {
    let arrayOfPictures = JSON.parse(picturesString);
    let parent = document.querySelector(".grid");
    for (let i = 0; i < 9; ++i) {
        let div = document.createElement("div");
        div.className = "photo";
        div.setAttribute("style", "background: url(" + arrayOfPictures[i].download_url + "); background-size: cover;");
        parent.insertAdjacentElement('beforeend', div);
    }
}

let download = function() {
    let xmlh = new XMLHttpRequest();
    xmlh.open("GET", 'https://picsum.photos/v2/list?page=15&limit = 10');
    xmlh.addEventListener("readystatechange", () => {
        if (xmlh.readyState == 4 && xmlh.status == 200) {
            getPictures(xmlh.responseText);
        }
    });
    xmlh.send();
}
download();