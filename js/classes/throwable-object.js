class ThrowableObject extends MovableObject {
    bubbleSound = new Audio('audio/bubble.mp3');
    type;
    width = 60;
    height = 60;


    constructor(posX, posY, direction, type) {
        super();
        this.type = type;
        if (type == 'normal') {
            this.loadImage('img/1_sharkie/4_attack/bubble_trap/bubble.png');
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


    /** This function determines the move direction of a shot bubble and plays the according sound. 
    * @param {string} direction - The direction in which to shoot. Can be either `'left'` or `'right'`.
    */
    shoot(direction) {
        if (direction === 'left') {
            this.posX -= 150;
            setInterval(() => { this.posX -= 2; }, 1000 / 60);
        }
        else { setInterval(() => { this.posX += 2; }, 1000 / 60); };
        this.playSound('bubble', 0.1);
    }


}