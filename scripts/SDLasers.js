function Laser(id, src, x, y, theta, frame) {
	this.id = id; //Position in Array
	this.src = src;
	this.x = x;
	this.y = y;
	this.theta = theta;
	this.frame = frame;
	
	this.isAlive = 0; //Start Dead

	//TODO - Fix the loaded's so they work properly
	this.laserImgLoaded = 1;
	this.laserImg = new Image();
    this.laserImg.src = this.src;
};

Laser.prototype.drawSelf = function(ctx) {
	ctx.translate(this.x, this.y);
	ctx.rotate(this.theta);
	ctx.translate(-36, -22);
	ctx.drawImage(this.laserImg, 0, this.frame*15, 70, 15, 0, 0, 70, 15);
};

Laser.prototype.destroy = function() {
	this.isAlive = 0;
	this.x = -1000;
	this.y = -1000;
	this.theta = 0;
	this.frame = 0;
};