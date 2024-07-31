class World {
    character = new Character();
    enemies = [
        new Pufferfish(),
        new Pufferfish(),
        new Pufferfish(),
    ];
    lights = [
        new Light(),
    ];
    backgrounds = [
        new Background('img/3_background/layers/5_water/d1.png', 0),
        new Background('img/3_background/layers/4_fondo_2/d1.png', 0),
        new Background('img/3_background/layers/3_fondo_1/d1.png', 0), 
        new Background('img/3_background/layers/2_floor/d1.png', 0), 
    ];
    ctx;
    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }
    draw() {
        this.ctx.clearRect(0, 0, canvas.width, canvas.height)
        this.addObjectsToMap(this.backgrounds);
        this.addObjectsToMap(this.enemies);
        this.addObjectsToMap(this.lights);
        this.addToMap(this.character);
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
        this.ctx.drawImage(movObj.img, movObj.posX, movObj.posY, movObj.width, movObj.height)
    };
}