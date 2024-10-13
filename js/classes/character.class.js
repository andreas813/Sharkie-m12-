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
    ];
    imagesShocked = [
        'img/1_sharkie/5_hurt/2_electric_shock/1.png',
        'img/1_sharkie/5_hurt/2_electric_shock/2.png',
        'img/1_sharkie/5_hurt/2_electric_shock/3.png',
    ];
    imagesElectrocuted = [
        'img/1_sharkie/6_dead/2_electro_shock/1.png',
        'img/1_sharkie/6_dead/2_electro_shock/2.png',
        'img/1_sharkie/6_dead/2_electro_shock/3.png',
        'img/1_sharkie/6_dead/2_electro_shock/4.png',
        'img/1_sharkie/6_dead/2_electro_shock/5.png',
        'img/1_sharkie/6_dead/2_electro_shock/6.png',
        'img/1_sharkie/6_dead/2_electro_shock/7.png',
        'img/1_sharkie/6_dead/2_electro_shock/8.png',
        'img/1_sharkie/6_dead/2_electro_shock/9.png',
        'img/1_sharkie/6_dead/2_electro_shock/10.png',
    ];
    imagesFinslap = [
        'img/1_sharkie/4_attack/fin_slap/1.png',
        'img/1_sharkie/4_attack/fin_slap/2.png',
        'img/1_sharkie/4_attack/fin_slap/3.png',
        'img/1_sharkie/4_attack/fin_slap/4.png',
        'img/1_sharkie/4_attack/fin_slap/5.png',
        'img/1_sharkie/4_attack/fin_slap/6.png',
        'img/1_sharkie/4_attack/fin_slap/7.png',
        'img/1_sharkie/4_attack/fin_slap/8.png',
    ];
    world;
    speed = 3;
    posY = 75;
    offset = {
        top: -100,
        left: -60,
        right: -100,
        bottom: -150
    };
    lastAttack = 0;
    swimmingSound = new Audio('audio/swimming.mp3');


    constructor() {
        super().loadImage('img/1_sharkie/3_swim/1.png');
        this.loadImages(this.imagesSwim);
        this.loadImages(this.imagesDead);
        this.loadImages(this.imagesHurt);
        this.loadImages(this.imagesIdle);
        this.loadImages(this.imagesSleep);
        this.loadImages(this.imagesShocked);
        this.loadImages(this.imagesElectrocuted);
        this.loadImages(this.imagesFinslap);
        this.applyGravity();
        this.animate();
        this.move();
        this.attack();
    }


    animate() {
        setInterval(() => {
            if (this.isDead()) {
                if (this.lastDamage.shock > this.lastDamage.normal) { this.playAnimation(this.imagesElectrocuted) }
                else { this.playAnimation(this.imagesDead); };
            }
            else if (this.isShocked()) { this.playAnimation(this.imagesShocked); }
            else if (this.isHurt()) { this.playAnimation(this.imagesHurt); }
            else if (this.isAttacking() && world.coinBar.percentage > 0) { this.playAnimation(this.imagesFinslap) }
            else if (this.world.keyboard.rightKey || this.world.keyboard.leftKey || this.isAboveGround()) { this.playAnimation(this.imagesSwim); }
            else if (this.isSleeping()) { this.playAnimation(this.imagesSleep); }
            else { this.playAnimation(this.imagesIdle); }
        }, 1000 / 8);
    }


    move() {
        setInterval(() => {
            if (!world.character.isDead()) {
                if (this.world.keyboard.rightKey &&
                    this.posX < levelEndX &&
                    !this.isAttacking()) {
                    this.moveRight();
                    this.otherDirection = false;
                    this.playSwimmingSound();
                    this.lastMove.direction = 'right';
                }
                if (this.world.keyboard.leftKey &&
                    !this.isAttacking()
                ) {
                    this.otherDirection = true;
                    this.playSwimmingSound();
                    this.lastMove.direction = 'left';
                    if (this.posX > 0) { this.moveLeft(); };
                }
                if (this.world.keyboard.upKey &&
                    !this.isAboveGround() &&
                    !this.isAttacking()
                ) {
                    this.jump();
                    this.playSwimmingSound();
                }
            }
            this.world.cameraX = -this.posX + 25;
        }, 1000 / 60);
    }


    playSwimmingSound() {
        if (soundMuted == false) {
            this.swimmingSound.volume = 0.05;
            this.swimmingSound.play();
        }
    }


    finslapAttack() {
        if (this.lastMove.direction == 'left') { this.offset.left += 150 }
        else { this.offset.right += 150 }
        this.delay(750);
        this.offset.left = -60;
        this.offset.right = -100;
    }


    bubbleAttack() {
        let bubble = new ThrowableObject(this.posX, this.posY, this.lastMove.direction);
        this.world.throwableObjects.push(bubble);
    }


    poisonBubbleAttack() {
        console.log('Here could be an attack using a poison bubble.')
    }


    attack() {
        setInterval(() => {
            if (this.world.keyboard.spaceKey &&
                (new Date().getTime() - this.lastAttack > 1500) &&
                !this.isHurt()) {
                this.lastMove.time = new Date().getTime();
                this.lastAttack = new Date().getTime();
                if (this.world.coinBar.percentage <= 0) {
                    if (this.world.poisonBar.percentage <= 0) { this.poisonBubbleAttack(); }
                    else { this.bubbleAttack() };
                }
                else { this.finslapAttack() };
            };
        }, 1000 / 10);
    }


}