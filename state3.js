var sound;

demo.state3 = function(){};
demo.state3.prototype = {
  preload: function(){
    game.load.image('button1', 'assets/sprites/button1.png');
    game.load.image('button2', 'assets/sprites/button2.png');
    game.load.image('button3', 'assets/sprites/button3.png');
    game.load.audio('pops', 'assets/sounds/buttonPops.mp3');
  },
  create: function(){
    game.stage.backgroundColor = '#1a1aff';
    addChangeStateEventListeners();

    sound = game.add.audio('pops');
    sound.addMarker('low', 0.15, 0.5);
    sound.addMarker('high', 1.1, 1.5);

    var b1 = game.add.button(100, 100, 'button1', function() {
      changeState(null, 1);
    });

    var b2 = game.add.button(400, 400, 'button2', function() {
      changeState(null, 2);
    });

    var b3 = game.add.button(700, 700, 'button3');

    b1.onInputDown.add(this.tint, b1);
    b2.onInputDown.add(this.tint, b2);
    b3.onInputDown.add(this.tint, b3);

    b1.onInputUp.add(this.unTint, b1);
    b2.onInputUp.add(this.unTint, b2);
    b3.onInputUp.add(this.unTint, b3);
  },
  tint: function() {
    this.tint = 0xbbbbbb;
    sound.play('low');
  },
  unTint: function() {
    this.tint = 0xFFFFFF;
    sound.play('high');
  }
};
