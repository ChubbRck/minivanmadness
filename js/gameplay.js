




var Gameplay = function(game){

};

Gameplay.prototype = {
 

  create: function() {


    var sg = this;
    //Uncomment to add debug plugin.
    //game.add.plugin(Phaser.Plugin.Debug);
    // Get url query string for 'h' variable and fade-in applicable elements.
    var difficultyModifier = sg.getUrlVars()["d"];
    sg.levels = [level1_data, level2_data, level3_data];
    sg.difficulty = sg.levels[game.level - 1]["pace"];
    if (difficultyModifier == 2){ sg.difficulty = 2; }
    // Enable Physics
    sg.game.physics.startSystem(Phaser.Physics.ARCADE);

    //create a world that will run for 3 minutes with a 1 minute buffer.
    game.world.resize(58000, 600);

    // Declare some in-game variables
    
    
    game.levelBeaten = false;
  
    sg.paused = false;
    
    sg.level = game.level;
    sg.gameIsOver = false;
    sg.fading = false;
    sg.fireRate = 250;
    sg.levelFading = false;
    sg.createBackground();

  // sg.stopPace();
    
    // Create collision groups
    sg.bosses = game.add.group();
    if (game.level == 3){ // This is not ideal and should be done some other way
      //var finalBoss = new FinalBoss(game, 20200 + 1275, 300, sg.player, sg.enemies, sg.bullets, sg.explosions, null);
      sg.finalBoss = new FinalBoss(game, 22200 + 1275, 300, null, null, null, null, null);
    }
    
    sg.bullets = game.add.group();
    sg.badbullets = game.add.group();
    sg.enemies = game.add.group();
    sg.bosses = game.add.group();
    sg.powerups = game.add.group();
    sg.walls = game.add.group();
    sg.buddies = game.add.group();
    sg.explosions = game.add.group();
    
    if (game.level == 3){
      sg.finalBoss.playerRef = sg.player;
      sg.finalBoss.enemiesRef = sg.enemies;
      sg.finalBoss.bulletsRef = sg.bullets;;
      sg.finalBoss.badBulletsRef = sg.badbullets;
      sg.finalBoss.explosionsRef = sg.explosions;
      sg.finalBoss.powerupsRef = sg.powerups;
    }

    sg.fruits = ['cherry', 'grapefruit', 'orange', 'watermelon'];
    sg.vegetables = ['broccoli', 'cabbage', 'carrot', 'pumpkin'];

    sg.emitter = game.add.emitter(2000, 300, 500);

     

    //  Here we're passing an array of image keys. It will pick one at random when emitting a new particle.
    sg.emitter.makeParticles(['bubble-sm', 'bubble-md', 'bubble-lg']);
    sg.emitter.gravity = -200;
    // sg.emitter.maxParticleSpeed.set(1, 300);
    sg.emitter.setAlpha(1.0, 0);
    sg.emitter.start(false, 1000, 400);
    sg.emitter.setXSpeed(-20, 20);
    sg.emitter.setYSpeed(-20, 20);
    sg.paceStopped = false;
    //sg.warpPoint = 20000;
    //sg.warpPoint = 7000;
    sg.warpPoint = 0;


   
    //  Create the player
     sg.player = new Player(game, 500, 200, sg.bullets, sg.difficulty);
     game.add.existing(sg.player)
    //sg.player = game.add.sprite(500, 200, 'blake-sprite-v3');
    sg.player.x = sg.warpPoint + 500;
    sg.game.camera.x = sg.warpPoint; 

    sg.player.frame = 0;
    sg.player.animations.add('walk');
    sg.player.basicShot = new BasicShot(game, sg.bullets);
    sg.player.beam = new Beam(game, sg.bullets);
    sg.player.triple = new Triple(game, sg.bullets);
    sg.player.twin = new Twin(game, sg.bullets);
    sg.player.missile = new Missile(game, sg.bullets);
    sg.player.ring = new Ring(game, sg.bullets);
   // sg.player.animations.play('walk', 30, true);
    sg.player.anchor.setTo(0.5,0.5);
    // sg.player.width = 80;
    // sg.player.height = 60;
    sg.player.lycocoins = 0;
    sg.player.lastFire = 0;
    //game.lives =0; // MOVE THIS TO TITLE
   // game.playerSpeed = 0;
    sg.player.accel = [600, 800, 1000, 1100]
    sg.player.maxVel = [300, 400, 500, 550]
    sg.player.drag = [500, 700, 900, 1200]
    sg.player.health = 5;
    //game.weaponType = 1;
    sg.player.canMove = true;
    sg.player.godMode = false;
    sg.player.invincible = false;
    sg.player.invincibleTime = 0;
    //game.score = game.score;
  
    sg.game.physics.arcade.enable(sg.player);
    sg.player.body.setSize(60, 60, 0, -15)

    sg.player.body.maxVelocity.x= sg.player.maxVel[game.playerSpeed];
    sg.player.body.maxVelocity.y= sg.player.maxVel[game.playerSpeed];
    sg.player.body.drag.x = sg.player.drag[game.playerSpeed];
    sg.player.body.drag.y = sg.player.drag[game.playerSpeed];
    sg.player.body.collideWorldBounds = true;   
    sg.player.body.bounce.y = 0.6;

    if (game.level == 3){
      sg.finalBoss.playerRef = sg.player;
    }
    
    //Create cursors for input
    sg.cursors = game.input.keyboard.createCursorKeys();
    //Create shortcut for pause key
  

    var pauseKey = game.input.keyboard.addKey(Phaser.Keyboard.P); 
    var muteKey = game.input.keyboard.addKey(Phaser.Keyboard.M); 
    //create fire button
    sg.fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    sg.fireButton.onDown.add(function(){sg.fireBullet(false)}, sg);
    // Start music

    sg.titletrack = game.add.audio('titletrack', 0.5);
    sg.titletrack.loop = true;

    sg.track1 = game.add.audio('track1', 0.5);
    sg.track1.loop = true;

    sg.gametrack = game.add.audio('gametrack', 0.5);
    sg.gametrack.loop = true;

    sg.bosstrack = game.add.audio('bosstrack', 0.45);
    sg.bosstrack.loop = true;

    sg.oneup = game.add.audio('vo-1up')
    sg.gameOverSFX = game.add.audio('vo-gameover');

    sg.nomnomSFX = game.add.audio('vo-nomnom', 0.5);
    sg.ouchSFX = game.add.audio('vo-ouch', 0.);
    sg.niceShootingSFX = game.add.audio('vo-niceshooting', 0.6)

    sg.currentTrack = game.levels[game.level - 1]["music"]
    sg.trackPlaying = sg.currentTrack;
    switch (sg.currentTrack){
      case "track1": sg.track1.play(); break;
      case "titletrack": sg.titletrack.play(); break;
      case "gametrack": sg.gametrack.play(); break;
      default: sg.track1.play(); break;
    }

    // Add SFX
    powerup_sfx = game.add.audio('powerup', 0.2);


    // Iterate through a script and create the level.
    switch (game.level){
      case 1: sg.processScript(level1_data); break;
      case 2: sg.processScript(level2_data); break;
      case 3: sg.processScript(level3_data); break;
      case 4: sg.processScript(level4_data); break;
    }

    game.world.bringToTop(sg.buddies);
    sg.player.bringToTop();

    game.world.bringToTop(sg.explosions);

    // determine when boss music should play
    sg.bossMusicTriggered = false;
    sg.bossPoint = game.levels[game.level - 1]["bossPoint"]

    //create a test object
     // var lgexplosion = new LargeExplosion(game, game.camera.x+300, 300, 30, 100);
 
     // sg.enemies.add(boss)

     // var b2 = new Flanker(game, 20300, 500, 0, -400, sg.player);
 
     // sg.enemies.add(b2)

     // var b3 = new Flanker(game, 20200, 400, 0, -400, sg.player);
 
     // sg.enemies.add(b3)

     // var b4 = new Flanker(game, 20500, 200, 0, -400, sg.player);
 
     // sg.enemies.add(b4)

     // var b5 = new Flanker(game, 20800, 300, 0, -400, sg.player);
 
     // sg.enemies.add(b5)


     // var b6 = new Flanker(game, 20700, 267, 0, -400, sg.player);
 
     // sg.enemies.add(b6)

    //create a test enemy
    // var sine = new Dropper(game, 1400, 100, 0, sg.player);
  
    // sg.enemies.add(sine)

    //     var sine_2 = new Crosser(game, 1400, 400, 0, 'baddie-red', -200, -1);
    // sg.enemies.add(sine_2)
    // Draw UI Elements and set default UI values
    
    // Handle mute UI and functions
   // game.sound.mute = false; // Make this respect the setting from the title screen
    sg.soundToggle = sg.game.add.button(1120, 530, 'mute-sprite', sg.toggleMute, sg);
    sg.soundToggle.width = 44;
    sg.soundToggle.height = 28;
     if (game.sound.mute){
      this.soundToggle.frame = 2;
    } else {
       this.soundToggle.frame = 1;
    }
    sg.soundToggle.fixedToCamera = true;
    muteKey.onDown.add(function(muteKey){ sg.toggleMute(); }, this);


    sg.uibar = sg.game.add.sprite(0, 0, 'uibar-sprite');
    sg.uibar.fixedToCamera = true; 
    sg.uibar.alpha = 0.4;

   // sg.scoreText = game.add.text(1190,0,"SCORE " + game.score, {fill:'white', font:'36px Tandysoft'});
     sg.scoreText = game.add.bitmapText(1190, -3, 'tandysoft','SCORE ' + game.score ,41);
    sg.scoreText.fixedToCamera = true;
    sg.scoreText.anchor.setTo(1.0,0);
    sg.scoreText.x = 1190;
    sg.scoreText.y = 10;

    //sg.levelText = game.add.text(600,0,"Level " + game.level, {fill:'white', font:'36px Tandysoft'});
     sg.levelText = game.add.bitmapText(600, -3, 'tandysoft','Level 0' + game.level ,41);
    sg.levelText.fixedToCamera = true;
    sg.levelText.anchor.setTo(0.5,0);

     // sg.livesText = game.add.text(0,0,"Lives: " + game.lives, {fill:'white', font:'65px Tandysoft'});
    // sg.livesText.anchor.setTo(0,0);
    // sg.livesText.x = 0;
    // sg.livesText.y = 0;
    // sg.livesText.fixedToCamera = true;

    // Build lifebar
    //sg.lifegauge = sg.game.add.sprite(173,9, 'life-lifebar-v2');
    sg.lifegauge = sg.game.add.sprite(215,9,'healthbar-sprite');
    sg.lifegauge.fixedToCamera = true;
    sg.lifegauge.frame = 5;

    //sg.livescounter = sg.game.add.sprite(20,11, 'lives-sprite');
    sg.livescounter = sg.game.add.sprite(25,11, 'livesbar-sprite')
    sg.livescounter.fixedToCamera = true;
    sg.livescounter.frame = 3;

    sg.livesCounterText = game.add.bitmapText(110, -3, 'tandysoft', "0" + game.lives.toString() ,41);
    sg.livesCounterText.fixedToCamera = true;
    sg.livesCounterText.anchor.setTo(0,0);
    sg.livesCounterText.smoothed = false;

    // sg.lifebar = game.add.group();
    // sg.lifebar1 = sg.game.add.sprite(10, 75, 'lifebar1');
    // sg.lifebar2 = sg.game.add.sprite(10, 75, 'lifebar2');
    // sg.lifebar3 = sg.game.add.sprite(10, 75, 'lifebar3');
    // sg.lifebar.add(sg.lifebar1);
    // sg.lifebar.add(sg.lifebar2);
    // sg.lifebar.add(sg.lifebar3);
    // sg.lifebar.fixedToCamera = true;
    // sg.lifebar3.width = 0;
    // sg.lifebar2.width = 0;

    // Manage pause button
    sg.pauseButton = sg.game.add.sprite(30, 530, 'pause');
    sg.pauseButton.inputEnabled = true;
    sg.pauseButton.fixedToCamera = true;
    sg.pauseButton.events.onInputDown.add(function(){if (!this.game.paused){this.pauseGame()}},sg);
   
     //sg.game.input.onDown.add(function () {if(this.game.paused)this.unPauseGame()},sg)
    // sg.resumeButton.input.onInputOver.add(function () {if(this.game.paused)this.unPauseGame()},this)

    
    pauseKey.onDown.add(function(pauseKey){
      if(this.game.paused){
        this.unPauseGame()
      } else {
        this.pauseGame();
      }
    }, this);

   
  


   





    sg.gameOverScreen = game.add.group();
    
    sg.gameOverScreen.fixedToCamera = true;
    sg.gameOverCurtain = game.add.sprite(0,0, 'black');
    sg.gameOverCurtain.alpha = 0.7;
    
    sg.logo = game.add.sprite(600,-200, 'game-over-text');
    sg.logo.anchor.setTo(0.5,0.5);
    sg.game.physics.arcade.enable(sg.logo);
   
    sg.logo.body.bounce.set(0.4);
  
    sg.shaking = false;
    sg.hasShook = false;
    sg.invisPlatform = game.add.sprite(0,350, 'black');
    sg.invisPlatform.width = 1200;
    sg.invisPlatform.alpha = 0.01;
    sg.invisPlatform.height = 10;
    sg.game.physics.arcade.enable(sg.invisPlatform);
    sg.invisPlatform.body.immovable = true;

    sg.gameOverScreen.add(sg.gameOverCurtain);
    sg.gameOverScreen.add(sg.logo);
    sg.gameOverScreen.add(sg.invisPlatform);
    sg.gameOverScreen.alpha = 0;

    if (game.level == 3){
      sg.whiteCurtain = game.add.sprite(0,0, 'white');
      sg.whiteCurtain.alpha = 0;
      sg.whiteCurtain.fixedToCamera = true;
      sg.finalBoss.whiteCurtainRef = sg.whiteCurtain;
    }

    sg.blackCurtain = game.add.sprite(0,0, 'black');
    sg.blackCurtain.alpha = 1.0;
    sg.blackCurtain.fixedToCamera = true;

    sg.fireTitles();
    sg.pauseScreen = game.add.group();
    sg.pauseScreen.alpha = 0;
    sg.pauseScreen.fixedToCamera = true;
    
    sg.pauseText = sg.game.add.sprite(0,0,'pause-screen');    
    sg.pauseText.alpha = 1;
    sg.pauseScreen.add(sg.pauseText);

    sg.resumeButton = game.add.button(600,420,'pause-resume-text');
    sg.resumeButton.anchor.setTo(0.5,0);

    sg.resumeButton.input.enabled = false;
    sg.pauseScreen.add(sg.resumeButton);

    sg.returnToMenuButton = game.add.button(600,465,'pause-return-to-menu-text');
    sg.returnToMenuButton.anchor.setTo(0.5,0);

    sg.returnToMenuButton.input.enabled = false;
    sg.pauseScreen.add(sg.returnToMenuButton);

    sg.fadeIn();

  },

  pauseUpdate: function(){

    var sg = this;
   
   
    
    var mouseX = game.input.mousePointer.x;
    var mouseY = game.input.mousePointer.y; 
    
    if (mouseX > sg.resumeButton.x - sg.resumeButton.width/2 && mouseX < sg.resumeButton.x + sg.resumeButton.width/2 && mouseY > sg.resumeButton.y && mouseY < sg.resumeButton.y + sg.resumeButton.height){

        sg.resumeButton.frame=1;
        
        if (game.input.mousePointer.isDown){
         
         sg.unPauseGame();
          
        }
    } else {
      sg.resumeButton.frame = 0;
    }

    if (mouseX > sg.returnToMenuButton.x - sg.returnToMenuButton.width/2 && mouseX < sg.returnToMenuButton.x + sg.returnToMenuButton.width/2 && mouseY > sg.returnToMenuButton.y && mouseY < sg.returnToMenuButton.y + sg.returnToMenuButton.height){

        sg.returnToMenuButton.frame=1;
        
        if (game.input.mousePointer.isDown){
           sg.returnToTitle();
         
        }
    } else {
      sg.returnToMenuButton.frame = 0;
    }
  },
    getUrlVars: function(){
      var vars = [], hash;
      var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
      for (var i = 0; i < hashes.length; i++){
          hash = hashes[i].split('=');
          vars.push(hash[0]);
          vars[hash[0]] = hash[1];
      }
      return vars;
    },
  toggleMute: function(){ 
    ga('send', 'event', 'betablasters', 'hitMuteButton');
    game.sound.mute = !game.sound.mute; 
    if (game.sound.mute){
      this.soundToggle.frame = 2;
    } else {
       this.soundToggle.frame = 1;
    }
  },

  pauseGame: function(){
    var sg = this;
    
    sg.pausePlaying(sg.trackPlaying);
    var tween = game.add.tween(sg.pauseScreen).to( { alpha: 1.0 }, 100, "Linear", true);
    sg.resumeButton.input.enabled = true;
    sg.returnToMenuButton.input.enabled = true;
    tween.onComplete.add(function(){sg.game.paused = true}, this);
  },

  unPauseGame: function(){
    var sg = this;
    sg.resumePlaying(sg.trackPlaying);
    var tween = game.add.tween(sg.pauseScreen).to( { alpha: 0 }, 100, "Linear", true);
    sg.returnToMenuButton.input.enabled = false;
    sg.resumeButton.input.enabled = false;
    sg.game.paused = false;
  },

  fadeIn: function(){
    var tween = game.add.tween(this.blackCurtain).to( { alpha: .5 }, 500, "Linear")
    .to( { alpha: .49}, 2000, "Linear")
    .to( { alpha: 0}, 500, "Linear")
    .start();

//       var titleTween = game.add.tween(sg.titleText.cameraOffset).to({x: 750}, 500, Phaser.Easing.Quadratic.InOut)
// .to({x: 550}, 2000, "Linear")
// .to({x: -600}, 500, Phaser.Easing.Quadratic.InOut)
// .start();
  },

  pausePlaying: function(track){
    var sg = this;
    switch (track){
      case "track1": sg.track1.pause(); break;
      case "gametrack": sg.gametrack.pause(); break;
      case "bosstrack" : sg.bosstrack.pause(); break;
      case "titletrack" : sg.titletrack.pause(); break;
      default: break;
    }
  },

  resumePlaying: function(track){
    var sg = this;
    switch (track){
      case "track1": sg.track1.resume(); break;
      case "gametrack": sg.gametrack.resume(); break;
      case "bosstrack" : sg.bosstrack.resume(); break;
      case "titletrack" : sg.titletrack.resume(); break;
      default: break;
    }
  },

  fadeOut: function(duration, finalAlpha){
    var sg = this;
    var tween = game.add.tween(this.blackCurtain).to( { alpha: finalAlpha }, duration, "Linear", true);
    //track1.fadeOut(5000)
    if (game.scoreMultiplier > 2){
      sg.niceShootingSFX.play();
    }

    game.time.events.add(6000, sg.completeLevel, this);

  },


 completeLevel: function(){
    game.level += 1;

    if (game.level == 2){
      ga('send', 'event', 'betablasters', 'finished', 'levelone');
    }
    if (game.level == 3){
      ga('send', 'event', 'betablasters', 'finished', 'leveltwo');
    }

    if (game.level == 4){
      var timeEnded = Math.floor(game.time.time / 60000); // time Ended, in seconds
      var timePlayed = timeEnded - game.timeStarted;
      ga('send', 'event', 'betablasters', 'finished', 'timePlayed', timePlayed);
      ga('send', 'event', 'betablasters', 'finished', 'levelthree');
      game.score += (game.lives*5000);
      ga('send', 'event', 'betablasters', 'finished', 'score', game.score);
      //check if player is in the top 10 scores.
      var inTopTen = false;
      for (i=0; i<game.topScores.length; i++){
        // is score greater than this score?
        if (game.score > game.topScores[i]["score"]){
          // go to top ten scene
          inTopTen = true;
        }  
      }
      if (inTopTen){
        ga('send', 'event', 'betablasters', 'earnedTopScore')
        this.game.state.start('TopTenScore');
      } else {
        this.game.state.start('ScoreSummary'); 
      }
    } else {
      this.game.state.start('Cutscene');
    }
  },

  returnToTitle: function(){
    
    this.game.paused = false;
    this.game.state.start('GameTitle');
    
  },

  stopPace: function(){
    var sg = this;
    sg.paceStopped = true;
    sg.front.autoScroll(0,0);
    sg.fronttwo.autoScroll(0,0);
    sg.bgtile.autoScroll(0,0);
    sg.mountain.autoScroll(0,0);
  },

  manageBonus: function(){
    var sg = this;
  for (i = 0; i < game.bonuses.length; i++) { 
    var bonus = game.bonuses[i];
    if (game.score > bonus["amountNeeded"] && !bonus["achieved"]){
        // award the bonus!
        game.lives += 1;
        sg.oneup.play();
        bonus["achieved"] = true;
    }
  }
  //
},

  processScript: function(level_data){
    var sg = this;
    // Iterate through the objects contained in the level data
    var fruitCounter = Math.floor((Math.random() * 4));
    var vegetableCounter = Math.floor((Math.random() * 4));
    for (i = 0; i < level_data["objects"].length; i++) { 
      var obj = level_data["objects"][i];
      switch (obj.quantity){
        case "single":
          switch (obj.type){
            case "enemy":
                var enemy = new Enemy(game=game, x=obj.x, y=obj.y, launchOffset=obj.launchOffset, img=obj.img, baseVelocity=obj.baseVelocity);
                sg.enemies.add(enemy);
                break;
            case "seeker":
                var seeker = new Seeker(game=game, x=obj.x+Math.random()*150, y=Math.random()*550, target=sg.player, baseVelocity=obj.baseVelocity);
                sg.enemies.add(seeker)
                break;
            case "dodger":
                var dodger = new SeekerAndDodger(game=game, x=obj.x+Math.random()*150, y=Math.random()*550, target=sg.player, bulletsRef=sg.bullets, baseVelocity=obj.baseVelocity);
                sg.enemies.add(dodger)
                break;
            case "sine":
                var sine = new EnemySine(game=game, x=obj.x, y=obj.y, launchOffset=obj.launchOffset, baseVelocity=obj.baseVelocity);
                sg.enemies.add(sine);
                break;
            case "chiller":
                 var chiller = new Chiller(game=game, x=obj.x, y=obj.y);
                 sg.enemies.add(chiller);
                 break;
            case "superchiller":
                 var chiller = new Chiller(game=game, x=obj.x, y=obj.y);
                 chiller.bulletsRef = sg.badbullets;
                 chiller.doesFire = true;
                 chiller.fireChance = obj.fireChance;
                 sg.enemies.add(chiller);
                 break;
            case "upAndDown":
                var upAndDown = new UpAndDown(game=game, x=obj.x, y=obj.y);
                sg.enemies.add(upAndDown);
                break;
            case "powerup":
                

                if (obj.powerupType == "speed"){
                  var powerup = new Powerup(game=game, x=obj.x, y=obj.y, powerupType=obj.powerupType, img=sg.fruits[fruitCounter % 5]);
                  fruitCounter += 1;
                }
                else if (obj.powerupType == "weapon"){
                  var powerup = new Powerup(game=game, x=obj.x, y=obj.y, powerupType=obj.powerupType, img=sg.vegetables[vegetableCounter % 5]);
                  vegetableCounter +=1;
                } else {
                  var powerup = new Powerup(game=game, x=obj.x, y=obj.y, powerupType=obj.powerupType); 
                }

                 sg.powerups.add(powerup);

                break;
            case "wall":
                var wall = new Wall(game=game, x=obj.x, y=obj.y, width=obj.width, height=obj.height, wallsRef=sg.walls);
                sg.walls.add(wall);
                break;
            case "bouncer":
                var bouncer = new Bouncer(game=game, x=obj.x, y=obj.y, target=sg.player, gravFactor=obj.gravFactor);
                sg.enemies.add(bouncer);
                break;
            case "crosser":
                var crosser = new Crosser(game=game, x=obj.x, y=obj.y, 0, 'baddie-red', baseVelocity=obj.baseVelocity, dirMod=obj.dirMod);
                sg.enemies.add(crosser);
                break;
            case "dropper":
                var dropper = new Dropper(game=game, x=obj.x, y=obj.y, 0, playerRef=sg.player);
                sg.enemies.add(dropper);
                break;

            case "pathfinder":
                var pathfinder = new Pathfinder(game=game, x=obj.x, y=obj.y, wallsRef=sg.walls, baseVelocity=obj.baseVelocity, whichType=obj.whichType);
                sg.enemies.add(pathfinder);
                break;
            case "runner":
                var runner = new Runner(game=game, x=obj.x, y=obj.y, dir=obj.dir);
                sg.enemies.add(runner);
                break;
            case "flanker":
                var flanker = new Flanker(game=game, x=obj.x, y=obj.y, launchOffset=obj.launchOffset, baseVelocity=obj.baseVelocity, playerRef=sg.player);
                sg.enemies.add(flanker)
                break;
            case "miniboss":
                var miniboss = new MiniBoss(game=game, x=obj.x, y=obj.y, target=sg.player, bulletsRef=sg.badbullets, behaviorType=obj.behaviorType, img=obj.img)
                miniboss.launchVel = obj.launchVel;
                miniboss.retreatPoint = obj.retreatPoint;
                miniboss.bossFlag = obj.bossFlag;
                sg.enemies.add(miniboss);
                break;
            case "spinboss":
                var boss = new SpinBoss(game=game, x=obj.x, y=obj.y, target=sg.player, bulletsRef=sg.badbullets)
                boss.retreatPoint = obj.retreatPoint;
                boss.launchVel = obj.launchVel;
                boss.bossFlag = obj.bossFlag;
                sg.enemies.add(boss)

          } 
          break;

        case "wave":
          switch (obj.type){
            case "enemy":
              for (j = 0; j < obj.how_many; j++) { 
                var enemy = new Enemy(game=game, x=obj.x+j*60, y=obj.y, launchOffset=50*j, img=obj.img, baseVelocity=obj.baseVelocity);
                sg.enemies.add(enemy);
              }
              break;
            case "seeker":
              for (j = 0; j < obj.how_many; j++) { 
                var seeker = new Seeker(game=game, x=obj.x+Math.random()*150, y=Math.random()*550, target=sg.player, baseVelocity=obj.baseVelocity);
                sg.enemies.add(seeker)
              }
              break;
            case "sine":
              for (j = 0; j < obj.how_many; j++) { 
                var sine = new EnemySine(game=game, x=obj.x+j*60, y=obj.y, launchOffset=j*50, baseVelocity=obj.baseVelocity);
                sg.enemies.add(sine);
              }
              break;
            case "chiller":
              for (j = 0; j < obj.how_many; j++) { 
                var chiller = new Chiller(game=game, x=obj.x+Math.random()*300, y=100+Math.random()*400);
                sg.enemies.add(chiller);
              }
              break;
            case "upAndDown":
              for (j = 0; j < obj.how_many; j++) { 
                var upAndDown = new UpAndDown(game=game, x=obj.x + j*50, y=obj.y);
                sg.enemies.add(upAndDown);
              }
              break;
            case "dodger":
              for (j = 0; j < obj.how_many; j++) { 
                var dodger = new SeekerAndDodger(game=game, x=obj.x+Math.random()*150, y=Math.random()*550, target=sg.player, bulletsRef=sg.bullets, baseVelocity=obj.baseVelocity);
                sg.enemies.add(dodger)
              }
              break;
            case "crosser":
              for (j = 0; j < obj.how_many; j++) { 
                var crosser = new Crosser(game=game, x=obj.x, y=obj.y, launchOffset=j*50, 'baddie-red', baseVelocity=obj.baseVelocity, dirMod=obj.dirMod);
                sg.enemies.add(crosser);
              }
              break;
            case "dropper":
              for (j = 0; j < obj.how_many; j++){
                  var dropper = new Dropper(game=game, x=obj.x+j*50, y=obj.y, 0, playerRef=sg.player);
                  sg.enemies.add(dropper);
              }
              break;
            case "pathfinder":
              for (j = 0; j < obj.how_many; j++){
                  var pathfinder = new Pathfinder(game=game, x=obj.x+j*50, y=obj.y, wallsRef=sg.walls, baseVelocity=obj.baseVelocity, whichType = obj.whichType);
                  sg.enemies.add(pathfinder);
              }
              break;
            case "runner":
              for (j = 0; j < obj.how_many; j++){
                var runner = new Runner(game=game, x=obj.x+j*50, y=obj.y, dir=obj.dir);
                sg.enemies.add(runner);
              }
              break;
            case "flanker":
                for (j = 0; j < obj.how_many; j++){
                  var flanker = new Flanker(game=game, x=obj.x, y=obj.y, launchOffset=obj.launchOffset*j, baseVelocity=obj.baseVelocity, playerRef=sg.player);
                  sg.enemies.add(flanker)
                }
            break;
            case "bouncer":
              for (j = 0; j < obj.how_many; j++) { 
                var bouncer = new Bouncer(game=game, x=obj.x+Math.random()*150, y=obj.y, target=sg.player, gravFactor=obj.gravFactor);
                sg.enemies.add(bouncer);
              }
              break;
          }
          break;
        default:
      } 
    }
  },


  overlapCallback : function (player, wall){
    var sg = this;
    //  
    // 
    // 
    if (!sg.player.invincible && !sg.player.godMode && sg.player.x <= game.camera.x + 10 && (player.x + player.width/2 -5) <= wall.x){
            var explosion = new Explosion(game, sg.player.x, sg.player.y);
             sg.explosions.add(explosion);
            sg.loseLife();
          }
  },
  update: function() {
     var sg = this; 
    // 
    //  
    //   
    //    



   //console.log(game.scoreMultiplier);
    // 
    //Only move objects if game is not paused.
    if (!sg.paused){
      // Move the camera
      if (sg.difficulty == 1 && !sg.paceStopped){
        game.camera.x += 1;
      } else if (sg.difficulty == 2 && !sg.paceStopped){
       game.camera.x += 2;
      } else {
        game.camera.x += 0;
      }

      if (sg.player.invincible){
         if (sg.player.alpha == 0.2){
          sg.player.alpha = 1.0;
        } else {
          sg.player.alpha = 0.2;
        }

      } else {
        sg.player.alpha = 1.0;
      }
      
      if (this.game.time.time > sg.player.invincibleTime + 1000) { sg.player.invincible = false; }

      // Keep player on-screen
      if (sg.player.x < game.camera.x){
          sg.player.x = game.camera.x;

        // if overlapping with a wall... lose a life
     
       
         // 
          
        
      }

      if (sg.player.x > game.camera.x + game.width){
        sg.player.x = game.camera.x + game.width
      }

      if (sg.player.y > 600){
        sg.player.y = 600
      }
      if (sg.player.y < 0){
        sg.player.y = 0
      }

      //sg.checkInput();

      // Check for collisions
      
      //check for collisions between bullets and enemies
      game.physics.arcade.overlap(sg.bullets, sg.enemies, sg.collisionHandler, null, this);
      if (sg.player.visible){
        game.physics.arcade.overlap(sg.player, sg.powerups, sg.powerupHandler, null, this);
        game.physics.arcade.overlap(sg.player, sg.walls, sg.overlapCallback, null, this);
        game.physics.arcade.overlap(sg.player, sg.badbullets, sg.badBulletCollisionHandler, null, this);
        game.physics.arcade.collide(sg.player, sg.enemies, sg.playerCollisionHandler, null, this);
        game.physics.arcade.collide(sg.player, sg.walls, sg.wallCollisionHandler, null, this);
      }
      game.physics.arcade.overlap(sg.bullets, sg.bosses, sg.bossBulletCollisionHandler, null, this);
      
     // game.physics.arcade.collide(sg.player, sg.bosses, sg.playerBossCollisionHandler, null, this);
      //check for colliision between the player and enemies
     

      if (game.level == 3){
        game.physics.arcade.collide(sg.player, sg.finalBoss, sg.finalBossCollisionHandler, null, this);
      }
       //game.physics.arcade.collide(sg.enemies, sg.enemies,  null, null, this);
    
      game.physics.arcade.collide(sg.enemies, sg.walls, sg.enemyWallCollisionHandler, null, this);
      game.physics.arcade.collide(sg.bullets, sg.walls, sg.bulletWallCollider, null, this);
      game.physics.arcade.collide(sg.badbullets, sg.walls, sg.bulletWallCollider, null, this);
      game.physics.arcade.collide(sg.logo, sg.invisPlatform, sg.toggleShake, null, this);
      //update score and lives UI
      sg.scoreText.text = 'SCORE ' + game.score;
    //  sg.livesText.text = 'Lives: ' + game.lives;
    //  
  

    sg.manageHealthBar(); 

  

     
      //updatePlayer();
      //checkBoundaries();
      //updateBullets();
      //updateEnemies();
      //etc. etc.
      //checkForGameOver();
      
      // Random enemy routine. Move this to level data.
      // if (game.camera.x > 3600){
      //   var chanceToDeploy = Math.random()*100;
      //   if (chanceToDeploy < 1.5){
      //     var seeker = new Seeker(game, game.camera.x+1300, Math.random()*550, sg.player);
      //     sg.enemies.add(seeker);
      //   }
      // }

    

      //clean up 'killed' bullets
      sg.bullets.forEachDead(function(bullet) {
        bullet.destroy();
      });

      sg.badbullets.forEachDead(function(bullet) {
        bullet.destroy();
      });

      //clean up 'killed' enemies
      sg.enemies.forEachDead(function(enemy) {
        enemy.destroy();
      });

       sg.explosions.forEachDead(function(explosion) {
        explosion.destroy();
      });

         sg.walls.forEachDead(function(wall) {
        wall.destroy();
      });
    }


//    sg.manageHealthBar();
sg.manageBonus();
  //  sg.manageFrames();
     sg.emitter.x = sg.player.x - sg.player.width/2 + 10;
    sg.emitter.y = sg.player.y - sg.player.height/2 + 10;
    sg.emitter.forEachAlive(function(p){
      p.alpha= p.lifespan / sg.emitter.lifespan;
    });
  //  
//   
// 
  if (game.camera.x > sg.bossPoint && !sg.bossMusicTriggered){
    
    sg.bossMusicTriggered = true;
    sg.fadeOutMusic(sg.trackPlaying);
  
   // sg.bosstrack.fadeIn(1000)
   sg.bosstrack.play();
    sg.bosstrack.loop = true;
  }
    if (game.levelBeaten){
      // sg.gameOver();
      
      if (!sg.levelFading){
        sg.levelFading = true;
        sg.bosstrack.fadeOut(1000)
        game.time.events.add(3000, function(){sg.fadeOut(5000,1.0)}, this);
    

     
      }

    }
    sg.shakeScreen();

    sg.checkForBoss();
  },

  finalBossCollisionHandler: function(player, bossPart){
      player.body.velocity.x = -600;
      var sg = this;
      var explosion = new Explosion(game, player.x, player.y, 1);
      sg.explosions.add(explosion);
      if (!sg.player.invincible && !sg.player.godMode){
        sg.getHurt();
        if (sg.player.health < 1 && !sg.player.godMode){
          sg.loseLife();
        }
      }
  },
  checkForBoss: function(){ // TODO: Have this read from the level data
  //  
    var sg = this;
    if (game.camera.x >= 23600 - 1200 && game.level == 3){
      sg.stopPace();
    }
  },

  fadeOutMusic: function(track){
    var sg = this;
    switch (track){
      case "track1": sg.track1.fadeOut(1000); break;
      case "gametrack": sg.gametrack.fadeOut(1000);
      case "bosstrack": sg.bosstrack.fadeOut(1000); break;
      case "titletrack": sg.titletrack.fadeOut(1000); break;
      default: sg.gametrack.fadeOut(1000); break;
    }
  },  
  toggleShake: function(){
    // 
    if (!this.hasShook){
      this.shaking = true;
      this.hasShook = true;
      game.time.events.add(Phaser.Timer.SECOND * .25, this.stopShaking, this).autoDestroy = true;
    }
  },

  stopShaking: function(){ this.shaking = false; },
  shakeScreen: function(){
    if (this.shaking){
      
      // game.camera.x += Math.random()*100-5;
      // game.camera.y += Math.random()*100-5;
    } else{
     // game.camera.x = 0;
     // game.camera.y = 0;
    }
  },
  createPlayer: function(){

  },

  manageHealthBar: function(){
    var sg = this;
    sg.lifegauge.frame = sg.player.health;
    sg.livescounter.frame = game.lives;
    sg.livesCounterText.alpha = 0;
    if (game.lives >= 4){
      sg.livescounter.frame = 4;
      sg.livesCounterText.alpha = 1.0;
      var livesString;
      if (game.lives >= 10){
        livesString = game.lives.toString();
      } else {
        livesString = "0" + game.lives.toString();
      }
      sg.livesCounterText.text = livesString;
   
    }

    if (sg.gameIsOver){
      sg.lifegauge.frame = 0;
    }


  },
  
  fireTitles: function(){
    var sg = this;
    //create an object for the title and subtitle

    var titles = ['level-1-title','level-2-title','level-3-title'];
    var subtitles = ['level-1-subtitle','level-2-subtitle','level-3-subtitle'];
    // tween in the title and subtitles.
    var titleImage = titles[game.level - 1];
    var subtitleImage = subtitles[game.level - 1];

    sg.titleText = game.add.sprite(1800, 250, titleImage); // make this dynamic
    sg.subtitleText = game.add.sprite(-600, 375, subtitleImage);  // make this dynamic
    
    sg.titleText.fixedToCamera = true;
    sg.titleText.smoothed = false;
    sg.titleText.smoothed = false;
    sg.subtitleText.fixedToCamera = true;
    sg.titleText.anchor.setTo(0.5,0.5);
    sg.subtitleText.anchor.setTo(0.5,0.5);
    // game.add.tween(sg.titleText.cameraOffset).to( { x: 650 }, 500, "Linear", 200)
    // .to( { x: 0 }, 5000, "Linear", 200).start();

    var titleTween = game.add.tween(sg.titleText.cameraOffset).to({x: 750}, 500, Phaser.Easing.Quadratic.InOut)
.to({x: 550}, 2000, "Linear")
.to({x: -600}, 500, Phaser.Easing.Quadratic.InOut)
.start();

 var subtitleTween = game.add.tween(sg.subtitleText.cameraOffset).to({x: 550}, 500, Phaser.Easing.Quadratic.InOut)
.to({x: 650}, 2000, "Linear")
.to({x: 1800}, 500, Phaser.Easing.Quadratic.InOut)
.start();

    // tween.onComplete.add(function(){ powerup.kill(); }, this);
  },

  createBackground: function(){ //Need to tie this to level data later
    var sg = this;
    //Create the background
   switch(game.level){
    case 1:

    sg.bgtile = game.add.tileSprite(0, 0, 1200, 600, 'l1_back');
    sg.bgtile.fixedToCamera = true;
    sg.bgtile.autoScroll(-30,0); // on level 1 it is -20, 0

    sg.mountain = game.add.tileSprite(0, 0, 1200, 600, 'l1_middle');
    sg.mountain.fixedToCamera = true;
    sg.mountain.autoScroll(-65,0); // on level 2 it is -65, 0 (was 85 on lv 2)
    // sg.mountain.anchor.setTo(0.5,1.0);

    sg.front = game.add.tileSprite(0, 0, 1200, 600, 'l1_front');
    sg.front.fixedToCamera = true;
    sg.front.autoScroll(-105,0);
    break;
    case 2:
     sg.bgtile = game.add.tileSprite(0, 136 , 1200, 374, 'l2_back');
    sg.bgtile.fixedToCamera = true;
    sg.bgtile.autoScroll(-30,0); // on level 1 it is -20, 0

    sg.middle_top = game.add.tileSprite(0, 0, 1200, 192, 'l2_middle_top');
    sg.middle_top.fixedToCamera = true;
    sg.middle_top.autoScroll(-65,0); // on level 2 it is -65, 0 (was 85 on lv 2)

    sg.middle_bottom = game.add.tileSprite(0, 600-146, 1200, 146, 'l2_middle_bottom');
    sg.middle_bottom.fixedToCamera = true;
    sg.middle_bottom.autoScroll(-65,0); // on level 2 it is -65, 0 (was 85 on lv 2)
    // sg.mountain.anchor.setTo(0.5,1.0);

    sg.front_top = game.add.tileSprite(0, 0, 1200, 166, 'l2_front_top');
    sg.front_top.fixedToCamera = true;
    sg.front_top.autoScroll(-105,0);

    sg.front_bottom = game.add.tileSprite(0, 600-120, 1200, 120, 'l2_front_bottom');
    sg.front_bottom.fixedToCamera = true;
    sg.front_bottom.autoScroll(-105,0);
    break;

    case 3:
    //  sg.bgtile = game.add.tileSprite(0, 0, 1200, 600, 'l3_back');
    // sg.bgtile.fixedToCamera = true;
    // sg.bgtile.autoScroll(-40,0); // on level 1 it is -20, 0

    // sg.mountain = game.add.tileSprite(0, 0, 1200, 600, 'l3_middle');
    // sg.mountain.fixedToCamera = true;
    // sg.mountain.autoScroll(-75,0); // on level 2 it is -65, 0 (was 85 on lv 2)
    // // sg.mountain.anchor.setTo(0.5,1.0);

    //  sg.front = game.add.tileSprite(0, 0, 1200, 600, 'l3_front');
    // sg.front.fixedToCamera = true;
    // sg.front.autoScroll(-115,0);

    sg.bgtile = game.add.tileSprite(0, 154, 1200, 292, 'l3_back_s2');
    sg.bgtile.fixedToCamera = true;
    sg.bgtile.autoScroll(-40,0); // on level 1 it is -20, 0

    sg.mountain = game.add.tileSprite(0, 102, 1200, 396, 'l3_middle_s');
    sg.mountain.fixedToCamera = true;
    sg.mountain.autoScroll(-75,0); // on level 2 it is -65, 0 (was 85 on lv 2)
    // sg.mountain.anchor.setTo(0,0.5);

    sg.front = game.add.tileSprite(0, 0, 1200, 162, 'l3_front_s');
    sg.front.fixedToCamera = true;
    sg.front.autoScroll(-115,0);

    sg.fronttwo = game.add.tileSprite(0, 600-81, 1200, 162, 'l3_front_s');
    sg.fronttwo.fixedToCamera = true;
    sg.fronttwo.autoScroll(-115,0);
    sg.fronttwo.anchor.setTo(0,0.5)
    sg.fronttwo.scale.y = -1;
    break;

    default:
    break;

   }
      
    
  },
    
  fireBullet: function(isHeld){

    var sg = this;
    
   // if (this.game.time.time - sg.player.lastFire  > sg.fireRate){
     // blaster.play(); // move this to individual weapons
      //sg.player.triple.fire(sg.player);
    //  sg.player.beam.fire(sg.player);
      //Do different things based on weapon type  
      if (game.weaponType == 1){ // Basic Vitamin A gun 
      
        
           sg.player.basicShot.fire(sg.player, isHeld);
          // sg.player.missile.fire(sg.player);
      
      }

       if (game.weaponType == 2){
        sg.player.triple.fire(sg.player, isHeld);
         sg.player.twin.fire(sg.player, isHeld);
        

           
      }
        if (game.weaponType == 3){
        sg.player.triple.fire(sg.player, isHeld);
         sg.player.twin.fire(sg.player, isHeld);
        sg.player.missile.fire(sg.player, isHeld);        

           
      }

      if (game.weaponType ==4){
        sg.player.beam.fire(sg.player, isHeld);
          sg.player.missile.fire(sg.player, isHeld);
          sg.player.triple.fire(sg.player, isHeld);
      }

      if (game.weaponType >= 5){
            sg.player.ring.fire(sg.player, isHeld);
              sg.player.missile.fire(sg.player, isHeld);
          sg.player.triple.fire(sg.player, isHeld);
      }



      //   var bullet = new Bullet(game, 200, 300);
      //   bullet.x = sg.player.x;
      //   bullet.y = sg.player.y;
      //   game.add.existing(bullet);
      //   sg.bullets.add(bullet);
      //   sg.player.lastFire = this.game.time.time;
      // } else if (game.weaponType == 2){
      
      //   var bullet = new Bullet(game, 200, 300, 0);
      //   bullet.x = sg.player.x;
      //   bullet.y = sg.player.y;
      //   game.add.existing(bullet);
      //   sg.bullets.add(bullet);
           
      //   var bulletDown = new Bullet(game, 200, 300, 1);
      //   bulletDown.x = sg.player.x;
      //   bulletDown.y = sg.player.y;
      //   game.add.existing(bulletDown);
      //   sg.bullets.add(bulletDown);

      //   var bulletUp = new Bullet(game, 200, 300, -1);
      //   bulletUp.x = sg.player.x;
      //   bulletUp.y = sg.player.y;
      //   game.add.existing(bulletUp);
      //   sg.bullets.add(bulletUp);
      //   sg.player.lastFire = this.game.time.time;
      // } else if (game.weaponType == 3){
      //   sg.fireRate = 50;
      //   var bullet = new Bullet(game, 200, 300, 1, 'plbullet-purple');
      //   bullet.x = sg.player.x;
      //   bullet.y = sg.player.y;
      //   game.add.existing(bullet);
      //   sg.bullets.add(bullet);

      //   var bulletd = new Bullet(game, 200, 300, 0, 'plbullet-purple');
      //   bulletd.x = sg.player.x;
      //   bulletd.y = sg.player.y;
      //   game.add.existing(bulletd);
      //   sg.bullets.add(bulletd);

      //   var bulletu = new Bullet(game, 200, 300, -1, 'plbullet-purple');
      //   bulletu.x = sg.player.x;
      //   bulletu.y = sg.player.y;
      //   game.add.existing(bulletu);
      //   sg.bullets.add(bulletu);
      //   sg.player.lastFire = this.game.time.time;
      // } else if (game.weaponType >= 4){
      //   sg.fireRate = 10;
      //   var bulletd = new Bullet(game, 200, 300, 2, 'plbullet-green');
      //   bulletd.x = sg.player.x;
      //   bulletd.y = sg.player.y;
      //   game.add.existing(bulletd);
      //   sg.bullets.add(bulletd);
      // } else{
      //   var bullet = new Bullet(game, 200, 300, 1);
      //   bullet.x = sg.player.x;
      //   bullet.y = sg.player.y;
      //   game.add.existing(bullet);
      //   sg.bullets.add(bullet);
      //   sg.player.lastFire = this.game.time.time;
      // }
    //}
  },

  bulletWallCollider: function (bullet, wall) {
    var sg = this;
    if (bullet.isMissile){ return; }
    var offset = 0;
    
    if (bullet.angleRef == null ){
      offset = 10;
    }

    var explosion = new Explosion(game, bullet.x+offset, bullet.y, .33);
     sg.explosions.add(explosion);

    bullet.kill();
  },
    render: function(){
       //  this.finalBoss.forEachAlive(this.renderGroup, this);
     // this.finalBoss.forEachAlive(this.renderGroup, this);

           //game.debug.text(game.time.fps || '--', 2, 14, "#00ff00");   
  },

  renderGroup: function(member){
    game.debug.body(member);
  },

   enemyWallCollisionHandler: function (enemy, wall) {
    var sg = this;
    if (enemy.enemyType == "sine" || enemy.enemyType == "chiller" ) {
     var explosion = new Explosion(game, enemy.x, enemy.y);
      sg.explosions.add(explosion);
     enemy.kill();
    }
  },
  //  Called if the player collides with a wall.
  wallCollisionHandler: function (player, wall) {
    var sg = this;
    //sg.player.health -= .1;
    // var explosion = new Explosion(game, player.x, player.y);
    //  sg.explosions.add(explosion);
  },
  //  Called if the bullet hits one of the enemy sprites
  collisionHandler: function (bullet, enemy) {
    var sg = this;
    var loc;
    if (enemy.isBoss){
      loc = bullet;
      if (enemy.hurtFrame){
        enemy.frame = enemy.hurtFrame;
      }
    } else {
      loc = enemy;
    }
    if (bullet.muted){
    var explosion = new Explosion(game, loc.x, loc.y, 1, true);
    } else {
    var explosion = new Explosion(game, loc.x, loc.y, 1, false); 
    }
     sg.explosions.add(explosion);
    
    enemy.health -= 1;
    bullet.kill();
    
    //sg.player.health += .2;
    if (enemy.health <= 0 && !enemy.dying){
      game.score += Math.floor(enemy.pointValue * game.scoreMultiplier); 
      game.scoreMultiplier += 0.005;
    }
  },

  bossBulletCollisionHandler: function(bullet, boss){
    boss.health -= 1;
    var explosion = new Explosion(game, bullet.x, bullet.y);
     sg.explosions.add(explosion);
    bullet.kill();
  },
 
  playerBossCollisionHandler: function(player, boss){
    player.health -= 1;
  },

  // Called if the player collides with a powerup
  powerupHandler: function (player, powerup) {
    var sg = this;
    // needs to be broken out based on type of powerup
    if (!powerup.grabbable){ return; }
    switch (powerup.powerupType){
      case "weapon":
        game.weaponType += 1;
        game.score += Math.floor(powerup.pointValue * game.scoreMultiplier);
        var randomChance = Math.random()*100;
       // console.log(randomChance)
        if (randomChance < 25){
          console.log("okay, going to play")
         game.time.events.add(1000, function(){ sg.nomnomSFX.play(); }, this);
        }
        //play a SFX here
        break;
      case "lycocoin":
        sg.player.lycocoins +=1;
        game.score += Math.floor(powerup.pointValue * game.scoreMultiplier);
        //play a SFX here
        
        //If 5 lycocoins collected, summon a buddy! 
        
        if (sg.player.lycocoins % 5 == 0){
          var newBuddy = new Buddy(game, 1500, 300, (game.buddyCounter % 4), sg.player, sg.bullets, sg.enemies, sg.badbullets)
          
          sg.buddies.add(newBuddy);
          
          game.buddyCounter += 1;
        }
        break;
      case "speed":
        if (game.playerSpeed < 3){ game.playerSpeed += 1; }
        game.score += Math.floor(powerup.pointValue * game.scoreMultiplier);
        sg.player.body.maxVelocity.x= sg.player.maxVel[game.playerSpeed];
        sg.player.body.maxVelocity.y= sg.player.maxVel[game.playerSpeed];
        sg.player.body.drag.x = sg.player.drag[game.playerSpeed];
        sg.player.body.drag.y = sg.player.drag[game.playerSpeed];
          var randomChance = Math.random()*100;
         // console.log(randomChance)
        if (randomChance < 25){
          //console.log("okay, going to play")
         game.time.events.add(1000, function(){ sg.nomnomSFX.play(); }, this);
        }

        break;
    }
    powerup.grabbable = false;
    powerup_sfx.play();
    if (powerup.powerupSFX){
      powerup.powerupSFX.play();
    }
    var tween = game.add.tween(powerup).to( { alpha: 0 }, 100, "Linear", true);
    tween.onComplete.add(function(){ powerup.kill(); }, this);
    
  },

  loseLife: function(){
    var sg = this;
    //remove a life
    game.lives -= 1;
    // Replace this with a player reset function?
    game.weaponType = 1;
    game.playerSpeed = 0;
    sg.fireRate = 250;
    // prevent the player from being able to control temporarily. Begin timer here?
    sg.player.canMove = false;
    //Hide the player from view.
    sg.player.visible = false;
    sg.player.health = 5;
    //Reset the player to start position
    sg.player.x = game.camera.x - 10;
    sg.player.y = game.height/2;
    sg.player.body.acceleration.x = 0;
    sg.player.body.acceleration.y = 0;
    sg.player.body.velocity.x = 0;
    sg.player.body.velocity.y = 0;

    //Check for gameover
    if (game.lives < 0){
      sg.player.x = -9999;
      sg.player.y = -9999;
      sg.gameOver();
    } else {
      sg.nextLifeLaunch();
      sg.player.invincibleTime = this.game.time.time;
      sg.player.invincible = true;
    }
  },

   badBulletCollisionHandler: function(player, badbullet){
      var sg = this;
      var explosion = new Explosion(game, player.x, player.y, 1);
       sg.explosions.add(explosion);
       if (!sg.player.invincible && !sg.player.godMode){
      sg.getHurt();
      if (sg.player.health < 1 && !sg.player.godMode){
        sg.loseLife();
      }

    }
    badbullet.kill();
   },
  // Called if the player collides with an enemy
  playerCollisionHandler: function(player, enemy){
   
    var sg = this;
    var explosion = new Explosion(game, player.x, player.y, 1);
     sg.explosions.add(explosion);
     
    if (!enemy.isBoss){
      enemy.health -= 1;
      // 
      // 
    } else {
      
      if (player.x <= enemy.x){
        player.body.velocity.x = -100;
      } else {
        
        player.body.velocity.x = 200;
      }
    }
    //enemy.kill();
    if (!sg.player.invincible && !sg.player.godMode){
      sg.getHurt();
      if (sg.player.health < 1){
        sg.loseLife();
      }
    }
  },

  getHurt: function(){
    var sg = this;
    sg.player.health -=1;
    game.scoreMultiplier = 1.0;
    sg.player.invincibleTime = this.game.time.time;
    sg.player.invincible = true;
    var randomChance = Math.random()*100;
   // console.log(randomChance);
    if (randomChance < 25){
      sg.ouchSFX.play();
    }
  },

  nextLifeLaunch: function(){
    var sg = this;
    sg.player.x = game.camera.x + 200;
    sg.player.y = 300;
    sg.player.visible = true;
    sg.player.canMove = true; 
    sg.player.body.velocity.x = 3000; 
  },

  manageFrames: function(){
    var sg = this;
    var accel = sg.player.body.acceleration.x;

    if (accel < 0){
      sg.player.frame = 2;
    } else if (accel > 0){
      sg.player.frame = 0;
    } else if (accel == 0){
      sg.player.frame = 1;
    }
  },
  checkInput: function(){
   
    var sg = this;

    if (sg.player.canMove){
      sg.player.body.acceleration.x = 0;
      sg.player.body.acceleration.y = 0;

      if (sg.cursors.up.isDown){
        sg.player.body.acceleration.y = -1 * sg.player.accel[game.playerSpeed];
      } else if (sg.cursors.down.isDown) {
        sg.player.body.acceleration.y = sg.player.accel[game.playerSpeed];
      }   

      if (sg.cursors.left.isDown){
        sg.player.body.acceleration.x = -1 * sg.player.accel[game.playerSpeed];
      } else if (sg.cursors.right.isDown) {
        sg.player.body.acceleration.x = sg.player.accel[game.playerSpeed];
      } else {
        if (sg.player.body.velocity.x <65*sg.difficulty && sg.player.body.velocity.x >= 0 && !sg.paceStopped){
          sg.player.body.velocity.x += 20;
       //   
        }
      }

      if(sg.fireButton.isDown){
        sg.fireBullet(true);
      }
    }
  },
  shutdown: function(){
    var sg = this;

    if (game.level == 1){
      sg.bgtile.destroy();
      sg.mountain.destroy();
      sg.front.destroy();
    }

    if (game.level == 2){ // destroy level 1's assets

      sg.bgtile.destroy();
      sg.mountain.destroy();
      sg.front.destroy();
    }

    if (game.level == 3){ // Destroy level 2's assets


      sg.bgtile.destroy();
      sg.middle_top.destroy();
      sg.middle_bottom.destroy();
      sg.front_top.destroy();
      sg.front_bottom.destroy();
    }

    if (game.level == 4){ // Destroy level 3's assets
      sg.bgtile.destroy();
      sg.mountain.destroy();
      sg.front.destroy();
      sg.fronttwo.destroy();
    }
   
    sg.enemies.destroy();
    sg.bullets.destroy();
    sg.player.destroy();
    sg.badbullets.destroy();
    sg.walls.destroy();
    sg.explosions.destroy();

  },
  gameOver: function(){
    var sg = this;
    sg.gameIsOver = true;
    game.score = game.score;
    var tween = game.add.tween(sg.gameOverScreen).to( { alpha: 1.0 }, 500, "Linear", true);
    sg.logo.body.gravity.y = 600;
    sg.fadeOutMusic(sg.trackPlaying);
    game.time.events.add(7000, function(){sg.fadeOut(500,1.0)}, this);
    sg.gameOverSFX.play();
    ga('send', 'event', 'betablasters', 'finished', 'score', game.score);
    var timeEnded = Math.floor(game.time.time / 60000); // time Ended, in seconds
    var timePlayed = timeEnded - game.timeStarted;
    ga('send', 'event', 'betablasters', 'finished', 'timePlayed', timePlayed);
    //check if player is in the top 10 scores.
    var inTopTen = false;
    console.log("top scores: " + game.topScores);
    for (i=0; i<game.topScores.length; i++){
      // is score greater than this score?
      if (game.score > game.topScores[i]["score"]){
        // go to top ten scene
        inTopTen = true;
        
      } 
    }
  
  if (inTopTen){
    game.time.events.add(8000, function(){this.game.state.start('TopTenScore')}, this).autoDestroy = true;
    ga('send', 'event', 'betablasters', 'earnedTopScore')
  } else {
    
    game.time.events.add(8000, function(){this.game.state.start('ScoreSummary')}, this).autoDestroy = true;
  }

    
  }
};