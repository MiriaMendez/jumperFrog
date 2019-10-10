class Car {
    constructor (ctx, x, y, w, h) {
        this.ctx = ctx
        this.x = 0
        this.y =   this._randomY()
        this.w = 40 
        this.h = 40
        this.vx = 3.5

        this.img1 = new Image()
        this.img1.src = "./imagenes/car.png"
        this.img2 = new Image()
        this.img2.src = "./imagenes/car2.png"
        this.img3 = new Image()
        this.img3.src = "./imagenes/car4.png"

        if (Math.random() >= 0.5) {
            this.vx *= -1
            this.x = this.ctx.canvas.width - this.w
        }
    }

    draw() {
        this.ctx.drawImage(
            this.img1,
            this.x,
            this.y,
            this.w,
            this.h
        )

        this.ctx.drawImage(
            this.img2,
            this.x,
            this.y,
            this.w,
            this.h
        )

        this.ctx.drawImage(
            this.img3,
            this.x,
            this.y,
            this.w,
            this.h
        )    
    
    }

    move() {
        this.x += this.vx
    }

    _randomY() {
       const possibilities = [
           400,
           310,
         360,
           270
       ]

        const randomIndex = Math.floor(Math.random() * possibilities.length)

        return possibilities[randomIndex]
    }


        
} 
