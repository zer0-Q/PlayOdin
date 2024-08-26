// Handle video end
document.querySelector('.intro-video').addEventListener('ended', () => {
    document.querySelector('.intro-video').classList.add('hidden'); // Hide the video
    document.querySelector('.container').classList.remove('hidden'); // Show main content
});
