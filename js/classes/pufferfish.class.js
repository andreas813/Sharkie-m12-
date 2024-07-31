class Pufferfish extends MovableObject {
    height = 35;
    width = 55; 
    posY = 100;
    constructor() {
        super().loadImage('img/2_enemy/1_puffer_fish_3_color_options/1_swim/1_swim1.png')
        this.posX = 100 + Math.random()*150;
    }
}