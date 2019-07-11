class Ball extends Entity {
    constructor() {
        super();
        this.width = 20;
        this.height = 20;  

        this.x = game.width / 2 - this.width;
        this.y = game.height / 2 - this.height;
        
        this.yVelocity = 10;
    }

    update() {
        super.update();
        if(this.y > game.height - this.height || this.y < 0) {
            this.yVelocity *= -1;
        }
    }
}


