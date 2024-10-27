let keyboard = new Keyboard;
let soundMuted = false;
const controlMapping = {
    'ArrowRight': 'rightKey',
    'ArrowUp': 'upKey',
    'ArrowLeft': 'leftKey',
    ' ': 'spaceKey',
    'd': 'rightKey',
    'D': 'rightKey',
    'w': 'upKey',
    'W': 'upKey',
    'a': 'leftKey',
    'A': 'leftKey',
    'leftButton': 'leftKey',
    'rightButton': 'rightKey',
    'upButton': 'upKey',
    'spaceButton': 'spaceKey'
};


/** This function initializes the canvas for the game. */
function init() {
    canvas = document.getElementById('canvas');
    canvas.width = 720;
    canvas.height = 480;
}


/** This function starts the game. */
function initGame() {
    world = new World(canvas, keyboard);
    document.getElementById('start').classList.add('d-none');
    document.getElementById('tryAgain').classList.add('d-none');
    document.getElementById('fullscreen').classList.remove('d-none');
    document.getElementById('sound').classList.remove('d-none');
}


/** This function ends the game on the death of the character. */
function initGameOver() {
    document.getElementById('tryAgain').classList.remove('d-none');
    soundMuted = true;
    world.backgroundMusic.muted = true;
}


/** This function activates the fullscreen for the canvas with alternative ways for Safari and Internet Explorer 11. */
function openFullscreen() {
    game = document.getElementById('canvas');
    if (game.requestFullscreen) { game.requestFullscreen(); }
    else if (game.webkitRequestFullscreen) { game.webkitRequestFullscreen(); }
    else if (game.msRequestFullscreen) { game.msRequestFullscreen(); };
}


/** This function switches the sound off and on. */
function toggleSound() {
    const sound = document.getElementById('sound');
    if (soundMuted == false) { muteSound(sound); }
    else { unmuteSound(sound); };
}


/** This function mutes the sound. */
function muteSound(sound) {
    soundMuted = true;
    world.backgroundMusic.muted = true;
    sound.classList.remove('bi-volume-up');
    sound.classList.add('bi-volume-mute');
}


/** This function unmutes the sound. */
function unmuteSound(sound) {
    soundMuted = false;
    world.backgroundMusic.muted = false;
    sound.classList.add('bi-volume-up');
    sound.classList.remove('bi-volume-mute');
}


/** This function checks if the the device is mobile and calls further functions depending on that. */
function checkDevice() {
    if (/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        displayMobile();
        checkOrientation();
    }
    else { displayComputer(); }
}


/** This function checks if the screen orientation is in landscape or portrait mode and hides the canvas, if it's the latter. */
function checkOrientation() {
    const rotateMessage = document.getElementById('rotateMessage');
    const game = document.getElementById('game');
    if (window.innerWidth < window.innerHeight) {
        rotateMessage.classList.remove('d-none');
        game.classList.add('d-none');
    }
    else {
        rotateMessage.classList.add('d-none');
        game.classList.remove('d-none');
    };
}


/** This function shows and hides elements required on mobile devices. */
function displayMobile() {
    const controls = document.getElementById('controls');
    const mobileButtons = document.getElementById('mobileButtons');
    controls.classList.add('d-none');
    mobileButtons.classList.remove('d-none');
}


/** This function shows and hides elements required on computers. */
function displayComputer() {
    const controls = document.getElementById('controls');
    const mobileButtons = document.getElementById('mobileButtons');
    controls.classList.remove('d-none');
    mobileButtons.classList.add('d-none');
}


/** This function handles setting the key states and is called by the event listeners */
function setKeyState(key, isPressed) {
    const controlKey = controlMapping[key];
    if (controlKey) keyboard[controlKey] = isPressed;
}


window.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight' || event.key === 'd' || event.key === 'D') keyboard.rightKey = true;
    if (event.key === 'ArrowDown' || event.key === 's' || event.key === 'S') keyboard.downKey = true;
    if (event.key === 'ArrowUp' || event.key === 'w' || event.key === 'W') keyboard.upKey = true;
    if (event.key === 'ArrowLeft' || event.key === 'a' || event.key === 'A') keyboard.leftKey = true;
    if (event.key === ' ') keyboard.spaceKey = true;
});
window.addEventListener('keyup', (event) => {
    if (event.key === 'ArrowRight' || event.key === 'd' || event.key === 'D') keyboard.rightKey = false;
    if (event.key === 'ArrowDown' || event.key === 's' || event.key === 'S') keyboard.downKey = false;
    if (event.key === 'ArrowUp' || event.key === 'w' || event.key === 'W') keyboard.upKey = false;
    if (event.key === 'ArrowLeft' || event.key === 'a' || event.key === 'A') keyboard.leftKey = false;
    if (event.key === ' ') keyboard.spaceKey = false;
});

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('leftButton').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.leftKey = true;
        e.target.classList.add('active-touch');
    });
    document.getElementById('leftButton').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.leftKey = false;
        e.target.classList.remove('active-touch');
    });
    document.getElementById('rightButton').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.rightKey = true;
        e.target.classList.add('active-touch');
    });
    document.getElementById('rightButton').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.rightKey = false;
        e.target.classList.remove('active-touch');
    });
    document.getElementById('upButton').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.upKey = true;
        e.target.classList.add('active-touch');
    });
    document.getElementById('upButton').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.upKey = false;
        e.target.classList.remove('active-touch');
    });
    document.getElementById('spaceButton').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.spaceKey = true;
        e.target.classList.add('active-touch');
    });
    document.getElementById('spaceButton').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.spaceKey = false;
        e.target.classList.remove('active-touch');
    });
});

window.addEventListener('resize', checkDevice);
window.addEventListener('orientationchange', checkDevice);