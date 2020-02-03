"use strict";
const UserInputHandler = {

    keys : {
        //keycodes
    },

    mouse : {
        x : 0,              // - x position in canvas (in pixels)
        y : 0,              // - y position in canvas (in pixels)
        left : false,       // - is mouse left button down
        middle : false,     // - is mouse middle button down
        right : false,      // - is mouse right button down
        wheel : 0,          // - mouse wheel state, decremented on mouse down, incremented on mouse up
    },

    init(){
        $(document).keydown(e => this.onKeyDown(e));
        $(document).keyup(e => this.onKeyUp(e));
        $(document).mousemove(e => this.onMouseMove(e));
        $(document).mousedown(e => this.onMouseButton(e));
        $(document).mouseup(e => this.onMouseButton(e));
        $(document).on('wheel', e => this.onScroll(e));
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

    isEscDown(){
        if(27 in this.keys){ // 27 is the 'key' of the escape key on the keboard
            return this.keys[27];
        }
        return false;
    },

    isSpaceDown(){
        if(32 in this.keys){ // 32 is the 'key' of the space key on the keboard
            return this.keys[32];
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
        if(e.buttons == 0){
            this.mouse.left = false;
            this.mouse.right = false;
        } else if(e.buttons == 1){
            this.mouse.left = true;
            this.mouse.right = false;
        } else if(e.buttons == 2){
            this.mouse.left = false;
            this.mouse.right = true;
        } else if(e.buttons == 3){
            this.mouse.left = true;
            this.mouse.right = true;
        }
    },

    onScroll(e){
        var event = e.originalEvent;
        if(event.deltaY < 0){
            this.mouse.wheel++;
        } else {
            this.mouse.wheel--;
        }
    }


}