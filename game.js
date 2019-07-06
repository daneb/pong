// The game engine

class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.width = canvas.width;
    this.height = canvas.height;
    this.keyPressed = {};
    this.keys = {
      32: 'space',
      37: 'left',
      38: 'up',
      39: 'right',
      40: 'down'
    };

  }

  getKeysPressed(e) {
    // Convert Key Code to Key Name
    let keyName = this.keys[e.which];

    if (keyName) {
      this.keyPressed[keyName] = e.type === 'keydown';  
      e.preventDefault();
    }
  }

  start() {
    var self = this;
    let fps = 60;
    let interval = 1000 / fps;

    self.canvas.addEventListener('keydown', self.getKeysPressed, false);
    self.canvas.addEventListener('keyup', self.getKeysPressed, false);

    setInterval(function() {
      self.update();
      self.draw();
    }, interval);
  }

  update() {
    this.entities.forEach(entity => {
      if (entity.update) entity.update();
    });
  }

  draw() {
    var self = this;

    this.entities.forEach(entity => {
      if (entity.draw) entity.draw(self.context);
    })
  }
}
