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
const victorySound = new Audio('audio/victory.mp3');
let startScreenImage = new Image();
startScreenImage.src = 'img/startscreen.jfif';
const keyMappings = {
    rightKey: ['ArrowRight', 'd', 'D'],
    downKey: ['ArrowDown', 's', 'S'],
    upKey: ['ArrowUp', 'w', 'W'],
    leftKey: ['ArrowLeft', 'a', 'A'],
    spaceKey: [' ']
};
const touchMappings = [
    { id: 'leftButton', key: 'leftKey' },
    { id: 'rightButton', key: 'rightKey' },
    { id: 'upButton', key: 'upKey' },
    { id: 'spaceButton', key: 'spaceKey' }
];


/** This function initializes the canvas for the game. */
function init() {
    const canvas = document.getElementById('canvas');
    canvas.width = 720;
    canvas.height = 480;
    adjustCanvasSize();
    drawStartScreen();
}


/** This function starts the game. */
function initGame() {
    initLevel();
    world = new World(canvas, keyboard);
    document.getElementById('start').classList.add('d-none');
    document.getElementById('tryAgain').classList.add('d-none');
    document.getElementById('fullscreen').classList.remove('d-none');
    document.getElementById('sound').classList.remove('d-none');
    checkDevice();
}


/** This function ends the game on the death of the character. */
function initGameOver() {
    document.getElementById('tryAgain').classList.remove('d-none');
    soundMuted = true;
    world.backgroundMusic.muted = true;
}


/** This function ends the game on victory. */
function initGameWon() {
    if (!soundMuted) {
        victorySound.volume = 0.5;
        victorySound.play();
    };
    document.getElementById('victory').classList.remove('d-none');
    soundMuted = true;
    world.backgroundMusic.muted = true;
}


/** This function switches fullscreen on and off.  */
function toggleFullscreen() {
    const game = document.getElementById('game');
    if (!document.fullscreenElement) { enterFullscreen(game); }
    else { exitFullscreen(); };
    updateFullscreenIcon(!document.fullscreenElement);
}


/** This function applies the fullscreen depending on the browser type. 
* @param {HTMLElement} game - The game element to display in fullscreen mode.
*/
function enterFullscreen(game) {
    if (game.requestFullscreen) {
        game.requestFullscreen().then(() => adjustCanvasSize());
    }
    else if (game.webkitRequestFullscreen) {
        game.webkitRequestFullscreen();
        adjustCanvasSize();
    }
    else if (game.msRequestFullscreen) {
        game.msRequestFullscreen();
        adjustCanvasSize();
    };
}


/** This function exits the fullscreen depending on the browser type. */
function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen().then(() => adjustCanvasSize());
    }
    else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
        adjustCanvasSize();
    }
    else if (document.msExitFullscreen) {
        document.msExitFullscreen();
        adjustCanvasSize();
    };
}


/** This function updates the fullscreen icon depending on the current state. 
* @param {boolean} isFullscreen - Indicates whether the application is in fullscreen mode.
*/
function updateFullscreenIcon(isFullscreen) {
    const fullscreenIcon = document.getElementById('fullscreen');
    fullscreenIcon.classList.toggle('bi-arrows-fullscreen', !isFullscreen);
    fullscreenIcon.classList.toggle('bi-fullscreen-exit', isFullscreen);
}


/** This function apllies changes to the canvas style depending on the fullscreen state. */
function adjustCanvasSize() {
    const canvas = document.getElementById('canvas');
    if (document.fullscreenElement) {
        canvas.style.height = '100vh';
        canvas.style.maxHeight = '';
    }
    else { canvas.style.maxHeight = '480px'; }
}


/** This function switches the sound off and on. */
function toggleSound() {
    const sound = document.getElementById('sound');
    if (soundMuted == false) { muteSound(sound); }
    else { unmuteSound(sound); };
}


/** This function mutes the sound. 
* @param {HTMLElement} sound - The sound icon element to update.
*/
function muteSound(sound) {
    soundMuted = true;
    world.backgroundMusic.muted = true;
    sound.classList.remove('bi-volume-up');
    sound.classList.add('bi-volume-mute');
}


/** This function unmutes the sound. 
* @param {HTMLElement} sound - The sound icon element to update.
*/
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
    const fullscreenButton = document.getElementById('fullscreen');
    controls.classList.add('d-none');
    mobileButtons.classList.remove('d-none');
    fullscreenButton.classList.add('d-none');
}


/** This function shows and hides elements required on computers. */
function displayComputer() {
    const controls = document.getElementById('controls');
    const mobileButtons = document.getElementById('mobileButtons');
    const fullscreenButton = document.getElementById('fullscreen');
    controls.classList.remove('d-none');
    mobileButtons.classList.add('d-none');
    fullscreenButton.classList.remove('d-none');
}


/** This function handles setting the key states and is called by the event listeners 
* @param {string} key - The key input to map to a control key.
* @param {boolean} isPressed - Indicates whether the key is pressed (`true`) or released (`false`).
*/
function setKeyState(key, isPressed) {
    const controlKey = controlMapping[key];
    if (controlKey) keyboard[controlKey] = isPressed;
}


/** Draws the start screen on the canvas. */
function drawStartScreen() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(startScreenImage, 0, 0, canvas.width, canvas.height);
}


//** Hinzufügen von Event-Listenern für das Drücken und Loslassen von Tasten. */
function addKeyEvents() {
    window.addEventListener('keydown', (event) => {
        for (const [keyProp, keys] of Object.entries(keyMappings)) {
            if (keys.includes(event.key)) {
                keyboard[keyProp] = true;
            }
        }
    });
    window.addEventListener('keyup', (event) => {
        for (const [keyProp, keys] of Object.entries(keyMappings)) {
            if (keys.includes(event.key)) {
                keyboard[keyProp] = false;
            }
        }
    });
}


//** Zuweisung der Touch-Bedienung auf die üblichen Tasten */
function addTouchEvents() {
    touchMappings.forEach(mapping => {
        const btn = document.getElementById(mapping.id);
        if (btn) {
            btn.addEventListener('touchstart', (e) => {
                e.preventDefault();
                keyboard[mapping.key] = true;
                btn.classList.add('active-touch');
            });
            btn.addEventListener('touchend', (e) => {
                e.preventDefault();
                keyboard[mapping.key] = false;
                btn.classList.remove('active-touch');
            });
        }
    });
}


//** Diese Funktion fügt beim HTML-onload Event-Listener für die Steuerung, Größenanpassung und Orientung des Spiels. */
function initializeEventListeners() {
    addKeyEvents();
    addTouchEvents();
    window.addEventListener('resize', () => {
        checkDevice();
        if (!document.fullscreenElement) { adjustCanvasSize(); }
    });
    window.addEventListener('orientationchange', checkDevice);
}


//** Fügt ein neues Intervall hinzu, um die höchste ID zu bestimmen und mithilfe dieser alle laufenden Intervalle zu beenden. */
function stopAllIntervals() {
    const highestId = setInterval(() => {}, 1000);
    for (let i = 0; i <= highestId; i++) {
        clearInterval(i);
    }
}


//** Gibt das aktuelle world-Objekt zur Garbage Collection frei und initialisiert das Spiel von vorne. */
function restartGame() {
    world = null;
    soundMuted = false;
    stopAllIntervals();
    initGame();
}