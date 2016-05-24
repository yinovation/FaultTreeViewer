var Cloud = (function () {

	function Cloud(pPosition, pColour, pScale, pRotationAngle) {
		this.setPosition(pPosition);
		this.setColour(pColour);
		this.setScale(pScale);
		this.setRotationAngle(pRotationAngle);
	};
	
	Cloud.prototype.getPosition = function() {

		return this.mPosition;
	};
	
	Cloud.prototype.setPosition = function (pPosition) {
		this.mPosition = pPosition;
	};

	Cloud.prototype.getColour = function() {
	
		return this.mColour;
	};
	
	Cloud.prototype.setColour = function (pColour) {
		this.mColour = pColour;
	};
	
	Cloud.prototype.getScale = function() {
	
		return this.mScale;
	};
	
	Cloud.prototype.setScale = function (pScale) {
		this.mScale = pScale;
	};
	
	Cloud.prototype.getRotationAngle = function() {

		return this.mRotationAngle;
	};
	
	Cloud.prototype.setRotationAngle = function (pRotationAngle) {
		this.mRotationAngle = pRotationAngle;
	};
			
	Cloud.prototype.draw = function (pContext) {
		pContext.save();
		pContext.lineWidth = 5;
		pContext.translate(this.getPosition().getX(), this.getPosition().getY());
		pContext.scale(this.getScale(), this.getScale());
		pContext.rotate(this.getRotationAngle());
		this.drawCloud(pContext);
		pContext.restore();
	};
	
	Cloud.prototype.drawCloud = function (pContext) {
		pContext.save();
		pContext.beginPath();
		pContext.moveTo(170, 80);
		pContext.bezierCurveTo(130, 100, 130, 150, 230, 150);
		pContext.bezierCurveTo(250, 180, 320, 180, 340, 150);
		pContext.bezierCurveTo(420, 150, 420, 120, 390, 100);
		pContext.bezierCurveTo(430, 40, 370, 30, 340, 50);
		pContext.bezierCurveTo(320, 5, 250, 20, 250, 50);
		pContext.bezierCurveTo(200, 5, 150, 20, 170, 80);
		pContext.closePath();
		pContext.lineWidth = 5;
		pContext.fillStyle = this.getColour();
		pContext.fill();
		pContext.strokeStyle = '#000000';
		pContext.stroke();
		pContext.restore();
	}
	
	return Cloud;
})();