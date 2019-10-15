class Car {
    constructor (ctx, x, y, w, h) {
        this.ctx = ctx
        this.x = 0
        this.y = this._randomY()
        this.w = 30 
        this.h = 30
        this.y =   this._randomY()
        this.w = 40 
        this.h = 40
        this.vx = 3.5

        const img1 = new Image()
        img1.src = "./imagenes/car.png"
        const img2 = new Image()
        img2.src = "./imagenes/car2.png"
        const img3 = new Image()
        img3.src = "./imagenes/car4.png"

        const arrImg = [img1, img2, img3]
    
        const randomImg = Math.floor(Math.random() * arrImg.length)

        this.imgCar = arrImg[randomImg]

        if (Math.random() >= 0.5) {
        this.vx *= -1
        this.x = this.ctx.canvas.width - this.w
        }
    }

    draw() {
        this.ctx.drawImage(
            this.imgCar,
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
