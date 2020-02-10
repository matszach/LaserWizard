"use strict";
const DoorBeaconFactory = {

    _getByCondition(x, y, range, condition){
        switch(parseInt(condition)){
            case 0: return new DoorBeacon(x, y, range);
            case 1: return new MagentaDoorBeacon(x, y, range);
            case 2: return new CyanDoorBeacon(x, y, range);
            case 3: return new CloseDoorBeacon(x, y, range);
            default: return new DoorBeacon(x, y, range);
        }
    },

    getDoorBeacon(rawData){
        var db = this._getByCondition(rawData.x, rawData.y, rawData.triggerRange, rawData.condition);
        rawData.affectedTiles.forEach(t => db.addWallTile(db.x + t.relX, db.y + t.relY));
        return db;
    }

}