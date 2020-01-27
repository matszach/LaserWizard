"use strict";
class Stage {   

    // stage id
    stageId;

    // ids to diplay the correct image from tilesets
    floorIds;
    wallIds;

    // 0 - passable, 1 - wall (todo slowing, damaging ?)
    collisionMap;

    // event triggers
    beacons;

    // active entities
    player;
    monsters;
    projectiles;
    particles;
    items;

    // animations
    numberAnimations;

    constructor(id, player){
        // if a player is passed as an argument then it will be used
        // a brand new one is created otherwise
        this.stageId = id;
        this.player = player ?  player : new Player(); 
        this.monsters = [];
        this.projectiles = [];
        this.particles = [];
        this.items = [];
        this.beacons = [];
        this.numberAnimations = [];
    }

}