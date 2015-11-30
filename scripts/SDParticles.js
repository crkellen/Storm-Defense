function Particle(id, color, speed, frame) {
	this.id = id;
	this.x = 0;
	this.y = 0;
	this.color = color;
	this.speed = speed;
	this.frame = frame;
	
	this.isAlive = 0; //Start Dead
};

//FUNCTIONS
Particle.prototype.destroy = function() {
	this.isAlive = 0;
	this.x = -200;
	this.y = -200;
	this.color = 0;
	this.speed = 0;
	this.frame = 0;
	Game.numPar--;
};

Particle.prototype.drawSelf = function(ctx, pImg) {
	ctx.drawImage(pImg, this.color*11, this.frame*11, 11, 11, this.x, this.y, 11, 11);
};

Particle.prototype.spawn = function(color, speed) {
	this.color 		= color;
	this.speed 		= speed;
	
	//Generate an X position
		//Go from 0 to 1180 to keep it on map
	this.x = Math.floor(Math.random()*1181);
	//Generate an Y position
		//Spawn above the map by 50
	this.y = -50;
	
	var tx = ( (640)-50 + (Math.random()*100) );
	var ty = 720;
	
	this.dx = tx - this.x;
	this.dy = ty - this.y;
	
	var magni = Math.sqrt( this.dx*this.dx + this.dy*this.dy );
	
	this.dx = this.dx / (magni);
	this.dy = this.dy / (magni);
};

Particle.prototype.movePar = function(dT) {
	this.x += this.dx * this.speed;
	this.y += this.dy * this.speed;
	
	//Earth Collision Detection
	if( this.y >= 620 ) {
		Game.pLevel -= 5;
		this.isAlive = 0;
		this.x = -200;
		this.y = -200;
		Game.numPar--;
	}
};

Particle.prototype.isColliding = function(x, y, object) {
	if( object === "player" ) {
		return !( x+75 < this.x+5 || this.x+40 < x || y+50 < this.y+5 || this.y+40 < y);
	} else if ( object === "laser" ) {
		return !( x+10 < this.x+5 || this.x+40 < x || y+10 < this.y+5 || this.y+40 < y);
	} else if ( object === "superlaser" ) {
		return !( x+10 < this.x+5 || this.x+40 < x || y+10 < this.y+5 || this.y+40 < y);
	} else {
		console.log("ERROR: Object Type - Collision Detection Particles");
	}
};