class MovableObject extends DrawableObject {
    speed = 0.10;
    otherDirection = false;
    speedY = 0;
    acceleration = 0.03;
    energy = 100;
    lastDamage = { "normal": 0, "shock": 0 };
    lastMove = { "time": this.getCurrentTime(), "direction": "" };
    damageValue = 20;


    /** This funcion plays general animations for various movable objects. */
    playAnimation(images) {
        if (this.isDead() && !(this instanceof Jellyfish) && !(this instanceof JellyfishSuper) && this.currentImage >= images.length) {
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


    /** This function is used to move the object to the right. */
    moveRight() {
        this.posX += this.speed;
        this.lastMove.time = this.getCurrentTime();
        this.otherDirection = false;
        this.playSwimmingSound();
        this.lastMove.direction = 'right';
    }


    /** This function is used to move the object to the left. */
    moveLeft() {
        this.posX -= this.speed;
        this.lastMove.time = this.getCurrentTime();
        if (this instanceof Character) { this.otherDirection = true; };
        this.playSwimmingSound();
        this.lastMove.direction = 'left';
    }


    /** This function simulates gravity by applying a downwards acceleration. */
    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.posY -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 60);
    }


    /** This function returns if the object is currently not at the ground. */
    isAboveGround() { return this.posY < 260; }


    /** This functions realizes a jump by applying an upwards speed. */
    jump() {
        this.speedY = 3.25;
        this.lastMove.time = this.getCurrentTime();
        this.playSwimmingSound();
    }


    /** This function plays the swimming sound if different requirements are met and a specific time has passed. */
    playSwimmingSound() {
        if (!soundMuted && !this.isHurt() && (this.getCurrentTime() - this.lastSwimming > 750)) {
            this.playSound('swimming', 0.05);
            this.lastSwimming = this.getCurrentTime();
        };
    }


    /** This function compares the positions of two objects to check if they are colliding and returns it if so. */
    isColliding(obj) {
        return (this.posX - this.offset.left) + (this.width + this.offset.right) > obj.posX - obj.offset.left &&
            (this.posY - this.offset.top) + (this.height + this.offset.bottom) > obj.posY - obj.offset.top &&
            (this.posX - this.offset.left) < (obj.posX - obj.offset.left) + (obj.width + obj.offset.right) &&
            (this.posY - this.offset.top) < (obj.posY - obj.offset.top) + (obj.height + obj.offset.bottom);
    }


    /** This function applies damage to the object, takes care about related variables and plays a sound depending on the damage type. */
    damage(type) {
        if ((this.getCurrentTime() - this.lastDamage[type]) > 2000 &&
            !this.isAttacking()) {
            this.energy -= this.damageValue;
            this.updateBar(world.healthBar, this.damageValue);
            this.lastMove.time = this.getCurrentTime();
            if (this.energy < 0) { this.energy = 0 }
            else {
                this.lastDamage[type] = this.getCurrentTime();
                if (type == 'normal') { this.playSound('damage', 0.15); };
            };
            if (type == 'shock') { this.shockDamage(); };
        };
    }


    /** This function updates status bars depending on the pickup type and plays a sound. */
    pickup(type) {
        if (type == 'coin') { this.updateBar(world.coinBar, this.damageValue); }
        else { this.updateBar(world.poisonBar, this.damageValue); };
        this.playSound('pickup', 0.15);
    }


    /** This function updates a given status bar by a give amount. */
    updateBar(bar, amount) {
        let newPercentage = bar.percentage - amount;
        bar.setPercentage(newPercentage);
    }


    /** This function moves the onjects in the oppsite direction and plays an extra sound to indicate the object has been shocked by electricity. */
    async shockDamage() {
        this.speedY = 1.5;
        this.playSound('shock', 0.15);
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
        };
    }


    /** This returns if the object got hurt in a specific amount of time. */
    isHurt() {
        let timepassed = this.getCurrentTime() - this.lastDamage.normal;
        return timepassed < 1500;
    }


    /** This returns if the object got shocked in a specific amount of time. */
    isShocked() {
        let timepassed = this.getCurrentTime() - this.lastDamage.shock;
        return timepassed < 1000;
    }


    /** This returns if the object has not moved for a specific amount of time and is now sleeping. */
    isSleeping() {
        if (this instanceof Character) {
            let timepassed = this.getCurrentTime() - this.lastMove.time;
            return timepassed > 15000;
        };
    }


    /** This returns if the energy of an object is below 1 and it is dead. */
    isDead() { return this.energy < 1; }


    /** This returns if the object has attacked in a specific amount of time. */
    isAttacking() { return (this.getCurrentTime() - this.lastAttack) < 750; }


    /** This function is used to play sounds and recieves the name of a sound and the desired playback volume. */
    playSound(sound, volume) {
        if (!soundMuted) {
            const mp3 = new Audio(`audio/${sound}.mp3`);
            mp3.volume = volume;
            mp3.play();
        }
    }


    /** This function returns the current unix time. */
    getCurrentTime() {
        return new Date().getTime();
    }


}