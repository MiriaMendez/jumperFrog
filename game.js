class Game {
    constructor (ctx) {
        this.ctx = ctx;
        this.w = this.ctx.canvas.width;
        this.h = this.ctx.canvas.height;
        this.frog = new Frog(ctx);
        this.bg = new Background (ctx);
        this.intervalId = null;
        this.cars = [
            new Car(this.ctx)
        ];

        this.obstacles = [

        ]
    
        this.die = false;
        this.tick = 0;
        this.tick2 = 0;
        this.frogOnObs = false;
        this.gameOverAudio = new Audio("audio/punch.mp3")
        this.winFrogAudio = new Audio("audio/win.mp3")

        this.img = new Image(ctx)
        this.img.src = "./imagenes/gameOver2.png"
        this.img2 = new Image(ctx)
        this.img2.src = "./imagenes/win.png"
        
        
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
            } else if (this.frog.win === true) {
                this.winFrog()
            }
            
            if (this.tick >= 10000) {
                this.tick = 0
            } 
            if (this.tick2 >= 5000) {
                this.tick2 = 0
            }
            
        }, 1000/60)

        

    }

    _gameOver() {
        this.gameOverAudio.play()
        clearInterval(this.intervalId);
       this._clear();
       this.ctx.drawImage(this.img, 0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
    //    this.ctx.font = "60px Comic Sans MS";
    //    this.ctx.textAlign = "center";
    //    this.ctx.fillStyle = "#FF3300";
    //    this.ctx.fillText(
    //         "GAME OVER",
    //         this.ctx.canvas.width / 2,
    //         this.ctx.canvas.height / 2
    //     );
        
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
        this.cars.forEach(c => c.draw())
        this.obstacles.forEach(ob => ob.draw())
        this.frog.draw()
        this.tick++

        if (this.tick % 25 === 0) {
            this.tick2++
            this._addCar()
            if(this.tick2 % 5 === 0){
                this._addObstacle()
            }
            
        }

        
    }

    _addCar() {
    
        const car = new Car(this.ctx)
        this.cars.push(car)
    }

    _addObstacle() {
       
        const obstacle4 = new Obstacle(this.ctx, 40, -4.5, this.ctx.canvas.width)
        const obstacle3 = new Obstacle(this.ctx, 85, 2, 0) 
        const obstacle2 = new Obstacle(this.ctx, 130, -4.5, this.ctx.canvas.width) 
        const obstacle = new Obstacle(this.ctx, 175, 2, 0) 
        this.obstacles.push(obstacle)
        this.obstacles.push(obstacle2)
        this.obstacles.push(obstacle3)
        this.obstacles.push(obstacle4)

    }


    _move() {
        this.cars.forEach(o => o.move())
        this.obstacles.forEach(o => o.move())
        }

    collideFrog() {
        return this.cars.some(car => {
            return this.frog.x + this.frog.w > car.x && 
            this.frog.x < car.x + car.w &&
            this.frog.y < car.y + car.h &&
            this.frog.y + this.frog.h > car.y
            
        }) 
    }

    collideObstacle() {
         return this.obstacles.some(obstacle => {
            if( this.frog.x + this.frog.w > obstacle.x &&
            this.frog.x < obstacle.x + obstacle.w &&
            this.frog.y < obstacle.y + obstacle.h &&
            this.frog.y + this.frog.h > obstacle.y
        ){
            this.updateSpeed(obstacle)
            return true
        }
      })
    }
    updateSpeed(obs) {
        this.frog.x += obs.vx
    }
    _frogOnWater() {
        return (this.frog.y + this.frog.h) < 220 && (this.frog.y + this.frog.h) > 45
    }

    _checkCollisions() {
        if (this.collideFrog()) {
            this.die = true
        }

        if (this.collideObstacle()) {
            console.log(this.frogOnObs)
            console.log('no toco el puto agua')
        } 

        else if (this._frogOnWater() && !this.frogOnObs){
            
            this.die = true
        }
    }

    winFrog()  {
            this.winFrogAudio.play()
            clearInterval(this.intervalId)

            this._clear();
            this.ctx.drawImage(this.img2, this.ctx.canvas.width/4, this.ctx.canvas.height/3, this.ctx.canvas.width/2, this.ctx.canvas.height/8)

            //this.ctx.font = "60px Comic Sans MS"
            //this.ctx.textAlign = "center";
            //this.ctx.fillStyle = "red"
            //this.ctx.fillText(
               // "Froogy wins",
                //this.ctx.canvas.width / 2,
                //this.ctx.canvas.height / 2
                
            //)
        }
        

}