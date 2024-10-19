class Poison extends MovableObject {
    posY = 170;
    height = 75;
    width = 75;
    static poisonAmount = 0;
    images = [
        'img/4_marcadores/posion/animada/1.png',
        'img/4_marcadores/posion/animada/2.png',
        'img/4_marcadores/posion/animada/3.png',
        'img/4_marcadores/posion/animada/4.png',
        'img/4_marcadores/posion/animada/5.png',
        'img/4_marcadores/posion/animada/6.png',
        'img/4_marcadores/posion/animada/7.png',
        'img/4_marcadores/posion/animada/8.png',
    ]
    offset = {
        top: -5,
        left: -15,
        right: -30,
        bottom: -5,
    };


    constructor() {
        super().loadImage('img/4_marcadores/posion/animada/1.png');
        this.loadImages(this.images);
        this.posX = (levelEndX / 16) * (Poison.poisonAmount + 9) - 150;
        this.posY += Math.random() * 180;
        Poison.poisonAmount++;
        this.animate();
    }


    /** This function animates the poison pickup. */
    animate() {
        setInterval(() => {
            this.playAnimation(this.images);
        }, 1000 / 6);
    }


}