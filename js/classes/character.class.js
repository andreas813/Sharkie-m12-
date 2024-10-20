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
    lastSwimming = 0;


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
        this.startMainLoops();
    }


    /** Calls the animate, move and attack functions in a specified interval. */
    startMainLoops() {
        setInterval(() => {
            this.move();
            this.attack();
        }, 1000 / 60);
        setInterval(() => { this.animate(); }, 1000 / 8);
    }


    /** This function play animations depending on the current state of the character. */
    animate() {
        if (this.isDead()) { this.characterDying(); }
        else if (this.isShocked()) { this.playAnimation(this.imagesShocked); }
        else if (this.isHurt()) { this.playAnimation(this.imagesHurt); }
        else if (this.isAttacking() && world.coinBar.percentage > 0) { this.playAnimation(this.imagesFinslap); }
        else if (this.world.keyboard.rightKey || this.world.keyboard.leftKey || this.isAboveGround()) { this.playAnimation(this.imagesSwim); }
        else if (this.isSleeping()) { this.playAnimation(this.imagesSleep); }
        else { this.playAnimation(this.imagesIdle); }
    }


    /** This function handles the death of the character and calls game over after a delay. */
    characterDying() {
        if (this.lastDamage.shock > this.lastDamage.normal) { this.playAnimation(this.imagesElectrocuted); }
        else { this.playAnimation(this.imagesDead); };
        setTimeout(() => { initGameOver() }, 2500);
    }


    /** This functions handles the movement of the character based on the keyboard inputs. */
    move() {
        if (!world.character.isDead()) {
            if (this.world.keyboard.rightKey && this.posX < levelEndX && !this.isAttacking()) { this.moveRight(); }
            if (this.world.keyboard.leftKey && !this.isAttacking()) { if (this.posX > 0) { this.moveLeft(); }; }
            if (this.world.keyboard.upKey && !this.isAboveGround() && !this.isAttacking()
            ) { this.jump(); }
        }
        this.world.cameraX = -this.posX + 25;
    }


    /** Performs a fin slap attack and plays the corresponding sound. */
    finslapAttack() {
        if (this.lastMove.direction == 'left') { this.offset.left += 100; }
        else { this.offset.right += 100 };
        this.offset.left = -60;
        this.offset.right = -100;
        this.playSound('finslapattack', 0.1);
    }


    /** Launches a bubble attack depending on the type provided. */
    bubbleAttack(type) {
        let bubble = new ThrowableObject(this.posX, this.posY, this.lastMove.direction, type);
        this.world.throwableObjects.push(bubble);
    }


    /** Detects the spacebar press to trigger either finslap or bubble attack. */
    attack() {
        if (this.world.keyboard.spaceKey && (new Date().getTime() - this.lastAttack > 1500) && !this.isHurt()) {
            this.lastMove.time = new Date().getTime();
            this.lastAttack = new Date().getTime();
            if (this.world.coinBar.percentage <= 0) {
                if (this.world.poisonBar.percentage <= 0) { this.bubbleAttack('poison'); }
                else { this.bubbleAttack('normal'); };
            }
            else { this.finslapAttack(); };
        };
    }


}