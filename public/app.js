$(document).ready(function() {
    var world = Physics();
    var canvasElement = document.getElementById('canvas');
    var canvasWidth = $('#canvas').width();
    var canvasHeight = $('#canvas').height()

    var renderer = Physics.renderer('canvas', {
        el: canvasElement,
        width: canvasWidth,
        height: canvasHeight
    });

    var ball = Physics.body('circle', {
        x: canvasWidth/2,
        y: canvasHeight/2,
        radius: 40,
        vx: 0.2,
        vy: 0.1,
        styles: {
            fillStyle: '#000'
        }
    });

    world.add(renderer);
    world.add(ball);

    world.on('step', function () {
        world.render();
    });

    Physics.util.ticker.on(function(time) {
        world.step(time);
    });

    Physics.util.ticker.start();   
});

