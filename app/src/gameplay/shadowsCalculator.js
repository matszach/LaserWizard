"use strict";
class ShadowHolder{

    tiles = null;
    rootX = 0;
    rootY = 0;

    constructor(player) {
        this.rootX = Math.round(player.x);
        this.rootY = Math.round(player.y);
        var shDim = ShadowsCalculator.MAX_DEPTH * 2 + 1;
        this.tiles = Util.get2Darray(shDim, shDim, ShadowsCalculator.MAX_DEPTH);
    }

    put(x, y, depth){
        var tx = x - this.rootX + ShadowsCalculator.MAX_DEPTH;
        var ty = y - this.rootY + ShadowsCalculator.MAX_DEPTH;
        if(tx < 0 || ty < 0 || tx >= this.tiles.length || ty >= this.tiles[0].length){
            return false;
        }
        if(this.tiles[tx][ty] > depth){
            this.tiles[tx][ty] = depth;
            return true;
        }
        return false;
    }

    get(x, y){
        var tx = x - this.rootX + ShadowsCalculator.MAX_DEPTH;
        var ty = y - this.rootY + ShadowsCalculator.MAX_DEPTH;
        if(tx < 0 || ty < 0 || tx >= this.tiles.length || ty >= this.tiles[0].length){
            return ShadowsCalculator.MAX_DEPTH;
        }
        return this.tiles[tx][ty];
    }

}


const ShadowsCalculator = {

    MAX_DEPTH : 12,
    DIAG_MOD : Math.sqrt(2),

    /**
     * @param {*} p - player character referencejj
     * @param {*} cm - collision map reference
     */
    calculate(p, cm){
        var sh = new ShadowHolder(p);
        this.depthSearch(Math.round(p.x), Math.round(p.y), 1, sh, cm);
        return sh;
    },

    /**
     * @param {*} x - x location of the tile
     * @param {*} y - y location of the tile
     * @param {*} depth - tile's depth from the origin point
     * @param {*} sh - shadow holder object
     * @param {*} cm - collision map reference
     */
    depthSearch(x, y, depth, sh, cm){
        let depthChange;
        if(depth > this.MAX_DEPTH){
            return;
        } else if(!sh.put(x, y, depth)){
            return;
        } else if(cm[x][y] == 0){
            depthChange = 1;
        } else {
            depthChange = 6;
        }
        this.depthSearch(x + 1, y, depth + depthChange, sh, cm);
        this.depthSearch(x - 1, y, depth + depthChange, sh, cm);
        this.depthSearch(x, y + 1, depth + depthChange, sh, cm);
        this.depthSearch(x, y - 1, depth + depthChange, sh, cm);

        this.depthSearch(x + 1, y + 1, depth + depthChange * this.DIAG_MOD, sh, cm);
        this.depthSearch(x - 1, y - 1, depth + depthChange * this.DIAG_MOD, sh, cm);
        this.depthSearch(x + 1, y - 1, depth + depthChange * this.DIAG_MOD, sh, cm);
        this.depthSearch(x - 1, y + 1, depth + depthChange * this.DIAG_MOD, sh, cm);
    }
}