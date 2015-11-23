// JavaScript Document

function tutorialButton(imgSource, imgSrcOnHover) {
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
tutorialButton.prototype.coordsAreInside = function(mouseX, mouseY) {
    if (   ((mouseX > this.x) && (mouseX < (this.x + this.width))) 
		&& ((mouseY > this.y) && (mouseY < (this.y + this.height))) )
		return true;
	else
		return false;	
};

// ----------------------------------------------------------------------------
// menuButton class method: drawButton
// ----------------------------------------------------------------------------
tutorialButton.prototype.drawButton = function(tutorialContext) {
	if( this.imgLoaded == 0 ) {
		tutorialContext.font = "30px Verdana";   // could make this a button trait
		
		tutorialContext.fillStyle = this.boxShadowColor;
		tutorialContext.fillRect(this.x+2, this.y+2, this.width, this.height);
		tutorialContext.fillStyle = this.boxColor;
		tutorialContext.fillRect(this.x, this.y, this.width, this.height);
		tutorialContext.fillStyle = this.textColor;
		tutorialContext.fillText(this.text, this.x+5, this.y + this.height - 10);
	} else {    
		tutorialContext.drawImage(this.img,
							  0, 0, this.img.width, this.img.height,
		                      this.x, this.y, this.width, this.height);
	}
};

function theTutorial(backImage, buttonBack, buttonBackHover, buttonNext, buttonNextHover, buttonPrev, buttonPrevHover) {
    var tutorialBckgrndLoaded = 0; // 0 means false, private var
    this.tutorialBckgrndImg = new Image();
    this.tutorialBckgrndImg.onload = function () { 	tutorialBckgrndLoaded = 1; };
    this.tutorialBckgrndImg.src = backImage;
	
    var backButton = new tutorialButton(buttonBack);
    backButton.text = "Play Game";
	var nextButton = new tutorialButton(buttonNext);
    nextButton.text = "Next";
	nextButton.x = 800;
	var prevButton = new tutorialButton(buttonPrev);
    prevButton.text = "Prev";
	prevButton.x = 500;
	
	this.tutanimFrame = 0;
	this.tutanimFrameTick = 0;
	this.numFrames = 13;
	this.curTut = 0;
	
    // ----------------------------------------------------------------------------
    // Draw the Menu Screen
    // ----------------------------------------------------------------------------
    this.DrawTutorial = function(tt1, ta1, tt2, ta2, tt3, ta3, tt4, ta4, tt5, ta5, tt6, ta6) {
        // Init Local Canvas variables
        var tutorialCanvas = document.getElementById(CANVAS_TUTORIAL_ID);
        var tutorialCTX = tutorialCanvas.getContext("2d");
		
		tutorialCTX.drawImage(this.tutorialBckgrndImg, 0, 0);

		switch( this.curTut ) {
			case 0:
				//Intro
				this.numFrames = 13;
				tutorialCTX.drawImage(tt1, 350, 200);
				tutorialCTX.drawImage(ta1, this.tutanimFrame*640, 0, 640, 360, 350, 360, 640, 360);
				break;
			case 1:
				//Movement
				this.numFrames = 16;
				tutorialCTX.drawImage(tt2, 300, 200);
				tutorialCTX.drawImage(ta2, this.tutanimFrame*640, 0, 640, 360, 350, 360, 640, 360);
				break;
			case 2:
				//Charging
				this.numFrames = 23;
				tutorialCTX.drawImage(tt3, 250, 90);
				tutorialCTX.drawImage(ta3, this.tutanimFrame*640, 0, 640, 360, 350, 360, 640, 360);
				break;
			case 3:
				//Harvesting
				this.numFrames = 12;
				tutorialCTX.drawImage(tt4, 300, 90);
				tutorialCTX.drawImage(ta4, this.tutanimFrame*640, 0, 640, 360, 350, 360, 640, 360);
				break;
			case 4:
				//Shooting
				this.numFrames = 10;
				tutorialCTX.drawImage(tt5, 450, 100);
				tutorialCTX.drawImage(ta5, this.tutanimFrame*640, 0, 640, 360, 350, 360, 640, 360);
				break;
			case 5:
				//Warning
				this.numFrames = 15;
				tutorialCTX.drawImage(tt6, 350, 50);
				tutorialCTX.drawImage(ta6, this.tutanimFrame*640, 0, 640, 360, 350, 360, 640, 360);
				break;
			case 6:
				//Particles ################################################################################ FINISH THIS WITH THE TEXT
				this.numFrames = 31;
				tutorialCTX.drawImage(tt6, 350, 50);
				tutorialCTX.drawImage(ta6, this.tutanimFrame*640, 0, 640, 360, 350, 360, 640, 360);
				break;
			default: console.log("ERROR: Current Tutorial Selection");
		}
		
		if( this.tutanimFrameTick === 1 ) {
			this.tutanimFrame++;
		}
		if( this.tutanimFrame >= this.numFrames ) {
			this.tutanimFrame = 0;
		}
		this.tutanimFrameTick++;
		if( this.tutanimFrameTick >= 50 ) {
			this.tutanimFrameTick = 0;
		}
		
		backButton.drawButton(tutorialCTX);
		nextButton.drawButton(tutorialCTX);
		prevButton.drawButton(tutorialCTX);
	};
	
	this.doMouseOver = function(evt) {
		var tutorialCanvas = document.getElementById(CANVAS_TUTORIAL_ID);
		var mousePos = Game.getMousePos(tutorialCanvas, evt);

		if( backButton.coordsAreInside(mousePos.x, mousePos.y) ) {
			backButton.img.src = buttonBackHover;
		} else if( nextButton.coordsAreInside(mousePos.x, mousePos.y) ) {
			nextButton.img.src = buttonNextHover;
		} else if( prevButton.coordsAreInside(mousePos.x, mousePos.y) ) {
			prevButton.img.src = buttonPrevHover;
		} else {
			backButton.img.src = buttonBack;
			nextButton.img.src = buttonNext;
			prevButton.img.src = buttonPrev;
		}
	};
	
	this.doMenuClick = function(evt) {
		var menuCanvas = document.getElementById(CANVAS_MENU_ID);
		var tutorialCanvas = document.getElementById(CANVAS_TUTORIAL_ID);
	
		var mousePos = Game.getMousePos(tutorialCanvas, evt);
		if( backButton.coordsAreInside(mousePos.x, mousePos.y) ) {
			tutorialCanvas.style.display = "none";
			menuCanvas.style.display    = "block";
			Game.gameState = Game.STATE_MENU;
		} else if( nextButton.coordsAreInside(mousePos.x, mousePos.y) ) {
			alert(this.curTut);
			this.curTut++;
			alert(this.curTut);
			if( this.curTut >= 7 ) {
				this.curTut = 0;
			}
		} else if( prevButton.coordsAreInside(mousePos.x, mousePos.y) ) {
			this.curTut--;
			if( this.curTut <= -1 ) {
				this.curTut = 6;
			}
		}
	};
    
};