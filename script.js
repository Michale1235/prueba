
document.addEventListener("DOMContentLoaded", function () {
    fetch("airdrops.json")
        .then(response => response.json())
        .then(airdrops => renderAirdrops(airdrops))
        .catch(error => console.error("Error loading airdrops:", error));
});

function renderAirdrops(airdrops) {
    const grid = document.getElementById("airdrop-grid");
    grid.innerHTML = "";

    if (!airdrops.length) {
        grid.innerHTML = '<p>No hay airdrops disponibles.</p>';
        return;
    }

    airdrops.forEach(airdrop => {
        const card = document.createElement("div");
        card.className = "airdrop-card";
        
        card.innerHTML = `
            <div class="card-type">${airdrop.type.charAt(0).toUpperCase() + airdrop.type.slice(1)}</div>
            <div class="card-content">
                <h3 class="card-title">${airdrop.title}</h3>
                <p class="card-description">${airdrop.description}</p>
                <div class="card-details">
                    <div class="detail-item">
                        <i class="fas fa-calendar-alt detail-icon"></i>
                        <span>Available: ${airdrop.launchDate || "N/A"}</span>
                    </div>
                    ${airdrop.funds ? `<div class="detail-item">
                        <i class="fas fa-coins detail-icon"></i>
                        <span>Funding: ${airdrop.funds}</span>
                    </div>` : ''}
                    ${airdrop.code ? `<div class="detail-item">
                        <i class="fas fa-key detail-icon"></i>
                        <span>Code: ${airdrop.code}</span>
                    </div>` : ''}
                </div>
                <div class="card-actions">
                    <a href="${airdrop.link || '#'}" class="action-btn" target="_blank">Learn More</a>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}
