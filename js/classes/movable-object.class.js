class MovableObject extends DrawableObject {
    speed = 0.10;
    otherDirection = false;
    speedY = 0;
    acceleration = 0.03;
    energy = 100;
    lastDamage = { "normal": 0, "shock": 0 };
    lastMove = { "time": new Date().getTime(), "direction": "" };


    playAnimation(images) {
        if ((this instanceof Character && this.isDead()) && this.currentImage >= images.length) {
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
    }


    moveLeft() {
        this.posX -= this.speed;
        this.lastMove.time = new Date().getTime();
    }


    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.posY -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 60);
    }


    isAboveGround() { return this.posY < 260; }


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


    damage(type) {
        if ((new Date().getTime() - this.lastDamage[type]) > 2000 &&
            !this.isAttacking()) {
            this.energy -= 20;
            let newPercentage = world.healthBar.percentage - 20;
            world.healthBar.setPercentage(newPercentage);
            this.lastMove.time = new Date().getTime();
            if (this.energy < 0) { this.energy = 0 }
            else { this.lastDamage[type] = new Date().getTime(); };
            if (type == 'shock') { this.shockDamage(); };
        }
    }


    pickup(type) {
        if (type == 'coin') {
            world.coinBar.setPercentage(world.coinBar.percentage - 20);
        }
        else { world.poisonBar.setPercentage(world.poisonBar.percentage - 20) };
    }


    async shockDamage() {
        this.speedY = 1.5;
        if (this.lastMove.direction == 'right') {
            for (let i = 0; i < 32; i++) {
                this.moveLeft();
                await this.delay(25);
            };
        }
        else {
            for (let i = 0; i < 32; i++) {
                this.moveRight();
                await this.delay(25);
            };
        }
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
        return this.energy < 1;
    }


    isAttacking() {
        return (new Date().getTime() - this.lastAttack) < 750 &&
            world.coinBar.percentage > 0
    }



}