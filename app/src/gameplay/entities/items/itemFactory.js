const ItemFactory = {

    _itemTypeDict : {
        0 : SmallHealthKit,
        1 : MediumHealthKit,
        2 : LargeHealthKit,
        3 : RedEnergyBattery,
        4 : YellowEnergyBattery,
        5 : BlueEnergyBattery,
        6 : WeaponRed1,
        7 : WeaponRed2,
        8 : WeaponRed3,
        9 : WeaponYellow1,
        10 : WeaponYellow2,
        11 : WeaponYellow3,
        12 : WeaponBlue1,
        13 : WeaponBlue2,
        14 : WeaponBlue3,
        15 : CyanKey,
        16 : MagentaKey,

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