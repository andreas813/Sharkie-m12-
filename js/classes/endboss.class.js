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
        'img/2_enemy/3_final_enemy/dead/mesa_de_trabajo_2.png',
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
    timer;
    appeared = false;


    constructor() {
        super().loadImage('img/2_enemy/3_final_enemy/2_floating/1.png');
        this.loadImages(this.imagesFloating);
        this.loadImages(this.imagesAttack);
        this.loadImages(this.imagesDead);
        this.loadImages(this.imagesHurt);
        this.loadImages(this.imagesIntroduce);
        this.posX = levelEndX * 0.9;
        this.animate();
        this.attack();
    }


    animate() {
        let appearance = false;
        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.imagesDead);
                setTimeout(() => { this.removeObject(this); }, 1000);
            }
            else {
                try {
                    if ((this.posX - world.character.posX) <= 450 && !appearance) { appearance = true; };
                }
                catch (error) { };
                if (appearance && !this.appeared) {
                    this.posY = -25;
                    this.playAnimation(this.imagesIntroduce);
                    setTimeout(() => {
                        this.appeared = true;
                        this.timer = new Date().getTime();
                    }, 1000);
                }
                else if (this.isAttacking()) { this.playAnimation(this.imagesAttack); }
                else { this.playAnimation(this.imagesFloating); };
            };
        }, 1000 / 6);
    }


    attack() {
        setInterval(() => {
            if (this.appeared && ((new Date().getTime() - this.timer) >= 4000)) {
                this.lastAttack = new Date().getTime();
                this.timer = new Date().getTime();
                setTimeout(() => {
                    this.posX -= 100;
                    this.posY += 50;
                }, 250);
                setTimeout(() => {
                    this.posX += 100;
                    this.posY -= 50;
                }, 750);

            };
        }, 1000 / 10);

    }


}