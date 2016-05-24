var Vector = (function () { 
	function Vector(pX, pY) {
		this.setX(pX);	
		this.setY(pY);
	};
	
	Vector.prototype.getX = function() {
	
		return this.mX; 
	};
	Vector.prototype.setX = function (pX) { 
		this.mX = pX; 
	};
	
	Vector.prototype.getY = function() {
	
		return this.mY; 
	};
	Vector.prototype.setY = function (pY) { 
		this.mY = pY; 
	};
	
	Vector.prototype.add = function (vector) {
		this.setX(this.getX() + vector.getX());
		this.setY(this.getY() + vector.getY());
	};
	
	Vector.prototype.subtract = function (vector) {
		this.setX(this.getX() - vector.getX());
		this.setY(this.getY() - vector.getY());
	};
	
	return Vector; 
})();