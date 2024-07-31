class MovableObject {
    posX = 0;
    posY = 50;
    img;
    height = 100;
    width = 100;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }
    moveRight() {
        console.log('Moving right');
    }
    moveLeft() {

    }
}