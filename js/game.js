let canvas;
let world;
let keyboard = new Keyboard;

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    console.log('My character is', world.character);
}


window.addEventListener('keydown', (event) => {
    if (event.keyCode == 39) { keyboard.rightKey = true; }
    if (event.keyCode == 40) { keyboard.downKey = true; }
    if (event.keyCode == 38) { keyboard.upKey = true; }
    if (event.keyCode == 37) { keyboard.leftKey = true; }
    if (event.keyCode == 32) { keyboard.spaceKey = true; }
});


window.addEventListener('keyup', (event) => {
    if (event.keyCode == 39) { keyboard.rightKey = false; }
    if (event.keyCode == 40) { keyboard.downKey = false; }
    if (event.keyCode == 38) { keyboard.upKey = false; }
    if (event.keyCode == 37) { keyboard.leftKey = false; }
    if (event.keyCode == 32) { keyboard.spaceKey = false; }
});