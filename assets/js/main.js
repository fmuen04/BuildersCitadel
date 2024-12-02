// main.js
document.getElementById("newGame").addEventListener("click", () => {
    // Weiterleitung zur Spielseite
    console.log("Neues Spiel gestartet!");
    window.location.href = "game.html";
});

document.getElementById("loadGame").addEventListener("click", () => {
    const savedGame = localStorage.getItem("bc_game");
    if (savedGame) {
        alert("Spielstand geladen!");
        const gameData = JSON.parse(savedGame);
        console.log("Geladener Spielstand:", gameData);
        // Optional: Spielseite direkt laden und Daten übergeben
        window.location.href = "game.html";
    } else {
        alert("Kein Spielstand gefunden.");
    }
});
