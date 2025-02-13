const layers = ['5_water', '4_fondo_2', '3_fondo_1', '2_floor'];
const backgroundLength = 8;
const levelEndX = (backgroundLength - 2) * 720;
let level1;


/** This function loads the backgrounds for the game according to the given backgroundLength variable. 
* @param {string[]} layers - An array of layer names corresponding to subdirectories where background images are stored.
*/
function loadBackgrounds(layers) {
    const backgrounds = [];
    for (let i = -2; i < backgroundLength; i += 2) {
        layers.forEach(layer => {
            backgrounds.push(new Background(`img/3_background/layers/${layer}/d1.png`, i * 720));
            backgrounds.push(new Background(`img/3_background/layers/${layer}/d2.png`, (i + 1) * 720));
        });
    }
    return backgrounds;
}

/** Initializes the level with enemies, backgrounds and items. */
function initLevel() {
    level1 = new Level(
        [
            new Pufferfish(),
            new Pufferfish(),
            new Pufferfish(),
            new Pufferfish(),
            new Jellyfish(),
            new Jellyfish(),
            new Jellyfish(),
            new Jellyfish(),
            new JellyfishSuper(),
            new JellyfishSuper(),
            new Endboss(),
        ],
        [
            new Light(),
        ],
        loadBackgrounds(layers),
        [
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Poison(),
            new Poison(),
            new Poison(),
            new Poison(),
            new Poison(),
        ],
    );
}