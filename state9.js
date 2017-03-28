// ref.set({ hs: [0,0,0,0,0,0,0,0,0,0]})

var ref, fbObj, hsText = [];

demo.state9 = function(){};
demo.state9.prototype = {
  preload: function(){
    game.load.image('button1', 'assets/sprites/button1.png');
    game.load.image('button2', 'assets/sprites/button2.png');
  },
  create: function(){
    game.stage.backgroundColor = '#ffcc66';
    addChangeStateEventListeners();

    ref = firebase.database().ref('/');

    for (var i = 1; i < 11; i++) {
      game.add.text(500, 20 + (i * 90), i + '. ', {fontSize: '40px'}).anchor.setTo(1, 0);
    }

    for (var i = 0; i < 10; i++) {
      hsText[i] = game.add.text(500, 20 + ((i + 1) * 90), '', {fontSize: '40px'});
    }

    var updateHSText = this.updateHSText;
    ref.on('value', function(snapshot) {
      fbObj = snapshot.val();
      updateHSText(fbObj.hs);
    });

    game.add.button(800, 400, 'button1', function() {
      var score = Math.round(Math.random() * 100);
      fbObj.hs.push(score);
      fbObj.hs = fbObj.hs.sort(function(a, b) {
        return b - a;
      }).slice(0, 10)
      ref.set(fbObj);
      console.log(score);
    });

    game.add.button(800, 600, 'button2', function() {
      ref.set({hs: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]});
    });
  },
  updateHSText: function(hs) {
    for (var i = 0; i < 10; i++) {
      hsText[i].text = hs[i];
    }
  }
};
