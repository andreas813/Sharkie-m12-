class ThrowableObject extends MovableObject {


    constructor(posX, posY, direction) {
        super();
        this.loadImage('img/1_sharkie/4_attack/bubble_trap/bubble.png');
        this.posX = posX + 150;
        this.posY = posY + 95;
        this.width = 60;
        this.height = 60;
        this.shoot(direction);
    }


    shoot(direction) {
        if (direction === 'left') {
            this.posX -= 150;
            setInterval(() => { this.posX -= 2; }, 1000 / 60);
        }
        else { setInterval(() => { this.posX += 2; }, 1000 / 60); };
    }


}