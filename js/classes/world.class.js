class World {
    character = new Character();
    enemies = [
        new Pufferfish(),
        new Pufferfish(),
        new Pufferfish(),
    ];
    ctx;
    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }
    draw() {
        this.ctx.clearRect(0, 0, canvas.width, canvas.height)
        this.ctx.drawImage(
            this.character.img,
            this.character.posX,
            this.character.posY,
            this.character.height,
            this.character.width
        );
        this.enemies.forEach(enemy => {
            this.ctx.drawImage(enemy.img,
                enemy.posX,
                enemy.posY,
                enemy.width,
                enemy.height);
        });
        self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    };
}