import { retrievePlayerData } from "../player-api.js"

const player = retrievePlayerData();

//const playerNameCard = document.getElementById('player-name');
document.getElementById('player-name').innerHTML = player.getName();