//CONSTANT GLOBAL VARIABLES
var CANVAS_GAME_ID			= "canvasGame";
var CANVAS_MENU_ID			= "canvasMenu";
var CANVAS_CREDITS_ID		= "canvasCredits"
var CANVAS_TUTORIAL_ID		= "canvasTutorial";
var CANVAS_SCORE_ID			= "canvasScore"
var WORLD_HEIGHT			= 720;
var WORLD_WIDTH				= 1280;
var MAX_LASERS				= 20;
var MAX_ASTEROIDS			= 10;
var MAX_PARTICLES			= 10;
var MAX_CHARGE				= 40;
var OK_MIN_SCREEN_RATIO		= 1.33;  
var OK_MAX_SCREEN_RATIO		= 1.35;
//CONSTANT IMGS
BKG_IMG_SRC					= 'images/ingamebg/bkgImg.png';
PLAYER_IMG_SRC				= 'images/player/playerImg.png';
EARTH_IMG_SRC1				= 'images/earth/earthImg1.png';
EARTH_IMG_SRC2				= 'images/earth/earthImg2.png';
EARTH_IMG_SRC3				= 'images/earth/earthImg3.png';
EARTH_IMG_SRC4				= 'images/earth/earthImg4.png';
LASER_IMG_SRC				= 'images/player/laserImg.png';
SUPERLASER_IMG_SRC			= 'images/player/superLaserImg.png';
AIMING_IMG_SRC				= 'images/player/aimingImg.png';
IONO_IMG_SRC				= 'images/ionosphere/ionoImg.png';
PARTICLE_IMG_SRC			= 'images/particles/particleImg.png';
//CONSTANT ASTEROID IMGS
ASTEROID1_IMG_SRC 			= 'images/asteroids/asteroid1Img.png';
ASTEROID2_IMG_SRC			= 'images/asteroids/asteroid2Img.png';
ASTEROID3_IMG_SRC			= 'images/asteroids/asteroid3Img.png';
ASTEROID_DEATH_IMG_SRC		= 'images/asteroids/asteroidDeathImg.png';
ASTEROID_IMPACT_IMG_SRC		= 'images/asteroids/asteroidImpactImg.png';
ASTEROID_IMPACT2_IMG_SRC	= 'images/asteroids/asteroidImpact2Img.png';
//CONSTANT POWER IMGS
POWER_LEVEL_IMG				= 'images/ionosphere/ionoFillImg.png';
POWER_CONTAINER_IMG			= 'images/ionosphere/ionoContainerImg.png';
PROJECTED_IMG_SRC			= 'images/ionosphere/ionoProjectedImg.png';
PLASMA_CONTAINER_IMG		= 'images/ionosphere/plasmaContainerImg.png';
PLASMA_LEVEL_IMG_SRC		= 'images/ionosphere/plasmaFillImg.png';
LEFTICON_IMG_SRC			= 'images/ionosphere/leftIonoIconImg.png';
RIGHTICON_IMG_SRC			= 'images/ionosphere/rightIonoIconImg.png';
HARVEST_IMG_SRC				= 'images/player/harvestImg.png';
//CONSTANT LOADING IMGS
LOADING_BKG_IMG_SRC			= 'images/loading/loadingBkgImg.png';
LOADING_CONTAINER_IMG_SRC 	= 'images/loading/loadingContainerImg.png';
LOADING_BAR_IMG_SRC			= 'images/loading/loadingBarImg.png';
//CONSTANT LEVEL IMGS
LEVEL1_IMG_SRC				= 'images/ingamebg/level1Img.png';
LEVEL2_IMG_SRC				= 'images/ingamebg/level2Img.png';
LEVEL3_IMG_SRC				= 'images/ingamebg/level3Img.png';
LEVEL4_IMG_SRC				= 'images/ingamebg/level4Img.png';
LEVEL5_IMG_SRC				= 'images/ingamebg/level5Img.png';
//CONSTANT GAMEOVER IMGS
GAMEOVER_IMG_SRC			= 'images/gameover/gameoverImg.png';
EARTHBURN_IMG_SRC1			= 'images/gameover/earthBurnImg1.png';
EARTHBURN_IMG_SRC2			= 'images/gameover/earthBurnImg2.png';
//CONSTANT MENU BKG IMGS
MENU_IMG_SRC				= 'images/menus/mainMenuBgImg.png';
CREDITS_IMG_SRC				= 'images/menus/creditsBgImg.png';
TUTORIAL_IMG_SRC			= 'images/menus/tutorialBgImg.png';
SCORE_IMG_SRC				= 'images/menus/topscoresBgImg.png';
MENU_EARTH1					= 'images/menuearth/menuEarth1.png';
MENU_EARTH2					= 'images/menuearth/menuEarth2.png';
MENU_EARTH3					= 'images/menuearth/menuEarth3.png';
MENU_EARTH4					= 'images/menuearth/menuEarth4.png';
//CONSTANT TUTORIAL IMGS
TUTORIAL_TEXT1_IMG_SRC		= 'images/tutorial/tutorialtext1Img.png';
TUTORIAL_ANIM1_IMG_SRC		= 'images/tutorial/tutorialanimIntroImg.png';
TUTORIAL_TEXT2_IMG_SRC		= 'images/tutorial/tutorialtext2Img.png';
TUTORIAL_ANIM2_IMG_SRC		= 'images/tutorial/tutorialanimMovementImg.png';
TUTORIAL_TEXT3_IMG_SRC		= 'images/tutorial/tutorialtext3Img.png';
TUTORIAL_ANIM3_IMG_SRC		= 'images/tutorial/tutorialanimChargingImg.png';
TUTORIAL_TEXT4_IMG_SRC		= 'images/tutorial/tutorialtext4Img.png';
TUTORIAL_ANIM4_IMG_SRC		= 'images/tutorial/tutorialanimHarvestingImg.png';
TUTORIAL_TEXT5_IMG_SRC		= 'images/tutorial/tutorialtext5Img.png';
TUTORIAL_ANIM5_IMG_SRC		= 'images/tutorial/tutorialanimShootingImg.png';
TUTORIAL_TEXT6_IMG_SRC		= 'images/tutorial/tutorialtext6Img.png';
TUTORIAL_ANIM6_IMG_SRC		= 'images/tutorial/tutorialanimWarningImg.png';
//CONSTANT BUTTON IMGS
BUTTON_PLAY_IMG_SRC			= 'images/buttons/playButtonImg.png';
BUTTON_CREDITS_IMG_SRC		= 'images/buttons/creditsButtonImg.png';
BUTTON_SCORE_IMG_SRC		= 'images/buttons/scoreButtonImg.png';
BUTTON_TUTORIAL_IMG_SRC		= 'images/buttons/tutorialButtonImg.png';
BUTTON_BACK_IMG_SRC			= 'images/buttons/backButtonImg.png';
BUTTON_MENU_IMG_SRC			= 'images/buttons/menuButtonImg.png';
BUTTON_OPTIONS_IMG_SRC		= 'images/buttons/optionsButtonImg.png';
BUTTON_NEXT_IMG_SRC			= 'images/buttons/nextButtonImg.png';
BUTTON_PREV_IMG_SRC			= 'images/buttons/prevButtonImg.png';
//CONSTANT HOVER IMGS
BUTTON_PLAY_HOVER			= 'images/buttons/playButtonHoverImg.png';
BUTTON_CREDITS_HOVER		= 'images/buttons/creditsButtonHoverImg.png';
BUTTON_SCORE_HOVER			= 'images/buttons/scoreButtonHoverImg.png';
BUTTON_TUTORIAL_HOVER		= 'images/buttons/tutorialButtonHoverImg.png';
BUTTON_BACK_HOVER			= 'images/buttons/backButtonHoverImg.png';
BUTTON_MENU_HOVER			= 'images/buttons/menuButtonHoverImg.png';
BUTTON_OPTIONS_HOVER		= 'images/buttons/optionsButtonHoverImg.png';
BUTTON_NEXT_HOVER			= 'images/buttons/nextButtonHoverImg.png';
BUTTON_PREV_HOVER			= 'images/buttons/prevButtonHoverImg.png';
//CONSTANT AUDIO SOURCES
AUDIO_BKG_SRC				= 'sounds/bkg.mp3';
AUDIO_PFIRE_SRC				= 'sounds/shoot.mp3';
AUDIO_PHIT_SRC				= 'sounds/stationHit.mp3';
AUDIO_EHIT_SRC				= 'sounds/earthHit.mp3';
AUDIO_CHARGE_SRC			= 'sounds/charge.mp3';
AUDIO_AHIT_SRC				= 'sounds/hit.mp3';
AUDIO_MENUCLICK_SRC			= 'sounds/menuClick.mp3';
AUDIO_HARVESTING_SRC		= 'sounds/harvesting.mp3';
AUDIO_WARNING_SRC			= 'sounds/warning.mp3';
AUDIO_AMMOFULL_SRC			= 'sounds/ammoFull.mp3';
AUDIO_GAINAMMO_SRC			= 'sounds/gainAmmo.mp3';

//### START OF GAME OBJECT
var Game = {
	STATE_MENU:		0,	
	STATE_PLAYING:	1,
	STATE_CREDITS:  2,
	STATE_TUTORIAL:	3,	
	STATE_SCORE:	4,
	STATE_FIRE:		5,
	STATE_HARVEST:  6,
	STATE_DYING:	7,
	STATE_DEAD:		8,
	STATE_GAMEOVER:	999,
	gameState:		0,
	isInitialized:	0,
	
	//Canvas and Context
	gameCanvas:		null,
	ctx:			null,
	menuCanvas:		null,
	menuCTX:		null,
	
	//General Variables
	gameHeight:		WORLD_HEIGHT,
	gameWidth:		WORLD_WIDTH,
	asteroids:  	[],
	lasers:			[],
	particles:		[],
	curLaser:		-1,
	dTheta:			0,
	gameScore:		0, //Start with score of zero
	
	//Time Variables
	curTime:		0,
	prevTime:		0,
	deltaTime:		0,
	totalTime:		0,
	
	//Spawning Variables
	numAst:			0,
	minAst:			0,
	maxAst:			0,
	numPar:			0,
	minPar:			0,
	maxPar:			0,
	
	//Harvest/Power Variables
	charging:		0,
	pHarvest:		10, //start out with one shot (10 per shot, max 4 shots)
	pLevel:         100, //default 100 out of 200
	chargedLevel:	0,
	maxChargeLevel: 0,
	chargeSpeed:	0,
	
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
	bkgImgLoaded:				0,
	playerImgLoaded:			0,
	asteroid1ImgLoaded:			0,
	asteroid2ImgLoaded:			0,
	asteroid3ImgLoaded: 		0,
	earthImg1Loaded:			0,
	earthImg2Loaded:			0,
	earthImg3Loaded:			0,
	earthImg4Loaded:			0,
	laserImgLoaded:				0,
	superLaserImgloaded:		0,
	aimingImgLoaded:			0,
	ionoImgLoaded:				0,
	powerBarFillImgLoaded:		0,
	powerContainerImgLoaded:	0,
	projectedFillImgLoaded: 	0,
	plasmaContainerImgLoaded:	0,
	plasmaLevelImgLoaded: 		0,
	harvestImgLoaded: 			0,
	leftIconImgLoaded:  		0,
	rightIconImgLoaded:			0,
	asteroidDeathImgLoaded:		0,
	asteroidImpactImgLoaded:	0,
	asteroidImpact2Imgloaded:	0,
	//Particle Image Checks
	particleImgLoaded:			0,
	//Loading Image Checks
	loadingBkgImgLoaded:		0,
	loadingContainerImgLoaded:	0,
	loadingBarImgLoaded:		0,
	//Level Image Checks
	level1ImgLoaded:			0,
	level2ImgLoaded:			0,
	level3ImgLoaded:			0,
	level4ImgLoaded:			0,
	level5ImgLoaded:			0,
	//Game Over Image Checks
	gameoverImgLoaded:			0,
	earthBurnImg1Loaded:		0,
	earthBurnImg2Loaded:		0,
	// //Menu Image Checks
	// menuImgLoaded:				0,
	// creditsImgLoaded:			0,
	// tutorialImgLoaded:			0,
	// scoreImgLoaded:				0,
	//Tutorial Image Checks
	tutorialtext1ImgLoaded:		0,
	tutorialanim1ImgLoaded:		0,
	tutorialtext2ImgLoaded:		0,
	tutorialanim2ImgLoaded:		0,
	tutorialtext3ImgLoaded:		0,
	tutorialanim3ImgLoaded:		0,
	tutorialtext4ImgLoaded:		0,
	tutorialanim4ImgLoaded:		0,
	tutorialtext5ImgLoaded:		0,
	tutorialanim5ImgLoaded:		0,
	tutorialtext6ImgLoaded:		0,
	tutorialanim6ImgLoaded:		0,
	//Menu Earth Variables
	menuEarthSheetNum:			1,
	menuEarthFrame:				0,
	menuEarthFrameTick:			0,
	menuEarthImg1Loaded:		0,
	menuEarthImg2Loaded:		0,
	menuEarthImg3Loaded:		0,
	menuEarthImg4Loaded:		0,
	// //Button Images
	// backButtonImgLoaded:			0,
	// backButtonHoverImgLoaded:		0,
	// playButtonImgLoaded:			0,
	// playButtonHoverImgLoaded:		0,
	// creditsButtonImgLoaded:			0,
	// creditsButtonHoverImgLoaded:	0,
	// tutorialButtonImgLoaded:		0,
	// tutorialButtonHoverImgLoaded:	0,
	// scoreButtonImgLoaded:			0,
	// scoreButtonHoverImgLoaded:		0,
	//Audio Checks
	audioBKGLoaded:				0,
	audioPFireLoaded:			0,
	audioPHitLoaded:			0,
	audioEHitLoaded:			0,
	audioChargeLoaded:			0,
	audioAHitLoaded:			0,
	audioHarvesting:			0,
	audioWarning:				0,
	audioAmmoFull:				0,
	audioGainAmmo:				0, 
	audioMenuClick:				0, //IMPLEMENT
	
	//Sprite Sheet Frames
	earthSheetNum:				1,
	ionoState:					1,
	frameTick:					0,
	asteroidFrameTick:			0,
	particleFrameTick:			0,
	aimingFrameTick:			0,
	laserFrameTick:				0,
	harvestFrameTick:			0,
	harvestTick:				0,
	chargeTick:		    		0,
	balanceTick:				0,
	earthFrame:					0,
	playerFrame:				0,
	playerFireFrame:			70,
	playerDeathFrame:			60,
	aimingFrame:				0,
	harvestFrame:				0,
	harvestFlip:				0,
	//Gameover Sprite Sheet Frames
	earthBurnSheetNum:			1,
	earthBurnFrame:				0,
	earthBurnFrameTick:			0,
	burnFlip:					0,
	
	//Menu Instantiations
	menu: new theMainMenu(MENU_IMG_SRC, BUTTON_PLAY_IMG_SRC, BUTTON_CREDITS_IMG_SRC, BUTTON_SCORE_IMG_SRC, BUTTON_TUTORIAL_IMG_SRC, BUTTON_PLAY_HOVER,
					BUTTON_CREDITS_HOVER, BUTTON_SCORE_HOVER, BUTTON_TUTORIAL_HOVER, BUTTON_OPTIONS_IMG_SRC, BUTTON_OPTIONS_HOVER),
	credits: new theCredits(CREDITS_IMG_SRC, BUTTON_BACK_IMG_SRC, BUTTON_BACK_HOVER),
	tutorial: new theTutorial(TUTORIAL_IMG_SRC, BUTTON_BACK_IMG_SRC, BUTTON_BACK_HOVER, BUTTON_NEXT_IMG_SRC, BUTTON_NEXT_HOVER, BUTTON_PREV_IMG_SRC, BUTTON_PREV_HOVER),
	score: new theScore(SCORE_IMG_SRC, BUTTON_BACK_IMG_SRC, BUTTON_BACK_HOVER),
	
	Init: function() {
		this.gameCanvas = document.getElementById(CANVAS_GAME_ID);
		this.ctx = this.gameCanvas.getContext("2d");
		this.menuCanvas = document.getElementById(CANVAS_MENU_ID);
		this.menuCTX = this.menuCanvas.getContext("2d");
		
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
		
		this.menuCanvas.style.display = 'block';
		this.menuCTX.drawImage(this.loadingBkgImg, 0, 0);
		this.menuCTX.drawImage(this.loadingContainerImg, 0, 0, 1280, 50, 0, 600, Game.gameLoadedAmt*36, 50);
		this.menuCTX.drawImage(this.loadingBarImg, 0, 0, 1280, 50, 0, 600, Game.gameLoadedAmt*36, 50);
		
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
		//Super Laser
		this.superLaserImg = new Image();
		this.superLaserImg.onload = function () { 	Game.superLaserImgLoaded = 1; Game.gameLoadedAmt++; };
        this.superLaserImg.src = SUPERLASER_IMG_SRC;
		//Aiming
		this.aimingImg = new Image();
		this.aimingImg.onload = function () { 	Game.aimingImgLoaded = 1; Game.gameLoadedAmt++; };
        this.aimingImg.src = AIMING_IMG_SRC;
		//Ionosphere
		this.ionoImg = new Image();
		this.ionoImg.onload = function () { 	Game.ionoImgLoaded = 1; Game.gameLoadedAmt++; };
        this.ionoImg.src = IONO_IMG_SRC;
		//Power Bar Fill
		this.powerBarFillImg = new Image();
		this.powerBarFillImg.onload = function () { Game.powerBarFillImgLoaded = 1; Game.gameLoadedAmt++; };
        this.powerBarFillImg.src = POWER_LEVEL_IMG;
		//Power Container
		this.powerContainerImg = new Image();
		this.powerContainerImg.onload = function () { 	Game.powerContainerImgLoaded = 1; Game.gameLoadedAmt++; };
        this.powerContainerImg.src = POWER_CONTAINER_IMG;
		//Projected Fill
		this.projectedFillImg = new Image();
		this.projectedFillImg.onload = function() { 	Game.projectedFillImgLoaded = 1; Game.gameLoadedAmt++; };
		this.projectedFillImg.src = PROJECTED_IMG_SRC;
		//Plasma Container
		this.plasmaContainerImg = new Image();
		this.plasmaContainerImg.onload = function() { 	Game.plasmaContainerImgLoaded = 1; Game.gameLoadedAmt++; };
		this.plasmaContainerImg.src = PLASMA_CONTAINER_IMG;
		//Plasma Fill
		this.plasmaLevelImg = new Image();
		this.plasmaLevelImg.onload = function() { 		Game.plasmaLevelImgLoaded = 1; Game.gameLoadedAmt++; };
		this.plasmaLevelImg.src = PLASMA_LEVEL_IMG_SRC;
		//Harvest Animation
		this.harvestImg = new Image();
		this.harvestImg.onload = function() { 			Game.harvestImgLoaded = 1; Game.gameLoadedAmt++; };
		this.harvestImg.src = HARVEST_IMG_SRC;
		//Left Icon
		this.leftDangerIconImg = new Image();
		this.leftDangerIconImg.onload = function() {	Game.leftIconImgLoaded = 1; Game.gameLoadedAmt++; };
		this.leftDangerIconImg.src = LEFTICON_IMG_SRC;
		//Right Icon
		this.rightDangerIconImg = new Image();
		this.rightDangerIconImg.onload = function() { 	Game.rightIconImgLoaded = 1; Game.gameLoadedAmt++; };
		this.rightDangerIconImg.src = RIGHTICON_IMG_SRC;
		
		//PARTICLES IMAGES CREATION AND LOAD
		//Particle Base
		this.particleImg = new Image();
		this.particleImg.onload = function () {	Game.particleImgLoaded = 1; Game.gameLoadedAmt++; };
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
		//Menu Earth1
		this.menuEarthImg1 = new Image();
		this.menuEarthImg1.onload = function () { 	Game.menuEarthImg1Loaded = 1; Game.gameLoadedAmt++; };
        this.menuEarthImg1.src = MENU_EARTH1;
		//Menu Earth2
		this.menuEarthImg2 = new Image();
		this.menuEarthImg2.onload = function () { 	Game.menuEarthImg2Loaded = 1; Game.gameLoadedAmt++; };
        this.menuEarthImg2.src = MENU_EARTH2;
		//Menu Earth3
		this.menuEarthImg3 = new Image();
		this.menuEarthImg3.onload = function () { 	Game.menuEarthImg3Loaded = 1; Game.gameLoadedAmt++; };
        this.menuEarthImg3.src = MENU_EARTH3;
		//Menu Earth4
		this.menuEarthImg4 = new Image();
		this.menuEarthImg4.onload = function () { 	Game.menuEarthImg4Loaded = 1; Game.gameLoadedAmt++; };
        this.menuEarthImg4.src = MENU_EARTH4;
		
		//TUTORIAL IMAGES CREATION AND LOAD
		//Tutorial - Intro
			//Tutorial Text 1
			this.tutorialtextImg1 = new Image();
			this.tutorialtextImg1.onload = function () { 	Game.tutorialtext1ImgLoaded = 1; Game.gameLoadedAmt++; };
			this.tutorialtextImg1.src = TUTORIAL_TEXT1_IMG_SRC;
			//Tutorial Anim 1
			this.tutorialanimImg1 = new Image();
			this.tutorialanimImg1.onload = function () { 	Game.tutorialanim1ImgLoaded = 1; Game.gameLoadedAmt++; };
			this.tutorialanimImg1.src = TUTORIAL_ANIM1_IMG_SRC;
		//Tutorial - Movement
			//Tutorial Text 2
			this.tutorialtextImg2 = new Image();
			this.tutorialtextImg2.onload = function () { 	Game.tutorialtext2ImgLoaded = 1; Game.gameLoadedAmt++; };
			this.tutorialtextImg2.src = TUTORIAL_TEXT2_IMG_SRC;
			//Tutorial Anim 2
			this.tutorialanimImg2 = new Image();
			this.tutorialanimImg2.onload = function () { 	Game.tutorialanim2ImgLoaded = 1; Game.gameLoadedAmt++; };
			this.tutorialanimImg2.src = TUTORIAL_ANIM2_IMG_SRC;
		//Tutorial - Charging
			//Tutorial Text 3
			this.tutorialtextImg3 = new Image();
			this.tutorialtextImg3.onload = function () { 	Game.tutorialtext3ImgLoaded = 1; Game.gameLoadedAmt++; };
			this.tutorialtextImg3.src = TUTORIAL_TEXT3_IMG_SRC;
			//Tutorial Anim 3
			this.tutorialanimImg3 = new Image();
			this.tutorialanimImg3.onload = function () { 	Game.tutorialanim3ImgLoaded = 1; Game.gameLoadedAmt++; };
			this.tutorialanimImg3.src = TUTORIAL_ANIM3_IMG_SRC;
		//Tutorial - Harvesting
			//Tutorial Text 4
			this.tutorialtextImg4 = new Image();
			this.tutorialtextImg4.onload = function () { 	Game.tutorialtext4ImgLoaded = 1; Game.gameLoadedAmt++; };
			this.tutorialtextImg4.src = TUTORIAL_TEXT4_IMG_SRC;
			//Tutorial Anim 4
			this.tutorialanimImg4 = new Image();
			this.tutorialanimImg4.onload = function () { 	Game.tutorialanim4ImgLoaded = 1; Game.gameLoadedAmt++; };
			this.tutorialanimImg4.src = TUTORIAL_ANIM4_IMG_SRC;
		//Tutorial - Shooting
			//Tutorial Text 5
			this.tutorialtextImg5 = new Image();
			this.tutorialtextImg5.onload = function () { 	Game.tutorialtext5ImgLoaded = 1; Game.gameLoadedAmt++; };
			this.tutorialtextImg5.src = TUTORIAL_TEXT5_IMG_SRC;
			//Tutorial Anim 5
			this.tutorialanimImg5 = new Image();
			this.tutorialanimImg5.onload = function () { 	Game.tutorialanim5ImgLoaded = 1; Game.gameLoadedAmt++; };
			this.tutorialanimImg5.src = TUTORIAL_ANIM5_IMG_SRC;
		//Tutorial - Moving
			//Tutorial Text 6
			this.tutorialtextImg6 = new Image();
			this.tutorialtextImg6.onload = function () { 	Game.tutorialtext6ImgLoaded = 1; Game.gameLoadedAmt++; };
			this.tutorialtextImg6.src = TUTORIAL_TEXT6_IMG_SRC;
			//Tutorial Anim 6
			this.tutorialanimImg6 = new Image();
			this.tutorialanimImg6.onload = function () { 	Game.tutorialanim6ImgLoaded = 1; Game.gameLoadedAmt++; };
			this.tutorialanimImg6.src = TUTORIAL_ANIM6_IMG_SRC;

			
		
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
		//MenuClick
		this.audioMenuClick = new Audio();
		this.audioMenuClick.onload = function() { Game.audioMenuClickLoaded = 1; Game.gameLoadedAmt++; };
		this.audioMenuClick.src = AUDIO_MENUCLICK_SRC;
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
		//Harvesting
		this.audioHarvesting = new Audio();
		this.audioHarvesting.onload = function() { Game.audioHarvestingLoaded = 1; Game.gameLoadedAmt++; };
		this.audioHarvesting.src = AUDIO_HARVESTING_SRC;
		//Warning
		this.audioWarning = new Audio();
		this.audioWarning.onload = function() { Game.audioWarningLoaded = 1; Game.gameLoadedAmt++; };
		this.audioWarning.src = AUDIO_WARNING_SRC;
		this.audioWarning.volume = 0.2;
		//Ammo Full
		this.audioAmmoFull = new Audio();
		this.audioAmmoFull.onload = function() { Game.audioAmmoFullLoaded = 1; Game.gameLoadedAmt++; };
		this.audioAmmoFull.src = AUDIO_AMMOFULL_SRC;
		this.audioAmmoFull.volume = 0.2;
		//Gain Ammo
		this.audioGainAmmo = new Audio();
		this.audioGainAmmo.onload = function() { Game.audioGainAmmoLoaded = 1; Game.gameLoadedAmt++; };
		this.audioGainAmmo.src = AUDIO_GAINAMMO_SRC;
		this.audioGainAmmo.volume = 0.2;
		
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
        this.menuCanvas.addEventListener('click', this.menu.doMenuClick, false);
		this.menuCanvas.addEventListener('mousemove', this.menu.doMouseOver, false);
		
		var creditCanvas = document.getElementById(CANVAS_CREDITS_ID);
        creditCanvas.addEventListener('click', this.credits.doMenuClick, false);
		creditCanvas.addEventListener('mousemove', this.credits.doMouseOver, false);
		
		var tutorialCanvas = document.getElementById(CANVAS_TUTORIAL_ID);
        tutorialCanvas.addEventListener('click', this.tutorial.doMenuClick, false);
		tutorialCanvas.addEventListener('mousemove', this.tutorial.doMouseOver, false);
		
		var scoreCanvas = document.getElementById(CANVAS_SCORE_ID);
        scoreCanvas.addEventListener('click', this.score.doMenuClick, false);
		scoreCanvas.addEventListener('mousemove', this.score.doMouseOver, false);

		var dumber = 0;
		while (( Game.gameLoadedAmt >= 28 ) && (dumber < 1000000000000) ){
			Game.isInitialized = 0;
			dumber++;
		}

		Game.isInitialized = 1;
	},
	
	ReInit: function() {
		//Turn off Music
		this.audioBKG.pause();
		this.audioBKG.currentTime = 0;
		//Turn off all Sound
		this.audioHarvesting.pause();
		this.audioHarvesting.currentTime = 0;
		this.audioWarning.pause();
		this.audioWarning.currentTime = 0;
		//Reset Arrays
			//Asteroids
			for( var m = 0; m < MAX_ASTEROIDS; m++ ) {
				this.asteroids[m].x = 0;
				this.asteroids[m].y = 0;
				this.asteroids[m].isAlive = 0;
			}
			//Lasers
			for( var n = 0; n < MAX_LASERS; n++ ) {
				this.lasers[n].x = 0;
				this.lasers[n].y = 0;
				this.lasers[n].isAlive = 0;
			}
			//Particles
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
		this.gameScore = 0;

		//Power Variables
		this.charging 		= 0;
		this.pHarvest 		= 10;
		this.pLevel 		= 100;
		this.chargedLevel 	= 0;
		this.chargeSpeed 	= 0;
		this.maxChargeLevel = 0;
		
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
		this.ctx.fillStyle	= "#333333";
        this.ctx.fillRect(0, 0, this.gameWidth, this.gameHeight);
		this.ctx.font 		= '20px Akashi';
		this.ctx.fillStyle	= 'white';
		
		//BACKGROUND
		if( Game.bkgImgLoaded != 0 ) {
			this.ctx.drawImage(this.bkgImg, 0, 0);
		}
		//SCORE
		this.ctx.fillText('Score: '  + Game.gameScore, 10, 25);
		//LEVEL
		if( this.levelShow === 1 ) {
			switch( this.level ) {
				case 1:
					if( this.level1ImgLoaded != 0 ) {
						this.ctx.drawImage(this.level1Img, 450, 160);
					}
					break;
				case 2:
					if( this.level2ImgLoaded != 0 ) {
						this.ctx.drawImage(this.level2Img, 550, 160);
					}
					break;
				case 3:
					if( this.level3ImgLoaded != 0 ) {
						this.ctx.drawImage(this.level3Img, 550, 160);
					}
					break;
				case 4:
					if( this.level4ImgLoaded != 0 ) {
						this.ctx.drawImage(this.level4Img, 550, 160);
					}
					break;
				case 5:
					if( this.level5ImgLoaded != 0 ) {
						this.ctx.drawImage(this.level5Img, 550, 160);
					}
					break;
				default: console.log("ERROR: Level Draw"); break;
			}
		}
		//EARTH
		if( Game.earthImg1Loaded != 0 && Game.earthImg2Loaded != 0 && Game.earthImg3Loaded != 0 && Game.earthImg4Loaded != 0 ) {
			switch( this.earthSheetNum ) {
				case 1:
					this.ctx.drawImage(this.earthImg1, 0, this.earthFrame*100, 1280, 100, this.earthX, this.earthY, 1280, 100);
					break;
				case 2:
					this.ctx.drawImage(this.earthImg2, 0, this.earthFrame*100, 1280, 100, this.earthX, this.earthY, 1280, 100);
					break;
				case 3:
					this.ctx.drawImage(this.earthImg3, 0, this.earthFrame*100, 1280, 100, this.earthX, this.earthY, 1280, 100);
					break;
				case 4:
					this.ctx.drawImage(this.earthImg4, 0, this.earthFrame*100, 1280, 100, this.earthX, this.earthY, 1280, 100);
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
		//AIMING
		if( Game.aimingImgLoaded != 0 && (Game.gameState === Game.STATE_PLAYING || Game.gameState === Game.STATE_FIRE) ) {
			this.ctx.save();
			this.ctx.translate(this.aimingX, this.aimingY);
			this.ctx.rotate(-this.playerTheta);
			this.ctx.translate(36, 0);
			this.ctx.drawImage(this.aimingImg, 0, this.aimingFrame*5, 200, 3, 0, 0, 200, 3);
			this.ctx.restore();
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
					this.ctx.save();
					Game.lasers[i].drawSelf(this.ctx, this.laserImg);
					this.ctx.restore();
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
					Game.asteroids[i].drawSelf(this.ctx, this.asteroid1Img, this.asteroid2Img, this.asteroid3Img);
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
							this.ctx.drawImage(this.asteroidDeathImg, Game.asteroids[i].dFrame*100, 0, 100, 100, Game.asteroids[i].x-30, Game.asteroids[i].y-30, 100, 100);
							break;
						case 1:
							this.ctx.drawImage(this.asteroidDeathImg, Game.asteroids[i].dFrame*100, 0, 100, 100, Game.asteroids[i].x-15, Game.asteroids[i].y-15, 100, 100);
							break;
						case 2:
							this.ctx.drawImage(this.asteroidDeathImg, Game.asteroids[i].dFrame*100, 0, 100, 100, Game.asteroids[i].x, Game.asteroids[i].y, 100, 100);
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
						this.ctx.drawImage(this.asteroidImpact2Img, Game.asteroids[i].iFrame*100, 0, 100, 100, Game.asteroids[i].x, Game.asteroids[i].y, 100, 100);
					} else {
						this.ctx.drawImage(this.asteroidImpactImg, Game.asteroids[i].iFrame*75, 0, 75, 75, Game.asteroids[i].x, Game.asteroids[i].y, 75, 75);
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
					Game.particles[i].drawSelf(this.ctx, this.particleImg);
					if( this.particleFrameTick === 1 ) {
						Game.particles[i].frame += 1;
					}
					if( Game.particles[i].frame >= 7 ) {
						Game.particles[i].frame = 0;
					}
				}
			}
		}
		//IONOSPHERE
		if( Game.ionoImgLoaded != 0 ) {
			this.ctx.drawImage(this.ionoImg, 0, this.ionoState*130, 1280, 130, this.earthX-10, this.earthY-30, 1280, 130);
		}
		//IONOSPHERE METER
		if( Game.powerContainerImgLoaded !=0 ) {
			this.ctx.drawImage(this.powerContainerImg, 240, 699);
		}
		if( Game.powerBarFillImgLoaded !=0 ) {
			this.ctx.drawImage(this.powerBarFillImg, 0, 0, (this.pLevel*4)+1, 15, 246, 702, (this.pLevel*4)+1, 15);
		}
		if( Game.projectedFillImgLoaded !=0 ) {
			this.ctx.drawImage(this.projectedFillImg, 0, 0, 788, 30, (this.pLevel*4)+246, 702, ((this.maxChargeLevel - this.chargedLevel)*4), 30 );
		}
		//PLASMA METER
		if( Game.pHarvest === 0 ) {
			
		} else if( Game.plasmaLevel != 0 && Game.plasmaLevelImgLoaded != 0 ) {
			this.ctx.drawImage(this.plasmaLevelImg, 200-5*Game.pHarvest, 0, 5*Game.pHarvest, 36, 1265-(Game.pHarvest*5), 13, Game.pHarvest*5, 36);
		}
		if( Game.plasmaContainerImgLoaded != 0 ) {
			this.ctx.drawImage(this.plasmaContainerImg, 1062, 10);
		}
		//IONO ICONS
		if( Game.leftIconImgLoaded != 0 ) {
			this.ctx.drawImage(this.leftDangerIconImg, 0, 0, 60, 60, 200, 690, 30, 30);
		}
		if( Game.rightIconImgLoaded != 0 ) {
			this.ctx.drawImage(this.rightDangerIconImg, 0, 0, 60, 60, 1060, 690, 30, 30);
		}
		//HARVESTING
		if( Game.harvestImgLoaded != 0 && Game.gameState === Game.STATE_HARVEST ){
			this.ctx.save();
			this.ctx.translate(this.playerX, this.playerY);
			this.ctx.rotate(-this.playerTheta);
			this.ctx.translate(-80, -60);
			this.ctx.drawImage(this.harvestImg, this.harvestFrame*75, 0, 75, 120, 0, 0, 75, 120);
			this.ctx.restore();
			if( this.harvestFrameTick === 1 ) {
				if( this.harvestFlip === 1 ) {
					this.harvestFrame--;
				} else {
					this.harvestFrame++;
				}
			}
			if( this.harvestFrame >= 30 && this.harvestFlip === 0 ) {
				this.harvestFrame = 29;
				this.harvestFlip = 1;
			}
			if( this.harvestFlip === 1 ) {
				if( this.harvestFrame <= 0 ) {
					this.harvestFrame = 0;
					this.harvestFlip = 0;
				}
			}
		}
		//PLAYER
		if( Game.playerImgLoaded != 0 && Game.gameState != Game.STATE_DEAD ) {
			//GET THE PLAYER TO THE POSITION WE WANT HIM FIRST
			this.ctx.save();
			this.ctx.translate(1355*Math.cos(this.playerTheta), -1355*Math.sin(this.playerTheta));
			this.ctx.translate(640, 1899);
			this.ctx.rotate(-this.playerTheta);
			this.playerX = 640+1355*Math.cos(this.playerTheta);
			this.playerY = 1899-1355*Math.sin(this.playerTheta);
			this.ctx.translate(-36, -36);
			if( Game.gameState === Game.STATE_FIRE ) {
				this.playerFrame = 0;
				this.ctx.drawImage(this.playerImg, 0, this.playerFireFrame*75, 75, 75, 0, 0, 75, 75);
				this.playerFireFrame++;
				if( this.playerFireFrame >= 100 ) {
					Game.gameState = Game.STATE_PLAYING;
					this.playerFireFrame = 70;
				}
			} else if( Game.gameState === Game.STATE_DYING ) {
				this.ctx.drawImage(this.playerImg, 0, this.playerDeathFrame*75, 75, 75, 0, 0, 75, 75);
				if( this.frameTick === 1 ) {
					this.playerDeathFrame++;
				}
				if( this.playerDeathFrame >= 69 ) {
					Game.gameState = Game.STATE_DEAD;
				}
			} else {
				this.ctx.drawImage(this.playerImg, 0, this.playerFrame*75, 75, 75, 0, 0, 75, 75);
			}
			this.ctx.restore();
			if( this.frameTick === 1 ) {
				this.playerFrame += 1;
			}
			if( this.playerFrame >= 60 ) {
				this.playerFrame = 0;
			}
		}
		//SPRITE SHEET FRAMES
		this.frameTick++;
		this.asteroidFrameTick++;
		this.particleFrameTick++;
		this.aimingFrameTick++;
		this.laserFrameTick++;
		this.harvestFrameTick++;
		if( this.frameTick >= 10 ) {
			this.frameTick = 0;
		}
		if( this.asteroidFrameTick >= 5 ) {
			this.asteroidFrameTick = 0;
		}
		if( this.particleFrameTick >= 5 ) {
			this.particleFrameTick = 0;
		}
		if( this.aimingFrameTick   >= 5 ) {
			this.aimingFrameTick = 0;
		}
		if( this.laserFrameTick    >= 2 ) {
			this.laserFrameTick = 0;
		}
		if( this.harvestFrameTick  >= 5 ) {
			this.harvestFrameTick = 0;
		}
	},
	
	ProcessInputDown: function(event) {
		if( Game.gameState === Game.STATE_GAMEOVER ) {
			if( event != null ) {
				this.menuCanvas.style.display = 'block';
				this.gameCanvas.style.display = 'none';
				Game.gameState = Game.STATE_MENU;
			}
		} else {
			switch( event.keyCode ) {
				//Left Shift - Harvest
				case 16:
					if( Game.gameState != Game.STATE_DYING ) {
						if( Game.gameState === Game.STATE_HARVEST ) {
							Game.gameState = Game.STATE_PLAYING;
							Game.harvestTick = 0;
							this.audioHarvesting.pause();
							this.audioHarvesting.currentTime = 0;
						} else if( Game.gameState === Game.STATE_PLAYING && Game.pHarvest < MAX_CHARGE) {
							Game.gameState = Game.STATE_HARVEST;
							this.audioHarvesting.play();
							this.audioHarvesting.loop = true;
						} else {
							//Charges Full
							if( Game.gameState === Game.STATE_PLAYING ) {
								this.audioAmmoFull.pause();
								this.audioAmmoFull.currentTime = 0;
								this.audioAmmoFull.play();
							}
						}
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
						this.audioCharge.pause();
						this.audioCharge.currentTime = 0;
						this.audioCharge.play();
						if( Game.charging === 0 ) {
							Game.charging = 1;
							Game.maxChargeLevel += 15;
							Game.chargeSpeed = 1;
						} else if (Game.charging === 1 && Game.chargeSpeed === 4) {
							//TODO - REMOVE THIS USELESS LINE?
						} else if( Game.charging === 1 && Game.chargeSpeed < 4) {
							Game.maxChargeLevel *= 2;
							Game.chargeSpeed *= 2;
						}
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
	
	ShootLaser: function() {
		if( Game.pHarvest >= 10 ) {
			for( var i = 0; i < Game.lasers.length; i++ ) {
			if( Game.lasers[i].isAlive === 0 && Game.curLaser != i ) {
				this.audioPFire.pause();
				this.audioPFire.currentTime = 0;
				this.audioPFire.play();
				Game.pHarvest -= 10;
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
		this.ctx.fillStyle = "#333333";
        this.ctx.fillRect(0, 0, this.gameWidth, this.gameHeight);
		
		//BACKGROUND
		if( Game.bkgImgLoaded != 0 ) {
			this.ctx.drawImage(this.bkgImg, 0, 0);
		}
		//GAMEOVER
		if( this.gameoverImgLoaded != 0 ) {
			this.ctx.drawImage(this.gameoverImg, 0, 0);
		}
		//EARTHBURN
		if( Game.earthImg1Loaded != 0 && Game.earthImg2Loaded != 0 ) {
			switch( this.earthBurnSheetNum ) {
				case 1:
					this.ctx.drawImage(this.earthBurnImg1, 0, this.earthBurnFrame*250, 1280, 250, 0, 470, 1280, 250);
					break;
				case 2:
					this.ctx.drawImage(this.earthBurnImg2, 0, this.earthBurnFrame*250, 1280, 250, 0, 470, 1280, 250);
					//Change Gamestate so player can exit
					this.gameState = this.STATE_GAMEOVER;
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
				this.earthBurnFrame = 0;
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
				if( Game.particles[i].isColliding(Game.playerX, Game.playerY, "player") ) {
					Game.particles[i].destroy();
					//Add in Particle Collect Noise
					
					this.pHarvest += 5;
					if( this.pHarvest > MAX_CHARGE ) {
						Game.OverchargeShot();
					}
				}
				for( var j = 0; j < Game.lasers.length; j++ ) {
					if( Game.particles[i].isColliding(Game.lasers[j].x-20, Game.lasers[j].y-40, "laser") ) {
						Game.particles[i].destroy();
					}
				}
			}
		}
	},
	
	OverchargeShot: function() {
		this.pHarvest = 0;
		this.audioPFire.pause();
		this.audioPFire.currentTime = 0;
		this.audioPFire.play();
		this.gameState = this.STATE_FIRE;
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
			this.minPar = 1;
			this.maxPar = Math.floor((Math.random()*1)+1);
		} else if( tTime >= 60 && tTime <= 65 ) {
			this.level = 2;
			this.levelShow = 1;
		} else if( tTime >= 65 && tTime <= 90 ) {
			this.levelShow = 0;
			this.minAst = 1;
			this.maxAst = 3;
			this.minPar = 1;
			this.maxPar = Math.floor((Math.random()*2)+1);
		} else if( tTime >= 90 && tTime <= 95 ) {
			this.level = 3;
			this.levelShow = 1;
		} else if( tTime >= 95 && tTime <= 120 ) {
			this.levelShow = 0;
			this.minAst = 2;
			this.maxAst = 4;
			this.minPar = 1;
			this.maxPar = Math.floor((Math.random()*3)+1);
		} else if( tTime >= 120 && tTime <= 125 ) {
			this.level = 4;
			this.levelShow = 1;
		} else if( tTime >= 125 && tTime <= 160 ) {
			this.levelShow = 0;
			this.minAst = 2;
			this.maxAst = 6;
			this.minPar = 2;
			this.maxPar = Math.floor((Math.random()*3)+1);
		} else if( tTime >= 160 && tTime <= 165 ) {
			this.level = 5;
			this.levelShow = 1;
		} else if( tTime >= 165 && tTime <= 200 ) {
			this.levelShow = 0;
			this.minAst = 3;
			this.maxAst = 6;
			this.minPar = 3;
			this.maxPar = Math.floor((Math.random()*4)+1);
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
					Game.asteroids[i].spawn(speed, frame, size);
					Game.numAst++;
				}
			}
		}
	},
	
	SpawnParticles: function() {
		//Spawn Particles
		if( Game.numPar <= this.minPar && Game.numPar <= MAX_PARTICLES ) {
			for( var i = Game.numPar; i < this.maxPar; i++ ) {
				var color = Math.floor(Math.random()*6);
				var speed = Math.floor((Math.random()*3)+1);
				if( Game.particles[i].isAlive === 0 ) {
					Game.particles[i].isAlive = 1;
					Game.particles[i].spawn(color, speed);
					Game.numPar++;
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
		} else if( Game.gameState === Game.STATE_PLAYING || Game.gameState === Game.STATE_FIRE || Game.gameState === Game.STATE_DYING || Game.gameState === Game.STATE_HARVEST || Game.charging === 1 ) { //GAME UPDATE UPDATE		
			//START BACKGROUND MUSIC
			if( this.bkgPlaying === 0 ) {
				this.audioBKG.play();
				this.audioBKG.loop = true;
				this.bkgPlaying = 1;
			}
			
			//TURN OFF HARVEST SOUND IF FULL
			if( this.pHarvest === 40 ) {
				this.audioHarvesting.pause();
				this.audioHarvesting.currentTime = 0;
			}
			
			//WARNING SOUND
			if( this.pLevel >= 175 || this.pLevel <= 25 ) {
				this.audioWarning.play();
				this.audioWarning.loop = true;
			} else {
				this.audioWarning.pause();
				this.audioWarning.currentTime = 0;
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
				Game.ionoState = Math.floor((Game.pLevel/20));
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
			
			//NUMBER OF PARTICLES CHECK
			if( Game.numPar < 0 ) {
				Game.numPar = 0;
			}
			
			//COLLISION DETECTION
			if( Game.numAst > 0 || Game.numPar > 0 ) {
				Game.CollisionDetection();
			}
			
			//ASTEROID CREATION
			Game.SpawnAsteroids(this.totalTime);
			
			//PARTICLE CREATION
			Game.SpawnParticles();
			
			//LASER MOVEMENT
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
			
			//PARTICLE MOVEMENT
			for( var k = 0; k < Game.particles.length; k++ ) {
				if( Game.particles[k].isAlive != 0 ) {
					Game.particles[k].movePar(this.dTime);
				}
			}
			
			//NORMALIZE THE PLEVEL
			if( Game.gameState === Game.STATE_PLAYING && Game.charging === 0 ) {
				if( Game.pLevel < 100 ) {
					Game.balanceTick++;
					if( Game.balanceTick === 1 ) {
						Game.pLevel++;
					}
					if( Game.balanceTick === 100 ) {
						Game.balanceTick = 0;
					}
				}	
				if(Game.pLevel > 100) {
					Game.balanceTick++;
					if( Game.balanceTick === 1 ) {
						Game.pLevel--;
					}
					if( Game.balanceTick === 100 ) {
						Game.balanceTick = 0;
					}
				}
				if( Game.pLevel === 100) {
					Game.balanceTick = 0;
				}
			}
			
			//POWER OVERBOUNDS CHECK
			if( this.pLevel >= 198 ) {
				this.pLevel = 198;
			}
			
			//CHARGE POWER
			if( Game.charging === 1 ) {
				Game.chargeTick++;
				if( Game.maxChargeLevel === Game.chargedLevel ) {
					Game.charging = 0;
					Game.chargedLevel = 0;
					Game.maxChargeLevel = 0;
				} else if( Game.chargeTick === 1 ) {
					Game.pLevel++;
					Game.chargedLevel++;
				} else if( Game.chargeTick >= (20 / Game.chargeSpeed) ) {
					Game.chargeTick = 0;
				}
			}
			
			//HARVEST POWER 
			if( Game.gameState === Game.STATE_HARVEST ) {
				Game.harvestTick++;
				if( Game.harvestTick === 1 ) {
					if( Game.pHarvest < MAX_CHARGE && Game.pLevel > 0 ) {
						Game.pHarvest++;
						if(  this.pHarvest % 10 === 0 ) {
							this.audioGainAmmo.play();
						}
						Game.pLevel--;
					} else if( Game.pHarvest === MAX_CHARGE ) {
						Game.gameState = Game.STATE_PLAYING;
					}
				} else if(Game.harvestTick >= 10){
					Game.harvestTick = 0;
				}
			}
			
			//POWER DEATH CHECK
			if( this.pLevel >= 199 ) {
				this.gameState = this.STATE_DYING;
			} else if( this.pLevel <= 0 ) {
				this.gameState = this.STATE_DYING;
			}
			
			//DRAW SCREEN
			Game.DrawScreen();
		} else if( Game.gameState === Game.STATE_CREDITS ) { //CREDITS UPDATE
			Game.credits.DrawCredits();
		} else if(Game.gameState === Game.STATE_TUTORIAL) { //TUTORIAL UPDATE
			Game.tutorial.DrawTutorial(this.tutorialtextImg1, this.tutorialanimImg1, this.tutorialtextImg2, this.tutorialanimImg2, this.tutorialtextImg3, this.tutorialanimImg3,
						this.tutorialtextImg4, this.tutorialanimImg4, this.tutorialtextImg5, this.tutorialanimImg5, this.tutorialtextImg6, this.tutorialanimImg6);
		} else if(Game.gameState === Game.STATE_SCORE) { //SCORE UPDATE
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