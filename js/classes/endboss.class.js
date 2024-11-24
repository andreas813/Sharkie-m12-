class Endboss extends MovableObject {
    height = 500;
    width = 600;
    posY = -500;
    imagesFloating = [
        'img/2_enemy/3_final_enemy/2_floating/1.png',
        'img/2_enemy/3_final_enemy/2_floating/2.png',
        'img/2_enemy/3_final_enemy/2_floating/3.png',
        'img/2_enemy/3_final_enemy/2_floating/4.png',
        'img/2_enemy/3_final_enemy/2_floating/5.png',
        'img/2_enemy/3_final_enemy/2_floating/6.png',
        'img/2_enemy/3_final_enemy/2_floating/7.png',
        'img/2_enemy/3_final_enemy/2_floating/8.png',
        'img/2_enemy/3_final_enemy/2_floating/9.png',
        'img/2_enemy/3_final_enemy/2_floating/10.png',
        'img/2_enemy/3_final_enemy/2_floating/11.png',
        'img/2_enemy/3_final_enemy/2_floating/12.png',
        'img/2_enemy/3_final_enemy/2_floating/13.png',
    ];
    imagesIntroduce = [
        'img/2_enemy/3_final_enemy/1_introduce/1.png',
        'img/2_enemy/3_final_enemy/1_introduce/2.png',
        'img/2_enemy/3_final_enemy/1_introduce/3.png',
        'img/2_enemy/3_final_enemy/1_introduce/4.png',
        'img/2_enemy/3_final_enemy/1_introduce/5.png',
        'img/2_enemy/3_final_enemy/1_introduce/6.png',
        'img/2_enemy/3_final_enemy/1_introduce/7.png',
        'img/2_enemy/3_final_enemy/1_introduce/8.png',
        'img/2_enemy/3_final_enemy/1_introduce/9.png',
        'img/2_enemy/3_final_enemy/1_introduce/10.png',
    ];
    imagesAttack = [
        'img/2_enemy/3_final_enemy/attack/1.png',
        'img/2_enemy/3_final_enemy/attack/2.png',
        'img/2_enemy/3_final_enemy/attack/3.png',
        'img/2_enemy/3_final_enemy/attack/4.png',
        'img/2_enemy/3_final_enemy/attack/5.png',
        'img/2_enemy/3_final_enemy/attack/6.png',
    ];
    imagesDead = [
        'img/2_enemy/3_final_enemy/dead/mesa_de_trabajo_2_copia_6.png',
        'img/2_enemy/3_final_enemy/dead/mesa_de_trabajo_2_copia_7.png',
        'img/2_enemy/3_final_enemy/dead/mesa_de_trabajo_2_copia_8.png',
        'img/2_enemy/3_final_enemy/dead/mesa_de_trabajo_2_copia_9.png',
        'img/2_enemy/3_final_enemy/dead/mesa_de_trabajo_2_copia_10.png',
    ];
    imagesHurt = [
        'img/2_enemy/3_final_enemy/hurt/1.png',
        'img/2_enemy/3_final_enemy/hurt/2.png',
        'img/2_enemy/3_final_enemy/hurt/3.png',
        'img/2_enemy/3_final_enemy/hurt/4.png',
    ]
    offset = {
        top: -200,
        left: -25,
        right: -90,
        bottom: -275
    };
    lastAttack = 0;
    appeared = false;
    bossLastHurt = 0;
    appearance = false;



    constructor() {
        super().loadImage('img/2_enemy/3_final_enemy/1_introduce/1.png');
        this.loadImages(this.imagesFloating);
        this.loadImages(this.imagesAttack);
        this.loadImages(this.imagesDead);
        this.loadImages(this.imagesHurt);
        this.loadImages(this.imagesIntroduce);
        this.posX = levelEndX * 0.9;
        this.animate();
        this.attack();
    }


    /** This function animates the endboss depending on its current state. */
    animate() {
        setInterval(() => {
            if (this.isDead()) { this.animateDeath(); }
            else if (this.getCurrentTime() - this.bossLastHurt < 750) { this.playAnimation(this.imagesHurt); }
            else { this.animateAppearance(); };
        }, 1000 / 6);
    }


    /** This function handels the death animation after a specified delay. */
    animateDeath() {
        this.playAnimation(this.imagesDead);
        setTimeout(() => {
            this.removeObject(this);
            initGameWon();
        }, 1500);
    }


    /** This function takes care about the appearance of the boss if it has not yet appeared. */
    animateAppearance() {
        try { if ((this.posX - world.character.posX) <= 400 && !this.appearance) { this.appearance = true; }; }
        catch (error) { };
        if (this.appearance && !this.appeared) { this.introduceBoss(); }
        else if (this.isAttacking()) { this.playAnimation(this.imagesAttack); }
        else if (this.appeared) { this.playAnimation(this.imagesFloating); };
    }


    /** This function invokes different things to introduce the boss. */
    introduceBoss() {
        this.playAnimation(this.imagesIntroduce);
        this.posY = -25;
        this.playSound('bossappearance', 0.1);
        setTimeout(() => {
            this.appeared = true;
        }, 1000);
    }


    /** This function lets the boss attack after a specific amount of time has passed. */
    attack() {
        setInterval(() => {
            if (this.appeared && ((this.getCurrentTime() - this.lastAttack) >= 4000)) {
                this.lastAttack = this.getCurrentTime();
                this.playSound('bossattack', 0.2);
                this.changePosition((Math.random() * -50 - 100), 50, 250);
                this.changePosition(0, -50, 750);
            };
        }, 1000 / 10);
    }


    /** Changes the bosses position with specified coordinates and a delay. 
    * @param {number} x - The amount to change the object's `posX` by.
    * @param {number} y - The amount to change the object's `posY` by.
    * @param {number} delay - The delay in milliseconds before the position is updated.
    */
    changePosition(x, y, delay) {
        setTimeout(() => {
            this.posX += x;
            this.posY += y;
        }, delay);
    }


}