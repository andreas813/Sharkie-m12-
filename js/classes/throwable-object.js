class ThrowableObject extends MovableObject {
    bubbleSound = new Audio('audio/bubble.mp3');
    type;

    constructor(posX, posY, direction, type) {
        super();
        this.type = type;
        if (type == 'normal') {
            this.loadImage('img/1_sharkie/4_attack/bubble_trap/bubble.png');
            this.width = 60;
            this.height = 60;
            this.posY = posY + 95;

        }
        else {
            this.loadImage('img/1_sharkie/4_attack/bubble_trap/poisoned_bubble_for_whale.png');
            this.width = 90;
            this.height = 90;
            this.posY = posY + 80;

        };
        this.posX = posX + 150;
        this.shoot(direction);
    }


    shoot(direction) {
        if (direction === 'left') {
            this.posX -= 150;
            setInterval(() => { this.posX -= 2; }, 1000 / 60);
        }
        else { setInterval(() => { this.posX += 2; }, 1000 / 60); };
        this.playBubbleSound();
    }


    playBubbleSound() {
        if (!soundMuted) {
            this.bubbleSound.volume = 0.1;
            this.bubbleSound.play();
        };
    }


}