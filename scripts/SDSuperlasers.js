function Superlaser(id, theta, frame) {
	this.id = id; //Position in Array
	this.x = 0;
	this.y = 0;
	this.theta = theta;
	this.frame = frame;
	
	this.isAlive = 0; //Start Dead
};

//FUNCTIONS
Superlaser.prototype.destroy = function() {
	this.isAlive = 0;
	this.x = -1000;
	this.y = -1000;
	this.theta = 0;
	this.frame = 0;
};

Superlaser.prototype.drawSelf = function(ctx, slImg) {

};
/*
Superlaser.prototype.spawn = function(speed, frame, size) {
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

Superlaser.prototype.moveAst = function(dT) {
	this.x += this.dx * this.speed;
	this.y += this.dy * this.speed;
	
	//Earth Collision Detection
	if( this.y >= 620 ) {
		this.state = 3;
	}
};
*/