// The game engine

class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.width = canvas.width;
    this.height = canvas.height;
    this.keyPressed = {};

    this.canvas.addEventListener('keydown', getKeysPressed, false);
    this.canvas.addEventListener('keyup', getKeysPressed, false);
    this.keys = {
      32: 'space',
      37: 'left',
      38: 'up',
      39: 'right',
      40: 'down'
    };

  }

  getKeysPressed = (e) => {
    // Convert Key Code to Key Name
    let keyName = this.keys[e.which];

    if (keyName) {
      this.keyPressed[keyName] = e.type === 'keydown';  
      e.preventDefault();
    }
  }

  start = () => {
    let fps = 60;
    let interval = 1000 / fps;

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

  draw = () => {
    this.entities.forEach(entity => {
      if (entity.draw) entity.draw(this.context);
    })
  }
}
