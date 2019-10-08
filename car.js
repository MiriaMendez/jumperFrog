class Car {
    constructor (ctx, x, y, w, h) {
        this.ctx = ctx
        this.x = 0
        this.y = this._randomY()
        this.w = 30 
        this.h = 30
        this.vx = 3.5

        if (Math.random() >= 0.5) {
            this.vx *= -1
            this.x = this.ctx.canvas.width - this.w
        }
    }

    draw() {
        this.ctx.fillStyle = "orange"
        ctx.fillRect(this.x, this.y, this.w, this.h)
        this.ctx.closePath();
        
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
