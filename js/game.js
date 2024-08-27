let canvas;
let world;
let keyboard = new Keyboard;

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    console.log('My character is', world.character);
    canvas.width = 720;
    canvas.height = 480;
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