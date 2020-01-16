class Player extends _Character {

    // ==================== fields ====================
    maxRedEnergy = 100;
    currentRedEnergy = 0;
    maxBlueEnergy = 100; 
    currentBlueEnergy = 0;
    maxYellowEnergy = 100;
    currentYellowEnergy = 0;

    selectedWeaponIndex = 0;

    weaponsUnlockedState = [
        true,       // default 
        false,      // red 1
        false,      // red 2
        false,      // red 3
        false,      // blue 1
        false,      // blue 2
        false,      // blue 3
        false,      // yellow 1
        false,      // yellow 2
        false,      // yellow 3
    ];

    keys = {
        magenta : false,
        cyan : false
    };

    weaponActions = [];
    

    // ==================== constructor ====================
    constructor(){
        super();
        this.weaponActions = [
            new WeaponAction1N(this),
            new WeaponAction2R1(this),
            new WeaponAction3R2(this),
            new WeaponAction4R3(this),
            new WeaponAction5Y1(this),
            new WeaponAction6Y2(this),
            new WeaponAction7Y3(this),
            new WeaponAction8B1(this),
            new WeaponAction9B2(this),
            new WeaponAction10B3(this)
        ];
        this.speed = 0.04;
    }


    // weapon usage
    unlockWeapon(i){
        this.weaponsUnlockedState[i] = true;
        HudManager.refreshWeaponUnlockStateDisplay(this);
    }

    fireWeapon(i){
        if(this.weaponsUnlockedState[i]){
            this.weaponActions[i].execute();
        }
    }

    selectNextWeapon(){
        this.selectedWeaponIndex++; // to next weapon
        if(this.selectedWeaponIndex > 9){ // if last weapon -> wrap to first
            this.selectedWeaponIndex = 0;
        }
        if(!this.weaponsUnlockedState[this.selectedWeaponIndex]){ // if next weapon not unlocked -> to next weapon
            this.selectNextWeapon();
        } 
    }

    selectPrevWeapon(){
        this.selectedWeaponIndex--; // to prev weapon
        if(this.selectedWeaponIndex < 0){ // if first weapon -> wrap to last
            this.selectedWeaponIndex = 9;
        }
        if(!this.weaponsUnlockedState[this.selectedWeaponIndex]){ // if prev weapon not unlocked -> to next weapon
            this.selectPrevWeapon();
        }   
    }

    selectWeaponIfUnlocked(id){
        if(this.weaponsUnlockedState[id]){
            this.selectedWeaponIndex = id;
        }
    }


    // red energy
    hasRedEnergy(n){
        return this.currentRedEnergy >= n;
    }
    gainRedEnergy(n){
        this.currentRedEnergy += n;
        if(this.currentRedEnergy > this.maxRedEnergy){
            this.currentRedEnergy = this.maxRedEnergy;
        }
    }
    payRedEnergy(n){
        if(!this.hasRedEnergy(n)){
            return false;
        }
        this.currentRedEnergy -= n;
        return true;
    }


    // blue energy
    hasBlueEnergy(n){
        return this.currentBlueEnergy >= n;
    }
    gainBlueEnergy(n){
        this.currentBlueEnergy += n;
        if(this.currentBlueEnergy > this.maxBlueEnergy){
            this.currentBlueEnergy = this.maxBlueEnergy;
        }
    }
    payBlueEnergy(n){
        if(!this.hasBlueEnergy(n)){
            return false;
        }
        this.currentBlueEnergy -= n;
        return true;
    }


    // yellow energy
    hasYellowEnergy(n){
        return this.currentYellowEnergy >= n;
    }
    gainYellowEnergy(n){
        this.currentYellowEnergy += n;
        if(this.currentYellowEnergy > this.maxYellowEnergy){
            this.currentYellowEnergy = this.maxYellowEnergy;
        }
    }
    payYellowEnergy(n){
        if(!this.hasYellowEnergy(n)){
            return false;
        }
        this.currentYellowEnergy -= n;
        return true;
    }


    // user input/ actions
    _doExist(player){
        player.handleMovement();
        player.handleTurning();
        player.checkForInWall();
        player.handleWeaponSelectByButtonPress();
        player.handleWeaponActions();
        player.handlePause();
    }

    handleMovement(){
        var up = UserInputHandler.isKeyDown('W');
        var down = UserInputHandler.isKeyDown('S');
        var left = UserInputHandler.isKeyDown('A');
        var right = UserInputHandler.isKeyDown('D');
        if((up && down) || (!up && !down)){
            if((left && right) || (!left && !right)){}
            else if(left){this.travel(270)}
            else if(right){this.travel(90)}            
        } else if (up){
            if((left && right) || (!left && !right)){this.travel(0)}
            else if(left){this.travel(315)}
            else if(right){this.travel(45)}  
        } else if(down){
            if((left && right) || (!left && !right)){this.travel(180)}
            else if(left){this.travel(225)}
            else if(right){this.travel(135)}  
        }
    }

    handleTurning(){
        var dx = UserInputHandler.mouse.x - CanvasManager.cnvWidth/2;
        var dy = UserInputHandler.mouse.y - CanvasManager.cnvHeight/2;
        var dir = Math.atan(dy/dx) * 180 / Math.PI + 90;
        if(dx < 0) dir += 180;
        this.turn(dir);
    }

    handleWeaponSelectByButtonPress(){
        for(var i = 0; i < 9; i++){
            if(UserInputHandler.isKeyDown(String(i+1))) this.selectWeaponIfUnlocked(i);
        }
        if(UserInputHandler.isKeyDown('0')) this.selectWeaponIfUnlocked(9);
        HudManager.refreshWeapomSelectionDisplay(this);
    }

    handleWeaponActions(){
        if(UserInputHandler.mouse.left){
            this.weaponActions[this.selectedWeaponIndex].execute();
        }
    }


    handlePause(){
        if(UserInputHandler.isKeyDown('P')){
            PauseHandler.pause();
        }
    }

}