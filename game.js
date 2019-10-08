class Game {
    constructor (ctx) {
        this.ctx = ctx;
        this.frog = new Frog(ctx);
        this.bg = new Background (ctx);
        this.intervalId = null;
        this.cars = [
            new Car(ctx)
        ];

        this.obstacles = [
            new Obstacle(ctx)
        ];
        
        this.die = false;

        this.tick = 0
        
    }


    run() {
        this.intervalId = setInterval (() => {
            this._clear()
            this._draw()
            this._move()
            this._clearObstacles()
            this._checkCollisions()
            if (this.die) {
                this._gameOver()
            }
        }, 1000/60)


    }

    _gameOver() {
        clearInterval(this.intervalId);
        
    }


    _clearObstacles() {
        this.cars = this.cars.filter(o => {
            return o.x + o.w >= 0
        })

        this.obstacles = this.obstacles.filter (o => {
            return o.x + o.w >= 0
        })
    }


    _clear() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
    
    }

    _draw() {
        
        this.bg.draw()
        this.frog.draw()
        this.cars.forEach(c => c.draw())
        this.obstacles.forEach(ob => ob.draw())
    

        this.tick++

        if (this.tick > Math.random() * 300 + 100) {
            this.tick = 0
            this._addCar()
            this._addObstacle()
        }
    }

    _addCar() {
        const car = new Car(this.ctx)
        this.cars.push(car)
    }

    _addObstacle() {
        const obstacle = new Obstacle(this.ctx)
        this.obstacles.push(obstacle)
    }

    _move() {
        this.cars.forEach(o => o.move())
        this.obstacles.forEach(o => o.move())
    }

    CollideFrog() {
        return this.cars.some(car => {
            return this.frog.x + this.frog.w > car.x && 
            this.frog.x < car.x + car.w &&
             this.frog.y < car.y + car.h &&
             this.frog.y + this.frog.h > car.y
            
        })

        
    }

    _checkCollisions() {
        if (this.CollideFrog()) {
            this.die = true
        }
    }      

}