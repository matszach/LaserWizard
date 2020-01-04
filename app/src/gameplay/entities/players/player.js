class Player extends _Character {

    // ==================== fields ====================
    maxRedEnergy;
    currentRedEnergy;
    maxBlueEnergy;
    currentBlueEnergy;
    maxYellowEnergy;
    currentYellowEnergy;

    // ==================== constructor ====================
    constructor(){
        // super constructor
        super();
        // default values
        this.maxRedEnergy = 100;
        this.currentRedEnergy = 0;
        this.maxBlueEnergy = 100;
        this.currentBlueEnergy = 0;
        this.maxYellowEnergy = 100;
        this.currentYellowEnergy = 0;
        // on-init calculated values
        this.collidesItem = true;
    }

}