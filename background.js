class Background {
    constructor (ctx, x, y, w, h) {
        this.ctx = ctx,
        this.x = 0,
        this.y = 0,
        this.w = this.ctx.canvas.width
        this.h = this.ctx.canvas.height
    }
 
    
    draw() {
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(
        this.x, 
        this.y, 
        this.w, 
        this.h
        )
   
        this.ctx.closePath();

        this.ctx.fillStyle = "GreenYellow";
        this.ctx.fillRect (0, 440, 570, 45);
        this.ctx.fillRect (0,215, 570, 45);
        this.ctx.fillRect (0, 50, 570, 45);

        this.ctx.fillStyle = "DodgerBlue";
        this.ctx.fillRect (0,0, 570,220);
    
        this.ctx.beginPath();
        this.ctx.moveTo(0, 395);
        this.ctx.lineTo(570, 395);
        this.ctx.strokeStyle = "white";
        this.ctx.setLineDash([5]);
        this.ctx.strokeWidth = 3;
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo(0, 350);
        this.ctx.lineTo(570, 350);
        this.ctx.strokeStyle = "white";
        this.ctx.setLineDash([0]);
        this.ctx.strokeWidth = 3;
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo(0, 305);
        this.ctx.lineTo(570, 305);
        this.ctx.strokeStyle = "white";
        this.ctx.setLineDash([5]);
        this.ctx.strokeWidth = 3;
        this.ctx.stroke();


    }
     
}