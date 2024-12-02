// storage.js
function saveGame(data) {
    localStorage.setItem("bc_game", JSON.stringify(data));
    console.log("Spielstand gespeichert!");
}

function loadGame() {
    const savedGame = localStorage.getItem("bc_game");
    return savedGame ? JSON.parse(savedGame) : null;
}
