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
        this.h = 50
        this.w = 50
        this.x = this.ctx.canvas.width/2 - this.w
        this.y = this.ctx.canvas.height - this.h -10
        this.vx = 5
        this.vy = 5

        this.img = new Image()
        this.img.src = "./imagenes/ranita.png"

        this.setListeners()
        
    }

    draw() {
        this.ctx.drawImage(
            this.img,
            this.x,
            this.y,
            this.w,
            this.h
        )
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
        if (this.y  >= 0) {
            this.y -= 45
        } else {
            this.y -= this.h 
        }
     
    }    

    _moveBackward() {
        if (this.y - this.h - 30<= this.ctx.canvas.height) {
            this.y += 45
        } else {
            this.y += this.h 
        }

    }

    _moveRight() {
        if(this.x + this.w + 30 >= this.ctx.canvas.width){
            return
        } else {
            this.x += this.w + 40
        }
    }

    _moveLeft() {
        if(this.x <= 0){
            return
        } else {
            this.x -= this.w + 1,75
        }
    }
}


