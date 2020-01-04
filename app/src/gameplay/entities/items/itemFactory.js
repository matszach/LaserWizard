const ItemFactory = {

    _itemTypeDict : {
        0 : SmallHealthKit,
        1 : MediumHealthKit,
        2 : LargeHealthKit,
        3 : RedEnergyOrb,
        4 : YellowEnergyOrb,
        5 : BlueEnergyOrb,

        default : SmallHealthKit
    },

    /**
     * @param {number} id - item id 
     * @param {number} x - item x position
     * @param {number} y - item y position
     */
    getItem(id, x, y){
        console.log(id);
        var itemClass = this._itemTypeDict[id] ? this._itemTypeDict[id] : this._itemTypeDict.default;
        console.log(itemClass);
        var item = new itemClass();
        if(x && y){
            item.x = x;
            item.y = y;   
        }
        return item;
    }

}