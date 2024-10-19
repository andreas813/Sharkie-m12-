class Coin extends MovableObject {
    posY = 170;
    height = 75;
    width = 75;
    static coinAmount = 0;


    constructor() {
        super().loadImage('img/4_marcadores/1_coins/1.png');
        this.posX = (levelEndX / 16) * (Coin.coinAmount + 1);
        this.posY += Math.random() * 180;
        Coin.coinAmount++;
        this.animate();
    }


    /** This function animates coins by moving them up and down in a randomized interval. */
    animate() {
        let coinPosition = 'bottom';
        setInterval(() => {
            if (coinPosition == 'top') {
                this.posY += 5;
                coinPosition = 'bottom';
            }
            else {
                this.posY -= 5;
                coinPosition = 'top';
            };
        }, 1000 / (1 + Math.random() * 0.25));
    }


}