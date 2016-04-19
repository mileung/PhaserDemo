var endPoint1x, endPoint1y, endPoint2x, endPoint2y, swipeDirection, arrow, leeway = 60;

demo.state7 = function(){};
demo.state7.prototype = {
    preload: function(){
        game.load.image('arrow', 'assets/sprites/arrow.png');
    },
    create: function(){
        game.stage.backgroundColor = '#a6ff4d';
        addChangeStateEventListeners();
        
        game.input.onDown.add(startSwipe);
        game.input.onUp.add(getSwipeDirection);
        
        arrow = game.add.sprite(centerX, centerY, 'arrow');
        arrow.anchor.setTo(0.5);
    },
    update: function(){}
};

function startSwipe(){ 
    endPoint1x = game.input.x;
    endPoint1y = game.input.y;
}

function getSwipeDirection(){ //getSwipeDirection
    endPoint2x = game.input.x;
    endPoint2y = game.input.y;
    
    if (Math.abs(endPoint2y - endPoint1y) < leeway && Math.abs(endPoint2x - endPoint1x) < leeway) {
        return false;
    }
    
    if (Math.abs(endPoint2y - endPoint1y) < Math.abs(endPoint2x - endPoint1x)){
        if (endPoint2x > endPoint1x) {
            swipeDirection = 90;
        } else {
            swipeDirection = 270;
        }
    } else {
        if (endPoint2y < endPoint1y) {
            swipeDirection = 0;
        } else {
            swipeDirection = 180;
        }
    }
    
    arrow.angle = swipeDirection;
    console.log('direction: ', swipeDirection);
}
