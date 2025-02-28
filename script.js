let points = 0;
setInterval(() => {
    points += 0.00000546;
    document.getElementById('points').textContent = points.toFixed(8);
}, 1000);

document.getElementById('copyButton').addEventListener('click', () => {
    const referralLink = `${window.location.origin}/invite`;
    navigator.clipboard.writeText(referralLink).then(() => {
        document.getElementById('referralText').textContent = "Copied: " + referralLink;
    });
});