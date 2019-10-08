class Obstacle {
    constructor (ctx, x, y, w, h) {
        this.ctx = ctx
        this.x = 0
        this.y = this._randomYob()
        this.w = 100
        this.h = 45
        this.vx0 = 4
        if (Math.random() >= 0.5) {
            this.vx0 *= -1
            this.x = this.ctx.canvas.width - this.w
        }
        this.vx = this.vx0

    }

    draw() {
        this.ctx.fillStyle = "brown"
        this.ctx.fillRect(this.x, this.y, this.w, this.h)
        this.ctx.closePath();
        
    }

    move() {
        this.x += this.vx
    }

    _randomYob() {
        const possibilitiesYob = [
            175,
            130,
            85,
            40,    
        ]

        const randomIndex = Math.floor(Math.random() * possibilitiesYob.length)

        return possibilitiesYob[randomIndex]
    }
}