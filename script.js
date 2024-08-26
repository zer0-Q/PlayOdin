document.addEventListener('DOMContentLoaded', () => {
    // Video Handling
    const video = document.querySelector('.intro-video');
    const container = document.querySelector('.container');

    video.addEventListener('ended', () => {
        video.classList.add('fade-out');
        setTimeout(() => {
            video.style.display = 'none'; // Hide the video after fading out
            container.style.display = 'flex'; // Show the main content
        }, 2000); // Match the duration of the fade-out animation
    });

    // Game State Initialization
    let player = {
        health: 100,
        attack: 10,
        defense: 5
    };

    // Update status on the page
    function updateStatus() {
        const status = document.getElementById('status');
        if (status) {
            status.innerHTML = `Health: ${player.health}<br>Attack: ${player.attack}<br>Defense: ${player.defense}`;
        }
    }

    // Add event listeners for game actions
    const startButton = document.querySelector('.start-button');
    startButton.addEventListener('click', () => {
        // Logic to start the game
        alert('Game started!');
        // Additional game start logic can be implemented here
        // For example, display game controls or update game state
    });

    const attackButton = document.getElementById('attack-btn');
    const defendButton = document.getElementById('defend-btn');

    if (attackButton) {
        attackButton.addEventListener('click', () => {
            player.health -= player.attack;
            updateStatus();
        });
    }

    if (defendButton) {
        defendButton.addEventListener('click', () => {
            player.defense += 5;
            updateStatus();
        });
    }

    // Initial update
    updateStatus();
});
