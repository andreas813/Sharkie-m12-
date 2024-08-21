class MovableObject {
    posX = 0;
    posY = 50;
    img;
    height = 100;
    width = 100;
    imageCache = {};
    currentImage = 0;
    speed = 0.10;
    otherDirection = false;
    speedY = 0;
    acceleration = 0.01;


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


    playAnimation(images) {
        if (this.currentImage >= images.length) {
            this.currentImage = 0;
        }
        let path = images[this.currentImage];
        this.img = this.imageCache[path];
        this.currentImage++;
    }


    moveRight() {
        this.posX += this.speed;
    }


    moveLeft() {
        this.posX -= this.speed;
    }


    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.posY -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 60);
    }


    isAboveGround() {
        return this.posY < 50;
    }


    jump() {
        this.speedY = 1;
    }
}