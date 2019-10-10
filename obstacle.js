class Obstacle {
    constructor (ctx, y, vx, x) {
        this.ctx = ctx
        this.x = x
        this.y = y
        this.w = 100
        this.h = 45
        this.vx = vx
        
        this.img = new Image()
        this.img.src = "./imagenes/wood.png"

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

    move() {
        this.x += this.vx
    }

}