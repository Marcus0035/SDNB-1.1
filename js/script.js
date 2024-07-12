function dropdownShow(){
    console.log('dropdownShow');
}

function unmute() {
    let soundButton, audio, image;

    soundButton = document.getElementById('mute-unmute');
    audio = document.getElementById('backing-track');
    image = document.getElementById('intro-img');

    // Check if audio is already playing by checking its volume or another indicator
    if (audio.volume === 0 || audio.volume === 1) {
        // If muted, set volume to 0.5 and adjust button appearance to indicate unmuted state
        audio.volume = 0.5;
        soundButton.classList.remove('bx-volume-mute');
        soundButton.classList.add('bx-volume-full');
        image.classList.add('flash');
    } else {
        // If not muted, mute the audio and adjust button appearance to indicate muted state
        audio.volume = 0;
        soundButton.classList.add('bx-volume-mute');
        soundButton.classList.remove('bx-volume-full');
        image.classList.remove('flash');
    }

    audio.play(); // Ensure audio plays in either case
}