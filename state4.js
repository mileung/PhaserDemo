demo.state4 = function(){};
demo.state4.prototype = {
    preload: function(){
        game.load.image('adam', 'assets/sprites/adam.png');
    },
    create: function(){
        game.stage.backgroundColor = '#cc66ff';
        addChangeStateEventListeners();
        
        a1 = game.add.sprite(50, 100, 'adam');
        a2 = game.add.sprite(350, 100, 'adam');
        a3 = game.add.sprite(650, 100, 'adam');
        a4 = game.add.sprite(950, 100, 'adam');
        a5 = game.add.sprite(1250, 100, 'adam');
        
        // Tween.to(properties, duration, ease, autoStart, delay, repeat, yoyo)
        game.add.tween(a1).to({y: 400}, 2000, 'Elastic.easeIn', true)
        game.add.tween(a2.anchor).from({y: 1, x: 1}, 2000, 'Bounce', true)
        game.add.tween(a3).to({alpha: 0}, 500, 'Linear', true, 1000, 3, true)
        game.add.tween(a4).to({rotation: '+30'}, 4000, 'Linear', true)
        game.add.tween(a5).to({y: 1000}, 1000, 'Expo.easeInOut', true);
    },
    update: function(){}
};
