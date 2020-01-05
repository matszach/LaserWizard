const StagePainter = {

    _stagePainterInterval: null,

    displayHeightInUnits: 22,
    displayWidthInUnits: 40,

    init(){
        if(this._stagePainterInterval){
            clearInterval(this._stagePainterInterval)
        }
        setInterval(this._doPaint, 20);
    },

    calcDisplaySizes(){
        var hU = CanvasManager.cnvHeight / this.displayHeightInUnits;
        var wU = CanvasManager.cnvWidth / this.displayWidthInUnits;
        c = {};
        c.cnvWidth = CanvasManager.cnvWidth;
        c.cnvHeight = CanvasManager.cnvHeight;
        c.ctx = CanvasManager.context;
        c.unit = hU < wU ? hU : wU;
        c.dWidth = c.unit * this.displayWidthInUnits;
        c.dHeight = c.unit * this.displayHeightInUnits;
        c.vOffset = (c.cnvWidth - c.dWidth)/2;
        c.hOffset = (c.cnvHeight - c.dHeight)/2;
        c.centerX = StageManager.currentStage.player.x;
        c.centerY = StageManager.currentStage.player.y;
        c.xMin = c.centerX - this.displayWidthInUnits/2;
        c.xMax = c.centerX + this.displayWidthInUnits/2;
        c.yMin = c.centerY - this.displayHeightInUnits/2;
        c.yMax = c.centerY + this.displayHeightInUnits/2;
        return c;
    },

    _doPaint(){        
        if(PauseHandler.paused) return;
        var stg = StageManager.currentStage;
        if(!stg) return;
        var c = StagePainter.calcDisplaySizes();
        StagePainter.clearCanvas(c);
        StagePainter.markUseableArea(c); // tmp
        StagePainter.drawFloors(c);
        StagePainter.drawWalls(c);
        StagePainter.drawItems(c);
        StagePainter.drawMonsters(c);
        StagePainter.drawPlayer(c);
        StagePainter.drawProjectiles(c);
        StagePainter.clearUnuseableArea(c);
    },

    clearCanvas(c){
        c.ctx.clearRect(0, 0, c.cnvWidth, c.cnvHeight);
    },

    markUseableArea(c){
        c.ctx.fillStyle = '#160800';
        c.ctx.fillRect(c.vOffset, c.hOffset, c.dWidth, c.dHeight);
    },

    clearUnuseableArea(c){
        c.ctx.clearRect(0, 0, c.cnvWidth, c.hOffset);
        c.ctx.clearRect(0, c.cnvHeight - c.hOffset, c.cnvWidth, c.hOffset);
        c.ctx.clearRect(0, 0, c.vOffset, c.cnvHeight);
        c.ctx.clearRect(c.cnvWidth - c.vOffset, 0, c.vOffset, c.cnvHeight);
    },

    drawFloors(c){
        for(var x = Math.floor(c.xMin); x < Math.ceil(c.xMax); x++){
            for(var y = Math.floor(c.yMin); y < Math.ceil(c.yMax); y++){ 
                try {
                    var tilePos = StageManager.currentStage.floorIds[x][y];
                    CanvasManager.paintImageAt(ImageLoader.floors, tilePos[0], tilePos[1], c.unit,
                        (x - c.xMin), (y - c.yMin), c.vOffset, c.hOffset);
                } catch {
                    // index out of range
                }
            }
        }
    },

    drawWalls(c){
        for(var x = Math.floor(c.xMin); x < Math.ceil(c.xMax); x++){
            for(var y = Math.floor(c.yMin); y < Math.ceil(c.yMax); y++){ 
                try {
                    var tilePos = StageManager.currentStage.wallIds[x][y];
                    CanvasManager.paintImageAt(ImageLoader.walls, tilePos[0], tilePos[1], c.unit,
                        (x - c.xMin), (y - c.yMin), c.vOffset, c.hOffset);
                } catch {
                    // index out of range
                }
            }
        }
    },

    drawItems(c){
        StageManager.currentStage.items.forEach(e => {
            var x = e.x - c.xMin;
            var y = e.y - c.yMin;
            // no need to draw items that would be outside of the canvas range anyways
            if(x  > -1 && y > -1 && x < this.displayWidthInUnits + 1 && y < this.displayHeightInUnits + 1){
                // item background circle
                CanvasManager.paintImageAt(ImageLoader.misc, 1, 0, c.unit,
                    x, y, c.vOffset, c.hOffset, e.displaySize + 0.6, 0.4);
                // rotating item image
                CanvasManager.paintRotatedImageAt(ImageLoader.items, e.tileX, e.tileY, c.unit,
                    x, y, c.vOffset, c.hOffset, e.direction, e.displaySize);
            } 
        });
    },

    drawMonsters(c){
        
    },

    drawPlayer(c){
        var p = StageManager.currentStage.player;
        CanvasManager.paintRotatedImageAt(ImageLoader.player, p.tileX, p.tileY, c.unit,
            (p.x - c.xMin), (p.y - c.yMin), c.vOffset, c.hOffset, p.direction, p.displaySize);
    },

    drawProjectiles(c){

    }


}
