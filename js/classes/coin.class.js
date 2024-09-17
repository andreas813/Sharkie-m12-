class Coin extends MovableObject {
posY = 350;
height = 75;
width = 75;


    constructor(factor) {
        super().loadImage('img/4_marcadores/1_coins/1.png');
        this.posX = (levelEndX / 20) * (factor + 2);
        this.animate();
    }


    animate() {
        setInterval(() => {
            if (this.posY == 350)
            {this.posY += 5}
            else {this.posY -= 5};
        }, 1000 / 1.25);
    }
}