class MovableObject {
    posX = 0;
    posY = 50;
    img;
    height = 200;
    width = 200;
    imageCache = {};
    currentImage = 0;
    speed = 0.10;
    otherDirection = false;
    speedY = 0;
    acceleration = 0.03;
    energy = 100;


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
        if (this.currentImage >= images.length) { this.currentImage = 0; }
        let path = images[this.currentImage];
        this.img = this.imageCache[path];
        this.currentImage++;
    }


    moveRight() { this.posX += this.speed; }


    moveLeft() { this.posX -= this.speed; }


    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.posY -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 60);
    }


    isAboveGround() { return this.posY < 260; }


    jump() { this.speedY = 3.25; }


    draw(ctx) {
        ctx.drawImage(this.img, this.posX, this.posY, this.width, this.height)
    }


    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Pufferfish) {
            ctx.beginPath();
            ctx.lineWidth = '2';
            ctx.strokeStyle = 'red';
            ctx.rect(this.posX, this.posY, this.width, this.height);
            ctx.stroke();
        }
    }


    isColliding(obj) {
        return this.posX + this.width > obj.posX &&
            this.posY + this.height > obj.posY &&
            this.posX < obj.posX &&
            this.posY < obj.posY + obj.height
    }


    // // Bessere Formel zur Kollisionsberechnung (Genauer)
    // isColliding(obj) {
    //     return (this.X + this.width) >= obj.X && this.X <= (obj.X + obj.width) &&
    //         (this.Y + this.offsetY + this.height) >= obj.Y &&
    //         (this.Y + this.offsetY) <= (obj.Y + obj.height) &&
    //         obj.onCollisionCourse; // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.
    // }


}