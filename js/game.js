//// CONFIGURATION BEGIN ////
const config = {
  width: 800,
  height: 600,
  type: Phaser.CANVAS,
  scene: {
    preload: preload,
    create: create,
    update: update
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: false,
    }
  }
};
new Phaser.Game(config);
//// CONFIGURATION END ////

var cursors;
var player;
var speed = 200;

function preload() {
  this.load.image('ball', './assets/ball.png');
}

function create() {
  player = this.physics.add.sprite(config.width/2, config.height/2, 'ball');
  player.setCollideWorldBounds(true);
  cursors = this.input.keyboard.createCursorKeys();
}

function update() {
  player.body.setVelocity(0);
  player.body.setMaxSpeed(speed); // Prevent diagonal movement from being faster
  if (cursors.left.isDown) player.body.setVelocityX(-speed);
  if (cursors.right.isDown) player.body.setVelocityX(speed);
  if (cursors.up.isDown) player.body.setVelocityY(-speed);
  if (cursors.down.isDown) player.body.setVelocityY(speed);
}

