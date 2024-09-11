class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    cameraX = -100;
    statusBar = new StatusBar();
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
            this.checkCollisions();
            this.checkThrowableObjects();
        }, 1000 / 2);
    }


    checkCollisions() {
        this.level.enemies.forEach(enemy => {
            if (this.character.isColliding(enemy)) {
                console.log('Collision with character ', enemy);
                if (this.character.energy > 0) { this.character.hit(); }
                else { console.log('Character has no energy left!') };
            };
        });
    }


    checkThrowableObjects() {
        if (this.keyboard.spaceKey) {
            let bottle = new ThrowableObject(this.character.posX, this.character.posY);
            this.throwableObjects.push(bottle);
        }
    }


    draw() {
        this.ctx.clearRect(0, 0, canvas.width, canvas.height)
        this.ctx.translate(this.cameraX, 0);
        this.addObjectsToMap(this.level.backgrounds);
        this.ctx.translate(-this.cameraX, 0);
        this.addToMap(this.statusBar);
        this.addObjectsToMap(this.level.lights);
        this.ctx.translate(this.cameraX, 0);
        this.addObjectsToMap(this.throwableObjects);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
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