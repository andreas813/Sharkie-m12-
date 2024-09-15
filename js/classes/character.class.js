class Character extends MovableObject {
    imagesIdle = [
        'img/1_sharkie/1_idle/1.png',
        'img/1_sharkie/1_idle/2.png',
        'img/1_sharkie/1_idle/3.png',
        'img/1_sharkie/1_idle/4.png',
        'img/1_sharkie/1_idle/5.png',
        'img/1_sharkie/1_idle/6.png',
        'img/1_sharkie/1_idle/7.png',
        'img/1_sharkie/1_idle/8.png',
        'img/1_sharkie/1_idle/9.png',
        'img/1_sharkie/1_idle/10.png',
        'img/1_sharkie/1_idle/11.png',
        'img/1_sharkie/1_idle/12.png',
        'img/1_sharkie/1_idle/13.png',
        'img/1_sharkie/1_idle/14.png',
        'img/1_sharkie/1_idle/15.png',
        'img/1_sharkie/1_idle/16.png',
        'img/1_sharkie/1_idle/17.png',
        'img/1_sharkie/1_idle/18.png',
    ];
    imagesSwim = [
        'img/1_sharkie/3_swim/2.png',
        'img/1_sharkie/3_swim/3.png',
        'img/1_sharkie/3_swim/5.png',
        'img/1_sharkie/3_swim/6.png',
    ];
    imagesDead = [
        'img/1_sharkie/6_dead/1_poisoned/1.png',
        'img/1_sharkie/6_dead/1_poisoned/2.png',
        'img/1_sharkie/6_dead/1_poisoned/3.png',
        'img/1_sharkie/6_dead/1_poisoned/4.png',
        'img/1_sharkie/6_dead/1_poisoned/5.png',
        'img/1_sharkie/6_dead/1_poisoned/6.png',
        'img/1_sharkie/6_dead/1_poisoned/7.png',
        'img/1_sharkie/6_dead/1_poisoned/8.png',
        'img/1_sharkie/6_dead/1_poisoned/9.png',
        'img/1_sharkie/6_dead/1_poisoned/10.png',
        'img/1_sharkie/6_dead/1_poisoned/11.png',
        'img/1_sharkie/6_dead/1_poisoned/12.png',
    ];
    imagesHurt = [
        'img/1_sharkie/5_hurt/1_poisoned/1.png',
        'img/1_sharkie/5_hurt/1_poisoned/2.png',
        'img/1_sharkie/5_hurt/1_poisoned/3.png',
        'img/1_sharkie/5_hurt/1_poisoned/4.png',
    ];
    imagesSleep = [
        'img/1_sharkie/2_long_idle/i1.png',
        'img/1_sharkie/2_long_idle/i2.png',
        'img/1_sharkie/2_long_idle/i3.png',
        'img/1_sharkie/2_long_idle/i4.png',
        'img/1_sharkie/2_long_idle/i5.png',
        'img/1_sharkie/2_long_idle/i6.png',
        'img/1_sharkie/2_long_idle/i7.png',
        'img/1_sharkie/2_long_idle/i8.png',
        'img/1_sharkie/2_long_idle/i9.png',
        'img/1_sharkie/2_long_idle/i10.png',
        'img/1_sharkie/2_long_idle/i11.png',
        'img/1_sharkie/2_long_idle/i12.png',
        'img/1_sharkie/2_long_idle/i13.png',
        'img/1_sharkie/2_long_idle/i14.png',
    ]
    world;
    speed = 3;
    posY = 0;
    offset = {
        top: -100,
        left: -60,
        right: -100,
        bottom: -150
    };


    constructor() {
        super().loadImage('img/1_sharkie/3_swim/1.png');
        this.loadImages(this.imagesSwim);
        this.loadImages(this.imagesDead);
        this.loadImages(this.imagesHurt);
        this.loadImages(this.imagesIdle);
        this.loadImages(this.imagesSleep);
        this.applyGravity();
        this.animate();
        this.move();
        this.swimmingSound = new Audio('audio/swimming.mp3');
        this.swimmingSound.volume = 0.05;
    }


    animate() {
        setInterval(() => {
            if (this.isDead()) { this.playAnimation(this.imagesDead); }
            else if (this.isHurt()) { this.playAnimation(this.imagesHurt); }
            else if (this.world.keyboard.rightKey || this.world.keyboard.leftKey || this.isAboveGround()) { this.playAnimation(this.imagesSwim); }
            else if (this.isSleeping()) { this.playAnimation(this.imagesSleep); }
            else { this.playAnimation(this.imagesIdle); }
        }, 1000 / 8);
    }


    move() {
        setInterval(() => {
            if (!world.character.isDead()) {
                if (this.world.keyboard.rightKey && this.posX < this.world.level.levelEndX) {
                    this.moveRight();
                    this.otherDirection = false;
                    this.swimmingSound.play();
                }
                if (this.world.keyboard.leftKey) {
                    this.otherDirection = true;
                    this.swimmingSound.play();
                    if (this.posX > 0) { this.moveLeft(); };
                }
                if (this.world.keyboard.upKey && !this.isAboveGround()) {
                    this.jump();
                    this.swimmingSound.play();

                }
            }
            this.world.cameraX = -this.posX + 25;
        }, 1000 / 60);
    }


}