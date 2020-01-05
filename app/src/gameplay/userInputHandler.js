const UserInputHandler = {

    keys : {},


    init(){
        $(document).keydown(e => this.onKeyDown(e));
        $(document).keyup(e => this.onKeyUp(e));
    },


    // ==================================== keys ==========================================
    onKeyDown(e){
        var k = e.which;
        var symbol = String.fromCharCode(k); 
        this.keys[symbol] = true;
    },

    onKeyUp(e){
        var k = e.which;
        var symbol = String.fromCharCode(k); 
        this.keys[symbol] = false;
    },

    isKeyDown(keySymbol){
        if(keySymbol in this.keys){
            return this.keys[keySymbol];
        }
        return false;
    },

    areKeysDown(keySymbolList){
        keySymbolList.forEach(s => {
            if(!this.isKeyDown(s)){
                return false;
            }
        });
        return true;
    }


    // ==================================== mouse ==========================================



}