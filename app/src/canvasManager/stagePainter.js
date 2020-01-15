const StagePainter = {

    _stagePainterInterval: null,

    displayHeightInUnits: 18,
    displayWidthInUnits: 32,

    unit: 0,

    init(){
        if(this._stagePainterInterval){
            clearInterval(this._stagePainterInterval)
        }
        setInterval(this._doPaint, 25); // todo read this from config/options
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
        this.unit = c.unit;
        return c;
    },

    _doPaint(){        
        if(PauseHandler.paused) return;
        var stg = StageManager.currentStage;
        if(!stg) return;
        var c = StagePainter.calcDisplaySizes();
        StagePainter.clearCanvas(c);
        // StagePainter.markUseableArea(c);
        StagePainter.drawFloors(c);
        StagePainter.drawWalls(c);
        StagePainter.drawItems(c);
        StagePainter.drawMonsters(c);
        StagePainter.drawPlayer(c);
        StagePainter.drawProjectiles(c);
        StagePainter.drawShadows(c);
        StagePainter.drawDamageAnimations(c);
        StagePainter.clearUnuseableArea(c);
    },

    clearCanvas(c){
        c.ctx.clearRect(0, 0, c.cnvWidth, c.cnvHeight);
    },

    markUseableArea(c){
        c.ctx.fillStyle = '#111111';
        c.ctx.fillRect(c.vOffset, c.hOffset, c.dWidth, c.dHeight);
    },

    clearUnuseableArea(c){
        c.ctx.clearRect(0, 0, c.cnvWidth, c.hOffset);
        c.ctx.clearRect(0, c.cnvHeight - c.hOffset, c.cnvWidth, c.hOffset);
        c.ctx.clearRect(0, 0, c.vOffset, c.cnvHeight);
        c.ctx.clearRect(c.cnvWidth - c.vOffset, 0, c.vOffset, c.cnvHeight);
    },

    drawFloors(c){
        for(var x = Math.floor(c.xMin); x <= Math.ceil(c.xMax); x++){
            for(var y = Math.floor(c.yMin); y <= Math.ceil(c.yMax); y++){ 
                var floors = StageManager.currentStage.floorIds;
                if(x >= 0 && y >= 0 && x < floors.length && y < floors[0].length){
                    var tilePos = floors[x][y];
                    CanvasManager.paintImageAt(ImageLoader.floors, tilePos[0], tilePos[1], c.unit,
                        (x - c.xMin), (y - c.yMin), c.vOffset, c.hOffset);
                }
            }
        }
    },

    drawWalls(c){
        for(var x = Math.floor(c.xMin); x <= Math.ceil(c.xMax); x++){
            for(var y = Math.floor(c.yMin); y <= Math.ceil(c.yMax); y++){ 
                var walls = StageManager.currentStage.wallIds;
                if(x >= 0 && y >= 0 && x < walls.length && y < walls[0].length){    
                    var tilePos = walls[x][y];
                    if(tilePos[0] == 0 && tilePos[1] == 0){
                        continue;
                    }                
                    CanvasManager.paintImageAt(ImageLoader.walls, tilePos[0], tilePos[1], c.unit,
                        (x - c.xMin), (y - c.yMin), c.vOffset, c.hOffset);
                } 
            }
        }
    },

    drawItems(c){
        StageManager.currentStage.items.filter(e => {return !e.expired}).forEach(e => {
            var x = e.x - c.xMin;
            var y = e.y - c.yMin;
            // no need to draw items that would be outside of the canvas range anyways
            if(x  > -1 && y > -1 && x < this.displayWidthInUnits + 1 && y < this.displayHeightInUnits + 1){
                // rotating item image
                CanvasManager.paintRotatedImageAt(ImageLoader.items, e.tileX, e.tileY, c.unit,
                    x, y, c.vOffset, c.hOffset, e.direction, e.displaySize);
                // item sphere
                CanvasManager.paintImageAt(ImageLoader.misc, 1, 0, c.unit,
                    x, y, c.vOffset, c.hOffset, e.displaySize + 0.6, 0.3);
            } 
        });
    },

    drawMonsters(c){
        StageManager.currentStage.monsters.filter(e => {return !e.expired}).forEach(e => {
            CanvasManager.paintRotatedImageAt(ImageLoader.monsters, e.tileX, e.tileY, c.unit,
                (e.x - c.xMin), (e.y - c.yMin), c.vOffset, c.hOffset, e.direction, e.displaySize);
        });
    },

    drawPlayer(c){
        var p = StageManager.currentStage.player;
        CanvasManager.paintRotatedImageAt(ImageLoader.player, p.tileX, p.tileY, c.unit,
            (p.x - c.xMin), (p.y - c.yMin), c.vOffset, c.hOffset, p.direction, p.displaySize);
    },

    drawProjectiles(c){
        StageManager.currentStage.projectiles.filter(e => {return !e.expired}).forEach(e => {
            
            CanvasManager.paintRotatedImageAt(ImageLoader.projectiles, e.tileX, e.tileY, c.unit,
                (e.x - c.xMin), (e.y - c.yMin), c.vOffset, c.hOffset, e.direction, e.displaySize);
        });
    },

    drawShadows(c){
        var player = StageManager.currentStage.player;
        var collisionMap = StageManager.currentStage.collisionMap;
        var shadowsHolder = ShadowsCalculator.calculate(player, collisionMap);

        // c.ctx.fillStyle = '#000000';

        for(var x = Math.floor(c.xMin); x <= Math.ceil(c.xMax); x++){
            for(var y = Math.floor(c.yMin); y <= Math.ceil(c.yMax); y++){ 
                var dx = x - c.xMin;
                var dy = y - c.yMin;
                // var dx = (x - c.xMin - 0.5) * c.unit + c.vOffset;
                // var dy = (y - c.yMin - 0.5) * c.unit + c.hOffset;
                var opacity = shadowsHolder.get(x, y)/(ShadowsCalculator.MAX_DEPTH);
                // c.ctx.fillRect(dx + 1, dy + 1, c.unit - 2, c.unit - 2);
                // opacity = opacity < ShadowsCalculator.LIM_OPACITY ? opacity : ShadowsCalculator.LIM_OPACITY;
                CanvasManager.paintImageAt(ImageLoader.misc, 3, 0, c.unit,
                   dx, dy, c.vOffset, c.hOffset, 1, opacity); 
            }
        }

        // c.ctx.globalAlpha = 1;
    },

    drawDamageAnimations(c){
        c.ctx.font = parseInt(c.unit/2) + 'px Arial';
        c.ctx.fillStyle = '#ff0000';
        StageManager.currentStage.damageAnimations.filter(e => !e.expired).forEach((e) =>{
            var x = (e.x - c.xMin) * c.unit + c.vOffset;
            var y = (e.y - c.yMin) * c.unit + c.hOffset;
            c.ctx.globalAlpha = e.opacity;
            c.ctx.fillText(parseInt(e.value), x, y);
        });
        c.ctx.globalAlpha = 1;
    }
}
