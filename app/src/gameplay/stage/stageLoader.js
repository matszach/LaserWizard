"use strict";
const StageLoader = {

    loadStage(stageNum){
        // works only for unlocked stages
        if($(`#ss-stage-${stageNum}`).hasClass('unlocked')){
            GuiLoader.loadInGameGui();
            this._loadPrototype(stageNum);
        }
    },

    _loadPrototype(stageNum, player){
        $.get(`assets\\stages\\stage${stageNum}.json`, (data) => {
            var stage = new Stage(stageNum, player);
            stage.player.x = data.player.x;
            stage.player.y = data.player.y;
            stage.wallIds = data.wallIds;
            stage.floorIds = data.floorIds;
            stage.collisionMap = data.collisionMap;
            data.monsterSpawnBeacons.forEach(e => {
                var mb = new MonsterBeacon(e.x, e.y, e.triggerRange);
                e.monsterList.forEach(m => mb.addMonster(m.id, e.x + m.relX, e.y + m.relY));
                stage.beacons.push(mb);
            });
            data.doorBeacons.forEach(e => stage.beacons.push(DoorBeaconFactory.getDoorBeacon(e)));
            stage.beacons.push(new PlayerExitBeacon(data.playerExitBeacon.x, data.playerExitBeacon.y));
            data.items.forEach(e => stage.items.push(ItemFactory.getItem(e.id, e.x, e.y)));
            StageManager.currentStage = stage;
            HudManager.start();
            PauseHandler.unpause();

            // hax on if test mode on
            if(SaveStateHandler.get().testMode){
                Hax.unlockAllWeapons();
                Hax.insaneAmmo();
                Hax.highDefence();
            }
        });
    },

    loadNext(){
        // TODO unlocking next level etc.
        var id = parseInt(StageManager.currentStage.stageId) + 1;
        var player = StageManager.currentStage.player;
        StageManager.recycle();
        this._loadPrototype(id, player);
    },

    retry(){
        // TODO unlocking next level etc.
        var id = parseInt(StageManager.currentStage.stageId);
        var player = new Player();
        StageManager.recycle();
        this._loadPrototype(id, player);
    }

}