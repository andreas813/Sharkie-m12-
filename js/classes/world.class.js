class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    cameraX = -100;


    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }


    setWorld() {
        this.character.world = this;
    }


    draw() {
        this.ctx.clearRect(0, 0, canvas.width, canvas.height)
        this.ctx.translate(this.cameraX, 0);
        this.addObjectsToMap(this.level.backgrounds);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.lights);
        this.addToMap(this.character);
        this.ctx.translate(-this.cameraX, 0);
        self = this;
        requestAnimationFrame(function () {
            self.draw();
        });

    };


    addObjectsToMap(objects) {
        objects.forEach(object => {
            this.addToMap(object);
        });
    }


    addToMap(movObj) {
        if (movObj.otherDirection) {
            this.ctx.save();
            this.ctx.translate(movObj.width, 0);
            this.ctx.scale(-1, 1);
            movObj.posX *= -1;
        }
        this.ctx.drawImage(movObj.img, movObj.posX, movObj.posY, movObj.width, movObj.height)
        if (movObj.otherDirection) {
            movObj.posX *= -1;
            this.ctx.restore();
        }
    };


}