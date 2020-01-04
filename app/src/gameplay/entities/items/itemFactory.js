const ItemFactory = {

    _itemTypeDict = {
        0 : SmallHealthKit,
        1 : MediumHealthKit,
        2 : LargeHealthKit,

        default : SmallHealthKit
    },

    /**
     * @param {number} id - item id 
     * @param {number} x - item x position
     * @param {number} y - item y position
     */
    getItem(id, x, y){
        var itemClass = this._itemTypeDict[id] ? this._itemTypeDict[id] : this._itemTypeDict.default;
        var item = new itemClass();
        if(x && y){
            item.x = x;
            item.y = y;   
        }
        return item;
    }

}