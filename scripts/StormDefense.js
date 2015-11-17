//CONSTANT GLOBAL VARIABLES
var CANVAS_GAME_ID		= "canvasGame";
var CANVAS_MENU_ID		= "canvasMenu";
var CANVAS_CREDITS_ID	= "canvasCredits"
var CANVAS_TUTORIAL_ID	= "canvasTutorial";
var CANVAS_SCORE_ID		= "canvasScore"
var WORLD_HEIGHT 	  = 720;
var WORLD_WIDTH		  = 1280;
var MAX_LASERS		  = 10;
var MAX_ASTEROIDS	  = 10;
var MAX_PARTICLES	  = 10;
var OK_MIN_SCREEN_RATIO = 1.33;  
var OK_MAX_SCREEN_RATIO = 1.35;
//CONSTANT IMG SOURCES
BKG_IMG_SRC			= 'images/ingamebg/bkgImg.png';
PLAYER_IMG_SRC  	= 'images/player/playerImg.png';
ASTEROID1_IMG_SRC 	= 'images/asteroids/asteroid1Img.png';
ASTEROID2_IMG_SRC	= 'images/asteroids/asteroid2Img.png';
ASTEROID3_IMG_SRC   = 'images/asteroids/asteroid3Img.png';
EARTH_IMG_SRC1	 	= 'images/earth/earthImg1.png';
EARTH_IMG_SRC2 	 	= 'images/earth/earthImg2.png';
EARTH_IMG_SRC3	 	= 'images/earth/earthImg3.png';
EARTH_IMG_SRC4 	 	= 'images/earth/earthImg4.png';
LASER_IMG_SRC 	 	= 'images/player/laserImg.png';
AIMING_IMG_SRC 		= 'images/player/aimingImg.png';
IONO_IMG_SRC		= 'images/ionosphere/ionoImg.png';
POWER_LEVEL_IMG		= 'images/ionosphere/ionoFillImg.png';
POWER_CONTAINER_IMG	= 'images/ionosphere/ionoContainerImg.png';
ASTEROID_DEATH_IMG_SRC	= 'images/asteroids/asteroidDeathImg.png';
ASTEROID_IMPACT_IMG_SRC	= 'images/asteroids/asteroidImpactImg.png';
ASTEROID_IMPACT2_IMG_SRC	= 'images/asteroids/asteroidImpact2Img.png';
//PARTICLE IMAGES
	//TODO - Do we need multiple images for colors?
PARTICLE_IMG_SRC	= 'images/particles/particleImg.png';
//CONSTANT LOADING IMG
LOADING_BKG_IMG_SRC			= 'images/loading/loadingBkgImg.png';
LOADING_CONTAINER_IMG_SRC 	= 'images/loading/loadingContainerImg.png';
LOADING_BAR_IMG_SRC			= 'images/loading/loadingBarImg.png';
//CONSTANT LEVEL IMG
LEVEL1_IMG_SRC	= 'images/ingamebg/level1Img.png';
LEVEL2_IMG_SRC	= 'images/ingamebg/level2Img.png';
LEVEL3_IMG_SRC	= 'images/ingamebg/level3Img.png';
LEVEL4_IMG_SRC	= 'images/ingamebg/level4Img.png';
LEVEL5_IMG_SRC	= 'images/ingamebg/level5Img.png';
//GAME OVER IMG
GAMEOVER_IMG_SRC	= 'images/gameover/gameoverImg.png';
EARTHBURN_IMG_SRC1	= 'images/gameover/earthBurnImg1.png';
EARTHBURN_IMG_SRC2	= 'images/gameover/earthBurnImg2.png';
//CONSTANT MENU BKG IMG
MENU_IMG_SRC			 = 'images/menus/mainMenuBgImg.png';
CREDITS_IMG_SRC		 	 = 'images/menus/creditsBgImg.png';
TUTORIAL_IMG_SRC		 = 'images/menus/instructBgImg.png';
SCORE_IMG_SRC			 = 'images/menus/topscoresBgImg.png';
MENU_EARTH1				 = 'images/menuearth/menuEarth1.png';
MENU_EARTH2				 = 'images/menuearth/menuEarth2.png';
MENU_EARTH3				 = 'images/menuearth/menuEarth3.png';
MENU_EARTH4				 = 'images/menuearth/menuEarth4.png';
//CONSTANT BUTTON IMG
BUTTON_PLAY_IMG_SRC 	 = 'images/buttons/playButtonImg.png';
BUTTON_CREDITS_IMG_SRC   = 'images/buttons/creditsButtonImg.png';
BUTTON_SCORE_IMG_SRC     = 'images/buttons/scoreButtonImg.png';
BUTTON_TUTORIAL_IMG_SRC  = 'images/buttons/tutorialButtonImg.png';
BUTTON_BACK_IMG_SRC      = 'images/buttons/backButtonImg.png';
BUTTON_MENU_IMG_SRC		 = 'images/buttons/menuButtonImg.png';
BUTTON_OPTIONS_IMG_SRC	 = 'images/buttons/optionsButtonImg.png';
//CONSTANT CLICK IMG
BUTTON_PLAY_CLICK		 = 'images/buttons/playButtonClickImg.png';
BUTTON_CREDITS_CLICK	 = 'images/buttons/creditsButtonClickImg.png';
BUTTON_SCORE_CLICK	 	 = 'images/buttons/scoreButtonClickImg.png';
BUTTON_TUTORIAL_CLICK    = 'images/buttons/tutorialButtonClickImg.png';
BUTTON_BACK_CLICK	 	 = 'images/buttons/backButtonClickImg.png';
BUTTON_MENU_CLICK		 = 'images/buttons/menuButtonClickImg.png';
BUTTON_OPTIONS_CLICK	 = 'images/buttons/optionsButtonClickImg.png';
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
	STATE_DYING:	6,
	STATE_DEAD:		7,
	STATE_GAMEOVER:	999,
	gameState:		0,
	gameLoadedAmt:	0,
	isInitialized:	0,
	
	gameHeight:		WORLD_HEIGHT,
	gameWidth:		WORLD_WIDTH,
	numAst:			0,
	minAst:			0,
	maxAst:			0,
	asteroids:  	[],
	lasers:			[],
	particles:		[],
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
	asteroid2ImgLoaded:	0,
	asteroid3ImgLoaded: 0,
	earthImg1Loaded:	0,
	earthImg2Loaded:	0,
	earthImg3Loaded:	0,
	earthImg4Loaded:	0,
	laserImgLoaded:		0,
	aimingImgLoaded:	0,
	ionoImgLoaded:		0,
	powerImgLoaded:     0,
	powerContainerImg:  0,
	asteroidDeathImgLoaded:		0,
	asteroidImpactImgLoaded:	0,
	asteroidImpact2Imgloaded:	0,
	//Particle Image Checks
	particleImageLoaded:	0,
	//Loading Image Checks
	loadingBkgImgLoaded:		0,
	loadingContainerImgLoaded:	0,
	loadingBarImgLoaded:		0,
	//Level Image Checks
	level1ImgLoaded:	0,
	level2ImgLoaded:	0,
	level3ImgLoaded:	0,
	level4ImgLoaded:	0,
	level5ImgLoaded:	0,
	//Game Over Image Checks
	gameoverImgLoaded:	0,
	earthBurnImg1Loaded:0,
	earthBurnImg2Loaded:0,
	//Menu Image Checks
	menuImgLoaded:		0,
	creditsImgLoaded:	0,
	tutorialImgLoaded:	0,
	scoreImgLoaded:		0,
	//Menu Earth Variables
	menuEarthSheetNum:	1,
	menuEarthFrame:		0,
	menuEarthFrameTick:	0,
	menuEarthImg1Loaded:0,
	menuEarthImg2Loaded:0,
	menuEarthImg3Loaded:0,
	menuEarthImg4Loaded:0,
	//Button Images
	backButtonImgLoaded:			0,
	backButtonClickImgLoaded:		0,
	playButtonImgLoaded:			0,
	playButtonClickImgLoaded:		0,
	creditsButtonImgLoaded:			0,
	creditsButtonClickImgLoaded:	0,
	tutorialButtonImgLoaded:		0,
	tutorialButtonClickImgLoaded:	0,
	scoreButtonImgLoaded:			0,
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
	asteroidFrameTick:	0,
	particleFrameTick:	0,
	aimingFrameTick:	0,
	laserFrameTick:		0,
	earthFrame:			0,
	playerFrame:		0,
	playerFireFrame:	70,
	playerDeathFrame:	60,
	aimingFrame:		0,
	//Gameover Sprite Sheet Frames
	earthBurnSheetNum:	1,
	earthBurnFrame:		0,
	earthBurnFrameTick:	0,
	burnFlip:			0,
	
	//Menu Instantiations
	menu: new theMainMenu(MENU_IMG_SRC, BUTTON_PLAY_IMG_SRC, BUTTON_CREDITS_IMG_SRC, BUTTON_SCORE_IMG_SRC, BUTTON_TUTORIAL_IMG_SRC, BUTTON_PLAY_CLICK,
				BUTTON_CREDITS_CLICK, BUTTON_SCORE_CLICK, BUTTON_TUTORIAL_CLICK),
	credits: new theCredits(CREDITS_IMG_SRC, BUTTON_BACK_IMG_SRC, BUTTON_BACK_CLICK),
	tutorial: new theTutorial(TUTORIAL_IMG_SRC, BUTTON_BACK_IMG_SRC, BUTTON_BACK_CLICK),
	score: new theScore(SCORE_IMG_SRC, BUTTON_BACK_IMG_SRC, BUTTON_BACK_CLICK),
	
	Init: function() {
		var gameCanvas = document.getElementById(CANVAS_GAME_ID);
		var gameCTX = gameCanvas.getContext("2d");
		var menuCanvas = document.getElementById(CANVAS_MENU_ID);
		var menuCTX = menuCanvas.getContext("2d");
		//Loading Background
		this.loadingBkgImg = new Image();
		this.loadingBkgImg.onload = function () { 	Game.loadingBkgImgLoaded = 1; Game.gameLoadedAmt++; };
        this.loadingBkgImg.src = LOADING_BKG_IMG_SRC;
		//Loading Container
		this.loadingContainerImg = new Image();
		this.loadingContainerImg.onload = function () { Game.loadingContainerImgLoaded = 1; Game.gameLoadedAmt++; };
        this.loadingContainerImg.src = LOADING_CONTAINER_IMG_SRC;
		//Loading Bar
		this.loadingBarImg = new Image();
		this.loadingBarImg.onload = function () { 	Game.loadingBarImgLoaded = 1; Game.gameLoadedAmt++; };
        this.loadingBarImg.src = LOADING_BAR_IMG_SRC;
		
		menuCanvas.style.display = 'block';
		menuCTX.drawImage(this.loadingBkgImg, 0, 0);
		menuCTX.drawImage(this.loadingContainerImg, 0, 0, 1280, 50, 0, 600, Game.gameLoadedAmt*36, 50);
		menuCTX.drawImage(this.loadingBarImg, 0, 0, 1280, 50, 0, 600, Game.gameLoadedAmt*36, 50);
		
		Game.gameState = Game.STATE_MENU;
		
		//IMAGE CREATION AND LOAD
		//Background
		this.bkgImg = new Image();
		this.bkgImg.onload = function () { 	Game.bkgImgLoaded = 1; Game.gameLoadedAmt++; };
        this.bkgImg.src = BKG_IMG_SRC;
		//Player
		this.playerImg = new Image();
		this.playerImg.onload = function () { 	Game.playerImgLoaded = 1; Game.gameLoadedAmt++; };
        this.playerImg.src = PLAYER_IMG_SRC;
		//Asteroid1
		this.asteroid1Img = new Image();
		this.asteroid1Img.onload = function () {Game.asteroid1ImgLoaded = 1; Game.gameLoadedAmt++; };
        this.asteroid1Img.src = ASTEROID1_IMG_SRC;
		//Asteroid2
		this.asteroid2Img = new Image();
		this.asteroid2Img.onload = function () {Game.asteroid2ImgLoaded = 1; Game.gameLoadedAmt++; };
        this.asteroid2Img.src = ASTEROID2_IMG_SRC;
		//Asteroid3
		this.asteroid3Img = new Image();
		this.asteroid3Img.onload = function () {Game.asteroid3ImgLoaded = 1; Game.gameLoadedAmt++; };
        this.asteroid3Img.src = ASTEROID3_IMG_SRC;
		//Earth1
		this.earthImg1 = new Image();
		this.earthImg1.onload = function () { 	Game.earthImg1Loaded = 1; Game.gameLoadedAmt++; };
        this.earthImg1.src = EARTH_IMG_SRC1;
		//Earth2
		this.earthImg2 = new Image();
		this.earthImg2.onload = function () { 	Game.earthImg2Loaded = 1; Game.gameLoadedAmt++; };
        this.earthImg2.src = EARTH_IMG_SRC2;
		//Earth3
		this.earthImg3 = new Image();
		this.earthImg3.onload = function () { 	Game.earthImg3Loaded = 1; Game.gameLoadedAmt++; };
        this.earthImg3.src = EARTH_IMG_SRC3;
		//Earth4
		this.earthImg4 = new Image();
		this.earthImg4.onload = function () { 	Game.earthImg4Loaded = 1; Game.gameLoadedAmt++; };
        this.earthImg4.src = EARTH_IMG_SRC4;
		//Laser
		this.laserImg = new Image();
		this.laserImg.onload = function () { 	Game.laserImgLoaded = 1; Game.gameLoadedAmt++; };
        this.laserImg.src = LASER_IMG_SRC;
		//Aiming
		this.aimingImg = new Image();
		this.aimingImg.onload = function () { 	Game.aimingImgLoaded = 1; Game.gameLoadedAmt++; };
        this.aimingImg.src = AIMING_IMG_SRC;
		//Ionosphere
		this.ionoImg = new Image();
		this.ionoImg.onload = function () { 	Game.ionoImgLoaded = 1; Game.gameLoadedAmt++; };
        this.ionoImg.src = IONO_IMG_SRC;
		//PowerBar
		this.powerBarImg = new Image();
		this.powerBarImg.onload = function () { Game.powerImgLoaded = 1; Game.gameLoadedAmt++; };
        this.powerBarImg.src = POWER_LEVEL_IMG;
		//Power Container
		this.powerContainer = new Image();
		this.powerContainer.onload = function () { 	Game.powerContainerImg = 1; Game.gameLoadedAmt++; };
        this.powerContainer.src = POWER_CONTAINER_IMG;
		//AsteroidDeath
		this.asteroidDeathImg = new Image();
		this.asteroidDeathImg.onload = function () { 	Game.asteroidDeathImgLoaded = 1; Game.gameLoadedAmt++; };
        this.asteroidDeathImg.src = ASTEROID_DEATH_IMG_SRC;
		//AsteroidImpact1
		this.asteroidImpactImg = new Image();
		this.asteroidImpactImg.onload = function () { 	Game.asteroidImpactImgLoaded = 1; Game.gameLoadedAmt++; };
        this.asteroidImpactImg.src = ASTEROID_IMPACT_IMG_SRC;
		//AsteroidImpact2
		this.asteroidImpact2Img = new Image();
		this.asteroidImpact2Img.onload = function () { 	Game.asteroidImpact2ImgLoaded = 1; Game.gameLoadedAmt++; };
        this.asteroidImpact2Img.src = ASTEROID_IMPACT2_IMG_SRC;
		
		//PARTICLES IMAGES CREATION AND LOAD
		//Particle Base
		this.particleImg = new Image();
		this.particleImg.onload = function () {	Game.particleImageLoaded = 1; Game.gameLoadedAmt++; };
		this.particleImg.src = PARTICLE_IMG_SRC;
		
		//GAMEOVER IMAGES CREATE AND LOAD
		this.gameoverImg = new Image();
		this.gameoverImg.onload = function () { Game.gameoverImgLoaded = 1; Game.gameLoadedAmt++; };
		this.gameoverImg.src = GAMEOVER_IMG_SRC;
		//EarthBurn1
		this.earthBurnImg1 = new Image();
		this.earthBurnImg1.onload = function () { 	Game.earthBurnImg1Loaded = 1; Game.gameLoadedAmt++; };
        this.earthBurnImg1.src = EARTHBURN_IMG_SRC1;
		//EarthBurn2
		this.earthBurnImg2 = new Image();
		this.earthBurnImg2.onload = function () { 	Game.earthBurnImg2Loaded = 1; Game.gameLoadedAmt++; };
        this.earthBurnImg2.src = EARTHBURN_IMG_SRC2;
		
		//MENU EARTH IMAGES CREATION AND LOAD
		//menuEarth1
		this.menuEarthImg1 = new Image();
		this.menuEarthImg1.onload = function () { 	Game.menuEarthImg1Loaded = 1; Game.gameLoadedAmt++; };
        this.menuEarthImg1.src = MENU_EARTH1;
		//menuEarth2
		this.menuEarthImg2 = new Image();
		this.menuEarthImg2.onload = function () { 	Game.menuEarthImg2Loaded = 1; Game.gameLoadedAmt++; };
        this.menuEarthImg2.src = MENU_EARTH2;
		//menuEarth3
		this.menuEarthImg3 = new Image();
		this.menuEarthImg3.onload = function () { 	Game.menuEarthImg3Loaded = 1; Game.gameLoadedAmt++; };
        this.menuEarthImg3.src = MENU_EARTH3;
		//menuEarth4
		this.menuEarthImg4 = new Image();
		this.menuEarthImg4.onload = function () { 	Game.menuEarthImg4Loaded = 1; Game.gameLoadedAmt++; };
        this.menuEarthImg4.src = MENU_EARTH4;
		
		//LEVEL IMAGES CREATION AND LOAD
		//Level 1
		this.level1Img = new Image();
		this.level1Img.onload = function () { 	Game.level1ImgLoaded = 1; Game.gameLoadedAmt++; };
        this.level1Img.src = LEVEL1_IMG_SRC;
		//Level 2
		this.level2Img = new Image();
		this.level2Img.onload = function () { 	Game.level2ImgLoaded = 1; Game.gameLoadedAmt++; };
        this.level2Img.src = LEVEL2_IMG_SRC;
		//Level 3
		this.level3Img = new Image();
		this.level3Img.onload = function () { 	Game.level3ImgLoaded = 1; Game.gameLoadedAmt++; };
        this.level3Img.src = LEVEL3_IMG_SRC;
		//Level 4
		this.level4Img = new Image();
		this.level4Img.onload = function () { 	Game.level4ImgLoaded = 1; Game.gameLoadedAmt++; };
        this.level4Img.src = LEVEL4_IMG_SRC;
		//Level 5
		this.level5Img = new Image();
		this.level5Img.onload = function () { 	Game.level5ImgLoaded = 1; Game.gameLoadedAmt++; };
        this.level5Img.src = LEVEL5_IMG_SRC;
		
		//SOUND CREATION AND LOAD
		//Background Music
		this.audioBKG = new Audio();
		this.audioBKG.onload = function() { Game.audioBKGLoaded = 1; Game.gameLoadedAmt++; };
		this.audioBKG.src = AUDIO_BKG_SRC;
		this.audioBKG.volume = 0.2;
		//Player Fire
		this.audioPFire = new Audio();
		this.audioPFire.onload = function() { Game.audioPFireLoaded = 1; Game.gameLoadedAmt++; };
		this.audioPFire.src = AUDIO_PFIRE_SRC;
		//Player Hit
		this.audioPHit = new Audio();
		this.audioPHit.onload = function() { Game.audioPHitLoaded = 1; Game.gameLoadedAmt++; };
		this.audioPHit.src = AUDIO_PHIT_SRC;
		//Earth Hit
		this.audioEHit = new Audio();
		this.audioEHit.onload = function() { Game.audioEHitLoaded = 1; Game.gameLoadedAmt++; };
		this.audioEHit.src = AUDIO_EHIT_SRC;
		//Charge
		this.audioCharge = new Audio();
		this.audioCharge.onload = function() { Game.audioChargeLoaded = 1; Game.gameLoadedAmt++; };
		this.audioCharge.src = AUDIO_CHARGE_SRC;
		//Asteroid Hit
		this.audioAHit = new Audio();
		this.audioAHit.onload = function() { Game.audioAHitLoaded = 1; Game.gameLoadedAmt++; };
		this.audioAHit.src = AUDIO_AHIT_SRC;
		
		//Asteroid Init
		for( var m = 0; m < MAX_ASTEROIDS; m++ ) {
			this.asteroids[m] = new Asteroid(m, 0, 0, 0);
		}
		//Laser Init
		for( var n = 0; n < MAX_LASERS; n++ ) {
			this.lasers[n] = new Laser(n, 0, 0);
		}
		//Particles Init
		for( var o = 0; o < MAX_PARTICLES; o++ ) {
			this.particles[o] = new Particle(o, 0, 0, 0);
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
		
		// if( Game.gameLoadedAmt >= 35 ) {
			// Game.isInitialized = 1;
		// }
		var dumber = 0;
		while (( Game.gameLoadedAmt >= 28 ) && (dumber < 10000000) ){
			Game.isInitialized = 0;
			dumber++;
		}
		//alert(Game.gameLoadedAmt);
		Game.isInitialized = 1;
	},
	
	ReInit: function() {
		//Make sure Gamestate is right
		this.gameState = this.STATE_GAMEOVER;
		//Turn off Music
		this.audioBKG.pause();
		this.audioBKG.currentTime = 0;
		//Reset Arrays
		//Asteroid Init
		for( var m = 0; m < MAX_ASTEROIDS; m++ ) {
			this.asteroids[m].x = 0;
			this.asteroids[m].y = 0;
			this.asteroids[m].isAlive = 0;
		}
		//Laser Init
		for( var n = 0; n < MAX_LASERS; n++ ) {
			this.lasers[n].x = 0;
			this.lasers[n].y = 0;
			this.lasers[n].isAlive = 0;
		}
		//Particles Init
		for( var o = 0; o < MAX_PARTICLES; o++ ) {
			this.particles[o].x = 0;
			this.particles[o].y = 0;
			this.particles[o].isAlive = 0;
		}
		//General Variables
		this.numAst = 0;
		this.minAst = 0;
		this.maxAst = 0;
		this.dTheta = 0;
		this.pLevel = 20;
		this.pScore = 0;

		//Time Variables
		this.curTime	= 0;
		this.prevTime	= 0;
		this.deltaTime	= 0;
		this.totalTime	= 0;
		
		//Level Variables
		this.level		= 0;
		this.levelShow	= 0;

		//Player Variables
		this.playerTheta = 90*(Math.PI/180);
		this.playerX	= 0;
		this.playerY	= 0;
	
		//BKG Playing Check
		this.bkgPlaying = 0;
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
		//LEVEL
		if( this.levelShow === 1 ) {
			switch( this.level ) {
				case 1:
					if( this.level1ImgLoaded != 0 ) {
						ctx.drawImage(this.level1Img, 450, 160);
					}
					break;
				case 2:
					if( this.level2ImgLoaded != 0 ) {
						ctx.drawImage(this.level2Img, 550, 160);
					}
					break;
				case 3:
					if( this.level3ImgLoaded != 0 ) {
						ctx.drawImage(this.level3Img, 550, 160);
					}
					break;
				case 4:
					if( this.level4ImgLoaded != 0 ) {
						ctx.drawImage(this.level4Img, 550, 160);
					}
					break;
				case 5:
					if( this.level5ImgLoaded != 0 ) {
						ctx.drawImage(this.level5Img, 550, 160);
					}
					break;
				default: console.log("ERROR: Level Draw"); break;
			}
		}
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
		//PLAYER
		if( Game.playerImgLoaded != 0 && Game.gameState != Game.STATE_DEAD ) {
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
			} else if( Game.gameState === Game.STATE_DYING ) {
				ctx.drawImage(this.playerImg, 0, this.playerDeathFrame*75, 75, 75, 0, 0, 75, 75);
				if( this.frameTick === 1 ) {
					this.playerDeathFrame++;
				}
				if( this.playerDeathFrame >= 69 ) {
					Game.gameState = Game.STATE_DEAD;
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
		if( Game.aimingImgLoaded != 0 && (Game.gameState === Game.STATE_PLAYING || Game.gameState === Game.STATE_FIRE) ) {
			ctx.save();
			ctx.translate(this.aimingX, this.aimingY);
			ctx.rotate(-this.playerTheta);
			ctx.translate(36, 0);
			ctx.drawImage(this.aimingImg, 0, this.aimingFrame*5, 200, 3, 0, 0, 200, 3);
			ctx.restore();
			if( this.aimingFrameTick === 1 ) {
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
					Game.lasers[i].drawSelf(ctx, this.laserImg);
					ctx.restore();
				}
				if( this.laserFrameTick === 1 && Game.lasers[i].isAlive === 1 ) {
					Game.lasers[i].frame += 1;
				}
				if( Game.lasers[i].frame >= 10 ) {
					Game.lasers[i].frame = 0;
				}
			}
		}
		//ASTEROIDS
		if( Game.asteroid1ImgLoaded != 0 && Game.asteroid2ImgLoaded != 0 && Game.asteroid3ImgLoaded != 0 ) {
			for( var i = 0; i < Game.asteroids.length; i++ ) {
				if( Game.asteroids[i].isAlive != 0 && Game.asteroids[i].state === 0 || Game.asteroids[i].state === 2 ) {
					Game.asteroids[i].drawSelf(ctx, this.asteroid1Img, this.asteroid2Img, this.asteroid3Img);
					if( this.asteroidFrameTick === 1 ) {
						Game.asteroids[i].frame += 1;
					}
					if( Game.asteroids[i].frame >= 60 ) {
						Game.asteroids[i].frame = 0;
					}
				}
				if( Game.asteroids[i].state === 1 || Game.asteroids[i].state === 2 ) {
					switch( Game.asteroids[i].astSize ) {
						case 0:
							ctx.drawImage(this.asteroidDeathImg, Game.asteroids[i].dFrame*100, 0, 100, 100, Game.asteroids[i].x-30, Game.asteroids[i].y-30, 100, 100);
							break;
						case 1:
							ctx.drawImage(this.asteroidDeathImg, Game.asteroids[i].dFrame*100, 0, 100, 100, Game.asteroids[i].x-15, Game.asteroids[i].y-15, 100, 100);
							break;
						case 2:
							ctx.drawImage(this.asteroidDeathImg, Game.asteroids[i].dFrame*100, 0, 100, 100, Game.asteroids[i].x, Game.asteroids[i].y, 100, 100);
							break;
						default: console.log("ERROR: Asteroid Drawing Death Size");
					}
					Game.asteroids[i].dFrame++;
					if( Game.asteroids[i].dFrame >= 60 ) {
						Game.asteroids[i].dFrame = 0;
						if( Game.asteroids[i].state === 2 ) {
							Game.asteroids[i].state = 0;
						} else if( Game.asteroids[i].state != 2 ) {
							Game.asteroids[i].isAlive = 0;
							Game.asteroids[i].state = 0;
						}
					}
				}
				if( Game.asteroids[i].state === 3 ) {
					if( Game.asteroids[i].astSize === 2 ) {
						ctx.drawImage(this.asteroidImpact2Img, Game.asteroids[i].iFrame*100, 0, 100, 100, Game.asteroids[i].x, Game.asteroids[i].y, 100, 100);
					} else {
						ctx.drawImage(this.asteroidImpactImg, Game.asteroids[i].iFrame*75, 0, 75, 75, Game.asteroids[i].x, Game.asteroids[i].y, 75, 75);
					}
					Game.asteroids[i].iFrame++;
					if( Game.asteroids[i].iFrame >= 120 ) {
						Game.asteroids[i].iFrame = 0;
						Game.asteroids[i].isAlive = 0;
						Game.asteroids[i].state = 0;
						Game.numAst--;
					}
				}
			}
		}
		//PARTICLES
		if( Game.particleImgLoaded != 0 ) {
			for( var i = 0; i < Game.particles.length; i++ ) {
				if( Game.particles[i].isAlive === 1 ) {
					Game.particles[i].drawSelf(ctx, this.particleImg);
					if( this.particleFrameTick === 1 ) {
						Game.particles[i].frame += 1;
					}
					if( Game.particles[i].frame >= 30 ) {
						Game.particles[i].frame = 0;
					}
				}
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
		//SPRITE SHEET FRAMES
		this.frameTick += 1;
		this.asteroidFrameTick += 1;
		this.particleFrameTick += 1;
		this.aimingFrameTick += 1;
		this.laserFrameTick += 1;
		if( this.frameTick >= 10 ) {
			this.frameTick = 0;
		}
		if( this.asteroidFrameTick >= 5 ) {
			this.asteroidFrameTick = 0;
		}
		if( this.particleFrameTick >= 5 ) {
			this.particleFrameTick = 0;
		}
		if( this.aimingFrameTick >= 5 ) {
			this.aimingFrameTick = 0;
		}
		if( this.laserFrameTick >= 2 ) {
			this.laserFrameTick = 0;
		}
	},
	
	ProcessInputDown: function(event) {
		if( Game.gameState === Game.STATE_GAMEOVER ) {
			if( event != null ) {
				var gameCanvas = document.getElementById(CANVAS_GAME_ID);
				var gameCTX = gameCanvas.getContext("2d");
				var menuCanvas = document.getElementById(CANVAS_MENU_ID);
				var menuCTX = menuCanvas.getContext("2d");
				menuCanvas.style.display = 'block';
				gameCanvas.style.display = 'none';
				Game.gameState = Game.STATE_MENU;
			}
		} else {
			switch(event.keyCode) {
				//Left Shift - Charge
				case 16:
					if( Game.gameState === Game.STATE_PLAYING ) {
						Game.CalcPowerLevel();
					}
					break;
				//Spacebar - Shoot
				case 32:
					if( Game.gameState === Game.STATE_PLAYING ) {
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
					if( Game.gameState === Game.STATE_PLAYING ) {
						Game.ShootLaser();
					}
					break;
				//Down -- Charge
				case 40:
					if( Game.gameState === Game.STATE_PLAYING ) {
						Game.CalcPowerLevel();
					}
					break;
				//W -- Shoot
				case 87:
					if( Game.gameState === Game.STATE_PLAYING ) {
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
					if( Game.gameState === Game.STATE_PLAYING ) {
						Game.CalcPowerLevel();
					}
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
				default: break;
			}
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
		Game.ReInit();
		var gameCanvas = document.getElementById(CANVAS_GAME_ID);
		var ctx = gameCanvas.getContext("2d");
		ctx.fillStyle = "#333333";
        ctx.fillRect(0, 0, this.gameWidth, this.gameHeight);
		
		ctx.drawImage(this.gameoverImg, 0, 0);
		if( Game.earthImg1Loaded != 0 && Game.earthImg2Loaded != 0 ) {
			switch( this.earthBurnSheetNum ) {
				case 1:
					ctx.drawImage(this.earthBurnImg1, 0, this.earthBurnFrame*250, 1280, 250, 0, 470, 1280, 250);
					break;
				case 2:
					ctx.drawImage(this.earthBurnImg2, 0, this.earthBurnFrame*250, 1280, 250, 0, 470, 1280, 250);
					break;
				default: console.log("ERROR: Earth Burn Sheet Num");
			}
		}
		if( this.earthBurnFrameTick === 1 ) {
			if( this.burnFlip === 1 ) {
				this.earthBurnFrame--;
			} else {
				this.earthBurnFrame++;
			}
		}
		if( this.earthBurnFrame >= 90 && this.burnFlip === 0 ) {
			this.earthBurnSheetNum++;
			this.earthBurnFrame = 0;
			if( this.earthBurnSheetNum >= 3 ) {
				this.earthBurnSheetNum = 2;
				this.earthBurnFrame = 89;
				this.burnFlip = 1;
			}
		}
		if( this.burnFlip === 1 ) {
			if( this.earthBurnFrame <= 0 ) {
				this.burnFlip = 0;
			}
		}
		this.earthBurnFrameTick++;
		if( this.earthBurnFrameTick >= 5 ) {
			this.earthBurnFrameTick = 0;
		}
	},
	
	CollisionDetection: function() {
		//Asteroids
		for( var i = 0; i < Game.asteroids.length; i++ ) {
			if( Game.asteroids[i].isAlive != 0 && Game.asteroids[i].state === 0 ) {
				if( Game.asteroids[i].isColliding(Game.playerX-36, Game.playerY-36, "player") ) {
					Game.asteroids[i].destroy();
					Game.gameState = Game.STATE_DYING;
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
		//Particles
		for( var i = 0; i < Game.particles.length; i++ ) {
			if( Game.particles[i].isAlive != 0 ) {
				if( Game.particles[i].isColliding(Game.playerX-36, Game.playerY-36, "player") ) {
					Game.particles[i].destroy();
					//Add in Particle Collect Noise
					//Add Power to LaserCharge
					//Add Check for overcharge
				}
				for( var j = 0; j < Game.lasers.length; j++ ) {
					if( Game.particles[i].isColliding(Game.lasers[j].x-20, Game.lasers[j].y-40, "laser") ) {
						Game.particles[i].destroy();
						//TODO - Decide if we want a sound here
					}
				}
			}
		}
	},
	
	SpawnAsteroids: function(tTime) {
		if( tTime <= 3 ) {
			this.minAst = 0;
			this.maxAst = 0;
			return;
		} else if( tTime >= 3 && tTime <= 10 ) {
			this.level = 1;
			this.levelShow = 1;
		} else if( tTime >= 10 && tTime <= 60 ) {
			this.levelShow = 0;
			this.minAst = 1;
			this.maxAst = 1;
		} else if( tTime >= 60 && tTime <= 65 ) {
			this.level = 2;
			this.levelShow = 1;
		} else if( tTime >= 65 && tTime <= 90 ) {
			this.levelShow = 0;
			this.minAst = 1;
			this.maxAst = 3;
		} else if( tTime >= 90 && tTime <= 95 ) {
			this.level = 3;
			this.levelShow = 1;
		} else if( tTime >= 95 && tTime <= 120 ) {
			this.levelShow = 0;
			this.minAst = 2;
			this.maxAst = 4;
		} else if( tTime >= 120 && tTime <= 125 ) {
			this.level = 4;
			this.levelShow = 1;
		} else if( tTime >= 125 && tTime <= 160 ) {
			this.levelShow = 0;
			this.minAst = 2;
			this.maxAst = 6;
		} else if( tTime >= 160 && tTime <= 165 ) {
			this.level = 5;
			this.levelShow = 1;
		} else if( tTime >= 165 && tTime <= 200 ) {
			this.levelShow = 0;
			this.minAst = 3;
			this.maxAst = 6;
		} else {
			console.log("YOU WIN.");
		}
		//Spawn Asteroids
		if( Game.numAst <= this.minAst && Game.numAst <= MAX_ASTEROIDS ) {
			for( var i = Game.numAst; i < this.maxAst; i++ ) {
				var speed = Math.floor((Math.random())+1);
				var frame = Math.floor(Math.random()*60);
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
	},
	
	Update: function() {
		if( Game.gameState === Game.STATE_MENU ) { //MENU UPDATE
			Game.menu.DrawMenu(Game.menuEarthSheetNum, Game.menuEarthFrame, Game.menuEarthFrameTick, Game.menuEarthImg1, Game.menuEarthImg2, Game.menuEarthImg3, Game.menuEarthImg4);
			if( Game.menuEarthFrameTick === 1 ) {
				Game.menuEarthFrame += 1;
			}
			if( Game.menuEarthFrame >= 60 ) {
				Game.menuEarthSheetNum++;
				if( Game.menuEarthSheetNum == 5 ) {
					Game.menuEarthSheetNum = 1;
				}
				Game.menuEarthFrame = 0;
			}
			Game.menuEarthFrameTick++;
			if( Game.menuEarthFrameTick >= 10 ) {
				Game.menuEarthFrameTick = 0;
			}
		} else if( Game.gameState === Game.STATE_PLAYING || Game.gameState === Game.STATE_FIRE || Game.gameState === Game.STATE_DYING ) { //GAME UPDATE UPDATE		
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
			if( Game.gameState === Game.STATE_PLAYING || Game.gameState === Game.STATE_DYING ) {
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
					Game.lasers[i].x += Math.cos(Game.lasers[i].theta)*3.5;
					Game.lasers[i].y += Math.sin(Game.lasers[i].theta)*3.5;
				}
			}
			
			//ASTEROID MOVEMENT
			for( var j = 0; j < Game.asteroids.length; j++ ) {
				if( Game.asteroids[j].isAlive != 0 && Game.asteroids[j].state != 3 ) {
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
		}else if( Game.gameState === Game.STATE_GAMEOVER || Game.STATE_DEAD ) { //GAMEOVER UPDATE
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
	if( Game.gameState === Game.STATE_PLAYING || Game.gameState === Game.STATE_DYING || Game.STATE_GAMEOVER ) {
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
	if( Game.isInitialized === 1 ) {
		runGame();
	}
};

function runGame() {
	//Checks Game States
	Game.Update();
	requestAnimationFrame(runGame);
};
//### END OF GLOBAL FUNCTIONS