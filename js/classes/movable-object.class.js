class MovableObject extends DrawableObject {
    speed = 0.10;
    otherDirection = false;
    speedY = 0;
    acceleration = 0.03;
    energy = 100;
    lastHurt = 0;


    playAnimation(images) {
        if (world.character.isDead() && this.currentImage >= images.length) {
            this.currentImage = (images.length - 1);
        }
        else if (this.currentImage >= images.length) { this.currentImage = 0; }
        let path = images[this.currentImage];
        this.img = this.imageCache[path];
        this.currentImage++;
    }


    moveRight() { this.posX += this.speed; }


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
        if (this instanceof ThrowableObject) { return true; }
        else { return this.posY < 260; }
    }


    jump() { this.speedY = 3.25; }


    isColliding(obj) {
        return this.posX + this.width > obj.posX && this.posY + this.height > obj.posY && this.posX < obj.posX && this.posY < obj.posY + obj.height;
    }


    // // Bessere Formel zur Kollisionsberechnung (Genauer)
    // isColliding(obj) {
    //     return (this.X + this.width) >= obj.X && this.X <= (obj.X + obj.width) &&
    //         (this.Y + this.offsetY + this.height) >= obj.Y &&
    //         (this.Y + this.offsetY) <= (obj.Y + obj.height) &&
    //         obj.onCollisionCourse; // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.
    // }


    hit() {
        this.energy -= 20;
        let newPercentage = world.statusBar.percentage - 20;
        world.statusBar.setPercentage(newPercentage);
        if (this.energy < 0) { this.energy = 0 }
        else { this.lastHurt = new Date().getTime(); };
    }


    isDead() {
        return this.energy == 0;
    }


    isHurt() {
        let timepassed = new Date().getTime() - this.lastHurt;
        return timepassed < 1000;
    }
}