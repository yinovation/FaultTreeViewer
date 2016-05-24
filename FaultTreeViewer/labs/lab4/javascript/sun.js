var Sun = (function () {

	function Sun(pPosition, pColour, pScale, pRotationAngle) {
		this.setPosition(pPosition);
		this.setColour(pColour);
		this.setScale(pScale);
		this.setRotationAngle(pRotationAngle);
	};
	
	Sun.prototype.getPosition = function() {

		return this.mPosition;
	};
	
	Sun.prototype.setPosition = function (pPosition) {
		this.mPosition = pPosition;
	};

	Sun.prototype.getColour = function() {
	
		return this.mColour;
	};
	
	Sun.prototype.setColour = function (pColour) {
		this.mColour = pColour;
	};
	
	Sun.prototype.getScale = function() {
	
		return this.mScale;
	};
	
	Sun.prototype.setScale = function (pScale) {
		this.mScale = pScale;
	};
	
	Sun.prototype.getRotationAngle = function() {

		return this.mRotationAngle;
	};
	
	Sun.prototype.setRotationAngle = function (pRotationAngle) {
		this.mRotationAngle = pRotationAngle;
	};
	
	Sun.prototype.drawRays = function (pContext) {
		var numberOfRays = 10;
		var angleBetweenEachRay = 2 * Math.PI / numberOfRays;
		for(var i = 0; i < numberOfRays; i += 1) {
			var currentAngle = angleBetweenEachRay * i;
			pContext.save();
			pContext.rotate(currentAngle);
			pContext.translate(0, -0.75);
			this.drawRay(pContext);
			pContext.restore();
		}
	}
		
	Sun.prototype.draw = function (pContext) {
		pContext.save();
		pContext.lineWidth = 3.5;
		pContext.translate(this.getPosition().getX(), this.getPosition().getY());
		pContext.scale(this.getScale(), this.getScale());
		pContext.rotate(this.getRotationAngle());
		this.drawCircle(pContext);
		this.drawRays(pContext);
		pContext.restore();
	};
	
	Sun.prototype.drawCircle = function(pContext) {
		pContext.save();
		pContext.beginPath();
		pContext.fillStyle = this.getColour();
		pContext.arc(0,0, 0.5, 0, 2 * Math.PI, false);
		pContext.fill();
		pContext.scale(1/this.getScale(), 1/this.getScale());
		pContext.stroke();
		pContext.restore();
	}
	
	Sun.prototype.drawRay = function(pContext) {
		pContext.save();
		pContext.beginPath();
		pContext.fillStyle = this.getColour();
		pContext.moveTo(0, -0.3);
		pContext.lineTo(0.1, 0.1);
		pContext.lineTo(-0.1, 0.1);
		pContext.closePath();
		pContext.fill();
		pContext.scale(1/this.getScale(), 1/this.getScale());
		pContext.stroke();
		pContext.restore();
	}
	
	return Sun;
})();