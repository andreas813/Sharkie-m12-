class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    cameraX = -100;
    healthBar = new HealthBar();
    poisonBar = new PoisonBar();
    coinBar = new CoinBar();
    throwableObjects = [new ThrowableObject()];
    bubbleHitSound = new Audio('audio/bubblehit.mp3');


    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
        this.initializeAudio();
    }


    /** Loads the background music and plays it in loop at a specific volume. */
    initializeAudio() {
        this.backgroundMusic = new Audio('audio/background.mp3');
        this.backgroundMusic.volume = 0.15;
        this.backgroundMusic.loop = true;
        this.backgroundMusic.play();
    }


    /** This function sets the world reference for the character. */
    setWorld() { this.character.world = this; }


    /** This functions starts all collision checks. */
    run() {
        setInterval(() => {
            if (!world.character.isDead()) { this.checkCollisions(); };
        }, 1000 / 10);
    }


    /** This functions invokes diffent types of collision checks. */
    checkCollisions() {
        this.checkCollisionEnemy();
        this.checkCollisionCoin();
        this.checkCollisionBubble();
        this.checkCollisionFinslapAttack();
    }


    /** This function checks for collisions with all enemies. */
    checkCollisionEnemy() {
        this.level.enemies.forEach(enemy => {
            if (this.character.isColliding(enemy)) {
                if (this.character.energy > 0) {
                    if (enemy instanceof JellyfishSuper) { this.character.damage('shock') }
                    else { this.character.damage('normal'); }
                };
            };
        });
    }


    /** This function checks if the finslap attacks hits an enemy. */
    checkCollisionFinslapAttack() {
        this.level.enemies.forEach(enemy => {
            if (enemy instanceof Pufferfish) {
                if (this.character.posY >= 220) {
                    if (enemy.posX - this.character.posX <= 165 &&
                        this.character.posX - enemy.posX <= 65 &&
                        this.character.isAttacking()) {
                        setTimeout(() => { enemy.energy = 0; }, 100);
                    };
                };
            };
        });
    }


    /** This function checks if the character collides with one of the pickups. */
    checkCollisionCoin() {
        this.level.collectables.forEach(collectable => {
            if (this.character.isColliding(collectable)) {
                if (collectable instanceof Coin) { this.character.pickup('coin'); }
                else { this.character.pickup('poison') };
                delete collectable.posX;
                delete collectable.posY;
            };
        });
    }


    /** This functions checks if the bubble attack hits an enemy. */
    checkCollisionBubble() {
        this.throwableObjects.forEach(throwable => {
            this.level.enemies.forEach(enemy => {
                if (throwable.isColliding(enemy) && throwable.type == 'poison' && (enemy instanceof Endboss)) {
                    enemy.energy -= 20;
                    enemy.bossLastHurt = new Date().getTime();
                    this.bubbleHit(throwable);
                };
                if (throwable.isColliding(enemy) && !(enemy instanceof Endboss)) {
                    enemy.energy = 0;
                    this.bubbleHit(throwable);
                };
            });
        });
    }


    /** This function removes a bubble and calls a sound function. 
    * @param {Object} throwable - The throwable object that was hit. This object should have `posX` and `posY` properties that will be deleted when the hit occurs.
    */
    bubbleHit(throwable) {
        this.playBubbleHitSound();
        delete throwable.posX;
        delete throwable.posY;
    }


    /** This function plays the bubble hit sound with a specific volume. */
    playBubbleHitSound() {
        if (!soundMuted) {
            this.bubbleHitSound.volume = 0.15;
            this.bubbleHitSound.play();
        };
    }


    /** This function draws all movable the elements on the canvas, including background, enemies, and character. */
    draw() {
        this.ctx.clearRect(0, 0, canvas.width, canvas.height)
        this.ctx.translate(this.cameraX, 0);
        this.addObjectsToMap(this.level.backgrounds);
        this.drawFixed();
        this.addObjectsToMap(this.throwableObjects);
        this.addObjectsToMap(this.level.collectables);
        this.addObjectsToMap(this.level.enemies);
        this.addToMap(this.character);
        this.ctx.translate(-this.cameraX, 0);
        self = this;
        requestAnimationFrame(function () { self.draw(); });
    }


    /** This function draws the fixed objects like health, poison, and coin bars. */
    drawFixed() {
        this.ctx.translate(-this.cameraX, 0);
        this.addToMap(this.healthBar);
        this.addToMap(this.poisonBar);
        this.addToMap(this.coinBar);
        this.addObjectsToMap(this.level.lights);
        this.ctx.translate(this.cameraX, 0);
    }


    /** This function adds multiple objects in an array to the canvas for rendering. 
    * @param {Array<Object>} objects - An array of objects to be added to the map. Each object is passed to the `addToMap` method for addition.
    */
    addObjectsToMap(objects) {
        objects.forEach(object => { this.addToMap(object); });
    }


    /** This function adds a single movable object to the canvas and handles its drawing and frame. 
    * @param {Object} movObj - The movable object to be added to the map. This object must have the `draw` and `drawFrame` methods, and may optionally have an `otherDirection` property that determines whether the image should be flipped.
    */
    addToMap(movObj) {
        if (movObj.otherDirection) { this.flipImage(movObj); };
        movObj.draw(this.ctx);
        movObj.drawFrame(this.ctx);
        if (movObj.otherDirection) { this.flipImageBack(movObj); };
    }


    /** This function flips the image horizontally for objects moving in the opposite direction.
    * @param {Object} movObj - The movable object whose image needs to be flipped. The object must have a `width` property for the scaling to work correctly and a `posX` property for adjusting its position.
    */
    flipImage(movObj) {
        this.ctx.save();
        this.ctx.translate(movObj.width, 0);
        this.ctx.scale(-1, 1);
        movObj.posX *= -1;
    }


    /** This function restores the original orientation of the flipped image. 
    * @param {Object} movObj - The movable object whose image position needs to be restored. The object must have a `posX` property that will be inverted to reverse the horizontal flip.
    */
    flipImageBack(movObj) {
        movObj.posX *= -1;
        this.ctx.restore();
    }


}