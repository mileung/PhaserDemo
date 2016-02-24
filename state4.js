demo.state4 = function(){};
demo.state4.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#cc66ff';
        addChangeStateEventListeners();
    },
    update: function(){}
};
