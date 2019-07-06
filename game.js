// The game engine

class Game {

  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.width = canvas.width;
    this.height = canvas.height;
    this.keyPressed = {};
  }

  static keys(idOfKeyPressed) {
    var keys = {
      32: 'space',
      37: 'left',
      38: 'up',
      39: 'right',
      40: 'down'
    };
    return keys[idOfKeyPressed];
  }

  getKeysPressed = (e) => {
    // Convert Key Code to Key Name
    let keyName = Game.keys(e.which);

    if (keyName) {
      this.keyPressed[keyName] = e.type === 'keydown';  
      e.preventDefault();
    }
  }

  start = () => {
    let fps = 60;
    let interval = 1000 / fps;

    this.canvas.addEventListener('keydown', this.getKeysPressed, false);
    this.canvas.addEventListener('keyup', this.getKeysPressed, false);

    setInterval(() => {
      this.update();
      this.draw();
    }, interval);
  }

  update = () => {
    this.entities.forEach(entity => {
      if (entity.update) entity.update();
    });
  }

  draw = () =>  {
    this.entities.forEach(entity => {
      if (entity.draw) entity.draw(this.context);
    })
  }
}

