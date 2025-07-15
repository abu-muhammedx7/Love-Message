document.getElementById("surpriseBtn").addEventListener("click", function () {
    // Show hidden message
    const surpriseText = document.getElementById("surpriseText");
    surpriseText.classList.remove("hidden");

    // Trigger confetti explosion
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff1493', '#d32f2f', '#ff69b4']
    });

    // Optional: Change button text after click
    this.textContent = "I Hope You Say Yes!";
});