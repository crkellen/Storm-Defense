//CONSTANT GLOBAL VARIABLES
var CANVAS_GAME_ID			= "canvasGame";
var CANVAS_MENU_ID			= "canvasMenu";
var CANVAS_CREDITS_ID		= "canvasCredits"
var CANVAS_TUTORIAL_ID		= "canvasTutorial";
var CANVAS_SCORE_ID			= "canvasScore";
var WORLD_HEIGHT			= 720;
var WORLD_WIDTH				= 1280;
var MAX_LASERS				= 20;
var MAX_SUPERLASERS			= 5;
var MAX_ASTEROIDS			= 10;
var MAX_PARTICLES			= 10;
var MAX_CHARGE				= 40;
var OK_MIN_SCREEN_RATIO		= 1.33;  
var OK_MAX_SCREEN_RATIO		= 1.35;
//CONSTANT IMGS
BKG_IMG_SRC					= 'images/ingamebg/bkgImg.png';
PLAYER_IMG_SRC				= 'images/player/playerImg.png';
EARTH_IMG_SRC1				= 'images/earth/earthImg1.jpg';
EARTH_IMG_SRC2				= 'images/earth/earthImg2.jpg';
EARTH_IMG_SRC3				= 'images/earth/earthImg3.jpg';
EARTH_IMG_SRC4				= 'images/earth/earthImg4.jpg';
LASER_IMG_SRC				= 'images/player/laserImg.png';
SUPERLASER_IMG_SRC			= 'images/player/superLaserImg.png';
AIMING_IMG_SRC				= 'images/player/aimingImg.png';
IONO_IMG_SRC				= 'images/ionosphere/ionoImg.png';
AURORA_IMG_SRC				= 'images/ionosphere/auroraImg.png';
PARTICLE_IMG_SRC			= 'images/particles/particleImg.png';
PAUSED_IMG_SRC				= 'images/ingamebg/pausedImg.png';
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
VICTORY_IMG_SRC				= 'images/gameover/victoryImg.png';
PRESSANY_IMG_SRC			= 'images/gameover/pressAnyImg.png';
EARTHBURN_IMG_SRC1			= 'images/gameover/earthBurnImg1.png';
EARTHBURN_IMG_SRC2			= 'images/gameover/earthBurnImg2.png';
//CONSTANT MENU BKG IMGS
MENU_IMG_SRC				= 'images/menus/mainMenuBgImg.png';
CREDITS_IMG_SRC				= 'images/menus/creditsBgImg.png';
TUTORIAL_IMG_SRC			= 'images/menus/tutorialBgImg.png';
SCORE_IMG_SRC				= 'images/menus/topscoresBgImg.png';
MENU_EARTH1					= 'images/menuearth/menuEarth1.jpg';
MENU_EARTH2					= 'images/menuearth/menuEarth2.jpg';
MENU_EARTH3					= 'images/menuearth/menuEarth3.jpg';
MENU_EARTH4					= 'images/menuearth/menuEarth4.jpg';
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
TUTORIAL_TEXT7_IMG_SRC		= 'images/tutorial/tutorialtext7Img.png';
TUTORIAL_ANIM7_IMG_SRC		= 'images/tutorial/tutorialanimParticlesImg.png';
TUTORIAL_TEXT8_IMG_SRC		= 'images/tutorial/tutorialtext8Img.png';
TUTORIAL_TEXT_MOUSE_IMG_SRC = 'images/tutorial/tutorialtextMouseImg.png';
TUTORIAL_ANIM_MOUSE_IMG_SRC = 'images/tutorial/tutorialanimMouseImg.png';
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
AUDIO_MENUHOVER_SRC			= 'sounds/menuClick.mp3';
AUDIO_HARVESTING_SRC		= 'sounds/harvesting.mp3';
AUDIO_WARNING_SRC			= 'sounds/warning.mp3';
AUDIO_AMMOFULL_SRC			= 'sounds/ammoFull.mp3';
AUDIO_GAINAMMO_SRC			= 'sounds/gainAmmo.mp3';

//### START OF GAME OBJECT
var Game = {
	STATE_MENU:				0,	
	STATE_PLAYING:			1,
	STATE_CREDITS:  		2,
	STATE_TUTORIAL:			3,	
	STATE_SCORE:			4,
	STATE_FIRE:				5,
	STATE_HARVEST:  		6,
	STATE_DYING:			7,
	STATE_DEAD:				8,
	STATE_VICTORY:			100,
	STATE_PRELOAD:			200,
	STATE_LOADING:			255,
	STATE_PAUSED:			500,
	STATE_GAMEOVER:			999,
	gameState:				0,
	prevState:				0,
	isInitialized:			0,
	isGameover:				0,
	//profiles:				null, //TODO - Remove or use
	
	//Asset Manager Variables
	assetMan:				null,
	loadingAssetMan:		null,
	totalAssets:			0,
	assetsLoaded:			0,
	loadingTotalAssets:		0,
    loadingAssetsReady:		0,
	
	//Canvas and Context Variables
	gameCanvas:				null,
	ctx:					null,
	menuCanvas:				null,
	menuCTX:				null,
	
	//General Variables
	gameHeight:				WORLD_HEIGHT,
	gameWidth:				WORLD_WIDTH,
	asteroids:  			[],
	lasers:					[],
	particles:				[],
	superlasers:			[],
	curLaser:				-1,
	dTheta:					0,
	earthHealth:			5,
	gameScore:				0,
	
	//Time Variables
	curTime:				0,
	prevTime:				0,
	deltaTime:				0,
	totalTime:				0,
	
	//Spawning Variables
	numAst:					0,
	minAst:					0,
	maxAst:					0,
	numPar:					0,
	minPar:					0,
	maxPar:					0,
	
	//Harvest/Power Variables
	charging:				0,
	pHarvest:				10, //start out with one shot (10 per shot, max 4 shots)
	pLevel:         		100, //default 100 out of 200
	chargedLevel:			0,
	maxChargeLevel: 		0,
	chargeSpeed:			0,
	
	//Level Variables
	level:					0,
	levelShow:				0,
	
	//Mouse Controls Variables
	mousePositionX: 0,
	mouseOnScreen:  0,
	mouseLeft:		0,
	mouseRight:		2,
	mouseMiddle:	1,

	playerTheta:			90*(Math.PI/180),
	//X and Y are the CENTER location of the img, not the draw
	playerX:				0,
	playerY:				0,
	//X and Y are the DRAW location of the img, not the center
	earthX:					0,
	earthY:					620,
	
	//BKG Playing Check
	bkgPlaying:				0,
	
	//Image Checks
	bkgImg:					null,
	playerImg:				null,
	asteroid1Img:			null,
	asteroid2Img:			null,
	asteroid3Img: 			null,
	earthImg1:				null,
	earthImg2:				null,
	earthImg3:				null,
	earthImg4:				null,
	laserImg:				null,
	superLaserImgloaded:	null,
	aimingImg:				null,
	ionoImg:				null,
	auroraImg:				null,
	powerBarFillImg:		null,
	powerContainerImg:		null,
	projectedFillImg: 		null,
	plasmaContainerImg:		null,
	plasmaLevelImg: 		null,
	harvestImg: 			null,
	leftIconImg:  			null,
	rightIconImg:			null,
	asteroidDeathImg:		null,
	asteroidImpactImg:		null,
	asteroidImpact2Img:		null,
	pausedImg:				null,
	//Particle Image Checks
	particleImg:			null,
	//Loading Image Checks
	loadingBKGImg:			null,
	loadingContainerImg:	null,
	loadingBarImg:			null,
	//Level Image Checks
	level1Img:				null,
	level2Img:				null,
	level3Img:				null,
	level4Img:				null,
	level5Img:				null,
	//Game Over Image Checks
	gameoverImg:			null,
	victoryImg:				null,
	pressAnyImg:			null,
	earthBurnImg1:			null,
	earthBurnImg2:			null,
	//Tutorial Image Checks
	tutorialtext1Img:		null,
	tutorialanim1Img:		null,
	tutorialtext2Img:		null,
	tutorialanim2Img:		null,
	tutorialtext3Img:		null,
	tutorialanim3Img:		null,
	tutorialtext4Img:		null,
	tutorialanim4Img:		null,
	tutorialtext5Img:		null,
	tutorialanim5Img:		null,
	tutorialtext6Img:		null,
	tutorialanim6Img:		null,
	tutorialtext7Img:		null,
	tutorialanim7Img:		null,
	tutorialtext8Img:		null,
	//Menu Earth Variables
	menuEarthSheetNum:		1,
	menuEarthFrame:			0,
	menuEarthFrameTick:		0,
	menuEarthImg1:			null,
	menuEarthImg2:			null,
	menuEarthImg3:			null,
	menuEarthImg4:			null,
	//Audio Checks
	audioBKGLoaded:			0,
	audioPFireLoaded:		0,
	audioPHitLoaded:		0,
	audioEHitLoaded:		0,
	audioChargeLoaded:		0,
	audioAHitLoaded:		0,
	audioHarvesting:		0,
	audioWarning:			0,
	audioAmmoFull:			0,
	audioGainAmmo:			0, 
	audioMenuClick:			0, //IMPLEMENT
	
	//Sprite Sheet Frames
	earthSheetNum:			1,
	ionoState:				1,
	frameTick:				0,
	asteroidFrameTick:		0,
	particleFrameTick:		0,
	aimingFrameTick:		0,
	laserFrameTick:			0,
	harvestFrameTick:		0,
	auroraFrameTick:		0,
	victoryFrameTick:		0,
	gameoverFrameTick:		0,
	harvestTick:			0,
	chargeTick:		    	0,
	balanceTick:			0,
	earthFrame:				0,
	playerFrame:			0,
	playerFireFrame:		70,
	playerDeathFrame:		60,
	aimingFrame:			0,
	harvestFrame:			0,
	auroraFrame:			0,
	victoryFrame:			0,
	gameoverFrame:			0,
	harvestFlip:			0,
	//Gameover Sprite Sheet Frames
	earthBurnSheetNum:		1,
	earthBurnFrame:			0,
	earthBurnFrameTick:		0,
	burnFlip:				0,
	canReturn:				0,
	
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
		
		Game.gameState = Game.STATE_PRELOAD;
		this.totalAssets = 0;
        this.assetsReady = 0;
		this.assetMan = new AssetManager();

		//Loading Manager
		this.loadingTotalAssets = 0;
        this.loadingAssetsReady = 0;
		this.loadingAssetMan = new AssetManager();
		//Loading Images
		this.loadingAssetMan.queueDownload(LOADING_BKG_IMG_SRC);
		this.loadingTotalAssets++;
		this.loadingAssetMan.queueDownload(LOADING_CONTAINER_IMG_SRC);
		this.loadingTotalAssets++;
		this.loadingAssetMan.queueDownload(LOADING_BAR_IMG_SRC);
		this.loadingTotalAssets++;
		//Loading Download Call
		this.loadingAssetMan.downloadAll(Game.LoadingSwitchStateToReady);
		
		//Menu Images
			//Main Menu
			this.assetMan.queueDownload(MENU_IMG_SRC);
			this.totalAssets++;
			this.assetMan.queueDownload(BUTTON_PLAY_IMG_SRC);
			this.totalAssets++;
			this.assetMan.queueDownload(BUTTON_PLAY_HOVER);
			this.totalAssets++;
			this.assetMan.queueDownload(BUTTON_TUTORIAL_IMG_SRC);
			this.totalAssets++;
			this.assetMan.queueDownload(BUTTON_TUTORIAL_HOVER);
			this.totalAssets++;
			this.assetMan.queueDownload(BUTTON_CREDITS_IMG_SRC);
			this.totalAssets++;
			this.assetMan.queueDownload(BUTTON_CREDITS_HOVER);
			this.totalAssets++;
			this.assetMan.queueDownload(BUTTON_SCORE_IMG_SRC);
			this.totalAssets++;
			this.assetMan.queueDownload(BUTTON_SCORE_HOVER);
			this.totalAssets++;
			this.assetMan.queueDownload(BUTTON_OPTIONS_IMG_SRC);
			this.totalAssets++;
			this.assetMan.queueDownload(BUTTON_OPTIONS_HOVER);
			this.totalAssets++;
			//Other Menus
			this.assetMan.queueDownload(TUTORIAL_IMG_SRC);
			this.totalAssets++;
			this.assetMan.queueDownload(CREDITS_IMG_SRC);
			this.totalAssets++;
			this.assetMan.queueDownload(SCORE_IMG_SRC);
			this.totalAssets++;
			this.assetMan.queueDownload(BUTTON_BACK_IMG_SRC);
			this.totalAssets++;
			this.assetMan.queueDownload(BUTTON_BACK_HOVER);
			this.totalAssets++;
			this.assetMan.queueDownload(BUTTON_NEXT_IMG_SRC);
			this.totalAssets++;
			this.assetMan.queueDownload(BUTTON_NEXT_HOVER);
			this.totalAssets++;
			this.assetMan.queueDownload(BUTTON_PREV_IMG_SRC);
			this.totalAssets++;
			this.assetMan.queueDownload(BUTTON_PREV_HOVER);
			this.totalAssets++;
			this.assetMan.queueDownload(BUTTON_MENU_IMG_SRC);
			this.totalAssets++;
			//this.assetMan.queueDownload(BUTTON_MENU_HOVER);
			//this.totalAssets++;
			//Menu Earth
			this.assetMan.queueDownload(MENU_EARTH1);
			this.totalAssets++;
			this.assetMan.queueDownload(MENU_EARTH2);
			this.totalAssets++;
			this.assetMan.queueDownload(MENU_EARTH3);
			this.totalAssets++;
			this.assetMan.queueDownload(MENU_EARTH4);
			this.totalAssets++;
		
		//Tutorial Images
		this.assetMan.queueDownload(TUTORIAL_TEXT1_IMG_SRC);
		this.totalAssets++;
		this.assetMan.queueDownload(TUTORIAL_ANIM1_IMG_SRC);
		this.totalAssets++;
		this.assetMan.queueDownload(TUTORIAL_TEXT2_IMG_SRC);
		this.totalAssets++;
		this.assetMan.queueDownload(TUTORIAL_ANIM2_IMG_SRC);
		this.totalAssets++;
		this.assetMan.queueDownload(TUTORIAL_TEXT3_IMG_SRC);
		this.totalAssets++;
		this.assetMan.queueDownload(TUTORIAL_ANIM3_IMG_SRC);
		this.totalAssets++;
		this.assetMan.queueDownload(TUTORIAL_TEXT4_IMG_SRC);
		this.totalAssets++;
		this.assetMan.queueDownload(TUTORIAL_ANIM4_IMG_SRC);
		this.totalAssets++;
		this.assetMan.queueDownload(TUTORIAL_TEXT5_IMG_SRC);
		this.totalAssets++;
		this.assetMan.queueDownload(TUTORIAL_ANIM5_IMG_SRC);
		this.totalAssets++;
		this.assetMan.queueDownload(TUTORIAL_TEXT6_IMG_SRC);
		this.totalAssets++;
		this.assetMan.queueDownload(TUTORIAL_ANIM6_IMG_SRC);
		this.totalAssets++;
		this.assetMan.queueDownload(TUTORIAL_TEXT7_IMG_SRC);
		this.totalAssets++;
		this.assetMan.queueDownload(TUTORIAL_ANIM7_IMG_SRC);
		this.totalAssets++;
		this.assetMan.queueDownload(TUTORIAL_TEXT8_IMG_SRC);
		this.totalAssets++;
		this.assetMan.queueDownload(TUTORIAL_TEXT_MOUSE_IMG_SRC);
		this.totalAssets++;
		this.assetMan.queueDownload(TUTORIAL_ANIM_MOUSE_IMG_SRC);
		this.totalAssets++;
		
		//InGame Images
			//Overlays
			this.assetMan.queueDownload(BKG_IMG_SRC);
			this.totalAssets++;
			this.assetMan.queueDownload(PAUSED_IMG_SRC);
			this.totalAssets++;
				//Levels
				this.assetMan.queueDownload(LEVEL1_IMG_SRC);
				this.totalAssets++;
				this.assetMan.queueDownload(LEVEL2_IMG_SRC);
				this.totalAssets++;
				this.assetMan.queueDownload(LEVEL3_IMG_SRC);
				this.totalAssets++;
				this.assetMan.queueDownload(LEVEL4_IMG_SRC);
				this.totalAssets++;
				this.assetMan.queueDownload(LEVEL5_IMG_SRC);
				this.totalAssets++;
				//Gameover
				this.assetMan.queueDownload(GAMEOVER_IMG_SRC);
				this.totalAssets++;
				this.assetMan.queueDownload(VICTORY_IMG_SRC);
				this.totalAssets++;
				this.assetMan.queueDownload(PRESSANY_IMG_SRC);
				this.totalAssets++;
				this.assetMan.queueDownload(EARTHBURN_IMG_SRC1);
				this.totalAssets++;
				this.assetMan.queueDownload(EARTHBURN_IMG_SRC2);
				this.totalAssets++;	
			//Player
			this.assetMan.queueDownload(PLAYER_IMG_SRC);
			this.totalAssets++;
			this.assetMan.queueDownload(AIMING_IMG_SRC);
			this.totalAssets++;
			//Lasers
			this.assetMan.queueDownload(LASER_IMG_SRC);
			this.totalAssets++;
			this.assetMan.queueDownload(SUPERLASER_IMG_SRC);
			this.totalAssets++;
			//Asteroids
			this.assetMan.queueDownload(ASTEROID1_IMG_SRC);
			this.totalAssets++;
			this.assetMan.queueDownload(ASTEROID2_IMG_SRC);
			this.totalAssets++;
			this.assetMan.queueDownload(ASTEROID3_IMG_SRC);
			this.totalAssets++;
			this.assetMan.queueDownload(ASTEROID_DEATH_IMG_SRC);
			this.totalAssets++;
			this.assetMan.queueDownload(ASTEROID_IMPACT_IMG_SRC);
			this.totalAssets++;
			this.assetMan.queueDownload(ASTEROID_IMPACT2_IMG_SRC);
			this.totalAssets++;
			//Particles
			this.assetMan.queueDownload(PARTICLE_IMG_SRC);
			this.totalAssets++;
			//Earth
			this.assetMan.queueDownload(EARTH_IMG_SRC1);
			this.totalAssets++;
			this.assetMan.queueDownload(EARTH_IMG_SRC2);
			this.totalAssets++;
			this.assetMan.queueDownload(EARTH_IMG_SRC3);
			this.totalAssets++;
			this.assetMan.queueDownload(EARTH_IMG_SRC4);
			this.totalAssets++;
			//Ionosphere
			this.assetMan.queueDownload(IONO_IMG_SRC);
			this.totalAssets++;
			this.assetMan.queueDownload(AURORA_IMG_SRC);
			this.totalAssets++;
			this.assetMan.queueDownload(POWER_LEVEL_IMG);
			this.totalAssets++;
			this.assetMan.queueDownload(POWER_CONTAINER_IMG);
			this.totalAssets++;
			//Harvesting and Related
			this.assetMan.queueDownload(PROJECTED_IMG_SRC);
			this.totalAssets++;
			this.assetMan.queueDownload(PLASMA_CONTAINER_IMG);
			this.totalAssets++;
			this.assetMan.queueDownload(PLASMA_LEVEL_IMG_SRC);
			this.totalAssets++;
			this.assetMan.queueDownload(LEFTICON_IMG_SRC);
			this.totalAssets++;
			this.assetMan.queueDownload(RIGHTICON_IMG_SRC);
			this.totalAssets++;
			this.assetMan.queueDownload(HARVEST_IMG_SRC);
			this.totalAssets++;
		
		//SOUND CREATION AND LOAD
		//Background Music
		this.audioBKG = new Audio();
		this.audioBKG.onload = function() { Game.audioBKGLoaded = 1; Game.gameLoadedAmt++; };
		this.audioBKG.src = AUDIO_BKG_SRC;
		this.audioBKG.volume = 0.2;
		//MenuClick
		this.audioMenuClick = new Audio();
		this.audioMenuClick.onload = function() { Game.audioMenuClickLoaded = 1; Game.gameLoadedAmt++; };
		this.audioMenuClick.src = AUDIO_MENUHOVER_SRC;
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
		//Superlaser Init
		for( var n = 0; n < MAX_SUPERLASERS; n++ ) {
			this.superlasers[n] = new Superlaser(n, 0, 0);
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
		
		this.gameCanvas.addEventListener('mousemove', this.ProcessMouseMove, false);
		
		//Begin Download
		this.assetMan.downloadAll(Game.SwitchStateToReady);
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
			//Superlaser Init
			for( var n = 0; n < MAX_SUPERLASERS; n++ ) {
				this.superlasers[n].x = 0;
				this.superlasers[n].y = 0;
				this.superlasers[n].isAlive = 0;
			}
		//General Variables
		this.numAst = 0;
		this.minAst = 0;
		this.maxAst = 0;
		this.numPar = 0;
		this.minPar = 0;
		this.maxPar = 0;
		this.dTheta = 0;
		this.gameScore = 0;
		this.earthHealth = 5;

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
		
		//Animation Frame Variables
		this.playerFrame      = 0,
		this.playerFireFrame  = 70;
		this.playerDeathFrame = 60;
	
		//BKG Playing Check
		this.bkgPlaying = 0;
	},
	
	CreateImages: function() {
	//MENU IMAGES	
		//MAIN MENU
			//BKG
		this.menuBKGImg 			= this.assetMan.getAsset(MENU_IMG_SRC);
			//PLAY BUTTON
		this.playButtonImg 			= this.assetMan.getAsset(BUTTON_PLAY_IMG_SRC);
		this.playButtonHoverImg		= this.assetMan.getAsset(BUTTON_PLAY_HOVER);
			//TUTORIAL BUTTON
		this.tutorialButtonImg 		= this.assetMan.getAsset(BUTTON_TUTORIAL_IMG_SRC);
		this.tutorialButtonHoverImg = this.assetMan.getAsset(BUTTON_TUTORIAL_HOVER);
			//CREDITS BUTTON
		this.creditsButtonImg 		= this.assetMan.getAsset(BUTTON_CREDITS_IMG_SRC);
		this.creditsButtonHoverImg 	= this.assetMan.getAsset(BUTTON_CREDITS_HOVER);
			//SCORE BUTTON
		this.scoreButtonImg 		= this.assetMan.getAsset(BUTTON_SCORE_IMG_SRC);
		this.scoreButtonHoverImg 	= this.assetMan.getAsset(BUTTON_SCORE_HOVER);
			//OPTIONS BUTTON
		this.optionsButtonImg 		= this.assetMan.getAsset(BUTTON_OPTIONS_IMG_SRC);
		this.optionsButtonHoverImg 	= this.assetMan.getAsset(BUTTON_OPTIONS_HOVER);
			//MENU EARTH
		this.menuEarthImg1			= this.assetMan.getAsset(MENU_EARTH1);
		this.menuEarthImg2			= this.assetMan.getAsset(MENU_EARTH2);
		this.menuEarthImg3			= this.assetMan.getAsset(MENU_EARTH3);
		this.menuEarthImg4			= this.assetMan.getAsset(MENU_EARTH4);
		//TUTORIAL
			//BKG
		this.tutorialBKGImg			= this.assetMan.getAsset(TUTORIAL_IMG_SRC);
			//NEXT BUTTON
		this.nextButtonImg			= this.assetMan.getAsset(BUTTON_NEXT_IMG_SRC);
		this.nextButtonHoverImg		= this.assetMan.getAsset(BUTTON_NEXT_HOVER);
			//PREV BUTTON
		this.prevButtonImg			= this.assetMan.getAsset(BUTTON_PREV_IMG_SRC);
		this.prevButtonHoverImg		= this.assetMan.getAsset(BUTTON_PREV_HOVER);
			//BACK BUTTON
		this.backButtonImg			= this.assetMan.getAsset(BUTTON_BACK_IMG_SRC);
		this.backButtonHoverImg		= this.assetMan.getAsset(BUTTON_BACK_HOVER);
			//TUTORIAL1
		this.tutorialtext1Img		= this.assetMan.getAsset(TUTORIAL_TEXT1_IMG_SRC);
		this.tutorialanim1Img		= this.assetMan.getAsset(TUTORIAL_ANIM1_IMG_SRC);
			//TUTORIAL2
		this.tutorialtext2Img		= this.assetMan.getAsset(TUTORIAL_TEXT2_IMG_SRC);
		this.tutorialanim2Img		= this.assetMan.getAsset(TUTORIAL_ANIM2_IMG_SRC);
			//TUTORIAL3
		this.tutorialtext3Img		= this.assetMan.getAsset(TUTORIAL_TEXT3_IMG_SRC);
		this.tutorialanim3Img		= this.assetMan.getAsset(TUTORIAL_ANIM3_IMG_SRC);
			//TUTORIAL4
		this.tutorialtext4Img		= this.assetMan.getAsset(TUTORIAL_TEXT4_IMG_SRC);
		this.tutorialanim4Img		= this.assetMan.getAsset(TUTORIAL_ANIM4_IMG_SRC);
			//TUTORIAL5
		this.tutorialtext5Img		= this.assetMan.getAsset(TUTORIAL_TEXT5_IMG_SRC);
		this.tutorialanim5Img		= this.assetMan.getAsset(TUTORIAL_ANIM5_IMG_SRC);
			//TUTORIAL6
		this.tutorialtext6Img		= this.assetMan.getAsset(TUTORIAL_TEXT6_IMG_SRC);
		this.tutorialanim6Img		= this.assetMan.getAsset(TUTORIAL_ANIM6_IMG_SRC);
			//TUTORIAL7
		this.tutorialtext7Img		= this.assetMan.getAsset(TUTORIAL_TEXT7_IMG_SRC);
		this.tutorialanim7Img		= this.assetMan.getAsset(TUTORIAL_ANIM7_IMG_SRC);
			//TUTORIAL8
		this.tutorialtext8Img		= this.assetMan.getAsset(TUTORIAL_TEXT8_IMG_SRC);
			//TUTORIAL MOUSE
		this.tutorialtextMouseImg	= this.assetMan.getAsset(TUTORIAL_TEXT_MOUSE_IMG_SRC);
		this.tutorialanimMouseImg	= this.assetMan.getAsset(TUTORIAL_ANIM_MOUSE_IMG_SRC);
		//CREDITS
		this.creditsBKGImg			= this.assetMan.getAsset(CREDITS_IMG_SRC);
		//SCORE
		this.scoreBKGImg			= this.assetMan.getAsset(SCORE_IMG_SRC);
	//INGAME IMAGES
		//BKG
		this.bkgImg					= this.assetMan.getAsset(BKG_IMG_SRC);
		this.pausedImg				= this.assetMan.getAsset(PAUSED_IMG_SRC);
		this.menuButtonImg				= this.assetMan.getAsset(BUTTON_MENU_IMG_SRC);
		//LEVELS
		this.level1Img				= this.assetMan.getAsset(LEVEL1_IMG_SRC);
		this.level2Img				= this.assetMan.getAsset(LEVEL2_IMG_SRC);
		this.level3Img				= this.assetMan.getAsset(LEVEL3_IMG_SRC);
		this.level4Img				= this.assetMan.getAsset(LEVEL4_IMG_SRC);
		this.level5Img				= this.assetMan.getAsset(LEVEL5_IMG_SRC);
		//EARTH
		this.earthImg1				= this.assetMan.getAsset(EARTH_IMG_SRC1);
		this.earthImg2				= this.assetMan.getAsset(EARTH_IMG_SRC2);
		this.earthImg3				= this.assetMan.getAsset(EARTH_IMG_SRC3);
		this.earthImg4				= this.assetMan.getAsset(EARTH_IMG_SRC4);
		//AIMING
		this.aimingImg				= this.assetMan.getAsset(AIMING_IMG_SRC);
		//LASER
		this.laserImg				= this.assetMan.getAsset(LASER_IMG_SRC);
		//SUPER LASER
		this.superlaserImg			= this.assetMan.getAsset(SUPERLASER_IMG_SRC);
		//ASTEROIDS
		this.asteroid1Img			= this.assetMan.getAsset(ASTEROID1_IMG_SRC);
		this.asteroid2Img			= this.assetMan.getAsset(ASTEROID2_IMG_SRC);
		this.asteroid3Img			= this.assetMan.getAsset(ASTEROID3_IMG_SRC);
		this.asteroidDeathImg		= this.assetMan.getAsset(ASTEROID_DEATH_IMG_SRC);
		this.asteroidImpactImg		= this.assetMan.getAsset(ASTEROID_IMPACT_IMG_SRC);
		this.asteroidImpact2Img		= this.assetMan.getAsset(ASTEROID_IMPACT2_IMG_SRC);
		//PARTICLES
		this.particleImg			= this.assetMan.getAsset(PARTICLE_IMG_SRC);
		//IONOSPHERE
		this.ionoImg				= this.assetMan.getAsset(IONO_IMG_SRC);
		//AURORA
		this.auroraImg				= this.assetMan.getAsset(AURORA_IMG_SRC);
		//IONOSPHERE METER
		this.powerContainerImg		= this.assetMan.getAsset(POWER_CONTAINER_IMG);
		this.powerBarFillImg		= this.assetMan.getAsset(POWER_LEVEL_IMG);
		this.projectedFillImg		= this.assetMan.getAsset(PROJECTED_IMG_SRC);
		//PLASMA METER
		this.plasmaLevelImg			= this.assetMan.getAsset(PLASMA_LEVEL_IMG_SRC);
		this.plasmaContainerImg		= this.assetMan.getAsset(PLASMA_CONTAINER_IMG);
		//IONO ICONS
		this.leftDangerIconImg		= this.assetMan.getAsset(LEFTICON_IMG_SRC);
		this.rightDangerIconImg		= this.assetMan.getAsset(RIGHTICON_IMG_SRC);
		//HARVESTING
		this.harvestImg				= this.assetMan.getAsset(HARVEST_IMG_SRC);
		//PLAYER
		this.playerImg				= this.assetMan.getAsset(PLAYER_IMG_SRC);
		//GAMEOVER
		this.gameoverImg			= this.assetMan.getAsset(GAMEOVER_IMG_SRC);
		this.victoryImg				= this.assetMan.getAsset(VICTORY_IMG_SRC);
		this.pressAnyImg			= this.assetMan.getAsset(PRESSANY_IMG_SRC);
		this.earthBurnImg1			= this.assetMan.getAsset(EARTHBURN_IMG_SRC1);
		this.earthBurnImg2			= this.assetMan.getAsset(EARTHBURN_IMG_SRC2);
	},

	LoadingSwitchStateToReady: function() {
		var loadingDiv = document.getElementById("LoadingDiv");
		loadingDiv.style.display = 'none';
		doResize();
		Game.menuCanvas.style.display = 'block';
		//LOADING IMAGES
		Game.loadingBKGImg 			= Game.loadingAssetMan.getAsset(LOADING_BKG_IMG_SRC);
		Game.loadingBarImg 			= Game.loadingAssetMan.getAsset(LOADING_BAR_IMG_SRC);
		Game.loadingContainerImg 	= Game.loadingAssetMan.getAsset(LOADING_CONTAINER_IMG_SRC);
		Game.gameState = Game.STATE_LOADING;
	},
	
	SwitchStateToReady: function() {
        Game.CreateImages();
		Game.isInitialized = 1;
        Game.gameState = Game.STATE_MENU;
        Game.assetsReady = Game.totalAssets; // does not mean all successfully
    },

	DrawScreen: function() {
		this.ctx.fillStyle	= "#333333";
        this.ctx.fillRect(0, 0, this.gameWidth, this.gameHeight);
		this.ctx.font 		= '20px Akashi';
		this.ctx.fillStyle	= 'white';
		
		//BACKGROUND
		this.ctx.drawImage(this.bkgImg, 0, 0);
		//SCORE
		this.ctx.fillText('Score: '  + Game.gameScore, 10, 25);
		//LEVEL
		if( this.levelShow === 1 ) {
			switch( this.level ) {
				case 1:
					this.ctx.drawImage(this.level1Img, 450, 160);
					break;
				case 2:
					this.ctx.drawImage(this.level2Img, 550, 160);
					break;
				case 3:
					this.ctx.drawImage(this.level3Img, 550, 160);
					break;
				case 4:
					this.ctx.drawImage(this.level4Img, 550, 160);
					break;
				case 5:
					this.ctx.drawImage(this.level5Img, 550, 160);
					break;
				default: console.log("ERROR: Level Draw"); break;
			}
		}
		//EARTH
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
			if( this.earthFrame >= 120 ) {
				this.earthSheetNum++;
				if( this.earthSheetNum == 5 ) {
					this.earthSheetNum = 1;
				}
				this.earthFrame = 0;
			}
		}
		//AIMING
		if( (Game.gameState === Game.STATE_PLAYING || Game.gameState === Game.STATE_FIRE) ) {
			this.ctx.save();
			this.ctx.translate(this.aimingX, this.aimingY);
			this.ctx.rotate(-this.playerTheta);
			this.ctx.translate(36, 0);
			this.ctx.drawImage(this.aimingImg, 0, this.aimingFrame*5, 200, 3, 0, 0, 200, 3);
			this.ctx.restore();
			if( this.aimingFrameTick === 1 ) {
				this.aimingFrame += 1;
				if( this.aimingFrame >= 5 ) {
					this.aimingFrame = 0;
				}
			}
		}
		//LASER
		for( var i = 0; i < Game.lasers.length; i++ ) {
			if( Game.lasers[i].isAlive != 0 ) {
				this.ctx.save();
				Game.lasers[i].drawSelf(this.ctx, this.laserImg);
				this.ctx.restore();
				if( this.laserFrameTick === 1 ) {
					Game.lasers[i].frame += 1;
					if( Game.lasers[i].frame >= 10 ) {
						Game.lasers[i].frame = 0;
					}
				}
			}
		}
		//SUPERLASER
		for( var i = 0; i < Game.superlasers.length; i++ ) {
			if( Game.superlasers[i].isAlive != 0 ) {
				this.ctx.save();
				Game.superlasers[i].drawSelf(this.ctx, this.superlaserImg);
				this.ctx.restore();
				if( this.laserFrameTick === 1 ) {
					Game.superlasers[i].frame += 1;
					if( Game.superlasers[i].frame >= 14 ) {
						Game.superlasers[i].frame = 0;
					}
				}
			}
		}
		//ASTEROIDS
		for( var i = 0; i < Game.asteroids.length; i++ ) {
			if( Game.asteroids[i].isAlive != 0 && Game.asteroids[i].state === 0 || Game.asteroids[i].state === 2 ) {
				Game.asteroids[i].drawSelf(this.ctx, this.asteroid1Img, this.asteroid2Img, this.asteroid3Img);
				if( this.asteroidFrameTick === 1 ) {
					Game.asteroids[i].frame += 1;
					if( Game.asteroids[i].frame >= 60 ) {
						Game.asteroids[i].frame = 0;
					}
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
				if( Game.asteroids[i].astSize === 2 ){
					if( Game.asteroids[i].iFrame >= 120 ) {
						Game.asteroids[i].iFrame = 0;
						Game.asteroids[i].isAlive = 0;
						Game.asteroids[i].state = 0;
						Game.numAst--;
						Game.earthHealth-=3;
					}
				} else if ( Game.asteroids[i].astSize === 1 ){
					if( Game.asteroids[i].iFrame >= 120 ) {
						Game.asteroids[i].iFrame = 0;
						Game.asteroids[i].isAlive = 0;
						Game.asteroids[i].state = 0;
						Game.numAst--;
						Game.earthHealth-=2;
					}
				} else{
					if( Game.asteroids[i].iFrame >= 120 ) {
						Game.asteroids[i].iFrame = 0;
						Game.asteroids[i].isAlive = 0;
						Game.asteroids[i].state = 0;
						Game.numAst--;
						Game.earthHealth--;
					}
				}
				if( Game.earthHealth <= 0 ){
					Game.gameState = Game.STATE_DYING;
				}
			}
		}
		//PARTICLES
		for( var i = 0; i < Game.particles.length; i++ ) {
			if( Game.particles[i].isAlive === 1 ) {
				Game.particles[i].drawSelf(this.ctx, this.particleImg);
				if( this.particleFrameTick === 1 ) {
					Game.particles[i].frame += 1;
					if( Game.particles[i].frame >= 7 ) {
						Game.particles[i].frame = 0;
					}
				}
			}
		}
		//IONOSPHERE
		this.ctx.drawImage(this.ionoImg, 0, this.ionoState*130, 1280, 130, this.earthX-10, this.earthY-30, 1280, 130);
		//AURORA
		if( this.gameState === this.STATE_HARVEST ) {
			this.ctx.drawImage(this.auroraImg, 0, this.auroraFrame*150, 1280, 150, this.earthX, this.earthY-30, 1280, 151);
			if( this.auroraFrameTick === 1 ) {
				this.auroraFrame++;
				if( this.auroraFrame >= 16 ) {
					this.auroraFrame = 0;
				}
			}
		}
		//IONOSPHERE METER
		this.ctx.drawImage(this.powerContainerImg, 240, 699);
		this.ctx.drawImage(this.powerBarFillImg, 0, 0, (this.pLevel*4)+1, 15, 246, 702, (this.pLevel*4)+1, 15);
		this.ctx.drawImage(this.projectedFillImg, 0, 0, 788, 30, (this.pLevel*4)+246, 702, ((this.maxChargeLevel - this.chargedLevel)*4), 30 )
		//PLASMA METER
		if( Game.pHarvest === 0 ) {
			//Do Nothing
		} else if( Game.plasmaLevel != 0 ) {
			this.ctx.drawImage(this.plasmaLevelImg, 200-5*Game.pHarvest, 0, 5*Game.pHarvest, 36, 1265-(Game.pHarvest*5), 13, Game.pHarvest*5, 36);
		}
		this.ctx.drawImage(this.plasmaContainerImg, 1062, 10);
		//IONO ICONS
		this.ctx.drawImage(this.leftDangerIconImg, 0, 0, 60, 60, 200, 690, 30, 30);
		this.ctx.drawImage(this.rightDangerIconImg, 0, 0, 60, 60, 1060, 690, 30, 30);
		//HARVESTING
		if( Game.gameState === Game.STATE_HARVEST ){
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
		if( Game.gameState != Game.STATE_DEAD ) {
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
					Game.isGameover = 2;
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
		this.auroraFrameTick++;
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
		if( this.auroraFrameTick   >= 10) {
			this.auroraFrameTick = 0;
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
							Game.auroraFrame = 0;
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
						Game.mouseOnScreen = 0;
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
						Game.mouseOnScreen = 0;
						Game.dTheta -= 0.4*Math.PI/180.0;
						if( Game.dTheta < -0.6*Math.PI/180.0 ) {
							Game.dTheta = -0.5*Math.PI/180.0;
						}
					}
					break;
				//ESC -- Pause
				case 27:
					if( Game.gameState === Game.STATE_PLAYING || Game.gameState === Game.STATE_FIRE || Game.gameState === Game.STATE_HARVEST ) {
						Game.prevState = Game.gameState;
						Game.audioBKG.pause();
						Game.gameState = Game.STATE_PAUSED;
						this.ctx.drawImage(this.menuButtonImg, 535, 400);
						this.ctx.drawImage(this.pausedImg, 530, 300);
					} else if( Game.gameState === Game.STATE_PAUSED ) {
						Game.gameState = Game.prevState;
						Game.audioBKG.play();
						Game.prevTime = newDate.getTime() / 1000.0;
						Game.curTime = newDate.getTime() / 1000.0;
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
	
	ProcessMouseClick: function(event) {
		if( Game.gameState != Game.STATE_FIRE ) {
			Game.ShootLaser();
		}
	},
	
	ProcessMouseDown: function(event) {
		if( Game.gameState === Game.STATE_GAMEOVER ){
			if( event != null ) {
				this.menuCanvas.style.display = 'block';
				this.gameCanvas.style.display = 'none';
				Game.gameState = Game.STATE_MENU;
			}
		} else if( Game.gameState === Game.STATE_PAUSED ){
			var mousePos = Game.getMousePos(this.gameCanvas, event);
			if( mousePos.x > 535 && mousePos.x < 745 && mousePos.y > 400 && mousePos.y <460 ){
				Game.ReInit();
				Game.gameState = Game.STATE_MENU;
				Game.gameCanvas.style.display    = "none";
				Game.menuCanvas.style.display    = "block";
			}
		} else {
			if( event.button === Game.mouseLeft && Game.gameState != Game.STATE_FIRE ) {
				Game.ShootLaser();
			} else if( event.button === Game.mouseRight && Game.gameState != Game.STATE_DYING ) {
				if( Game.gameState === Game.STATE_HARVEST ) {
					Game.gameState = Game.STATE_PLAYING;
					Game.harvestTick = 0;
					Game.auroraFrame = 0;
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
			} else if( event.button === Game.mouseMiddle && Game.gameState === Game.STATE_PLAYING ) {
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
		}
	},

	ProcessMouseMove: function(event) {
		var gameCanvas = document.getElementById(CANVAS_GAME_ID);
		var mousePos = Game.getMousePos(gameCanvas, event);
		Game.mousePositionX = mousePos.x;
		if(Game.mousePositionX >=5 && Game.mousePositionX <= Game.gameWidth){
			Game.mouseOnScreen = 1;
		}
		else{
			Game.mouseOnScreen = 0;
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
	
	Victory: function() {
		Game.ReInit();
		this.ctx.fillStyle = "#333333";
        this.ctx.fillRect(0, 0, this.gameWidth, this.gameHeight);
		
		//BACKGROUND
		if( Game.bkgImgLoaded != 0 ) {
			this.ctx.drawImage(this.bkgImg, 0, 0);
		}
		//VICTORY
		if( this.victoryImgLoaded != 0 ) {
			this.ctx.drawImage(this.victoryImg, 0, 0);
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
				if( this.earthFrame >= 120 ) {
					this.earthSheetNum++;
					if( this.earthSheetNum == 5 ) {
						this.earthSheetNum = 1;
					}
					this.earthFrame = 0;
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
			this.ctx.drawImage(this.playerImg, 0, this.playerFrame*75, 75, 75, 0, 0, 75, 75);
			this.ctx.restore();
			if( this.frameTick === 1 ) {
				this.playerFrame += 1;
			}
			if( this.playerFrame >= 60 ) {
				this.playerFrame = 0;
			}
		}
		//PRESS ANY KEY
		if( Game.canReturn === 1 && Game.pressAnyImgLoaded != 0 ) {
			this.ctx.drawImage(this.pressAnyImg, 0, 0, 824, 43, 228, 368, 824, 43);
		}
		this.frameTick++;
		if( this.frameTick >= 10 ) {
			this.frameTick = 0;
		}
		
		if( this.victoryFrameTick === 1 ) {
			this.victoryFrame++;
			if( this.victoryFrame >= 30 ) {
				//Allow them to return to main screen
				Game.canReturn = 1;
				Game.gameState = Game.STATE_GAMEOVER;
			}
		}
		this.victoryFrameTick++;
		if( this.victoryFrameTick >= 5 ) {
			this.victoryFrameTick = 0;
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
					break;
				default: console.log("ERROR: Earth Burn Sheet Num");
			}
		}
		//PRESS ANY KEY
		if( Game.canReturn === 1 && Game.pressAnyImgLoaded != 0 ) {
			this.ctx.drawImage(this.pressAnyImg, 0, 0, 824, 43, 228, 368, 824, 43);
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
		
		if( this.gameoverFrameTick === 1 ) {
			this.gameoverFrame++;
			if( this.gameoverFrame >= 30 ) {
				//Allow them to return to main screen
				Game.canReturn = 1;
				Game.gameState = Game.STATE_GAMEOVER;
			}
		}
		this.gameoverFrameTick++;
		if( this.gameoverFrameTick >= 5 ) {
			this.gameoverFrameTick = 0;
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
				for( var k = 0; k < Game.superlasers.length; k++ ) {
					if( Game.asteroids[i].isColliding(Game.superlasers[k].x-20, Game.superlasers[k].y-40, "superlaser") ) {
						Game.asteroids[i].destroy();
						this.audioAHit.play();
						Game.superlasers[k].destroy();
					}
				}
			}
		}
		//Particles
		for( var i = 0; i < Game.particles.length; i++ ) {
			if( Game.particles[i].isAlive != 0 ) {
				if( Game.particles[i].isColliding(Game.playerX, Game.playerY, "player") ) {
					Game.particles[i].destroy();
					//TODO Add in Particle Collect Noise
					
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
				for( var k = 0; k < Game.superlasers.length; k++ ) {
					if( Game.particles[i].isColliding(Game.superlasers[k].x-20, Game.superlasers[k].y-40, "superlaser") ) {
						Game.particles[i].destroy();
					}
				}
			}
		}
	},
	
	OverchargeShot: function() {
		this.pHarvest = 0;
		this.audioHarvesting.pause();
		this.audioHarvesting.currentTime = 0;
		this.audioPFire.pause();
		this.audioPFire.currentTime = 0;
		this.audioPFire.play();
		this.gameState = this.STATE_FIRE;
		for( var i = 0; i < this.superlasers.length; i++ ) {
			this.superlasers[i].isAlive = 1;
			switch( i ) {
				case 0:
					this.superlasers[i].theta = -Game.playerTheta;
					this.superlasers[i].x = Game.playerX+20;
					this.superlasers[i].y = Game.playerY;
					break;
				case 1:
					this.superlasers[i].theta = -Game.playerTheta+0.1;
					this.superlasers[i].x = Game.playerX+20;
					this.superlasers[i].y = Game.playerY;
					break;
				case 2:
					this.superlasers[i].theta = -Game.playerTheta+0.3;
					this.superlasers[i].x = Game.playerX+20;
					this.superlasers[i].y = Game.playerY;
					break;
				case 3:
					this.superlasers[i].theta = -Game.playerTheta-0.1;
					this.superlasers[i].x = Game.playerX+20;
					this.superlasers[i].y = Game.playerY;
					break;
				case 4:
					this.superlasers[i].theta = -Game.playerTheta-0.3;
					this.superlasers[i].x = Game.playerX+20;
					this.superlasers[i].y = Game.playerY;
					break;
				default: console.log("ERROR: Overcharge Shot Spawning"); break;
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
			this.spawnLargeAsts = 0;
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
			this.spawnLargeAsts = 1;
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
			Game.isGameover = 1;
			this.gameState = this.STATE_VICTORY;
		}
		//Spawn Asteroids
		if( Game.numAst <= this.minAst && Game.numAst <= MAX_ASTEROIDS ) {
			for( var i = Game.numAst; i < this.maxAst; i++ ) {
				var speed = Math.floor((Math.random())+1);
				var frame = Math.floor(Math.random()*60);
				if( this.spawnLargeAsts === 1 ) {
					var size = Math.floor(Math.random()*3);
				} else {
					var size = Math.floor(Math.random()*2);
				}
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
		if( Game.gameState === Game.STATE_PAUSED ) {
			//Do Nothing
		} else if( Game.gameState === Game.STATE_MENU ) { //MENU UPDATE
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
			
			//STOP CHARGING IF DEAD
			if( Game.gameState === Game.STATE_DYING && Game.charging === 1 ) {
				Game.charging = 0;
			}
			
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
			
			//PLAYER MOUSE MOVE
			if(Game.mouseOnScreen === 1){
				if( Game.mousePositionX > Game.playerX + 20) {
					Game.dTheta = -0.4*Math.PI/180.0;
				}
				else if( Game.mousePositionX <= Game.playerX - 20 ) {
					Game.dTheta = 0.4*Math.PI/180.0;
				}
				else {
					Game.dTheta = 0;
				}
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
			
			//SUPERLASER MOVEMENT
			for( var i = 0; i < Game.superlasers.length; i++ ) {
				if( Game.superlasers[i].y < -1 ) {
					Game.superlasers[i].destroy();
				} else {
					Game.superlasers[i].x += Math.cos(Game.superlasers[i].theta)*3.5;
					Game.superlasers[i].y += Math.sin(Game.superlasers[i].theta)*3.5;
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
			Game.tutorial.DrawTutorial(this.tutorialtext1Img, this.tutorialanim1Img, this.tutorialtext2Img, this.tutorialanim2Img, this.tutorialtext3Img, this.tutorialanim3Img,
						this.tutorialtext4Img, this.tutorialanim4Img, this.tutorialtext4Img, this.tutorialanim4Img, this.tutorialtext6Img, this.tutorialanim6Img,
						this.tutorialtext7Img, this.tutorialanim7Img, this.tutorialtext8Img, this.tutorialtextMouseImg, this.tutorialanimMouseImg);
		} else if(Game.gameState === Game.STATE_SCORE) { //SCORE UPDATE
			Game.score.DrawScore();
		} else if( (Game.gameState === Game.STATE_GAMEOVER || Game.gameState === Game.STATE_VICTORY) && Game.isGameover === 1 ) { //VICTORY UPDATE
			Game.Victory();
		} else if( (Game.gameState === Game.STATE_GAMEOVER || Game.gameState === Game.STATE_DEAD) && Game.isGameover === 2 ) { //GAMEOVER UPDATE
			Game.GameOver();
		} else {
			console.log("ERROR: Game State");
		}
	},
	
	Loading: function() {
		this.menuCTX.fillStyle = "#333333";
		this.menuCTX.drawImage(this.loadingBKGImg, 0, 0);
		this.menuCTX.drawImage(this.loadingContainerImg, 0, 500);
		this.menuCTX.drawImage(this.loadingBarImg, 0, 0, 1280, 50, 0, 500, 16*Game.assetMan.successCount, 50);
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
window.addEventListener("mousedown", doMouseDown, false);

//Resizing
function doResize() {
	//alert("Resized");
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

function doMouseDown(e) {
	if( Game.gameState === Game.STATE_PLAYING || Game.gameState === Game.STATE_HARVEST || Game.gameState === Game.STATE_GAMEOVER || Game.gameState === Game.STATE_PAUSED ) {
		Game.ProcessMouseDown(e);
	} else {
		return;
	}
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
	runGame();
};

function runGame() {
	//Checks Game States
	if( Game.isInitialized === 1 ) {
		Game.Update();
	} else if( Game.gameState === Game.STATE_LOADING ) {
		Game.Loading();
	}
	requestAnimationFrame(runGame);
};
//### END OF GLOBAL FUNCTIONS