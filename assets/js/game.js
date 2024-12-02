// Game Configurations
const config = {
    type: Phaser.AUTO,  // Phaser entscheidet, ob WebGL oder Canvas verwendet wird
    width: 800,         // Breite des Spiels
    height: 600,        // Höhe des Spiels
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

// Initialisieren von Phaser mit der Konfiguration
const game = new Phaser.Game(config);

function preload() {
    // Hier kannst du Assets wie Bilder oder Karten laden, wenn du welche hast
}

function create() {
    console.log("create() wurde aufgerufen");  // Debug-Ausgabe
    createHexagonGrid(this);  // 'this' wird hier als die aktuelle Szene übergeben
}

function update() {
    // Hier kommt der Code für Animationen oder Updates während des Spiels
}

function createHexagonGrid(scene) {
    const hexSize = 50;  // Größe eines Hexagons (Durchmesser)
    const hexWidth = Math.sqrt(3) * hexSize; // Berechnet die Breite eines Hexagons
    const hexHeight = 2 * hexSize;           // Höhe eines Hexagons

    const offsetX = hexWidth * 0.75; // Abstand zwischen den Hexagonen in X-Richtung
    const offsetY = hexHeight;       // Abstand zwischen den Hexagonen in Y-Richtung

    const graphics = scene.add.graphics(); // Verwende die 'scene.add.graphics()' Methode, um die Graphics-Instanz zu erstellen

    // Debug-Ausgabe der Berechnungen
    console.log(`hexSize: ${hexSize}, hexWidth: ${hexWidth}, hexHeight: ${hexHeight}, offsetX: ${offsetX}, offsetY: ${offsetY}`);

    // Hexagon zeichnen
    function drawHex(x, y) {
        console.log(`Zeichne Hexagon bei (${x}, ${y})`);  // Debug-Ausgabe

        graphics.beginPath();
        graphics.lineStyle(2, 0x0000FF, 1); // Hexagonumrandung (blau)
        graphics.moveTo(x + hexWidth / 2, y); // Anfangspunkt des Hexagons

        for (let i = 0; i < 6; i++) {
            let angle = Math.PI / 3 * i;
            let px = x + hexSize * Math.cos(angle);
            let py = y + hexSize * Math.sin(angle);
            graphics.lineTo(px, py);
        }
        graphics.closePath();
        graphics.strokePath();
    }

    // Erzeuge das Hexagon-Grid
    for (let row = 0; row < 10; row++) {  // Beispiel: 10 Zeilen
        for (let col = 0; col < 10; col++) {  // Beispiel: 10 Spalten
            let x = col * offsetX;
            let y = row * offsetY;

            if (col % 2 === 1) {
                y += offsetY / 2;
            }

            drawHex(x, y); 
        }
    }
}
