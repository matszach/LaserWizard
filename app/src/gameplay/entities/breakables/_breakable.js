"use strict";
class _Breakable extends _Monster {

    lootTable = [[]];     // [[itemId, dropChance, number], [...]]

    constructor(){
        super();
    }

    _doExist(thisEntity){

    }

    _onExpire(){
        super._onExpire();
        this.dropLoot();
    }
  
   /**
    * @see ItemFactory
    */
    dropLoot(){
        this.lootTable.forEach(e => {
            for(var i = 0; i < e[2]; i++){
                if(Util.chance(e[1])){
                    var x = this.x + Util.randFloat(-1.5, 1.5);
                    var y = this.y + Util.randFloat(-1.5, 1.5);
                    var i = ItemFactory.getItem(e[0], x, y);
                    if(!i._isInWall()){
                        StageManager.currentStage.items.push(i);
                        i.awaken();
                    }
                }
            }
        });
    }
}