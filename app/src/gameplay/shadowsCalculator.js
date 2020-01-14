const ShadowsCalculator = {

    MAX_DEPTH : 13,
    // LIM_OPACITY : 0.97,

    _getShadowHolder(){
        return {
            tiles: [],  

            /**
             * Tries to add a new tile to th tile list.
             * Returns true if the tile is succesfully added or 
             * a depth value of an existing one gets updated.
             * False otherwise.
             * @param {*} x - x location of the tile
             * @param {*} y - y location of the tile
             * @param {*} depth - tile's depth from the origin point
             */
            put(x, y, depth){
                var rs = this.tiles.filter((e) => {return e[0] == x && e[1] == y});
                if(rs.length == 0){
                    // this.tiles.push({x: x, y: y, depth: depth});
                    this.tiles.push([x, y, depth]);
                    return true;
                } else if(rs[0][2] > depth) {
                    rs[0][2] = depth;
                    return true;
                } else {
                    return false;
                }w
            },

            /**
             * Returns the depth value of a tile.
             * If no such tile found, defaults to MAX_DEPTH.
             * @param {*} x - x location of the tile
             * @param {*} y - y location of the tile
             */
            get(x, y){
                var rs = this.tiles.filter((e) => {return e[0] == x && e[1] == y});
                if(rs.length == 0){
                    return this.MAX_DEPTH;
                } 
                return rs[0][2];
            }
        };
    },


    /**
     * @param {*} p - player character reference
     * @param {*} cm - collision map reference
     */
    calculate(p, cm){
        var sh = this._getShadowHolder();
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
        if(depth > this.MAX_DEPTH){
            return;
        } else if(!sh.put(x, y, depth)){
            return;
        } else if(cm[x][y] == 0){
            depth += 1;
        } else {
            depth += 6;
        }
        this.depthSearch(x + 1, y, depth, sh, cm);
        this.depthSearch(x - 1, y, depth, sh, cm);
        this.depthSearch(x, y + 1, depth, sh, cm);
        this.depthSearch(x, y - 1, depth, sh, cm);

        // this.depthSearch(x + 1, y + 1, depth + 0.4, sh, cm);
        // this.depthSearch(x - 1, y - 1, depth + 0.4, sh, cm);
        // this.depthSearch(x + 1, y - 1, depth + 0.4, sh, cm);
        // this.depthSearch(x - 1, y + 1, depth + 0.4, sh, cm);
    }







}