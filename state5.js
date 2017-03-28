var accel = 400, platform, platformGroup;

demo.state5 = function(){};
demo.state5.prototype = {
  preload: function(){
    game.load.image('platform', 'assets/sprites/platform.png');
  },
  create: function(){
    game.stage.backgroundColor = '#ff99dd';
    addChangeStateEventListeners();

    adam = game.add.sprite(centerX, 500, 'adam');
    platform = game.add.sprite(0, 800, 'platform');
    platformGroup = game.add.group();
    platformGroup.create(650, 400, 'platform');
    platformGroup.create(1300, 400, 'platform');

    game.physics.enable([adam, platform, platformGroup]);

    adam.body.gravity.y = 500;
    adam.body.bounce.y = 0.3;
    adam.body.drag.x = 400;
    adam.body.collideWorldBounds = true;

    platform.body.immovable = true;

    platformGroup.setAll('body.immovable', true);
  },
  update: function(){
    game.physics.arcade.collide(adam, [platform, platformGroup]);
    if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
      adam.body.acceleration.x = -accel;
    } else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
      adam.body.acceleration.x = accel;
    } else {
      adam.body.acceleration.x = 0;
    }
    if (game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
      adam.body.velocity.y = -300;
    }
  }
};
