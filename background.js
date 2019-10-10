class Background {
    constructor (ctx, x, y, w, h) {
        this.ctx = ctx,
        this.x = 0,
        this.y = 0,
        this.w = this.ctx.canvas.width
        this.h = this.ctx.canvas.height
    }
 
    
    draw() {
        this.ctx.fillStyle = "#1C2833";
        this.ctx.fillRect(
        this.x, 
        this.y, 
        this.w, 
        this.h
        )
   
        this.ctx.closePath();

        this.ctx.fillStyle = "#4CAF50";
        this.ctx.fillRect (0, 440, 570, 45);
        this.ctx.fillRect (0,215, 570, 45);
        this.ctx.closePath();
        

        this.ctx.fillStyle = "#29B6F6";
        this.ctx.fillRect (0,0, 570,220);
        this.ctx.fillStyle = "#4CAF50";
        this.ctx.fillRect (0, -5, 570, 45);

    
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