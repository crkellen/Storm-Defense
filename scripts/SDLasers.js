function Laser(id, theta, frame) {
	this.id = id; //Position in Array
	this.x = 0;
	this.y = 0;
	this.theta = theta;
	this.frame = frame;
	
	this.isAlive = 0; //Start Dead
};

//FUNCTIONS
Laser.prototype.drawSelf = function(ctx, lImg) {
	ctx.translate(this.x, this.y);
	ctx.rotate(this.theta);
	ctx.translate(-36, -22);
	ctx.drawImage(lImg, 0, this.frame*15, 70, 15, 0, 0, 70, 15);
};

Laser.prototype.destroy = function() {
	this.isAlive = 0;
	this.x = -1000;
	this.y = -1000;
	this.theta = 0;
	this.frame = 0;
};