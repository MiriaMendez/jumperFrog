class Obstacle {
    constructor (ctx, x, y, w, h) {
        this.ctx = ctx
        this.x = 0
        this.y = this._randomYob()
        this.w = 60
        this.h = 30
        this.vx = 3.5
      

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
            100,
            150,
            80,
            115
        ]

        const randomIndex = Math.floor(Math.random() * possibilitiesYob.length)

        return possibilitiesYob[randomIndex]
    }
}