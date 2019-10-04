const TOP_KEY = 38
const DOWN_KEY = 40
const RIGHT_KEY = 39
const LEFT_KEY = 37

const rightPressed = false;
const leftPressed = false;
const upPressed = false;
const downPressed = false;



class Frog {
    constructor (ctx) {
        this.ctx = ctx
        this.h = 40
        this.w = 40
        this.x = this.ctx.canvas.width/2 - this.w
        this.y = this.ctx.canvas.height - this.h
        this.vx = 5
        this.vy = 5


        this.setListeners()
        
    }

    draw() {
        this.ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, this.w, this.h);
        this.ctx.closePath();
    }

    move() {
        this.x 

        if (this.x <= this.x + this.ctx.canvas.width) {
        
        }
    }


    setListeners() {
        document.onkeydown = (e) => {
            if (e.keyCode === TOP_KEY) {
                this. _moveForward()
            } else if (e.keyCode === DOWN_KEY) {
                this._moveBackward()
            } else if (e.keyCode === RIGHT_KEY) {
                this._moveRight()
            } else if (e.keyCode === LEFT_KEY) {
                this._moveLeft()
            }
        }
        
    }

    
    _moveForward() {
        if (this.y - this.h <= 0) {
            this.vy = -5
        } else {
            this.y -= this.h 
        }
     
    }    

    _moveBackward() {
        if (this.y + this.h >= this.ctx.canvas.height) {
            this.vy = 5
        } else {
            this.y += this.h 
        }

    }

    _moveRight() {
        if(this.x + this.w >= this.ctx.canvas.width){
            return
        } else {
            this.x += this.w + 1,75
        }
    }

    _moveLeft() {
        if(this.x - this.w <= 0){
            return
        } else {
            this.x -= this.w + 1,75
        }
    }

}


