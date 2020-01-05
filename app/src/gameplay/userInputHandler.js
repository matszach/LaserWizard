const UserInputHandler = {

    keys : {
        //keycodes
    },

    mouse : {
        x : 0,          // - x position in canvas (in pixels)
        y : 0,          // - y position in canvas (in pixels)
        left : false,   // - is mouse left button down
        middle : false, // - is mouse middle button down
        right : false   // - is mouse right button down
    },

    init(){
        $(document).keydown(e => this.onKeyDown(e));
        $(document).keyup(e => this.onKeyUp(e));
        $(document).mousemove(e => this.onMouseMove(e));
        $(document).mousedown(e => this.onMouseButton(e));
        $(document).mouseup(e => this.onMouseButton(e));
    },


    // ==================================== keys ==========================================
    onKeyDown(e){
        var k = e.which;
        this.keys[k] = true;
    },

    onKeyUp(e){
        var k = e.which;
        this.keys[k] = false;
    },

    /**
     * @param {char} keySymbol 
     * @returns true if the keys is down, else false
     */
    isKeyDown(keySymbol){
        keySymbol = keySymbol.charCodeAt(0);
        if(keySymbol in this.keys){
            return this.keys[keySymbol];
        }
        return false;
    },

    /**
     * @param {List<char>} keySymbolList 
     * @returns true if all the keys are down, else false
     */
    isAnyKeyFromDown(keySymbolList){
        keySymbolList.forEach(s => {
            if(this.isKeyDown(s)){
                return true;
            }
        });
        return false;
    },

    /**
     * @param {List<char>} keySymbolList 
     * @returns true if all the keys are down, else false
     */
    areKeysDown(keySymbolList){
        keySymbolList.forEach(s => {
            if(!this.isKeyDown(s)){
                return false;
            }
        });
        return true;
    },


    // ==================================== mouse ==========================================
    onMouseMove(e){
        this.mouse.x = e.pageX;
        this.mouse.y = e.pageY;
    },

    onMouseButton(e){
        
    }


}