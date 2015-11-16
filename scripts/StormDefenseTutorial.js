// JavaScript Document

function tutorialButton(imgSource, imgSrcOnClick)
{
    // public member variables
	this.boxColor          = "rgb(200, 200, 200)";
	this.boxShadowColor    = "rgb(100, 100, 100)";
	this.x                 = 39;
	this.y                 = 31;
	this.width             = 200;
	this.height            = 60;
	this.text              = "Button Text";
	this.textColor         = "rgb(0, 0, 256)";
	this.src               = "none";
	this.img               = null;
	this.imgMainSrc        = null;
	this.imgClickSrc       = null;
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
tutorialButton.prototype.coordsAreInside = function(mouseX, mouseY)
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
tutorialButton.prototype.drawButton = function(tutorialContext)
{
	if (this.imgLoaded == 0)
	{
		tutorialContext.font = "30px Verdana";   // could make this a button trait
		
		tutorialContext.fillStyle = this.boxShadowColor;
		tutorialContext.fillRect(this.x+2, this.y+2, this.width, this.height);
		tutorialContext.fillStyle = this.boxColor;
		tutorialContext.fillRect(this.x, this.y, this.width, this.height);
		tutorialContext.fillStyle = this.textColor;
		tutorialContext.fillText(this.text, this.x+5, this.y + this.height - 10);
	}
	else
	{    
		tutorialContext.drawImage(this.img,
							  0, 0, this.img.width, this.img.height,
		                      this.x, this.y, this.width, this.height);
	}
};

function theTutorial(backImage, buttonBack, buttonBackClick)
{
    //console.log("DEBUG: backImage sent = " + backImage);
    var tutorialBckgrndLoaded = 0; // 0 means false, private var
    this.tutorialBckgrndImg = new Image();
    this.tutorialBckgrndImg.onload = function () { 	tutorialBckgrndLoaded = 1; };
                                                //console.log("DEBUG: menu background loaded!" + menuBckgrndLoaded); };
    this.tutorialBckgrndImg.src = backImage;
    var backButton = new tutorialButton(buttonBack);
    backButton.text = "Play Game";
	
    // ----------------------------------------------------------------------------
    // Draw the Menu Screen
    // ----------------------------------------------------------------------------
    this.DrawTutorial = function()
    {
        // Init Local Canvas variables
        var tutorialCanvas = document.getElementById(CANVAS_TUTORIAL_ID);
        var tutorialCtx = tutorialCanvas.getContext("2d");
		
		tutorialCtx.drawImage(this.tutorialBckgrndImg, 0, 0);
		backButton.drawButton(tutorialCtx);
		
	};
	
	this.doMouseOver = function(evt)
	{
		var tutorialCanvas = document.getElementById(CANVAS_TUTORIAL_ID);
		var mousePos = Game.getMousePos(tutorialCanvas, evt);

		
		if ( backButton.coordsAreInside(mousePos.x, mousePos.y) )
		{
			backButton.img.src = buttonBackClick;
		}
		else {
			backButton.img.src = buttonBack;
		}
	};
	
	this.doMenuClick = function(evt)
	{
		var menuCanvas = document.getElementById(CANVAS_MENU_ID);
		var tutorialCanvas = document.getElementById(CANVAS_TUTORIAL_ID);
	
		var mousePos = Game.getMousePos(tutorialCanvas, evt);
		if ( backButton.coordsAreInside(mousePos.x, mousePos.y) )
		{
			tutorialCanvas.style.display = "none";
			menuCanvas.style.display    = "block";
			Game.gameState = Game.STATE_MENU;
		} 
	};
    
};