const StagePainter = {

    _stagePainterInterval: null,

    displayHeightInUnits: 24,
    displayWidthInUnits: 44,

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
        StagePainter.drawItems(c);
        StagePainter.drawWalls(c);
        StagePainter.drawMonsters(c);
        StagePainter.drawPlayer(c);
        StagePainter.drawProjectiles(c);
        StageManager.currentStage.player.y -= 0.15; //tmp
        StageManager.currentStage.player.x -= 0.01; // tmp
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

    },

    drawMonsters(c){
        
    },

    drawPlayer(c){

    },

    drawProjectiles(c){

    }


}
