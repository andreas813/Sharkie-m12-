class MovableObject extends DrawableObject {
    speed = 0.10;
    otherDirection = false;
    speedY = 0;
    acceleration = 0.03;
    energy = 100;
    lastDamage = { "normal": 0, "shock": 0 };
    lastMove = { "time": new Date().getTime(), "direction": 'right' };


    playAnimation(images) {
        if ((this.isDead() || this.lastDamage.shock > this.lastDamage.normal) && this.currentImage >= images.length) {
            this.currentImage = (images.length - 1);
        }
        else if (this.isSleeping() && this.currentImage >= images.length) {
            this.currentImage = (images.length - 4);
        }
        else if (this.currentImage >= images.length) { this.currentImage = 0; };
        let path = images[this.currentImage];
        this.img = this.imageCache[path];
        this.currentImage++;
    }


    moveRight() {
        this.posX += this.speed;
        this.lastMove.time = new Date().getTime();
        this.lastMove.direction = 'right';
    }


    moveLeft() {
        this.posX -= this.speed;
        this.lastMove.time = new Date().getTime();
        this.lastMove.direction = 'left';
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


    jump() {
        this.speedY = 3.25;
        this.lastMove.time = new Date().getTime();
    }


    isColliding(obj) {
        return (this.posX - this.offset.left) + (this.width + this.offset.right) > obj.posX - obj.offset.left &&
            (this.posY - this.offset.top) + (this.height + this.offset.bottom) > obj.posY - obj.offset.top &&
            (this.posX - this.offset.left) < (obj.posX - obj.offset.left) + (obj.width + obj.offset.right) &&
            (this.posY - this.offset.top) < (obj.posY - obj.offset.top) + (obj.height + obj.offset.bottom);
    }
    // // Left from "Bessere Formel zur Kollisionsberechnung (Genauer)":
    //     && obj.onCollisionCourse; 
    //     // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.


    damage(type) {
        if (new Date().getTime() - this.lastDamage[type] > 2000) {
            this.energy -= 20;
            let newPercentage = world.healthBar.percentage - 20;
            world.healthBar.setPercentage(newPercentage);
            if (this.energy < 0) { this.energy = 0 }
            else { this.lastDamage[type] = new Date().getTime(); };
            if (type == 'shock') { this.shockDamage(); };
        }
    }


    async shockDamage() {
        this.speedY = 1.5;
        if (this.lastMove.direction == 'right') {
            for (let i = 0; i < 32; i++) {
                this.moveLeft();
                await this.delay(10);
            };
        }
        else {
            for (let i = 0; i < 32; i++) {
                this.moveRight();
                await this.delay(10);
            };
        }
    }


    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }


    isHurt() {
        let timepassed = new Date().getTime() - this.lastDamage.normal;
        return timepassed < 1500;
    }


    isShocked() {
        let timepassed = new Date().getTime() - this.lastDamage.shock;
        return timepassed < 1000;
    }


    isSleeping() {
        if (this instanceof Character) {
            let timepassed = new Date().getTime() - this.lastMove.time;
            return timepassed > 15000;
        }
    }


    isDead() {
        return this.energy == 0;
    }


}