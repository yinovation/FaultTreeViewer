var Sky = (function () {

	function Sky(pPosition, pColour, pScale, pRotationAngle) {
		this.setPosition(pPosition);
		this.setColour(pColour);
		this.setScale(pScale);
		this.setRotationAngle(pRotationAngle);
	};
	
	Sky.prototype.getPosition = function() {

		return this.mPosition;
	};
	
	Sky.prototype.setPosition = function (pPosition) {
		this.mPosition = pPosition;
	};

	Sky.prototype.getColour = function() {
	
		return this.mColour;
	};
	
	Sky.prototype.setColour = function (pColour) {
		this.mColour = pColour;
	};
	
	Sky.prototype.getScale = function() {
	
		return this.mScale;
	};
	
	Sky.prototype.setScale = function (pScale) {
		this.mScale = pScale;
	};
	
	Sky.prototype.getRotationAngle = function() {

		return this.mRotationAngle;
	};
	
	Sky.prototype.setRotationAngle = function (pRotationAngle) {
		this.mRotationAngle = pRotationAngle;
	};
		
	Sky.prototype.draw = function (pContext) {
		pContext.save();
		pContext.lineWidth = 5;
		pContext.translate(this.getPosition().getX(), this.getPosition().getY());
		pContext.scale(this.getScale(), this.getScale());
		pContext.rotate(this.getRotationAngle());
		this.drawSky(pContext);
		pContext.restore();
	};
	
	Sky.prototype.drawSky = function (pContext) {
		pContext.save();
		pContext.beginPath();
		pContext.fillStyle = this.getColour();
		pContext.fillRect(-50, -50, 825, 825);
		pContext.strokeRect(-50, -50, 825, 825);
		pContext.closePath();
		pContext.fill();
		pContext.stroke();
		pContext.restore();
	}
	
	return Sky;
})();