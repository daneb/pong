class Background {
    draw(context) {
        context.fillStyle = '#000';
        context.fillRect(0, 0, game.width, game.width);
    }
}

var canvas = document.getElementById('canvas'),
    game = new Game(canvas);

game.entities = [
    new Background(),
    new Ball(),
    new Player()
];

game.start();
canvas.focus();

