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


    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }


    setWorld() { this.character.world = this; }


    run() {
        setInterval(() => {
            if (!world.character.isDead()) {
                this.checkCollisions();
                this.checkThrowableObjects();
            }
        }, 1000 / 10);
    }


    checkCollisions() {
        this.checkCollisionEnemy();
        this.checkCollisionCoin();
        this.checkCollisionBubble();
    }


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


    checkCollisionCoin() {
        this.level.collectables.forEach(collectable => {
            if (this.character.isColliding(collectable)) {
                this.character.pickup('coin');
                delete collectable.posX;
                delete collectable.posY;

            };
        });
    }


    checkCollisionBubble() {
        this.throwableObjects.forEach(throwable => {
            this.level.enemies.forEach(enemy => {
                if (throwable.isColliding(enemy)) {
                    enemy.energy = 0;
                    delete throwable.posX;
                    delete throwable.posY;
                };
            });
        });
    }


    checkThrowableObjects() {
        if (this.keyboard.spaceKey) {
            let bubble = new ThrowableObject(this.character.posX, this.character.posY, this.character.lastMove.direction);
            this.throwableObjects.push(bubble);
        }
    }


    draw() {
        this.ctx.clearRect(0, 0, canvas.width, canvas.height)
        this.ctx.translate(this.cameraX, 0);
        this.addObjectsToMap(this.level.backgrounds);
        this.ctx.translate(-this.cameraX, 0);
        this.addToMap(this.healthBar);
        this.addToMap(this.poisonBar);
        this.addToMap(this.coinBar);
        this.addObjectsToMap(this.level.lights);
        this.ctx.translate(this.cameraX, 0);
        this.addObjectsToMap(this.throwableObjects);
        this.addObjectsToMap(this.level.collectables);
        this.addObjectsToMap(this.level.enemies);
        this.addToMap(this.character);
        this.ctx.translate(-this.cameraX, 0);
        self = this;
        requestAnimationFrame(function () { self.draw(); });
    };


    addObjectsToMap(objects) {
        objects.forEach(object => { this.addToMap(object); });
    }


    addToMap(movObj) {
        if (movObj.otherDirection) { this.flipImage(movObj); }
        movObj.draw(this.ctx);
        movObj.drawFrame(this.ctx);
        if (movObj.otherDirection) { this.flipImageBack(movObj); }
    };


    flipImage(movObj) {
        this.ctx.save();
        this.ctx.translate(movObj.width, 0);
        this.ctx.scale(-1, 1);
        movObj.posX *= -1;
    }


    flipImageBack(movObj) {
        movObj.posX *= -1;
        this.ctx.restore();
    }
}