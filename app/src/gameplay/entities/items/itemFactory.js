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
        let item = this._itemTypeDict[id] ? new this._itemTypeDict[id]() : new this._itemTypeDict.default();
        if(x && y){
            item.x = x;
            item.y = y;   
        }
        return item;
    }

}