function Asteroid(id, state, src, speed, flip, frame) {
	this.id = id; //Position in Array
	this.state = state; //0,1,2 - Normal, Destroyed, Destroyed Large
	this.src = src;
	this.speed = speed;
	this.frame = frame;
	this.x = 0; //Actual Position
	this.y = 0; //Actual Position
	this.dx = 0; //Direction
	this.dy = 0; //Direction
	this.direction = 0;
	this.dFrame = 0; //Death Frame
	this.astSize = -1;
	
	this.isAlive = 0; //Start Dead

	//TODO - Fix the loaded's so they work properly
	this.astImgSmallLoaded = 1;
	this.astImgSmall = new Image();
    this.astImgSmall.src = this.src;
	
	this.astImgMedLoaded = 1;
	this.astImgMed = new Image();
    this.astImgMed.src = this.src;
	
	this.astImgLargeLoaded = 1;
	this.astImgLarge = new Image();
    this.astImgLarge.src = this.src;
};

//FUNCTIONS
Asteroid.prototype.destroy = function() { //TODO clarity, functionality
	if( this.astSize != 2 ) {
		this.state = 1;
		Game.pScore += 100;
		this.isAlive = 0;
		Game.numAst--;
		return;
	}
	Game.numAst--;
	if( this.astSize === 2 ) {
		this.state = 2;
		this.astSize = 0;
		Game.pScore += 50;
		this.x += 15;
		this.y += 15;
		Game.numAst++;
		return;
	}
};

Asteroid.prototype.drawSelf = function(ctx) { //TODO replace with images
 	if( this.astImgLargeLoaded === 1 && this.astSize === 2 ) {
		ctx.drawImage(this.astImgLarge, this.frame*75, 0, 75, 75, this.x, this.y, 100, 100); //TODO replace with image
	} else if( this.astImgMedLoaded === 1 && this.astSize === 1 ) {
		ctx.drawImage(this.astImgMed, this.frame*75, 0, 75, 75, this.x, this.y, 75, 75); //TODO replace with image
	} else if( this.astImgSmallLoaded === 1 && this.astSize === 0 ) {
		ctx.drawImage(this.astImgSmall, this.frame*75, 0, 75, 75, this.x, this.y, 50, 50); //TODO replace with image
	} 
};

Asteroid.prototype.spawn = function(speed, frame, size) {
	this.speed 		= speed;
	this.frame 		= frame;
	this.astSize	= size;
	
	//Generate an X position
		//Go from 0 to 1180 to keep it on map
	this.x = Math.floor(Math.random()*1181);
	//Generate an Y position
		//Spawn above the map by 105
	this.y = -105;
	
	var tx = ( (640)-50 + (Math.random()*100) );
	var ty = 720;
	
	this.dx = tx - this.x;
	this.dy = ty - this.y;
	
	var magni = Math.sqrt( this.dx*this.dx + this.dy*this.dy );
	
	this.dx = this.dx / (magni);
	this.dy = this.dy / (magni);
};

Asteroid.prototype.moveAst = function(dT) { //TODO movement calc
	this.x += this.dx * this.speed;
	this.y += this.dy * this.speed;
	
	//Earth Collision Detection
	if( this.y >= 680 ) {
		this.destroy(); //TODO - This is temp
	}
};

Asteroid.prototype.isColliding = function(x, y, object) {
	switch( this.astSize ) {
		case 0: //SMALL
			if( object === "player" ) {
				return !( x+75 < this.x+5 || this.x+40 < x || y+50 < this.y+5 || this.y+40 < y);
			} else if ( object === "laser" ) {
				return !( x+10 < this.x+5 || this.x+40 < x || y+10 < this.y+5 || this.y+40 < y);
			} else {
				console.log("ERROR: Object Type - Collision Detection (Small)");
			}
			break;
		case 1: //MEDIUM
			if( object === "player" ) {
				return !( x+75 < this.x+10 || this.x+55 < x || y+50 < this.y+10 || this.y+55 < y);
			} else if ( object === "laser" ) {
				return !( x+10 < this.x+10 || this.x+55 < x || y+10 < this.y+10 || this.y+55 < y);
			} else {
				console.log("ERROR: Object Type - Collision Detection (Small)");
			}
			break;
		case 2: //LARGE
			if( object === "player" ) {
				return !( x+75 < this.x+20 || this.x+65 < x || y+50 < this.y+15 || this.y+75 < y);
			} else if ( object === "laser" ) {
				return !( x+10 < this.x+20 || this.x+65 < x || y+10 < this.y+15 || this.y+75 < y);
			} else {
				console.log("ERROR: Object Type - Collision Detection (Small)");
			}
			break;
		default: console.log("ERROR: Asteroid Collision Size"); break;
	}
};