// Handle video end
document.querySelector('.intro-video').addEventListener('ended', () => {
    document.querySelector('.video-container').classList.add('hidden'); // Hide video
    document.querySelector('.container').classList.remove('hidden'); // Show content
});

// Initialize the game state
let player = {
    health: 100,
    attack: 10,
    defense: 5
};

document.addEventListener('DOMContentLoaded', () => {
    // Attach event listener to the Start Game button
    const startButton = document.querySelector('.start-button');
    startButton.addEventListener('click', () => {
        // Logic to start the game
        alert('Game started!'); // Temporary feedback for testing

        // Enable the game logic (such as attack and defend buttons)
        document.querySelector('.game-content').classList.remove('hidden'); // Show game content if needed
        updateStatus(); // Update initial status
    });
    
    // Attach event listeners to attack and defend buttons if they exist
    const attackBtn = document.getElementById('attack-btn');
    const defendBtn = document.getElementById('defend-btn');
    
    if (attackBtn) {
        attackBtn.addEventListener('click', () => {
            player.health -= player.attack;
            updateStatus();
        });
    }

    if (defendBtn) {
        defendBtn.addEventListener('click', () => {
            player.defense += 5;
            updateStatus();
        });
    }
});

// Function to update player status
function updateStatus() {
    const status = document.getElementById('status');
    if (status) {
        status.innerHTML = `Health: ${player.health}<br>Attack: ${player.attack}<br>Defense: ${player.defense}`;
    }
}
