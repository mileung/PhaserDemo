var text, speech;

demo.state8 = function(){};
demo.state8.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#99e6e6';
        addChangeStateEventListeners();
        
        text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultrices enim sem, quis interdum velit blandit eget. Suspendisse mollis est a lectus dictum ornare. Donec a suscipit magna. Sed mauris turpis, tristique quis ante ut, ullamcorper facilisis nisl. Proin quis orci faucibus, congue nisi ac, imperdiet justo. Donec scelerisque, libero.';
        
        this.spellOutText(100, 100, 1000, text, 35, 10);
    },
    update: function(){},
    spellOutText: function(x, y, width, text, fontSize, speed) {        
         speech = game.add.text(x, y, '', {fontSize: fontSize + 'px', fill: '#ecf0f1'});
                                   
        var loop = game.time.events.loop(speed, addChar);     
        var index = 0;
        var currentLine = game.add.text(0, 0, '', {fontSize: fontSize + 'px', opacity: 0});
        currentLine.alpha = 0;
        
        function addChar() {
            console.log('adding char');
            speech.text += text[index];
            currentLine.text += text[index];
            if (currentLine.width / width >= 1 && text[index] == ' ') {
                speech.text += '\n';
                currentLine.text = '';
            }
            if (index >= text.length - 1) {
                game.time.events.remove(loop);    
                console.log('stop');
            }
            index++;
        }
    }
};
