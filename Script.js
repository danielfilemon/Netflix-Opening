document.addEventListener("DOMContentLoaded", function() {
    const sound = document.getElementById("netflix-sound");

    // Check if the audio is ready to be played
    sound.oncanplaythrough = function() {
        // Play the sound only when the user interacts with the page
        document.addEventListener("click", function() {
            sound.play();
        }, { once: true }); // { once: true } ensures the click event is only heard once
    };
});
