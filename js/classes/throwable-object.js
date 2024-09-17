class ThrowableObject extends MovableObject {
    constructor(posX, posY) {
        super().loadImage('img/1_sharkie/4_attack/bubble_trap/bubble.png');
        this.posX = posX + 150;
        this.posY = posY + 95;
        this.width = 60;
        this.height = 60;
        this.shoot();
    }


    shoot() {
        setInterval(() => { this.posX += 2; }, 1000 / 60);
    }
}