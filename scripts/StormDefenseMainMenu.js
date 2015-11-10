// JavaScript Document

function menuButton(imgSource, imgSrcOnHover)
{
    // public member variables
	this.boxColor          = "rgb(200, 200, 200)";
	this.boxShadowColor    = "rgb(100, 100, 100)";
	this.x                 = 60;
	this.y                 = 53;
	this.width             = 450;
	this.height            = 60;
	this.text              = "Button Text";
	this.textColor         = "rgb(0, 0, 256)";
	this.src               = "none";
	this.img               = null;
	this.imgMainSrc        = null;
	this.imgHoverSrc       = null;
	this.imgLoaded         = 0;
	if(imgSource){
		this.img = new Image();
		this.imgLoaded = 1;
		this.img.src = this.imgMainSrc = imgSource;
	}
};

// ----------------------------------------------------------------------------
// menuButton 'class' method: coordsAreInside
// ----------------------------------------------------------------------------
menuButton.prototype.coordsAreInside = function(mouseX, mouseY)
{
    if (   ((mouseX > this.x) && (mouseX < (this.x + this.width))) 
		&& ((mouseY > this.y) && (mouseY < (this.y + this.height))) )
		return true;
	else
		return false;	
};

// ----------------------------------------------------------------------------
// menuButton class method: drawButton
// ----------------------------------------------------------------------------
menuButton.prototype.drawButton = function(menuContext)
{
	if (this.imgLoaded == 0)
	{
		menuContext.font = "30px Verdana";   // could make this a button trait
		
		menuContext.fillStyle = this.boxShadowColor;
		menuContext.fillRect(this.x+2, this.y+2, this.width, this.height);
		menuContext.fillStyle = this.boxColor;
		menuContext.fillRect(this.x, this.y, this.width, this.height);
		menuContext.fillStyle = this.textColor;
		menuContext.fillText(this.text, this.x+5, this.y + this.height - 10);
	}
	else
	{    
		menuContext.drawImage(this.img, 
		                      0, 0, this.img.width, this.img.height,
		                      this.x, this.y, this.width, this.height);
	}
};

function theMainMenu(backImage, buttonMenuImg, buttonCreditsImg, buttonScoreImg, buttonTutorialImg, buttonPlayHover, buttonCreditsHover, buttonScoreHover, buttonTutorialHover)
{
    var menuBckgrndLoaded = 0; 
    this.menuBckgrndImg = new Image();
    this.menuBckgrndImg.onload = function () { 	menuBckgrndLoaded = 1; };
                                                
    this.menuBckgrndImg.src = backImage;
	
    var playButton = new menuButton(buttonMenuImg);
    playButton.text = "Play Game";
	
	var tutorialButton = new menuButton(buttonTutorialImg);
    tutorialButton.text = "Tutorial";
	tutorialButton.y = 180;
	
	var creditsButton = new menuButton(buttonCreditsImg);
    creditsButton.text = "Credits";
	creditsButton.y = 295;
	
	var scoreButton = new menuButton(buttonScoreImg);
    scoreButton.text = "High Scores";
	scoreButton.y = 410;
	
    // ----------------------------------------------------------------------------
    // Draw the Menu Screen
    // ----------------------------------------------------------------------------
    this.DrawMenu = function()
    {
        // Init Local Canvas variables
        var menuCanvas = document.getElementById(CANVAS_MENU_ID);
        var menuCtx = menuCanvas.getContext("2d");
		
		menuCtx.drawImage(this.menuBckgrndImg, 0, 0);
		playButton.drawButton(menuCtx);
		creditsButton.drawButton(menuCtx);
		scoreButton.drawButton(menuCtx);
		tutorialButton.drawButton(menuCtx);
		
	};
	
	this.doMouseOver = function(evt)
	{
		var menuCanvas = document.getElementById(CANVAS_MENU_ID);
		var mousePos = Game.getMousePos(menuCanvas, evt);
		
		if ( playButton.coordsAreInside(mousePos.x, mousePos.y) ){
			playButton.img.src = buttonPlayHover;
		}
		else if ( tutorialButton.coordsAreInside(mousePos.x, mousePos.y) ){
			tutorialButton.img.src = buttonTutorialHover;
		} 
		else if ( creditsButton.coordsAreInside(mousePos.x, mousePos.y) ){
			creditsButton.img.src = buttonCreditsHover;
		}
		else if ( scoreButton.coordsAreInside(mousePos.x, mousePos.y) ){
			scoreButton.img.src = buttonScoreHover;
		}
		else {
			playButton.img.src = buttonMenuImg;
			tutorialButton.img.src = buttonTutorialImg;
			creditsButton.img.src = buttonCreditsImg;
			scoreButton.img.src = buttonScoreImg;
		}
	};
	
	this.doMenuClick = function(evt)
	{
		var menuCanvas = document.getElementById(CANVAS_MENU_ID);
		var gameCanvas = document.getElementById(CANVAS_GAME_ID);
		var creditsCanvas = document.getElementById(CANVAS_CREDITS_ID);	
		var tutorialCanvas = document.getElementById(CANVAS_TUTORIAL_ID);
		var scoreCanvas = document.getElementById(CANVAS_SCORE_ID);		

		var mousePos = Game.getMousePos(menuCanvas, evt);

		if ( playButton.coordsAreInside(mousePos.x, mousePos.y) ){
			gameCanvas.style.display    = "block";
			menuCanvas.style.display    = "none";
			creditsCanvas.style.display = "none";
			Game.gameState = Game.STATE_PLAYING;
		}
		
		else if ( creditsButton.coordsAreInside(mousePos.x, mousePos.y) ){
			gameCanvas.style.display    = "none";
			menuCanvas.style.display    = "none";
			creditsCanvas.style.display = "block";
			Game.gameState = Game.STATE_CREDITS;
		} 
		
		else if ( tutorialButton.coordsAreInside(mousePos.x, mousePos.y) ){
			gameCanvas.style.display     = "none";
			menuCanvas.style.display     = "none";
			creditsCanvas.style.display  = "none";
			tutorialCanvas.style.display = "block";
			Game.gameState = Game.STATE_TUTORIAL;
		} 
		else if ( scoreButton.coordsAreInside(mousePos.x, mousePos.y) ){
			gameCanvas.style.display     = "none";
			menuCanvas.style.display     = "none";
			creditsCanvas.style.display  = "none";
			tutorialCanvas.style.display = "none";
			scoreCanvas.style.display    = "block";
			Game.gameState = Game.STATE_SCORE;
		} 
	};
    
};