// Initialize the game state
let player = {
    health: 100,
    attack: 10,
    defense: 5
};

document.getElementById('attack-btn').addEventListener('click', () => {
    player.health -= player.attack;
    updateStatus();
});

document.getElementById('defend-btn').addEventListener('click', () => {
    player.defense += 5;
    updateStatus();
});

function updateStatus() {
    const status = document.getElementById('status');
    status.innerHTML = `Health: ${player.health}<br>Attack: ${player.attack}<br>Defense: ${player.defense}`;
}
document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.querySelector('.start-button');
    startButton.addEventListener('click', () => {
        // Logic to start the game
        alert('Game started!');
    });
});

// Initial update
updateStatus();
