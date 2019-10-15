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
        this.y = this.ctx.canvas.height - this.h -10
        this.vx = this.w;
        this.vy = 45
        this.win = false

        this.img = new Image()
        this.img.src = "./imagenes/ranita.png"

        this.setListeners()

       this.jumpAudio = new Audio("audio/pop.mp3")
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
                this.jumpAudio.play()
            } else if (e.keyCode === DOWN_KEY) {
                this._moveBackward()
                this.jumpAudio.play()
            } else if (e.keyCode === RIGHT_KEY) {
                this._moveRight()
                this.jumpAudio.play()
            } else if (e.keyCode === LEFT_KEY) {
                this._moveLeft()
                this.jumpAudio.play()
            }
        }
        
    }

    
    _moveForward() {
        if (this.y - this.vy < 0) {
            this.win = true
        } else {
            this.y -= this.vy
        }
     
    }    

    _moveBackward() {
        if (this.y + this.h + this.vy >= this.ctx.canvas.height) {
            return
        } else {
            this.y += this.vy 
        }

    }

    _moveRight() {
        if(this.x + this.w + this.vx >= this.ctx.canvas.width){
            return
        } else {
            this.x += this.vx
        }
    }

    _moveLeft() {
        if(this.x - this.vx <= 0){
            return
        } else {
            this.x -= this.vx
        }
    }

    
}


