class MovableObject {
    posX = 0;
    posY = 50;
    img;
    height = 100;
    width = 100;
    imageCache = {};
    currentImage = 0;
    speed = 0.2;
    otherDirection = false;


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
        setInterval(() => {
            if (this.posX <= -350) { this.posX = 250 }
            this.posX -= this.speed;
        }, 1000 / 60);
    }


}