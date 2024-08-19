class MovableObject {
    posX = 0;
    posY = 50;
    img;
    height = 100;
    width = 100;
    imageCache = {};
    currentImage = 0;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }
    loadImages(array) {
        array.forEach(
            path => {
                let img = new Image();
                img.src = path;
                this.imageCache[path] = img;
            });
    }
    moveRight() {
        console.log('Moving right');
    }
    moveLeft() {

    }
}