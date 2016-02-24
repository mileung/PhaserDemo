demo.state3 = function(){};
demo.state3.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#1a1aff';
        addChangeStateEventListeners();
    },
    update: function(){}
};
