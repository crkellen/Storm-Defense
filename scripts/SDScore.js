// JavaScript Document

function scoreButton(imgSource)
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
scoreButton.prototype.coordsAreInside = function(mouseX, mouseY)
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
scoreButton.prototype.drawButton = function(scoreContext)
{
	if (this.imgLoaded == 0)
	{
		scoreContext.font = "30px Verdana";   // could make this a button trait
		
		scoreContext.fillStyle = this.boxShadowColor;
		scoreContext.fillRect(this.x+2, this.y+2, this.width, this.height);
		scoreContext.fillStyle = this.boxColor;
		scoreContext.fillRect(this.x, this.y, this.width, this.height);
		scoreContext.fillStyle = this.textColor;
		scoreContext.fillText(this.text, this.x+5, this.y + this.height - 10);
	}
	else
	{    
		scoreContext.drawImage(this.img,
							  0, 0, this.img.width, this.img.height,
		                      this.x, this.y, this.width, this.height);
	}
};

function theScore(backImage, buttonBack, buttonBackClick)
{
    //console.log("DEBUG: backImage sent = " + backImage);
    var scoreBckgrndLoaded = 0; // 0 means false, private var
    this.scoreBckgrndImg = new Image();
    this.scoreBckgrndImg.onload = function () { 	scoreBckgrndLoaded = 1; };
                                                //console.log("DEBUG: menu background loaded!" + menuBckgrndLoaded); };
    this.scoreBckgrndImg.src = backImage;
    var backButton = new scoreButton(buttonBack);
    backButton.text = "Play Game";
		
    this.DrawScore = function()
    {
        // Init Local Canvas variables
        var scoreCanvas = document.getElementById(CANVAS_SCORE_ID);
        var scoreCtx = scoreCanvas.getContext("2d");
		
		scoreCtx.drawImage(this.scoreBckgrndImg, 0, 0);
		backButton.drawButton(scoreCtx);
	};
	
	this.doMouseOver = function(evt)
	{
		var scoreCanvas = document.getElementById(CANVAS_SCORE_ID);
		var mousePos = Game.getMousePos(scoreCanvas, evt);

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
		var scoreCanvas = document.getElementById(CANVAS_SCORE_ID);
	
		var mousePos = Game.getMousePos(scoreCanvas, evt);
		if ( backButton.coordsAreInside(mousePos.x, mousePos.y) )
		{
			scoreCanvas.style.display = "none";
			menuCanvas.style.display    = "block";
			Game.gameState = Game.STATE_MENU;
		} 
	};
    
};