class Paddle extends Entity {

  y;
  speed = 15;

  constructor() {

    super();

    this.width = 20
    this.height = 100

    this.y = game.height / 2 - this.height / 2;

  }

  update() {
    super.update();
    this.y = Math.min(Math.max(this.y, 0), game.height - this.height);
  }
  
} 

class Player extends Paddle {

  constructor() {
    super();

    this.score = 0;
    this.x = 20;
  } 
  
  update() {

    if (game.keyPressed.up) {
      this.yVelocity = -this.speed;
    } else if (game.keyPressed.down) {
      this.yVelocity = this.speed;
    } else {
      this.yVelocity = 0;
    }

    super.update();

  }  

}

class Bot extends Paddle {
  constructor() {
    super();

    this.score = 0;
    this.x = game.width - this.width - 20;
  }

  update() {

    this.speed = 5;

    if(this.y < game.ball.y) {
      this.yVelocity = this.speed;
    } else if(this.y > game.ball.y) {
      this.yVelocity = -this.speed;
    }

    super.update();
  }

}

// function Bot() {
//   Paddle.call(this)

//   this.x = game.width - this.width - 20

//   this.speed = 5
// }

// Bot.prototype = Object.create(Paddle.prototype)
// Bot.prototype.constructor = Bot

// Bot.prototype.update = function() {
//   // Follow the ball
//   if (this.y < game.ball.y) {
//     this.yVelocity = this.speed
//   } else {
//     this.yVelocity = -this.speed
//   }

//   Paddle.prototype.update.apply(this, arguments)
// }

