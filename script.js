document.addEventListener("DOMContentLoaded", function () {
    let points = parseFloat(localStorage.getItem("points")) || 0; // Recupera los puntos o empieza en 0
    const pointsDisplay = document.getElementById("points");
    const startMiningBtn = document.getElementById("startMining");

    pointsDisplay.textContent = points.toFixed(8); // Mostrar con 8 decimales

    function minePoints() {
        const miningRate = 0.00000546; // Puntos por segundo
        points += miningRate;
        pointsDisplay.textContent = points.toFixed(8);
        localStorage.setItem("points", points); // Guardar en localStorage
    }

    let miningInterval;
    startMiningBtn.addEventListener("click", function () {
        if (!miningInterval) {
            miningInterval = setInterval(minePoints, 1000); // Minería cada segundo
            startMiningBtn.textContent = "Mining...";
            startMiningBtn.disabled = true; // Deshabilitar el botón
        }
    });
});


