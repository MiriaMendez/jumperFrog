class Game {
    constructor (ctx) {
        this.ctx = ctx;
        this.frog = new Frog(ctx)
        this.bg = new Background (ctx);
        this.intervalId = null;

        
    }


    run() {
        this.intervalId = setInterval (() => {
            this._clear()
            this._draw()
            this._move()
        }, 1000/60)


    }

    _clear() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
    
    }

    _draw() {
        
        this.bg.draw()
        this.frog.draw()
    }

    _move() {
        this.frog.move()
    }
}

