var Grass = (function () {

	function Grass(pPosition, pColour, pScale, pRotationAngle) {
		this.setPosition(pPosition);
		this.setColour(pColour);
		this.setScale(pScale);
		this.setRotationAngle(pRotationAngle);
	};
	
	Grass.prototype.getPosition = function() {

		return this.mPosition;
	};
	
	Grass.prototype.setPosition = function (pPosition) {
		this.mPosition = pPosition;
	};

	Grass.prototype.getColour = function() {
	
		return this.mColour;
	};
	
	Grass.prototype.setColour = function (pColour) {
		this.mColour = pColour;
	};
	
	Grass.prototype.getScale = function() {
	
		return this.mScale;
	};
	
	Grass.prototype.setScale = function (pScale) {
		this.mScale = pScale;
	};
	
	Grass.prototype.getRotationAngle = function() {

		return this.mRotationAngle;
	};
	
	Grass.prototype.setRotationAngle = function (pRotationAngle) {
		this.mRotationAngle = pRotationAngle;
	};
		
	Grass.prototype.draw = function (pContext) {
		pContext.save();
		pContext.lineWidth = 5;
		pContext.translate(this.getPosition().getX(), this.getPosition().getY());
		pContext.scale(this.getScale(), this.getScale());
		pContext.rotate(this.getRotationAngle());
		this.drawGrass(pContext);
		pContext.restore();
	};
	
	Grass.prototype.drawGrass = function (pContext) {
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
	
	return Grass;
})();