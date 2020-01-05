const StageLoader = {

    loadStage(stageNum){
        // works only for unlocked stages
        if($(`#ss-stage-${stageNum}`).hasClass('unlocked')){
            GuiLoader.loadInGameGui();
            this._loadPrototype(stageNum);
            PauseHandler.paused = false;
        }
    },

    _loadPrototype(stageNum){
        $.get(`assets\\stages\\stage${stageNum}.json`, (data) => {
            var stage = new Stage();
            stage.player.x = data.player.x;
            stage.player.y = data.player.y;
            stage.wallIds = data.wallIds;
            stage.floorIds = data.floorIds;
            stage.collisionMap = data.collisionMap;
            data.monsterSpawnBeacons.forEach(e => {
                var mb = new MonsterBeacon(e.x, e.y, e.triggerRange);
                e.monsterList.forEach(m => mb.addMonster(m.id, e.x + m.relX, e.y + m.relY));
                stage.monsterBeacons.push(mb);
            });
            data.items.forEach(e => stage.items.push(ItemFactory.getItem(e.id, e.x, e.y)));
            StageManager.currentStage = stage;
            StageManager.awakenAll();
        });
    }

}