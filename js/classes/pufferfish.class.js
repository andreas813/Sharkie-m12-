class Pufferfish extends MovableObject {
    height = 90;
    width = 110;
    posY = 350;
    imagesSwim = [
        [
            'img/2_enemy/1_puffer_fish_3_color_options/1_swim/1_swim1.png',
            'img/2_enemy/1_puffer_fish_3_color_options/1_swim/1_swim2.png',
            'img/2_enemy/1_puffer_fish_3_color_options/1_swim/1_swim3.png',
            'img/2_enemy/1_puffer_fish_3_color_options/1_swim/1_swim4.png',
            'img/2_enemy/1_puffer_fish_3_color_options/1_swim/1_swim5.png',
        ],
        [
            'img/2_enemy/1_puffer_fish_3_color_options/1_swim/2_swim1.png',
            'img/2_enemy/1_puffer_fish_3_color_options/1_swim/2_swim2.png',
            'img/2_enemy/1_puffer_fish_3_color_options/1_swim/2_swim3.png',
            'img/2_enemy/1_puffer_fish_3_color_options/1_swim/2_swim4.png',
            'img/2_enemy/1_puffer_fish_3_color_options/1_swim/2_swim5.png',
        ],
        [
            'img/2_enemy/1_puffer_fish_3_color_options/1_swim/3_swim1.png',
            'img/2_enemy/1_puffer_fish_3_color_options/1_swim/3_swim2.png',
            'img/2_enemy/1_puffer_fish_3_color_options/1_swim/3_swim3.png',
            'img/2_enemy/1_puffer_fish_3_color_options/1_swim/3_swim4.png',
            'img/2_enemy/1_puffer_fish_3_color_options/1_swim/3_swim5.png',
        ]
    ]
    imagesTransition = [
        [
            'img/2_enemy/1_puffer_fish_3_color_options/2_transition/1_transition1.png',
            'img/2_enemy/1_puffer_fish_3_color_options/2_transition/1_transition2.png',
            'img/2_enemy/1_puffer_fish_3_color_options/2_transition/1_transition3.png',
            'img/2_enemy/1_puffer_fish_3_color_options/2_transition/1_transition4.png',
            'img/2_enemy/1_puffer_fish_3_color_options/2_transition/1_transition5.png',
        ],
        [
            'img/2_enemy/1_puffer_fish_3_color_options/2_transition/2_transition1.png',
            'img/2_enemy/1_puffer_fish_3_color_options/2_transition/2_transition2.png',
            'img/2_enemy/1_puffer_fish_3_color_options/2_transition/2_transition3.png',
            'img/2_enemy/1_puffer_fish_3_color_options/2_transition/2_transition4.png',
            'img/2_enemy/1_puffer_fish_3_color_options/2_transition/2_transition5.png',
        ],
        [
            'img/2_enemy/1_puffer_fish_3_color_options/2_transition/3_transition1.png',
            'img/2_enemy/1_puffer_fish_3_color_options/2_transition/3_transition2.png',
            'img/2_enemy/1_puffer_fish_3_color_options/2_transition/3_transition3.png',
            'img/2_enemy/1_puffer_fish_3_color_options/2_transition/3_transition4.png',
            'img/2_enemy/1_puffer_fish_3_color_options/2_transition/3_transition5.png',
        ]
    ]
    imagesBubbleswim = [
        [
            'img/2_enemy/1_puffer_fish_3_color_options/3_bubbleeswim/1_bubbleswim1.png',
            'img/2_enemy/1_puffer_fish_3_color_options/3_bubbleeswim/1_bubbleswim2.png',
            'img/2_enemy/1_puffer_fish_3_color_options/3_bubbleeswim/1_bubbleswim3.png',
            'img/2_enemy/1_puffer_fish_3_color_options/3_bubbleeswim/1_bubbleswim4.png',
            'img/2_enemy/1_puffer_fish_3_color_options/3_bubbleeswim/1_bubbleswim5.png',
        ],
        [
            'img/2_enemy/1_puffer_fish_3_color_options/3_bubbleeswim/2_bubbleswim1.png',
            'img/2_enemy/1_puffer_fish_3_color_options/3_bubbleeswim/2_bubbleswim2.png',
            'img/2_enemy/1_puffer_fish_3_color_options/3_bubbleeswim/2_bubbleswim3.png',
            'img/2_enemy/1_puffer_fish_3_color_options/3_bubbleeswim/2_bubbleswim4.png',
            'img/2_enemy/1_puffer_fish_3_color_options/3_bubbleeswim/2_bubbleswim5.png',
        ],
        [
            'img/2_enemy/1_puffer_fish_3_color_options/3_bubbleeswim/3_bubbleswim1.png',
            'img/2_enemy/1_puffer_fish_3_color_options/3_bubbleeswim/3_bubbleswim2.png',
            'img/2_enemy/1_puffer_fish_3_color_options/3_bubbleeswim/3_bubbleswim3.png',
            'img/2_enemy/1_puffer_fish_3_color_options/3_bubbleeswim/3_bubbleswim4.png',
            'img/2_enemy/1_puffer_fish_3_color_options/3_bubbleeswim/3_bubbleswim5.png',
        ],
    ]
    imagesDead = [
        [
            'img/2_enemy/1_puffer_fish_3_color_options/4_die/1_dead_1_can_animate_by_going_up.png',
            'img/2_enemy/1_puffer_fish_3_color_options/4_die/1_dead_2_can_animate_by_going_down_to_the_floor_after_the_fin_slap_attack.png',
            'img/2_enemy/1_puffer_fish_3_color_options/4_die/1_dead_3_can_animate_by_going_down_to_the_floor_after_the_fin_slap_attack.png',
        ],
        [
            'img/2_enemy/1_puffer_fish_3_color_options/4_die/2_2.png',
            'img/2_enemy/1_puffer_fish_3_color_options/4_die/2_3.png',
            'img/2_enemy/1_puffer_fish_3_color_options/4_die/2.png',
        ],
        [
            'img/2_enemy/1_puffer_fish_3_color_options/4_die/3_2.png',
            'img/2_enemy/1_puffer_fish_3_color_options/4_die/3_3.png',
            'img/2_enemy/1_puffer_fish_3_color_options/4_die/3.png',
        ],
    ]
    offset = {
        top: -5,
        left: -5,
        right: -15,
        bottom: -30
    };
    pufferfishSound = new Audio('audio/pufferfish.mp3')
    pufferfishSoundPlayed = false;


    constructor() {
        super().loadImage('img/2_enemy/1_puffer_fish_3_color_options/1_swim/1_swim1.png')
        const color = Math.round(Math.random() * 2);
        this.loadImages(this.imagesSwim[color]);
        this.loadImages(this.imagesTransition[color]);
        this.loadImages(this.imagesBubbleswim[color]);
        this.loadImages(this.imagesDead[color]);
        this.posX = levelEndX * (0.2 + 0.2 * Math.random());
        this.speed = 0.25 + Math.random() * 0.5;
        this.animate(color);
    }


    /** This function animates the enemy based on its current state. */
    animate(color) {
        let transition;
        let bubbleswim = 1;
        setInterval(() => {
            try { if (this.posX - world.character.posX < 360) { transition = true; }; }
            catch (error) { };
            if (bubbleswim >= this.imagesTransition.length) { this.pufferfishBubble(color); }
            else if (transition) {
                this.playAnimation(this.imagesTransition[color]);
                bubbleswim++
            }
            else { this.playAnimation(this.imagesSwim[color]); };
        }, 1000 / 4);
        this.movePufferfish(color);
    }


    /** This function plays the pufferfish sound and sets a variable to true. */
    playPufferfishSound() {
        if (!this.pufferfishSoundPlayed) {
            this.playSound('pufferfish', 0.2);
            this.pufferfishSoundPlayed = true;
        };
    }


    /** This function accelerates the pufferfish in the opposite direction of the characters movement, plays its dying animation and removes it after a delay. */
    killPufferfish(color) {
        if (world.character.lastMove.direction == 'right') { this.posX += 10; }
        else { this.posX -= 10; };
        this.posY -= 12.5;
        this.playAnimation(this.imagesDead[color]);
        setTimeout(() => { this.removeObject(this); }, 2000);
    }


    /** This function plays an animation when the pufferfish gets in bubbleswim, a sound and adjusts the size.  */
    pufferfishBubble(color) {
        this.playAnimation(this.imagesBubbleswim[color]);
        this.playPufferfishSound();
        this.height = 100;
        this.width = 121;
    }


    /** This functions lets the pufferfish move to the left while its not dead. */
    movePufferfish(color) {
        setInterval(() => {
            if (this.isDead()) { this.killPufferfish(color); }
            else { this.moveLeft(); };
        }, 1000 / 60);
    }


}