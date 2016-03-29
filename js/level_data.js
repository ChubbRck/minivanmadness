var screens = [0,1200,2400,3600,4800,6000,7200,8400,9600,10800,12000,13200,14400,15600,16800,18000,19200,20400,21600,22800, 24000, 25200, 26400, 27600, 28800, 30000];
var xSlots = [0,100,200,300,400,500,600,700,800,900,1000,1100,1200];
var ySlots = [0,100,200,300,400,500,600]

var level1_data = {
    pace : 1,
    music : "gametrack",
    bossPoint: 7600,
    objects : [

        // {"quantity": "single", "type": "wall", "x": screens[1]+xSlots[6], "y": ySlots[3], "height":200, "width":200},

        {"quantity": "single", "type": "powerup", "x": screens[1]+xSlots[3], "y": ySlots[2], "powerupType": "lycocoin"},
        {"quantity": "wave", "type": "enemy", "how_many": 5, "x": screens[1]+xSlots[2], "y": ySlots[1], "baseVelocity": -175},
        {"quantity": "wave", "type": "enemy", "how_many": 5, "x": screens[1]+xSlots[5], "y": ySlots[5], "baseVelocity": -175},
        {"quantity": "wave", "type": "enemy", "how_many": 5, "x": screens[1]+xSlots[8], "y": ySlots[3], "baseVelocity": -175},
        {"quantity": "wave", "type": "enemy", "how_many": 5, "x": screens[1]+xSlots[10], "y": ySlots[4], "baseVelocity": -175},
        {"quantity": "wave", "type": "enemy", "how_many": 5, "x": screens[2]+xSlots[0], "y": ySlots[2], "baseVelocity": -175},
        {"quantity": "wave", "type": "enemy", "how_many": 5, "x": screens[2]+xSlots[2], "y": ySlots[3], "baseVelocity": -225},
        {"quantity": "single", "type": "powerup", "x": screens[2]+xSlots[1], "y": ySlots[4], "powerupType": "weapon"},
        {"quantity": "single", "type": "chiller", "x": screens[2]+xSlots[1], "y": ySlots[1], "baseVelocity": 0},
        {"quantity": "single", "type": "chiller", "x": screens[2]+xSlots[1], "y": ySlots[5]},
        {"quantity": "single", "type": "chiller", "x": screens[2]+xSlots[2], "y": ySlots[2]},
        {"quantity": "single", "type": "chiller", "x": screens[2]+xSlots[2], "y": ySlots[4]},
        {"quantity": "single", "type": "chiller", "x": screens[2]+xSlots[3], "y": ySlots[3]},
        {"quantity": "single", "type": "powerup", "x": screens[2]+xSlots[5], "y": ySlots[3], "powerupType": "speed"},
        {"quantity": "wave", "type": "sine", "how_many": 5, "x": screens[2]+xSlots[5], "y": ySlots[2], "baseVelocity": -150},
        {"quantity": "wave", "type": "sine", "how_many": 5, "x": screens[2]+xSlots[5], "y": ySlots[4], "baseVelocity": -150},
        {"quantity": "single", "type": "upAndDown", "x": screens[2]+xSlots[4], "y": ySlots[1]},
        {"quantity": "single", "type": "upAndDown", "x": screens[2]+xSlots[5], "y": ySlots[1]},
        {"quantity": "single", "type": "wall", "x": screens[2]+xSlots[6], "y": ySlots[6], "height":300, "width":300},
        {"quantity": "wave", "type": "sine", "how_many": 10, "x": screens[2]+xSlots[9], "y": ySlots[1], "baseVelocity": -175},
        {"quantity": "single", "type": "wall", "x": screens[2]+xSlots[9], "y": ySlots[6], "height":100, "width":1200},
        {"quantity": "single", "type": "wall", "x": screens[2]+xSlots[9], "y": ySlots[6], "height":100, "width":1200},
        {"quantity": "wave", "type": "bouncer", "how_many": 5, "x": screens[2]+xSlots[9]+50, "y": ySlots[4] },
        {"quantity": "wave", "type": "bouncer", "how_many": 5, "x": screens[2]+xSlots[10], "y": ySlots[4] },
        {"quantity": "single", "type": "powerup", "x": screens[2]+xSlots[9] + 30, "y": ySlots[4], "powerupType": "weapon"},
        {"quantity": "single", "type": "wall", "x": screens[3]+xSlots[1], "y": ySlots[2], "height":200, "width":400},
        {"quantity": "single", "type": "chiller", "x": screens[3]+xSlots[3], "y": ySlots[3]-50},
        {"quantity": "single", "type": "chiller", "x": screens[3]+xSlots[3], "y": ySlots[4]-50},
        {"quantity": "single", "type": "chiller", "x": screens[3]+xSlots[3], "y": ySlots[5]-50},
        {"quantity": "single", "type": "powerup", "x": screens[3]+xSlots[5], "y": ySlots[4]-50, "powerupType": "lycocoin"},
        {"quantity": "wave", "type": "chiller", "how_many": 10, "x":  screens[3]+xSlots[6], "y": ySlots[3]},
        {"quantity": "single", "type": "wall", "x": screens[3]+xSlots[10], "y": ySlots[4], "height":200, "width":400},
        {"quantity": "single", "type": "chiller", "x": screens[3]+xSlots[11], "y": ySlots[5]},
        {"quantity": "single", "type": "chiller", "x": screens[3]+xSlots[12], "y": ySlots[5]},
        {"quantity": "single", "type": "chiller", "x": screens[4]+xSlots[1], "y": ySlots[5]},
        {"quantity": "wave", "type": "bouncer", "how_many": 5, "x": screens[3]+xSlots[11], "y": ySlots[1]},
        {"quantity": "wave", "type": "bouncer", "how_many": 5, "x": screens[3]+xSlots[11], "y": ySlots[1], "gravFactor" : -1},
        {"quantity": "single", "type": "powerup", "x": screens[3]+xSlots[10], "y": ySlots[1], "powerupType": "speed"},
        {"quantity": "wave", "type": "seeker", "how_many": 5, "x": screens[4]+xSlots[5]},
        {"quantity": "wave", "type": "seeker", "how_many": 5, "x": screens[4]+xSlots[6]},
        {"quantity": "wave", "type": "sine", "how_many": 8, "x": screens[4]+xSlots[11], "y": ySlots[2], "baseVelocity": -225},
        {"quantity": "wave", "type": "sine", "how_many":8 , "x": screens[4]+xSlots[11], "y": ySlots[4], "baseVelocity": -225},
        {"quantity": "wave", "type": "sine", "how_many": 3, "x": screens[5]+xSlots[1], "y": ySlots[1], "baseVelocity": -225},
        {"quantity": "wave", "type": "sine", "how_many": 3, "x": screens[5]+xSlots[1], "y": ySlots[6], "baseVelocity": -225},
        {"quantity": "wave", "type": "enemy", "how_many": 5, "x": screens[5]+xSlots[3], "y": ySlots[1], "baseVelocity": -285},
        {"quantity": "wave", "type": "enemy", "how_many": 5, "x": screens[5]+xSlots[3], "y": ySlots[5], "baseVelocity": -285},
        {"quantity": "wave", "type": "enemy", "how_many": 5, "x": screens[5]+xSlots[5], "y": ySlots[2], "baseVelocity": -285},
        {"quantity": "wave", "type": "enemy", "how_many": 5, "x": screens[5]+xSlots[5], "y": ySlots[4], "baseVelocity": -285},
        {"quantity": "wave", "type": "upAndDown", "how_many": 20, "x": screens[4]+xSlots[6], "y": ySlots[1], "baseVelocity": -215},
        {"quantity": "single", "type": "wall", "x": screens[5]+xSlots[6], "y": ySlots[4] - 50, "height":225, "width":600},
        {"quantity": "single", "type": "chiller", "x": screens[5]+xSlots[6], "y": 80 },
        {"quantity": "single", "type": "chiller", "x": screens[5]+xSlots[7], "y": 80 },
        {"quantity": "single", "type": "chiller", "x": screens[5]+xSlots[8], "y": 80 },
        {"quantity": "single", "type": "chiller", "x": screens[5]+xSlots[9], "y": 80 },
        {"quantity": "single", "type": "powerup", "x": screens[5]+xSlots[10], "y":80, "powerupType": "lycocoin"},
        {"quantity": "single", "type": "powerup", "x": screens[5]+xSlots[11], "y":80, "powerupType": "lycocoin"},
        {"quantity": "single", "type": "chiller", "x": screens[5]+xSlots[12], "y": 80 },
        {"quantity": "wave", "type": "sine", "how_many":8 , "x": screens[5]+xSlots[10], "y": ySlots[5], "baseVelocity": -150},
        {"quantity": "wave", "type": "seeker", "how_many": 7, "x": screens[6]+xSlots[1]},
        {"quantity": "wave", "type": "seeker", "how_many": 6, "x": screens[6]+xSlots[2]},
        {"quantity": "wave", "type": "seeker", "how_many": 7, "x": screens[6]+xSlots[3]},
        {"quantity": "wave", "type": "seeker", "how_many": 6, "x": screens[6]+xSlots[4]},
        {"quantity": "single", "type": "powerup", "x": screens[6]+xSlots[5] - 50, "y": ySlots[1], "powerupType": "lycocoin"},
        {"quantity": "single", "type": "wall", "x": screens[6]+xSlots[5], "y": ySlots[6], "height":200, "width":300},
        {"quantity": "single", "type": "wall", "x": screens[6]+xSlots[5], "y": ySlots[2], "height":200, "width":300},
        {"quantity": "wave", "type": "enemy", "how_many": 20, "x": screens[6]+xSlots[10], "y": ySlots[3], "baseVelocity": -255},
        {"quantity": "single", "type": "powerup", "x": screens[6]+xSlots[11], "y": ySlots[3], "powerupType": "weapon"},
        {"quantity": "single", "type": "miniboss", "x": screens[7]+xSlots[5], "y": ySlots[3], "launchVel" : -400, "retreatPoint" : 120, "bossFlag": true, "behaviorType": 1, "img": "miniboss-1"},
    ]
}


var level2_data = {
    pace : 2,
    music : "titletrack",
    bossPoint: 22500,
    objects : [
        {"quantity": "wave", "type": "crosser", "how_many":5 , "x": screens[1]+xSlots[8], "y": ySlots[2], "baseVelocity": -220, "dirMod": 1},
        {"quantity": "wave", "type": "crosser", "how_many":5 , "x": screens[1]+xSlots[8], "y": ySlots[4], "baseVelocity": -220, "dirMod": -1},
        {"quantity": "single", "type": "powerup", "x": screens[1]+xSlots[5], "y": ySlots[3], "powerupType": "weapon"},
        {"quantity": "wave", "type": "crosser", "how_many":5 , "x": screens[2]+xSlots[0], "y": ySlots[3], "baseVelocity": -250, "dirMod": 1},
        {"quantity": "wave", "type": "crosser", "how_many":5 , "x": screens[2]+xSlots[0], "y": ySlots[3], "baseVelocity": -250, "dirMod": -1},
        {"quantity": "wave", "type": "crosser", "how_many":5 , "x": screens[2]+xSlots[5], "y": ySlots[1], "baseVelocity": -220, "dirMod": 1},
        {"quantity": "wave", "type": "crosser", "how_many":5 , "x": screens[2]+xSlots[5], "y": ySlots[5], "baseVelocity": -220, "dirMod": -1},
        {"quantity": "wave", "type": "sine", "how_many": 5, "x": screens[2]+xSlots[6], "y": ySlots[2], "baseVelocity": -225},
        {"quantity": "wave", "type": "sine", "how_many": 5, "x": screens[2]+xSlots[6], "y": ySlots[4], "baseVelocity": -225},
        {"quantity": "wave", "type": "sine", "how_many": 5, "x": screens[2]+xSlots[9], "y": ySlots[1], "baseVelocity": -225},
        {"quantity": "wave", "type": "sine", "how_many": 5, "x": screens[2]+xSlots[9], "y": ySlots[5], "baseVelocity": -225},
        {"quantity": "wave", "type": "sine", "how_many": 5, "x": screens[2]+xSlots[12], "y": ySlots[3], "baseVelocity": -225},
        {"quantity": "wave", "type": "crosser", "how_many":5 , "x": screens[3]+xSlots[3], "y": ySlots[2], "baseVelocity": -260, "dirMod": 1},
        {"quantity": "wave", "type": "crosser", "how_many":5 , "x": screens[3]+xSlots[3], "y": ySlots[4], "baseVelocity": -260, "dirMod": -1},
        {"quantity": "wave", "type": "enemy", "how_many": 5, "x": screens[3]+xSlots[8], "y": ySlots[1], "baseVelocity": -285},
        {"quantity": "wave", "type": "enemy", "how_many": 5, "x": screens[3]+xSlots[8], "y": ySlots[5], "baseVelocity": -285},
        {"quantity": "wave", "type": "enemy", "how_many": 5, "x": screens[4]+xSlots[1], "y": ySlots[1], "baseVelocity": -285},
        {"quantity": "wave", "type": "enemy", "how_many": 5, "x": screens[4]+xSlots[1], "y": ySlots[5], "baseVelocity": -285},
        {"quantity": "single", "type": "wall", "x": screens[3]+xSlots[5], "y": ySlots[4], "height":200, "width":300},
        {"quantity": "single", "type": "powerup", "x": screens[3]+xSlots[4], "y": ySlots[3], "powerupType": "lycocoin"},
        {"quantity": "single", "type": "wall", "x": screens[4]+xSlots[3], "y": ySlots[4], "height":200, "width":300},
        {"quantity": "single", "type": "powerup", "x": screens[4]+xSlots[2], "y": ySlots[3], "powerupType": "lycocoin"},
        {"quantity": "wave", "type": "crosser", "how_many":5 , "x": screens[4]+xSlots[5], "y": ySlots[1], "baseVelocity": -200, "dirMod": 1},
        {"quantity": "wave", "type": "crosser", "how_many":5 , "x": screens[4]+xSlots[5], "y": ySlots[5], "baseVelocity": -200, "dirMod": -1},
        {"quantity": "wave", "type": "enemy", "how_many": 5, "x": screens[4]+xSlots[10], "y": ySlots[1], "baseVelocity": -285},
        {"quantity": "wave", "type": "enemy", "how_many": 5, "x": screens[4]+xSlots[10], "y": ySlots[5], "baseVelocity": -285},
        {"quantity": "single", "type": "wall", "x": screens[4]+xSlots[3], "y": ySlots[4], "height":200, "width":300},
        {"quantity": "single", "type": "wall", "x": screens[4]+xSlots[3], "y": ySlots[4], "height":200, "width":300},
        {"quantity": "single", "type": "wall", "x": screens[4]+xSlots[11], "y": ySlots[1], "height":100, "width":1200},
        {"quantity": "single", "type": "superchiller", "x": screens[4]+xSlots[12], "y": ySlots[2], "fireChance" : 20},
        {"quantity": "single", "type": "superchiller", "x": screens[5]+xSlots[2], "y": ySlots[4], "fireChance" : 20},
        {"quantity": "single", "type": "superchiller", "x": screens[5]+xSlots[4], "y": ySlots[3], "fireChance" : 20},
        {"quantity": "single", "type": "superchiller", "x": screens[5]+xSlots[6], "y": ySlots[2], "fireChance" : 20},
        {"quantity": "single", "type": "superchiller", "x": screens[5]+xSlots[8], "y": ySlots[4], "fireChance" : 20},
        {"quantity": "single", "type": "superchiller", "x": screens[5]+xSlots[10], "y": ySlots[3], "fireChance" : 20},
        {"quantity": "single", "type": "superchiller", "x": screens[5]+xSlots[12], "y": ySlots[2], "fireChance" : 20},
        {"quantity": "single", "type": "wall", "x": screens[4]+xSlots[11], "y": ySlots[6], "height":100, "width":1200},
        {"quantity": "wave", "type": "seeker", "how_many": 15, "x": screens[6]+xSlots[6], "baseVelocity" : -200},
        {"quantity": "wave", "type": "seeker", "how_many": 15, "x": screens[6]+xSlots[10], "baseVelocity" : -250},
        {"quantity": "single", "type": "wall", "x": screens[6]+xSlots[12], "y": ySlots[4], "height":200, "width":1200},
        {"quantity": "single", "type": "powerup", "x": screens[7]+xSlots[6], "y":ySlots[1], "powerupType": "lycocoin"},
        {"quantity": "single", "type": "powerup", "x": screens[7]+xSlots[6], "y":ySlots[5], "powerupType": "lycocoin"},
        {"quantity": "wave", "type": "dodger", "how_many": 15, "x": screens[8]+xSlots[6], "baseVelocity" : -100},
        {"quantity": "wave", "type": "dodger", "how_many": 15, "x": screens[9]+xSlots[6], "baseVelocity" : -200},
        {"quantity": "single", "type": "powerup", "x": screens[10]+xSlots[0], "y": ySlots[3], "powerupType": "weapon"},
        {"quantity": "single", "type": "powerup", "x": screens[10]+xSlots[0], "y": ySlots[5], "powerupType": "lycocoin"},
        {"quantity": "single", "type": "powerup", "x": screens[10]+xSlots[0], "y": ySlots[1], "powerupType": "lycocoin"},
        {"quantity": "single", "type": "miniboss", "x": screens[10]+xSlots[5], "y": ySlots[2], "launchVel" : -300, "retreatPoint" : 20 , "bossFlag": false, "behaviorType": 1, "img": "miniboss-2"},
         {"quantity": "single", "type": "miniboss", "x": screens[10]+xSlots[5], "y": ySlots[4], "launchVel" : -200, "retreatPoint" : 20 , "bossFlag": false, "behaviorType": 3, "img": "miniboss-3"},
        {"quantity": "single", "type": "wall", "x": screens[11]+xSlots[5], "y": ySlots[1], "height":100, "width":7600},
        {"quantity": "single", "type": "wall", "x": screens[11]+xSlots[5], "y": ySlots[6], "height":100, "width":5200},
        {"quantity": "wave", "type": "dropper", "how_many": 45, "x": screens[11]+xSlots[6], "y": ySlots[1] + 25},
        {"quantity": "single", "type": "wall", "x": screens[12]+xSlots[10], "y": ySlots[3] + 50, "height":100, "width":300},
        {"quantity": "single", "type": "powerup", "x": screens[13]+xSlots[1]+35, "y":ySlots[3], "powerupType": "speed"},
        {"quantity": "wave", "type": "enemy", "how_many": 5, "x": screens[13]+xSlots[1], "y": ySlots[2], "baseVelocity": -285},
        {"quantity": "wave", "type": "enemy", "how_many": 5, "x": screens[13]+xSlots[1], "y": ySlots[4], "baseVelocity": -285},
        {"quantity": "wave", "type": "bouncer", "how_many": 5, "x": screens[13]+xSlots[6], "y": ySlots[5] - 50},
        {"quantity": "wave", "type": "bouncer", "how_many": 5, "x": screens[13]+xSlots[6], "y": ySlots[1] + 50, "gravFactor" : -1},
        {"quantity": "single", "type": "wall", "x": screens[13]+xSlots[6], "y": ySlots[4]-25, "height":25, "width":800},
        {"quantity": "single", "type": "wall", "x": screens[13]+xSlots[6], "y": ySlots[2]+25, "height":25, "width":800},
        {"quantity": "single", "type": "wall", "x": screens[13]+xSlots[9], "y": ySlots[4]-50, "height":125, "width":200},
        {"quantity": "single", "type": "powerup", "x": screens[13]+xSlots[9] - 50, "y":ySlots[3]-12, "powerupType": "weapon"},
        {"quantity": "single", "type": "powerup", "x": screens[13]+xSlots[11] +50, "y":ySlots[3]-12, "powerupType": "lycocoin"},
        {"quantity": "wave", "type": "enemy", "how_many": 5, "x": screens[13]+xSlots[11], "y": ySlots[4]+50, "baseVelocity": -285},
        {"quantity": "wave", "type": "enemy", "how_many": 5, "x": screens[13]+xSlots[11], "y": ySlots[2]-50, "baseVelocity": -285},
        {"quantity": "single", "type": "upAndDown", "x": screens[14]+xSlots[2] + 50, "y": ySlots[1]},
        {"quantity": "single", "type": "upAndDown", "x": screens[14]+xSlots[3]+ 50, "y": ySlots[1]},
        {"quantity": "single", "type": "wall", "x": screens[14]+xSlots[7], "y": ySlots[3], "height":200, "width":400},
        {"quantity": "wave", "type": "bouncer", "how_many": 7, "x": screens[14]+xSlots[9], "y": ySlots[4], "gravFactor": -1},
        {"quantity": "wave", "type": "dropper", "how_many": 2, "x": screens[14]+xSlots[11]+25, "y": ySlots[1] + 25},
        {"quantity": "single", "type": "wall", "x": screens[15]+xSlots[3], "y": ySlots[5], "height":200, "width":400},    
        {"quantity": "wave", "type": "dodger", "how_many": 10, "x": screens[15]+xSlots[2], "baseVelocity" : -150},
        {"quantity": "single", "type": "wall", "x": screens[15]+xSlots[9], "y": ySlots[3], "height":200, "width":1000},
        {"quantity": "single", "type": "wall", "x": screens[15]+xSlots[11], "y": ySlots[5], "height":200, "width":600},
        {"quantity": "wave", "type": "dropper", "how_many": 4, "x": screens[16]+xSlots[5]+25, "y": ySlots[3] + 25},
        {"quantity": "wave", "type": "enemy", "how_many": 10, "x": screens[16]+xSlots[6], "y": ySlots[5] + 50, "baseVelocity": -285},
        {"quantity": "wave", "type": "seeker", "how_many": 10, "x": screens[16]+xSlots[8], "baseVelocity" : -165},
        {"quantity": "single", "type": "wall", "x": screens[16]+xSlots[11], "y": ySlots[6], "height":400, "width":1000},
        {"quantity": "wave", "type": "bouncer", "how_many": 7, "x": screens[17]+xSlots[4], "y": ySlots[1] + 25},
        {"quantity": "wave", "type": "bouncer", "how_many": 7, "x": screens[17]+xSlots[2], "y": ySlots[1] + 25},
        {"quantity": "wave", "type": "bouncer", "how_many": 7, "x": screens[17]+xSlots[6], "y": ySlots[1] + 25},
        {"quantity": "single", "type": "powerup", "x": screens[17]+xSlots[10]+50, "y":ySlots[3], "powerupType": "speed"},
        {"quantity": "single", "type": "powerup", "x": screens[17]+xSlots[10]+50, "y":ySlots[1], "powerupType": "lycocoin"},
        {"quantity": "single", "type": "powerup", "x": screens[17]+xSlots[10]+50, "y":ySlots[5]+25, "powerupType": "lycocoin"},
        {"quantity": "single", "type": "upAndDown", "x": screens[17]+xSlots[10], "y": ySlots[1]},
        {"quantity": "single", "type": "upAndDown", "x": screens[17]+xSlots[11], "y": ySlots[1]},
        {"quantity": "single", "type": "wall", "x": screens[18]+xSlots[0], "y": ySlots[5], "height":500, "width":1000},
        {"quantity": "wave", "type": "enemy", "how_many": 8, "x": screens[19]+xSlots[8] - 50, "y": ySlots[2], "baseVelocity": -225},
        {"quantity": "wave", "type": "enemy", "how_many": 8, "x": screens[19]+xSlots[8] - 50, "y": ySlots[3], "baseVelocity": -265},
        {"quantity": "wave", "type": "enemy", "how_many": 8, "x": screens[19]+xSlots[8] - 50, "y": ySlots[4], "baseVelocity": -265},
        {"quantity": "wave", "type": "enemy", "how_many": 8, "x": screens[19]+xSlots[8] - 50, "y": ySlots[5], "baseVelocity": -225},
        {"quantity": "single", "type": "powerup", "x": screens[18]+xSlots[10] + 25, "y":ySlots[1], "powerupType": "lycocoin"},
        {"quantity": "single", "type": "spinboss", "x": screens[20]+xSlots[0], "y":ySlots[3], "launchVel" : -400, "retreatPoint" : 120, "bossFlag": true},

    ]
}


var level3_data = {
   
    pace : 2,
    music : "gametrack",
    bossPoint: 22100,
    objects : [
        {"quantity": "wave", "type": "enemy", "how_many": 5, "x": screens[1]+xSlots[5], "y": ySlots[1], "baseVelocity": -285},
        {"quantity": "wave", "type": "enemy", "how_many": 5, "x": screens[1]+xSlots[5], "y": ySlots[5], "baseVelocity": -285},
        {"quantity": "wave", "type": "crosser", "how_many":5 , "x": screens[1]+xSlots[6], "y": ySlots[2], "baseVelocity": -250, "dirMod": 1},
        {"quantity": "wave", "type": "crosser", "how_many":5 , "x": screens[1]+xSlots[6], "y": ySlots[4], "baseVelocity": -250, "dirMod": -1},
        {"quantity": "wave", "type": "crosser", "how_many":5 , "x": screens[1]+xSlots[10], "y": ySlots[1], "baseVelocity": -260, "dirMod": 1},
        {"quantity": "wave", "type": "crosser", "how_many":5 , "x": screens[1]+xSlots[10], "y": ySlots[5], "baseVelocity": -260, "dirMod": -1},
        {"quantity": "wave", "type": "crosser", "how_many":5 , "x": screens[1]+xSlots[10], "y": ySlots[2], "baseVelocity": -260, "dirMod": -1},
        {"quantity": "wave", "type": "crosser", "how_many":5 , "x": screens[1]+xSlots[10], "y": ySlots[4], "baseVelocity": -260, "dirMod": 1},
        {"quantity": "wave", "type": "enemy", "how_many": 5, "x": screens[1]+xSlots[10], "y": ySlots[3], "baseVelocity": -300},
        {"quantity": "wave", "type": "crosser", "how_many":5 , "x": screens[2]+xSlots[2], "y": ySlots[1]-50, "baseVelocity": -280, "dirMod": 1},
        {"quantity": "wave", "type": "crosser", "how_many":5 , "x": screens[2]+xSlots[2], "y": ySlots[5]+50, "baseVelocity": -280, "dirMod": -1},
        {"quantity": "wave", "type": "crosser", "how_many":5 , "x": screens[2]+xSlots[2], "y": ySlots[2]+50, "baseVelocity": -280, "dirMod": -1},
        {"quantity": "wave", "type": "crosser", "how_many":5 , "x": screens[2]+xSlots[2], "y": ySlots[4]-50, "baseVelocity": -280, "dirMod": 1},
        {"quantity": "single", "type": "powerup", "x": screens[2]+xSlots[7]-25, "y": ySlots[0]+50, "powerupType": "weapon"},
        {"quantity": "single", "type": "powerup", "x": screens[2]+xSlots[7]-25, "y": ySlots[6]-50, "powerupType": "speed"},
        {"quantity": "single", "type": "wall", "x": screens[2]+xSlots[7], "y": ySlots[6], "height":200, "width":200},
        {"quantity": "single", "type": "wall", "x": screens[2]+xSlots[7], "y": ySlots[2], "height":200, "width":200},
         {"quantity": "wave", "type": "pathfinder", "how_many": 5, "x": screens[3]+xSlots[1], "y": ySlots[1], "baseVelocity" : -350, "whichType" : 2},
          {"quantity": "wave", "type": "pathfinder", "how_many": 5, "x": screens[3]+xSlots[1], "y": ySlots[5], "baseVelocity" : -350, "whichType" : 2},
        // test
        // {"quantity": "wave", "type": "pathfinder", "how_many": 10, "x": screens[3]+xSlots[8], "y": ySlots[1], "baseVelocity" : -75},
         //   {"quantity": "wave", "type": "pathfinder", "how_many": 10, "x": screens[3]+xSlots[10], "y": ySlots[1], "baseVelocity" : -75},
        // end test 
        {"quantity": "wave", "type": "enemy", "how_many": 5, "x": screens[2]+xSlots[11], "y": ySlots[3], "baseVelocity": -250}, //replace this with a refactored sine enemy
        {"quantity": "single", "type": "wall", "x": screens[3]+xSlots[2], "y": ySlots[4], "height":200, "width":600},
        {"quantity": "wave", "type": "crosser", "how_many":10 , "x": screens[3]+xSlots[6], "y": ySlots[1], "baseVelocity": -230, "dirMod": 1},
        {"quantity": "single", "type": "powerup", "x": screens[3]+xSlots[5], "y": ySlots[1], "powerupType": "lycocoin"},
        {"quantity": "single", "type": "powerup", "x": screens[3]+xSlots[5], "y": ySlots[5], "powerupType": "weapon"},
        {"quantity": "wave", "type": "dropper", "how_many": 13, "x": screens[3]+xSlots[2], "y": ySlots[4] + 25},
        {"quantity": "single", "type": "wall", "x": screens[3]+xSlots[11], "y": ySlots[2]+50, "height":100, "width":100},
        {"quantity": "single", "type": "superchiller", "x": screens[4]+xSlots[2], "y": ySlots[2], "fireChance" : 20},
        {"quantity": "single", "type": "wall", "x": screens[3]+xSlots[12], "y": ySlots[5]+50, "height":200, "width":200},
        {"quantity": "single", "type": "powerup", "x": screens[4]+xSlots[2]+25, "y": ySlots[5], "powerupType": "lycocoin"},
        {"quantity": "single", "type": "wall", "x": screens[4]+xSlots[4], "y": ySlots[2]+50, "height":200, "width":200},

        {"quantity": "single", "type": "wall", "x": screens[4]+xSlots[5], "y": ySlots[5]+50, "height":100, "width":100},
        // {"quantity": "single", "type": "chiller", "x": screens[4]+xSlots[5], "y": ySlots[4]+25},
        {"quantity": "single", "type": "chiller", "x": screens[4]+xSlots[5]+25, "y": ySlots[4]+25},
        {"quantity": "single", "type": "chiller", "x": screens[4]+xSlots[5]+75, "y": ySlots[4]+25},
        // {"quantity": "single", "type": "chiller", "x": screens[4]+xSlots[6], "y": ySlots[4]+25},

        {"quantity": "wave", "type": "crosser", "how_many":10, "x": screens[4]+xSlots[8]+50, "y": ySlots[6], "baseVelocity": -160, "dirMod": -1},
        {"quantity": "single", "type": "wall", "x": screens[4]+xSlots[8], "y": ySlots[5]-50, "height":450, "width":200},
        // {"quantity": "wave", "type": "sine", "how_many": 5, "x": screens[5]+xSlots[0], "y": ySlots[3], "baseVelocity": -225},
        {"quantity": "wave", "type": "sine", "how_many": 5, "x": screens[5]+xSlots[6], "y": ySlots[3], "baseVelocity": -225},
        {"quantity": "wave", "type": "crosser", "how_many":5 , "x": screens[5]+xSlots[8], "y": ySlots[1], "baseVelocity": -250, "dirMod": 1},
        {"quantity": "wave", "type": "crosser", "how_many":5 , "x": screens[5]+xSlots[8], "y": ySlots[5], "baseVelocity": -250, "dirMod": -1},

        {"quantity": "single", "type": "wall", "x": screens[5]+xSlots[10], "y": ySlots[3]+150, "height":300, "width":200},
        {"quantity": "single", "type": "powerup", "x": screens[6]+xSlots[1], "y": ySlots[3], "powerupType": "lycocoin"},
        {"quantity": "single", "type": "wall", "x": screens[6]+xSlots[2], "y": ySlots[3]+150, "height":300, "width":200},
        {"quantity": "single", "type": "wall", "x": screens[6]+xSlots[6], "y": ySlots[3]+150, "height":300, "width":200},
        {"quantity": "single", "type": "wall", "x": screens[6]+xSlots[10], "y": ySlots[3]+150, "height":300, "width":200},
        {"quantity": "single", "type": "wall", "x": screens[7]+xSlots[2], "y": ySlots[3]+150, "height":300, "width":200},
        {"quantity": "single", "type": "wall", "x": screens[7]+xSlots[6], "y": ySlots[3]+150, "height":300, "width":200},
        {"quantity": "single", "type": "powerup", "x": screens[7]+xSlots[1], "y": ySlots[3], "powerupType": "weapon"},
        {"quantity": "single", "type": "wall", "x": screens[7]+xSlots[10], "y": ySlots[3]+150, "height":300, "width":200},
        {"quantity": "single", "type": "wall", "x": screens[8]+xSlots[2], "y": ySlots[3]+150, "height":300, "width":200},
        {"quantity": "single", "type": "wall", "x": screens[8]+xSlots[10], "y": ySlots[3]+150, "height":300, "width":200},
        {"quantity": "single", "type": "wall", "x": screens[8]+xSlots[2], "y": ySlots[3]+150, "height":300, "width":200},
        {"quantity": "single", "type": "wall", "x": screens[8]+xSlots[6], "y": ySlots[3]+150, "height":300, "width":200},
        {"quantity": "single", "type": "wall", "x": screens[8]+xSlots[10], "y": ySlots[3]+150, "height":300, "width":200},


        {"quantity": "single", "type": "miniboss", "x": screens[6]+xSlots[6], "y": ySlots[1]-25, "launchVel" : -200, "retreatPoint" : 25 , "bossFlag": false, "behaviorType": 2, "img": "miniboss-3"},
        {"quantity": "single", "type": "miniboss", "x": screens[6]+xSlots[6], "y": ySlots[5]+25, "launchVel" : -200, "retreatPoint" : 25 , "bossFlag": false, "behaviorType": 2, "img": "miniboss-3"},

        {"quantity": "single", "type": "upAndDown", "x": screens[6]+xSlots[5], "y": ySlots[1]},
        //    {"quantity": "single", "type": "upAndDown", "x": screens[6]+xSlots[9], "y": ySlots[1]},
        {"quantity": "single", "type": "upAndDown", "x": screens[7]+xSlots[1], "y": ySlots[1]},
        {"quantity": "single", "type": "upAndDown", "x": screens[8]+xSlots[5], "y": ySlots[1]},

        //  {"quantity": "single", "type": "upAndDown", "x": screens[7]+xSlots[5], "y": ySlots[1]},

        {"quantity": "single", "type": "powerup", "x": screens[7]+xSlots[7], "y": ySlots[1], "powerupType": "lycocoin"},
        {"quantity": "single", "type": "powerup", "x": screens[7]+xSlots[7], "y": ySlots[5], "powerupType": "lycocoin"},
        // here
        {"quantity": "wave", "type": "seeker", "how_many": 10, "x": screens[8]+xSlots[8], "baseVelocity" : -180},
        {"quantity": "wave", "type": "dodger", "how_many": 10, "x": screens[8]+xSlots[10], "baseVelocity" : -180},
        {"quantity": "single", "type": "wall", "x": screens[9]+xSlots[3], "y": ySlots[2], "height":200, "width":200},
        {"quantity": "single", "type": "superchiller", "x": screens[9]+xSlots[3], "y": ySlots[3], "fireChance" : 20},
        {"quantity": "single", "type": "superchiller", "x": screens[9]+xSlots[4], "y": ySlots[3], "fireChance" : 20},
        {"quantity": "single", "type": "superchiller", "x": screens[9]+xSlots[5], "y": ySlots[3], "fireChance" : 20},
        {"quantity": "single", "type": "wall", "x": screens[9]+xSlots[3], "y": ySlots[6], "height":200, "width":200},
        {"quantity": "single", "type": "powerup", "x": screens[9]+xSlots[7]-50, "y": ySlots[1], "powerupType": "lycocoin"},
        {"quantity": "single", "type": "powerup", "x": screens[9]+xSlots[11]+50, "y": ySlots[1], "powerupType": "weapon"},
        {"quantity": "single", "type": "wall", "x": screens[9]+xSlots[8], "y": ySlots[2]+50, "height":250, "width":200},
        {"quantity": "single", "type": "wall", "x": screens[9]+xSlots[8], "y": ySlots[6], "height":150, "width":200},
        {"quantity": "wave", "type": "dodger", "how_many": 10, "x": screens[9]+xSlots[12], "baseVelocity" : -180},
        {"quantity": "wave", "type": "bouncer", "how_many": 7, "x": screens[10]+xSlots[0], "y": ySlots[5] },
        {"quantity": "single", "type": "powerup", "x": screens[10]+xSlots[0]-50, "y": ySlots[5], "powerupType": "lycocoin"},
        {"quantity": "single", "type": "wall", "x": screens[10]+xSlots[1], "y": ySlots[5], "height":500, "width":200},
        {"quantity": "wave", "type": "pathfinder", "how_many": 5, "x": screens[10]+xSlots[4], "y": ySlots[5]+50, "baseVelocity" : -200, "whichType" : 2},
        {"quantity": "wave", "type": "bouncer", "how_many": 7, "x": screens[10]+xSlots[4], "y": ySlots[5] },

        {"quantity": "single", "type": "wall", "x": screens[10]+xSlots[6], "y": ySlots[2], "height":200, "width":200},
        {"quantity": "wave", "type": "pathfinder", "how_many": 5, "x": screens[10]+xSlots[8], "y": ySlots[3], "baseVelocity" : -200, "whichType" : 2},
        {"quantity": "wave", "type": "dropper", "how_many": 5, "x": screens[10]+xSlots[6], "y": ySlots[2] + 25},
        {"quantity": "single", "type": "wall", "x": screens[10]+xSlots[6], "y": ySlots[6], "height":200, "width":200},

        {"quantity": "single", "type": "wall", "x": screens[10]+xSlots[11], "y": ySlots[1]-25, "height":75, "width":200},
        {"quantity": "wave", "type": "pathfinder", "how_many": 5, "x": screens[10]+xSlots[14], "y": ySlots[1]+50, "baseVelocity" : -200, "whichType" : 2},
        {"quantity": "single", "type": "wall", "x": screens[10]+xSlots[11], "y": ySlots[6], "height":400, "width":200},

        {"quantity": "single", "type": "wall", "x": screens[11]+xSlots[4], "y": ySlots[4]-25, "height":375, "width":200},
        {"quantity": "wave", "type": "dropper", "how_many": 5, "x": screens[11]+xSlots[4], "y": ySlots[4]},
        {"quantity": "wave", "type": "pathfinder", "how_many": 5, "x": screens[11]+xSlots[4], "y": ySlots[5]-50, "baseVelocity" : -240, "whichType" : 2},
        {"quantity": "single", "type": "wall", "x": screens[11]+xSlots[4], "y": ySlots[6], "height":100, "width":200},
        {"quantity": "single", "type": "upAndDown", "x": screens[11]+xSlots[7], "y": ySlots[1]},
        {"quantity": "single", "type": "wall", "x": screens[11]+xSlots[8], "y": ySlots[6], "height":50, "width":200},
        {"quantity": "single", "type": "wall", "x": screens[11]+xSlots[8], "y": ySlots[4], "height":400, "width":200},
        {"quantity": "wave", "type": "pathfinder", "how_many": 5, "x": screens[11]+xSlots[11], "y": ySlots[4]+25, "baseVelocity" : -200, "whichType" : 2},
        {"quantity": "wave", "type": "dropper", "how_many": 4, "x": screens[11]+xSlots[10]+25, "y": ySlots[0]},
        {"quantity": "single", "type": "powerup", "x": screens[11]+xSlots[11], "y": ySlots[0]+25, "powerupType": "lycocoin"},
        {"quantity": "single", "type": "wall", "x": screens[12]+xSlots[0], "y": ySlots[6], "height":100, "width":200},
        {"quantity": "wave", "type": "pathfinder", "how_many": 5, "x": screens[12]+xSlots[4], "y": ySlots[4]+50, "baseVelocity" : -200, "whichType" : 2},
        {"quantity": "single", "type": "wall", "x": screens[12]+xSlots[0], "y": ySlots[4]-25, "height":375, "width":200},
        {"quantity": "wave", "type": "dropper", "how_many": 4, "x": screens[12]+xSlots[0], "y": ySlots[4]},
        {"quantity": "wave", "type": "dropper", "how_many": 4, "x": screens[12]+xSlots[2]+25, "y": ySlots[1]},
        {"quantity": "wave", "type": "bouncer", "how_many": 4, "x": screens[11]+xSlots[11], "y": ySlots[4] },

        {"quantity": "single", "type": "wall", "x": screens[12]+xSlots[4], "y": ySlots[6], "height":100, "width":200},
        {"quantity": "wave", "type": "dropper", "how_many": 4, "x": screens[12]+xSlots[4], "y": ySlots[4]},
        {"quantity": "single", "type": "wall", "x": screens[12]+xSlots[4], "y": ySlots[4]-25, "height":375, "width":200},

        {"quantity": "single", "type": "powerup", "x": screens[12]+xSlots[6]+25, "y": ySlots[6]-25, "powerupType": "lycocoin"},

        {"quantity": "single", "type": "wall", "x": screens[12]+xSlots[8], "y": ySlots[2], "height":200, "width":200},
        {"quantity": "single", "type": "wall", "x": screens[12]+xSlots[8], "y": ySlots[6], "height":300, "width":200},
        {"quantity": "wave", "type": "pathfinder", "how_many": 5, "x": screens[12]+xSlots[11], "y": ySlots[2]+50, "baseVelocity" : -200, "whichType" : 2},

        {"quantity": "single", "type": "superchiller", "x": screens[12]+xSlots[11], "y": ySlots[1], "fireChance" : 25},
        {"quantity": "single", "type": "superchiller", "x": screens[12]+xSlots[11], "y": ySlots[5], "fireChance" : 25},


        {"quantity": "single", "type": "wall", "x": screens[13]+xSlots[0], "y": ySlots[1], "height":100, "width":200},
        {"quantity": "single", "type": "wall", "x": screens[13]+xSlots[0], "y": ySlots[6], "height":400, "width":200},
        {"quantity": "wave", "type": "pathfinder", "how_many": 4, "x": screens[13]+xSlots[2], "y": ySlots[1]+25, "baseVelocity" : -150, "whichType" : 2},

        {"quantity": "single", "type": "wall", "x": screens[13]+xSlots[6], "y": ySlots[3]+50, "height":100, "width":900},
        {"quantity": "wave", "type": "crosser", "how_many":5 , "x": screens[14]+xSlots[8], "y": ySlots[1], "baseVelocity": -250, "dirMod": 1},
        {"quantity": "wave", "type": "crosser", "how_many":5 , "x": screens[14]+xSlots[8], "y": ySlots[5], "baseVelocity": -250, "dirMod": -1},
        {"quantity": "single", "type": "powerup", "x": screens[14]+xSlots[2], "y": ySlots[4], "powerupType": "weapon"},

        {"quantity": "wave", "type": "enemy", "how_many": 5, "x": screens[14]+xSlots[2], "y": ySlots[1], "baseVelocity": -300},
        {"quantity": "wave", "type": "enemy", "how_many": 5, "x": screens[14]+xSlots[3], "y": ySlots[2], "baseVelocity": -300},
        {"quantity": "wave", "type": "enemy", "how_many": 5, "x": screens[14]+xSlots[3], "y": ySlots[4], "baseVelocity": -300},
        {"quantity": "wave", "type": "enemy", "how_many": 5, "x": screens[14]+xSlots[2], "y": ySlots[5], "baseVelocity": -300},


        {"quantity": "single", "type": "wall", "x": screens[14]+xSlots[9], "y": ySlots[2], "height":100, "width":900},
        {"quantity": "single", "type": "powerup", "x": screens[15]+xSlots[1]+50, "y": ySlots[3], "powerupType": "lycocoin"},
        {"quantity": "wave", "type": "dropper", "how_many": 18, "x": screens[14]+xSlots[9], "y": ySlots[2]+25},
        {"quantity": "wave", "type": "runner", "how_many": 10, "x": screens[15]+xSlots[2], "y": ySlots[1]-50, "dir" : 1},

        {"quantity": "single", "type": "wall", "x": screens[14]+xSlots[9], "y": ySlots[5]+50, "height":100, "width":900},
        {"quantity": "wave", "type": "bouncer", "how_many": 4, "x": screens[14]+xSlots[11], "y": ySlots[4] },
        {"quantity": "wave", "type": "bouncer", "how_many": 4, "x": screens[15]+xSlots[1]+50, "y": ySlots[4] },
        {"quantity": "wave", "type": "bouncer", "how_many": 4, "x": screens[15]+xSlots[4], "y": ySlots[4] },
        {"quantity": "single", "type": "powerup", "x": screens[15]+xSlots[8], "y": ySlots[3]+50, "powerupType": "speed"},
        {"quantity": "wave", "type": "flanker", "how_many": 5, "x": screens[16]+xSlots[7], "y": ySlots[5], "baseVelocity": -200,  "launchOffset": 50},
        {"quantity": "wave", "type": "flanker", "how_many": 5, "x": screens[16]+xSlots[7], "y": ySlots[1], "baseVelocity": -200,  "launchOffset": 50},

        {"quantity": "wave", "type": "flanker", "how_many": 5, "x": screens[17]+xSlots[4], "y": ySlots[5], "baseVelocity": -250,  "launchOffset": 50},
        {"quantity": "wave", "type": "flanker", "how_many": 5, "x": screens[17]+xSlots[5], "y": ySlots[1], "baseVelocity": -250,  "launchOffset": 50},
        {"quantity": "wave", "type": "flanker", "how_many": 5, "x": screens[17]+xSlots[7], "y": ySlots[2], "baseVelocity": -250,  "launchOffset": 50},
        {"quantity": "wave", "type": "flanker", "how_many": 5, "x": screens[17]+xSlots[8], "y": ySlots[4], "baseVelocity": -250,  "launchOffset": 50},
        {"quantity": "wave", "type": "flanker", "how_many": 5, "x": screens[17]+xSlots[10], "y": ySlots[3], "baseVelocity": -250,  "launchOffset": 50},

        {"quantity": "wave", "type": "flanker", "how_many": 5, "x": screens[18]+xSlots[6], "y": ySlots[3]+50, "baseVelocity": -300, "launchOffset": 25},
        {"quantity": "wave", "type": "flanker", "how_many": 5, "x": screens[18]+xSlots[7], "y": ySlots[3]-50, "baseVelocity": -300, "launchOffset": 25},
        {"quantity": "wave", "type": "flanker", "how_many": 5, "x": screens[18]+xSlots[7], "y": ySlots[1], "baseVelocity": -300, "launchOffset": 25},
        {"quantity": "wave", "type": "flanker", "how_many": 5, "x": screens[18]+xSlots[8], "y": ySlots[5], "baseVelocity": -300, "launchOffset": 25},
        {"quantity": "wave", "type": "flanker", "how_many": 5, "x": screens[18]+xSlots[9], "y": ySlots[1], "baseVelocity": -300, "launchOffset": 25},
        {"quantity": "wave", "type": "flanker", "how_many": 5, "x": screens[18]+xSlots[9], "y": ySlots[5], "baseVelocity": -300, "launchOffset": 25},
        {"quantity": "wave", "type": "flanker", "how_many": 5, "x": screens[18]+xSlots[10], "y": ySlots[4], "baseVelocity": -300, "launchOffset": 25},
        {"quantity": "wave", "type": "flanker", "how_many": 5, "x": screens[18]+xSlots[11], "y": ySlots[2], "baseVelocity": -300, "launchOffset": 25},
        {"quantity": "single", "type": "powerup", "x": screens[18]+xSlots[11], "y": ySlots[3], "powerupType": "weapon"},


]
}










var bonuslevel_data = {

}














