function Asteroid(id, state, src, x, y, speed, flip, frame) {
	this.id = id; //Position in Array
	this.state = state; //0,1,2 - Normal, Destroyed, Destroyed Large
	this.src = src;
	this.x = x;
	this.y = y;
	this.speed = speed;
	this.flip = flip;
	this.frame = frame;
	this.dFrame = 0; //Death Frame
	
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
	
	this.astSize = -1;
};

//FUNCTIONS
Asteroid.prototype.destroy = function() {
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

Asteroid.prototype.drawSelf = function(ctx) {
	if(this.astSize === -1){
		this.astSize = Math.floor((Math.random() * 3));	
	}
 	if( this.astImgLargeLoaded === 1 && this.astSize === 2 ) {
		ctx.drawImage(this.astImgLarge, this.frame*75, 0, 75, 75, this.x, this.y, 100, 100);
	} else if( this.astImgMedLoaded === 1 && this.astSize === 1 ) {
		ctx.drawImage(this.astImgMed, this.frame*75, 0, 75, 75, this.x, this.y, 75, 75);
	} else if( this.astImgSmallLoaded === 1 && this.astSize === 0 ) {
		ctx.drawImage(this.astImgSmall, this.frame*75, 0, 75, 75, this.x, this.y, 50, 50);
	} 
};

Asteroid.prototype.spawn = function() {
	if( this.state === 0 || this.state === 2 ) {
		if( this.flip === 0 ) {
			this.x = Math.floor((Math.random() * 1280) + 200);
			this.y = Math.floor((Math.random() * -80)-76);
		} else if ( this.flip === 1 ) {
			this.x = Math.floor((Math.random() * 600));
			this.y = Math.floor((Math.random() * -80)-76);	
		}
	}
};

Asteroid.prototype.moveAst = function() {
	if( this.state === 0 || this.state == 2 ) {
			if( this.flip === 0 ) {
			this.x -= Math.floor((Math.random() * 2));
		} else if( Asteroid.flip === 1 ) {
			this.x += Math.floor((Math.random() * 2));
		} 
		if( this.y < 800 ) {
			this.y += Math.floor((Math.random() * 3));
		}
		if( this.x < -75 || this.x > 1355 || this.y >= 720) {
			this.isAlive = 0;
			Game.numAst--;
			this.x = -500;
			this.y = -500;
			var i = Math.floor(Math.random()*1);
			switch( i ) {
				case 0: this.flip = 0; break;
				case 1: this.flip = 1; break;
				default: console.log("ERROR: Move Asteroid"); break;
			}
		}
	}
};

Asteroid.prototype.isColliding = function(x, y, object) {
	switch( this.astSize ) {
		case 0: //SMALL
			if( object === "player" ) {
				return !( x+75 < this.x+5 || this.x+40 < x || y+50 < this.y+5 || this.y+40 < y);
			} else if ( object === "earth" ) { //TODO - REMOVE COMPLETELY
				return !( x+900 < this.x+5 || this.x+40 < x || y+100 < this.y+5 || this.y+40 < y);
			} else if ( object === "laser" ) {
				return !( x+10 < this.x+5 || this.x+40 < x || y+10 < this.y+5 || this.y+40 < y);
			} else {
				console.log("ERROR: Object Type - Collision Detection (Small)");
			}
			break;
		case 1: //MEDIUM
			if( object === "player" ) {
				return !( x+75 < this.x+10 || this.x+55 < x || y+50 < this.y+10 || this.y+55 < y);
			} else if ( object === "earth" ) { //TODO - REMOVE COMPLETELY
				return !( x+900 < this.x+10 || this.x+55 < x || y+100 < this.y+10 || this.y+55 < y);
			} else if ( object === "laser" ) {
				return !( x+10 < this.x+10 || this.x+55 < x || y+10 < this.y+10 || this.y+55 < y);
			} else {
				console.log("ERROR: Object Type - Collision Detection (Small)");
			}
			break;
		case 2: //LARGE
			if( object === "player" ) {
				return !( x+75 < this.x+20 || this.x+65 < x || y+50 < this.y+15 || this.y+75 < y);
			} else if ( object === "earth" ) { //TODO - REMOVE COMPLETELY
				return !( x+900 < this.x+20 || this.x+65 < x || y+100 < this.y+15 || this.y+75 < y);
			} else if ( object === "laser" ) {
				return !( x+10 < this.x+20 || this.x+65 < x || y+10 < this.y+15 || this.y+75 < y);
			} else {
				console.log("ERROR: Object Type - Collision Detection (Small)");
			}
			break;
		default: console.log("ERROR: Asteroid Collision Size"); break;
	}
};