const config = {
    type: Phaser.AUTO,
    width: 800,
    heigth: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 300
            },
            debug: false
        },
        scene: {
            preload,
            create: create,
            update: update
        }
    }
};

const game = new Phaser.Game(config);

var platforms,
    score = 0,
    scoreText;

function preload() {
    this.load.image('platform', 'assets/platform.png');
    this.load.image('player', 'assets/player.png');
}

function create() {
    platforms = this.physics.add.stacticGroup();

    platforms.create(0, 0, 'platform');
    platforms.create(650, 250, 'platform');
    platforms.create(600, 220, 'platform');

    this.player = this.physics.add.sprite(100, 100, 'player');
}

function update() {
    
}