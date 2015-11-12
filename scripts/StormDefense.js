//CONSTANT GLOBAL VARIABLES
var CANVAS_GAME_ID    	= "canvasGame";
var CANVAS_MENU_ID	  	= "canvasMenu";
var CANVAS_CREDITS_ID 	= "canvasCredits"
var CANVAS_TUTORIAL_ID	= "canvasTutorial";
var CANVAS_SCORE_ID  	= "canvasScore"
var WORLD_HEIGHT 	  = 720;
var WORLD_WIDTH		  = 1280;
var MAX_LASERS		  = 10;
var MAX_ASTEROIDS	  = 10;
var OK_MIN_SCREEN_RATIO = 1.33;  
var OK_MAX_SCREEN_RATIO = 1.35;
//CONSTANT IMG SOURCES
BKG_IMG_SRC			= 'images/bkgImg.png';
PLAYER_IMG_SRC  	= 'images/playerImg.png';
ASTEROID1_IMG_SRC 	= 'images/asteroid1Img.png';
EARTH_IMG_SRC1	 	= 'images/earthImg1.png';
EARTH_IMG_SRC2 	 	= 'images/earthImg2.png';
EARTH_IMG_SRC3	 	= 'images/earthImg3.png';
EARTH_IMG_SRC4 	 	= 'images/earthImg4.png';
LASER_IMG_SRC 	 	= 'images/laserImg.png';
AIMING_IMG_SRC 		= 'images/aimingImg.png';
IONO_IMG_SRC		= 'images/ionoImg.png';
POWER_LEVEL_IMG		= 'images/ionoFillImg.png';
POWER_CONTAINER_IMG	= 'images/ionoContainerImg.png';
ASTEROID1_DEATH_IMG_SRC	= 'images/asteroid1ExplosionImg.png';
ASTEROID_IMPACT_IMG_SRC	= 'images/asteroidImpactImg.png';
//CONSTANT LOADING IMG
LOADING_BKG			= 'loadingBkgImg.png';
LOADING_CONTAINER 	= 'loadingContainerImg.png';
LOADING_BAR			= 'loadingBarImg.png';
//CONSTANT MENU BKG IMG
MENU_IMG_SRC			 = 'images/mainMenuBgImg.png';
CREDITS_IMG_SRC		 	 = 'images/creditsBgImg.png';
TUTORIAL_IMG_SRC		 = 'images/instructBgImg.png';
SCORE_IMG_SRC			 = 'images/topscoresBgImg.png';
//CONSTANT BUTTON IMG
BUTTON_PLAY_IMG_SRC 	 = 'images/playButtonImg.png';
BUTTON_CREDITS_IMG_SRC   = 'images/creditsButtonImg.png';
BUTTON_SCORE_IMG_SRC     = 'images/scoreButtonImg.png';
BUTTON_TUTORIAL_IMG_SRC  = 'images/tutorialButtonImg.png';
BUTTON_BACK_IMG_SRC      = 'images/backButtonImg.png';
BUTTON_MENU_IMG_SRC		 = 'images/menuButtonImg.png';
BUTTON_OPTIONS_IMG_SRC	 = 'images/optionsButtonImg.png';
//CONSTANT HOVER IMG HOVER IS ACTUALLY CLICK
BUTTON_PLAY_HOVER		 = 'images/playButtonClickImg.png';
BUTTON_CREDITS_HOVER	 = 'images/creditsButtonClickImg.png';
BUTTON_SCORE_HOVER	 	 = 'images/scoreButtonClickImg.png';
BUTTON_TUTORIAL_HOVER    = 'images/tutorialButtonClickImg.png';
BUTTON_BACK_HOVER	 	 = 'images/backButtonClickImg.png';
BUTTON_MENU_CLICK		 = 'images/menuButtonClickImg.png';
BUTTON_OPTIONS_CLICK	 = 'images/optionsButtonClickImg.png';
//CONSTANT AUDIO SOURCES
AUDIO_BKG_SRC		= 'sounds/bkg.mp3';
AUDIO_PFIRE_SRC		= 'sounds/shoot1.mp3';
AUDIO_PHIT_SRC		= 'sounds/stationHit1.mp3';
AUDIO_EHIT_SRC		= 'sounds/earthHit1.mp3';
AUDIO_CHARGE_SRC	= 'sounds/charge2.mp3';
AUDIO_AHIT_SRC		= 'sounds/hit1.mp3';
AUDIO_MENUCLICK_SRC = 'sounds/menuClick3.mp3';


//### START OF GAME OBJECT
var Game = {
	STATE_MENU:		0,	
	STATE_PLAYING:	1,
	STATE_CREDITS:  2,
	STATE_TUTORIAL:	3,	
	STATE_SCORE:	4,
	STATE_FIRE:		5,
	STATE_DEAD:		6,
	STATE_GAMEOVER:	999,
	gameState:		0,
	isInitialized:	0,
	
	gameHeight:		WORLD_HEIGHT,
	gameWidth:		WORLD_WIDTH,
	numAst:			0,
	minAst:			0,
	maxAst:			0,
	asteroids:  	[],
	lasers:			[],
	curLaser:		-1,
	dTheta:			0,
	pLevel:         20, //default 20 out of 100
	pScore:			0, //Start with score of zero
	
	//Time Variables
	curTime:		0,
	prevTime:		0,
	deltaTime:		0,
	totalTime:		0,
	
	//Level Variables
	level:			0,
	levelShow:		0,

	playerTheta:	90*(Math.PI/180),
	laserTheta:		0,
	//X and Y are the CENTER location of the img, not the draw
	playerX:		0,
	playerY:		0,
	//X and Y are the DRAW location of the img, not the center
	earthX:			0,
	earthY:			620,
	
	
	//BKG Playing Check
	bkgPlaying:		0,
	
	//Image Checks
	bkgImgLoaded:		0,
	playerImgLoaded:	0,
	asteroid1ImgLoaded:	0,
	earthImg1Loaded:	0,
	earthImg2Loaded:	0,
	earthImg3Loaded:	0,
	earthImg4Loaded:	0,
	laserImgLoaded:		0,
	aimingImgLoaded:	0,
	ionoImgLoaded:		0,
	powerImgLoaded:     0,
	powerContainerImg:  0,
	asteroid1DeathImgLoaded:	0,
	asteroidImpactImgLoaded:	0,
	//Menu Image Checks
	menuImgLoaded:		0,
	creditsImgLoaded:	0,
	tutorialImgLoaded:	0,
	scoreImgLoaded:		0,
	//Button Images
	backButtonImgLoaded:			0,
	backButtonHoverImgLoaded:		0,
	backButtonClickImgLoaded:		0,
	playButtonImgLoaded:			0,
	playButtonHoverImgLoaded:		0,
	playButtonClickImgLoaded:		0,
	creditsButtonImgLoaded:			0,
	creditsButtonHoverImgLoaded:	0,
	creditsButtonClickImgLoaded:	0,
	tutorialButtonImgLoaded:		0,
	tutorialButtonHoverImgLoaded:	0,
	tutorialButtonClickImgLoaded:	0,
	scoreButtonImgLoaded:			0,
	scoreButtonHoverImgLoaded:		0,
	scoreButtonClickImgLoaded:		0,
	//Audio Checks
	audioBKGLoaded:		0,
	audioPFireLoaded:	0,
	audioPHitLoaded:	0,
	audioEHitLoaded:	0,
	audioChargeLoaded:	0,
	audioAHitLoaded:	0,
	//Sprite Sheet Frames
	earthSheetNum:		1,
	ionoState:			1,
	frameTick:			0,
	aimingFrameTick:	0,
	laserFrameTick:		0,
	earthFrame:			0,
	playerFrame:		0,
	playerFireFrame:	70,
	playerDeathFrame:	60,
	asteroidFrame:		0,
	aimingFrame:		0,
	laserFrame:			0,
	
	//Menu Instantiations
	menu: new theMainMenu(MENU_IMG_SRC, BUTTON_PLAY_IMG_SRC, BUTTON_CREDITS_IMG_SRC, BUTTON_SCORE_IMG_SRC, BUTTON_TUTORIAL_IMG_SRC, BUTTON_PLAY_HOVER, BUTTON_CREDITS_HOVER, BUTTON_SCORE_HOVER, BUTTON_TUTORIAL_HOVER),
	credits: new theCredits(CREDITS_IMG_SRC, BUTTON_BACK_IMG_SRC, BUTTON_BACK_HOVER),
	tutorial: new theTutorial(TUTORIAL_IMG_SRC, BUTTON_BACK_IMG_SRC, BUTTON_BACK_HOVER),
	score: new theScore(SCORE_IMG_SRC, BUTTON_BACK_IMG_SRC, BUTTON_BACK_HOVER),
	
	Init: function() {
		Game.gameState = Game.STATE_MENU;
		
		var gameCanvas = document.getElementById(CANVAS_GAME_ID);
		var gameCTX = gameCanvas.getContext("2d");
		var menuCanvas = document.getElementById(CANVAS_MENU_ID);
		var menuCTX = menuCanvas.getContext("2d");
		
		//IMAGE CREATION AND LOAD
		//Background
		this.bkgImg = new Image();
		this.bkgImg.onload = function () { 	Game.bkgImgLoaded = 1; };
        this.bkgImg.src = BKG_IMG_SRC;
		//Player
		this.playerImg = new Image();
		this.playerImg.onload = function () { 	Game.playerImgLoaded = 1; };
        this.playerImg.src = PLAYER_IMG_SRC;
		//Asteroid1
		this.asteroid1Img = new Image();
		this.asteroid1Img.onload = function () { 	Game.asteroid1ImgLoaded = 1; };
        this.asteroid1Img.src = ASTEROID1_IMG_SRC;
		//Earth1
		this.earthImg1 = new Image();
		this.earthImg1.onload = function () { 	Game.earthImg1Loaded = 1; };
        this.earthImg1.src = EARTH_IMG_SRC1;
		//Earth2
		this.earthImg2 = new Image();
		this.earthImg2.onload = function () { 	Game.earthImg2Loaded = 1; };
        this.earthImg2.src = EARTH_IMG_SRC2;
		//Earth3
		this.earthImg3 = new Image();
		this.earthImg3.onload = function () { 	Game.earthImg3Loaded = 1; };
        this.earthImg3.src = EARTH_IMG_SRC3;
		//Earth4
		this.earthImg4 = new Image();
		this.earthImg4.onload = function () { 	Game.earthImg4Loaded = 1; };
        this.earthImg4.src = EARTH_IMG_SRC4;
		//Laser
		this.laserImg = new Image();
		this.laserImg.onload = function () { 	Game.laserImgLoaded = 1; };
        this.laserImg.src = LASER_IMG_SRC;
		//Aiming
		this.aimingImg = new Image();
		this.aimingImg.onload = function () { 	Game.aimingImgLoaded = 1; };
        this.aimingImg.src = AIMING_IMG_SRC;
		//Ionosphere
		this.ionoImg = new Image();
		this.ionoImg.onload = function () { 	Game.ionoImgLoaded = 1; };
        this.ionoImg.src = IONO_IMG_SRC;
		//PowerBar
		this.powerBarImg = new Image();
		this.powerBarImg.onload = function () { 	Game.powerImgLoaded = 1; };
        this.powerBarImg.src = POWER_LEVEL_IMG	;
		//Power Container
		this.powerContainer = new Image();
		this.powerContainer.onload = function () { 	Game.powerContainerImg = 1; };
        this.powerContainer.src = POWER_CONTAINER_IMG;
		//Asteroid1Death
		this.asteroid1DeathImg = new Image();
		this.asteroid1DeathImg.onload = function () { 	Game.asteroid1DeathImgLoaded = 1; };
        this.asteroid1DeathImg.src = ASTEROID1_DEATH_IMG_SRC;
		//AsteroidImpact
		this.asteroidImpactImg = new Image();
		this.asteroidImpactImg.onload = function () { 	Game.asteroidImpactImgLoaded = 1; };
        this.asteroidImpactImg.src = ASTEROID_IMPACT_IMG_SRC;
		
		//SOUND CREATION AND LOAD
		//Background Music
		this.audioBKG = new Audio();
		this.audioBKG.onload = function() { Game.audioBKGLoaded = 1; };
		this.audioBKG.src = AUDIO_BKG_SRC;
		this.audioBKG.volume = 0.2;
		//Player Fire
		this.audioPFire = new Audio();
		this.audioPFire.onload = function() { Game.audioPFireLoaded = 1; };
		this.audioPFire.src = AUDIO_PFIRE_SRC;
		//Player Hit
		this.audioPHit = new Audio();
		this.audioPHit.onload = function() { Game.audioPHitLoaded = 1; };
		this.audioPHit.src = AUDIO_PHIT_SRC;
		//Earth Hit
		this.audioEHit = new Audio();
		this.audioEHit.onload = function() { Game.audioEHitLoaded = 1; };
		this.audioEHit.src = AUDIO_EHIT_SRC;
		//Charge
		this.audioCharge = new Audio();
		this.audioCharge.onload = function() { Game.audioChargeLoaded = 1; };
		this.audioCharge.src = AUDIO_CHARGE_SRC;
		//Asteroid Hit
		this.audioAHit = new Audio();
		this.audioAHit.onload = function() { Game.audioAHitLoaded = 1; };
		this.audioAHit.src = AUDIO_AHIT_SRC;
		
		//Asteroid Init
		for( var m = 0; m < MAX_ASTEROIDS; m++ ) {
			this.asteroids[m] = new Asteroid(m, 0, ASTEROID1_IMG_SRC, 0, 0, 0);
		}
		//Laser Init
		for( var n = 0; n < MAX_LASERS; n++ ) {
			this.lasers[n] = new Laser(n, LASER_IMG_SRC, -1000, -1000, 0, 0);
		}
		
		//MENU LISTENERS
		var menuCanvas = document.getElementById(CANVAS_MENU_ID);
        menuCanvas.addEventListener('click', this.menu.doMenuClick, false);
		menuCanvas.addEventListener('mousemove', this.menu.doMouseOver, false);
		
		var creditCanvas = document.getElementById(CANVAS_CREDITS_ID);
        creditCanvas.addEventListener('click', this.credits.doMenuClick, false);
		creditCanvas.addEventListener('mousemove', this.credits.doMouseOver, false);
		
		var tutorialCanvas = document.getElementById(CANVAS_TUTORIAL_ID);
        tutorialCanvas.addEventListener('click', this.tutorial.doMenuClick, false);
		tutorialCanvas.addEventListener('mousemove', this.tutorial.doMouseOver, false);
		
		var scoreCanvas = document.getElementById(CANVAS_SCORE_ID);
        scoreCanvas.addEventListener('click', this.score.doMenuClick, false);
		scoreCanvas.addEventListener('mousemove', this.score.doMouseOver, false);
		
		menuCanvas.style.display = 'block';
		this.isInitialized = 1;
	},
	
	DrawScreen: function() {
		var gameCanvas = document.getElementById(CANVAS_GAME_ID);
		var ctx = gameCanvas.getContext("2d");
		ctx.fillStyle = "#333333";
        ctx.fillRect(0, 0, this.gameWidth, this.gameHeight);
		ctx.font = "20px Akashi";
		ctx.fillStyle = "white";
		
		//BACKGROUND
		if( Game.bkgImgLoaded != 0 ) {
			ctx.drawImage(this.bkgImg, 0, 0);
		}
		//SCORE
		ctx.fillText("Score: " + Game.pScore, 10, 25);
		//EARTH
		if( Game.earthImg1Loaded != 0 && Game.earthImg2Loaded != 0 && Game.earthImg3Loaded != 0 && Game.earthImg4Loaded != 0 ) {
			switch( this.earthSheetNum ) {
				case 1:
					ctx.drawImage(this.earthImg1, 0, this.earthFrame*100, 1280, 100, this.earthX, this.earthY, 1280, 100);
					break;
				case 2:
					ctx.drawImage(this.earthImg2, 0, this.earthFrame*100, 1280, 100, this.earthX, this.earthY, 1280, 100);
					break;
				case 3:
					ctx.drawImage(this.earthImg3, 0, this.earthFrame*100, 1280, 100, this.earthX, this.earthY, 1280, 100);
					break;
				case 4:
					ctx.drawImage(this.earthImg4, 0, this.earthFrame*100, 1280, 100, this.earthX, this.earthY, 1280, 100);
					break;
				default: console.log("ERROR: Earth Sheet Number");
			}
			if( this.frameTick === 1 ) {
				this.earthFrame += 1;
			}
			if( this.earthFrame >= 120 ) {
				this.earthSheetNum++;
				if( this.earthSheetNum == 5 ) {
					this.earthSheetNum = 1;
				}
				this.earthFrame = 0;
			}
		}
		//IONOSPHERE
		if( Game.ionoImgLoaded != 0 ) {
			ctx.drawImage(this.ionoImg, 0, this.ionoState*130, 1280, 130, this.earthX-10, this.earthY-30, 1280, 130);
		}
		//IONOSPHERE METER
		if( Game.powerContainerImg !=0 ) {
			ctx.drawImage(this.powerContainer, 137, 699);
		}
		if( Game.powerBarImg !=0 ) {
			ctx.drawImage(this.powerBarImg, 0, 0, (this.pLevel*10)+1, 15, 140, 702, (this.pLevel*10)+1, 15);
		}
		//PLAYER
		if( Game.playerImgLoaded != 0 ) {
			//GET THE PLAYER TO THE POSITION WE WANT HIM FIRST
			ctx.save();
			ctx.translate(1355*Math.cos(this.playerTheta), -1355*Math.sin(this.playerTheta));
			ctx.translate(640, 1899);
			ctx.rotate(-this.playerTheta);
			this.playerX = 640+1355*Math.cos(this.playerTheta);
			this.playerY = 1899-1355*Math.sin(this.playerTheta);
			ctx.translate(-36, -36);
			if( Game.gameState === Game.STATE_FIRE ) {
				this.playerFrame = 0;
				ctx.drawImage(this.playerImg, 0, this.playerFireFrame*75, 75, 75, 0, 0, 75, 75);
				this.playerFireFrame++;
				if( this.playerFireFrame >= 100 ) {
					Game.gameState = Game.STATE_PLAYING;
					this.playerFireFrame = 70;
				}
			} else if( Game.gameState === Game.STATE_DEAD ) {
				ctx.drawImage(this.playerImg, 0, this.playerDeathFrame*75, 75, 75, 0, 0, 75, 75);
				if( this.playerDeathFrame < 69 ) {
					if( this.frameTick === 1 ) {
						this.playerDeathFrame++;
					}
				}
			} else {
				ctx.drawImage(this.playerImg, 0, this.playerFrame*75, 75, 75, 0, 0, 75, 75);
			}
			ctx.restore();
			if( this.frameTick === 1 ) {
				this.playerFrame += 1;
			}
			if( this.playerFrame >= 60 ) {
				this.playerFrame = 0;
			}
		}
		//AIMING
		if( Game.aimingImgLoaded != 0 && Game.gameState != Game.STATE_DEAD ) {
			ctx.save();
			ctx.translate(this.aimingX, this.aimingY);
			ctx.rotate(-this.playerTheta);
			ctx.translate(36, 0);
			ctx.drawImage(this.aimingImg, 0, this.aimingFrame*5, 200, 5, 0, 0, 200, 5);
			ctx.restore();
			if( this.aimingFrameTick === 5 ) {
				this.aimingFrame += 1;
			}
			if( this.aimingFrame >= 5 ) {
				this.aimingFrame = 0;
			}
		}
		//LASER
		if( Game.laserImgLoaded != 0 ) {
			for( var i = 0; i < Game.asteroids.length; i++ ) {
				if( Game.lasers[i].isAlive != 0 ) {
					ctx.save();
					Game.lasers[i].drawSelf(ctx);
					ctx.restore();
				}
				if( this.laserFrameTick === 1 && Game.lasers[i].isAlive === 1 ) {
					Game.lasers[i].frame += 1;
				}
				if( Game.lasers[i].frame >= 60 ) {
					Game.lasers[i].frame = 0;
				}
			}
		}
		//ASTEROIDS
		if( Game.asteroid1ImgLoaded != 0 ) {
			for( var i = 0; i < Game.asteroids.length; i++ ) {
				if( Game.asteroids[i].isAlive != 0 ) {
					Game.asteroids[i].drawSelf(ctx);
				}
				if( Game.asteroids[i].state === 1 || Game.asteroids[i].state === 2 ) {
					switch( Game.asteroids[i].astSize ) {
						case 0:
							ctx.drawImage(this.asteroid1DeathImg, Game.asteroids[i].dFrame*100, 0, 100, 100, Game.asteroids[i].x-30, Game.asteroids[i].y-30, 100, 100);
							break;
						case 1:
							ctx.drawImage(this.asteroid1DeathImg, Game.asteroids[i].dFrame*100, 0, 100, 100, Game.asteroids[i].x-15, Game.asteroids[i].y-15, 100, 100);
							break;
						case 2:
							ctx.drawImage(this.asteroid1DeathImg, Game.asteroids[i].dFrame*100, 0, 100, 100, Game.asteroids[i].x, Game.asteroids[i].y, 100, 100);
							break;
						default: console.log("ERROR: Asteroid Drawing Death Size");
					}
					Game.asteroids[i].dFrame++;
					if( Game.asteroids[i].dFrame >= 60 ) {
						Game.asteroids[i].dFrame = 0;
						Game.asteroids[i].state = 0;
					}
				}
				if( this.frameTick === 10 ) {
					Game.asteroids[i].frame += 1;
				}
				if( Game.asteroids[i].frame >= 30 ) {
					Game.asteroids[i].frame = 0;
				}
			}
		}
		//SPRITE SHEET FRAMES
		this.frameTick += 1;
		this.aimingFrameTick += 1;
		this.laserFrameTick += 1;
		if( this.frameTick > 10 ) {
			this.frameTick = 0;
		}
		if( this.aimingFrameTick > 5 ) {
			this.aimingFrameTick = 0;
		}
		if( this.laserFrameTick > 2 ) {
			this.laserFrameTick = 0;
		}
	},
	
	ProcessInputDown: function(event) {
		switch(event.keyCode) {
			//Left Shift - Charge
			case 16:
				Game.CalcPowerLevel();
				break;
			//Spacebar - Shoot
			case 32:
				if( Game.gameState != Game.STATE_FIRE ) {
					Game.ShootLaser();
				}
				break;
			//Left
            case 37:
				if( Game.gameState != Game.STATE_FIRE ) {
					Game.dTheta += 0.4*Math.PI/180.0;
					if( Game.dTheta > 0.6*Math.PI/180.0 ) {
						Game.dTheta = 0.5*Math.PI/180.0;
					}
				}
				break;
            //Right
            case 39:
				if( Game.gameState != Game.STATE_FIRE ) {
					Game.dTheta -= 0.4*Math.PI/180.0;
					if( Game.dTheta < -0.6*Math.PI/180.0 ) {
						Game.dTheta = -0.5*Math.PI/180.0;
					}
				}
				break;
            //Up -- Shoot
            case 38:
				if( Game.gameState != Game.STATE_FIRE ) {
					Game.ShootLaser();
				}
				break;
            //Down -- Charge
            case 40:
				Game.CalcPowerLevel();
				break;
			//W -- Shoot
			case 87:
				if( Game.gameState != Game.STATE_FIRE ) {
					Game.ShootLaser();
				}
				break;
			//A -- Left
			case 65:
				if( Game.gameState != Game.STATE_FIRE ) {
					Game.dTheta += 0.4*Math.PI/180.0;
					if( Game.dTheta > 0.6*Math.PI/180.0 ) {
						Game.dTheta = 0.5*Math.PI/180.0;
					}
				}
				break;
			//S -- Charge
			case 83:
				Game.CalcPowerLevel();
				break;
			//D -- Right
			case 68:
				if( Game.gameState != Game.STATE_FIRE ) {
					Game.dTheta -= 0.4*Math.PI/180.0;
					if( Game.dTheta < -0.6*Math.PI/180.0 ) {
						Game.dTheta = -0.5*Math.PI/180.0;
					}
				}
				break;
			// case 81: TODO - REMOVE COMPLETELY
				// Game.gameState = Game.STATE_GAMEOVER;
				// break;
			default: break;
		}
	},
	
	ProcessInputUp: function(event) {
		switch(event.keyCode) {
			//Left
			case 37:
			//Right
			case 39:	
			//A
			case 65:
			//D
			case 68:
				Game.dTheta = 0;
				break;
			default: break;
		}
	},
	
	CalcPowerLevel: function() {
		var tempPLevel = 0;
		tempPLevel = Math.floor(Math.random() * 5) + 1;
		tempPLevel = tempPLevel*10;
		Game.pLevel += tempPLevel;
		if ( Game.pLevel >= 100 ){
			Game.gameState = Game.STATE_GAMEOVER;
		}
		this.audioCharge.play();
	},
	
	ShootLaser: function() {
		if( Game.pLevel >= 10 ) {
			for( var i = 0; i < Game.lasers.length; i++ ) {
			if( Game.lasers[i].isAlive === 0 && Game.curLaser != i ) {
				this.audioPFire.play();
				Game.pLevel -= 10;
				if( Game.pLevel < 0 ) {
					Game.pLevel = 0;
				}
				Game.curLaser = i;
				Game.lasers[i].isAlive = 1;
				Game.lasers[i].theta = -Game.playerTheta;
				Game.lasers[i].x = Game.playerX+20;
				Game.lasers[i].y = Game.playerY;
				Game.gameState = Game.STATE_FIRE;
				return;
			}
		}
		console.log("ERROR: No available lasers!");
		}
	},
	
	GameOver: function() {
		//console.log("GAME OVER"); //TODO - Implement
	},
	
	CollisionDetection: function() {
		for( var i = 0; i < Game.asteroids.length; i++ ) {
			if( Game.asteroids[i].isAlive != 0 && Game.asteroids[i].state === 0 ) {
				if( Game.asteroids[i].isColliding(Game.playerX-36, Game.playerY-36, "player") ) {
					Game.asteroids[i].destroy();
					Game.gameState = Game.STATE_DEAD;
					this.audioPHit.play();
				}
				for( var j = 0; j < Game.lasers.length; j++ ) {
					if( Game.asteroids[i].isColliding(Game.lasers[j].x-20, Game.lasers[j].y-40, "laser") ) {
						Game.asteroids[i].destroy();
						this.audioAHit.play();
						Game.lasers[j].destroy();
					}
				}
			}
		}
	},
	
	SpawnAsteroids: function(tTime) {
		if( tTime <= 3 ) {
			return;
		} else if( tTime >= 3 && tTime <= 10 ) {
			this.level = 1;
			this.levelShow = 1;
		} else if( tTime >= 10 && tTime <= 60 ) {
			this.levelShow = 0;
			this.minAst = 1;
			this.maxAst = 1;
			//Spawn Asteroids
			if( Game.numAst <= this.minAst && Game.numAst <= MAX_ASTEROIDS ) {
				for( var i = Game.numAst; i < this.maxAst; i++ ) { //FIX
					var speed = Math.floor((Math.random())+1);
					var frame = Math.floor(Math.random()*30);
					var size  = Math.floor(Math.random()*3);
					if( Game.asteroids[i].isAlive === 0 ) {
						Game.asteroids[i].isAlive = 1;
						Game.asteroids[i].speed   = speed;
						Game.asteroids[i].frame   = frame;
						Game.asteroids[i].astSize = size;
						Game.asteroids[i].spawn(speed, frame, size);
						Game.numAst++;
					}
				}
			}
		} else {
			console.log("Level 2");
		}
	},
	
	Update: function() {
		if( Game.gameState === Game.STATE_MENU ) { //MENU UPDATE
			Game.menu.DrawMenu();
		} else if( Game.gameState === Game.STATE_PLAYING || Game.gameState === Game.STATE_FIRE || Game.gameState === Game.STATE_DEAD ) { //GAME UPDATE UPDATE		
			//START BACKGROUND MUSIC
			if( this.bkgPlaying === 0 ) {
				this.audioBKG.play();
				this.audioBKG.loop = true;
				this.bkgPlaying = 1;
			}

			//TIME CALCULATION
			newDate  = new Date();
			this.prevTime = this.curTime;
            this.curTime  = newDate.getTime() / 1000.0;  // end time in seconds
            this.deltaTime = (this.curTime - this.prevTime) // delta time in seconds
			if( this.deltaTime > 30 ) {
				this.deltaTime = 0;
			}
			this.totalTime += this.deltaTime; //Total playtime in seconds
			
			//IONO STATE UPDATE
			if( Game.pLevel < 10 ) {
				Game.ionoState = 0;
			} else {
				Game.ionoState = (Game.pLevel/10)-1;
			}
			
			//AIMING COORD UPDATE
			Game.aimingX = Game.playerX;
			Game.aimingY = Game.playerY;
			
			//PLAYER MOVEMENT UPDATE
			if( Game.gameState === Game.STATE_PLAYING ) {
				Game.playerTheta += Game.dTheta;
			}
			if( Game.playerTheta > (5.0/8.0)*Math.PI ) {
				Game.playerTheta = (5.0/8.0)*Math.PI;
			}
			if( Game.playerTheta < (3.0/8.0)*Math.PI ) {
				Game.playerTheta = (3.0/8.0)*Math.PI;
			}
			
			//NUMBER OF ASTEROIDS CHECK
			if( Game.numAst < 0 ) {
				Game.numAst = 0;
			}
			if( Game.numAst > 0 ) {
				Game.CollisionDetection();
			}
			
			//ASTEROID CREATION
			Game.SpawnAsteroids(this.totalTime);
			
			//LASER COORD UPDATE
			for( var i = 0; i < Game.lasers.length; i++ ) {
				if( Game.lasers[i].y < -1 ) {
					Game.lasers[i].destroy();
				} else {
					Game.lasers[i].x += Math.cos(Game.lasers[i].theta)*2.5;
					Game.lasers[i].y += Math.sin(Game.lasers[i].theta)*2.5;
				}
			}
			
			//ASTEROID MOVEMENT
			for( var j = 0; j < Game.asteroids.length; j++ ) {
				if( Game.asteroids[j].isAlive != 0 ) {
					Game.asteroids[j].moveAst(this.dTime);
				}
			}
			
			//DRAW SCREEN
			Game.DrawScreen();
		} else if( Game.gameState === Game.STATE_CREDITS ) { //CREDITS UPDATE
			Game.credits.DrawCredits();
		} else if(Game.gameState === Game.STATE_TUTORIAL){ //INSTRUCTIONS UPDATE
			Game.tutorial.DrawTutorial();
		} else if(Game.gameState === Game.STATE_SCORE){ //SCORE UPDATE
			Game.score.DrawScore();
		}else if( Game.gameState === Game.STATE_GAMEOVER ) { //GAMEOVER UPDATE
			Game.GameOver();
		} else {
			console.log("ERROR: Game State");
		}
	},
	
	getMousePos: function(canvas, evt) {
		var rect = canvas.getBoundingClientRect();
		return 	{
					x: Math.round( (evt.clientX-rect.left)/(rect.right-rect.left)*canvas.width ),
					y: Math.round( (evt.clientY-rect.top)/(rect.bottom-rect.top)*canvas.height )
				};
	},
	
	ProcessOnClick: function(evt) {
        var gameCanvas = document.getElementById(CANVAS_GAME_ID);
        var mousePos = Game.getMousePos(gameCanvas, evt);
    },
};
//### END OF GAME OBJECT

//### START OF GLOBAL FUNCTIONS
//EVENT HANDLERS
window.addEventListener("resize", doResize, false);
window.addEventListener("click", doClick, false);
window.addEventListener("keydown", doKeydown, false);
window.addEventListener("keyup", doKeyup, false);

//Resizing
function doResize() {
	var canvas1 = document.getElementById(CANVAS_MENU_ID);
	var canvas2 = document.getElementById(CANVAS_CREDITS_ID);
	var canvas3 = document.getElementById(CANVAS_GAME_ID);
	var canvas4 = document.getElementById(CANVAS_TUTORIAL_ID);
	var canvas5 = document.getElementById(CANVAS_SCORE_ID);
	
	// Size things
	UpdateCanvas(canvas1);
	UpdateCanvas(canvas2);
	UpdateCanvas(canvas3);
	UpdateCanvas(canvas4);
	UpdateCanvas(canvas5);

	if ( Game.isInitialized != 0 ) {
		Game.Update();
	}
};

function UpdateCanvas(canvas) {
    var tempDisplay = canvas.style.display;
    canvas.style.display = "block";
   
	canvas.width = WORLD_WIDTH;   // World Coordinate system size should NOT change
	canvas.height = WORLD_HEIGHT; // just the viewing size of it (i.e. style)
	
    var rect = canvas.getBoundingClientRect();

	var gameWidth = window.innerWidth;
	var gameHeight = window.innerHeight - rect.top; 
	var scaleToFitX = gameWidth / canvas.width;  
	var scaleToFitY = gameHeight / canvas.height;

	var currentScreenRatio = gameWidth / gameHeight;
	var optimalRatio = Math.min(scaleToFitX, scaleToFitY);

	canvas.style.position = "fixed";
	
	if ( currentScreenRatio >= OK_MIN_SCREEN_RATIO && currentScreenRatio <= OK_MAX_SCREEN_RATIO ) {
		canvas.style.width = gameWidth + "px";
		canvas.style.height = gameHeight + "px";
		canvas.style.left = 0 + "px";
	} else {
		canvas.style.width = canvas.width * optimalRatio + "px";
		canvas.style.height = canvas.height * optimalRatio + "px";
		canvas.style.left = ( (gameWidth - (canvas.width * optimalRatio)) / 2 ) + "px";

	}
    
    canvas.style.display = tempDisplay;
};

function doClick(e) {
    Game.ProcessOnClick(e);
    
     //Disable browser's default behaviour and prevent multiple event triggers
    e.preventDefault();
    
    return false;		
};

function doKeydown(e) {
	if( Game.gameState === Game.STATE_PLAYING ) {
		Game.ProcessInputDown(e);
	} else {
		return;
	}
};

function doKeyup(e) {
	Game.ProcessInputUp(e);
};

window.onload = function() {
	Game.Init();
	doResize();
	// Start Game Loop
	runGame();
};

function runGame() {
	//Checks Game States
	Game.Update();
	requestAnimationFrame(runGame);
};
//### END OF GLOBAL FUNCTIONS