demo.state1 = function(){};
demo.state1.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#DDDDDD';
        console.log('state1');
        addChangeStateEventListeners();
    },
    update: function(){}
};

