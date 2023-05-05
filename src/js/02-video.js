import Player from "@vimeo/player";
import throttle from "lodash.throttle";

console.log(Player);

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = "videoplayer-current-time";

function fillLocalStorage (data) {
    localStorage.setItem(STORAGE_KEY, data.seconds)
};

player.on('timeupdate', throttle(fillLocalStorage, 1000));

 player.setCurrentTime(JSON.parse(localStorage.getItem(STORAGE_KEY)));




