var House = (function () {

	function House(pPosition, pDoorColour, pScale, pRotationAngle) {
		this.setPosition(pPosition);
		this.setDoorColour(pDoorColour);
		this.setScale(pScale);
		this.setRotationAngle(pRotationAngle);
	};
	
	House.prototype.getPosition = function() {

		return this.mPosition;
	};
	
	House.prototype.setPosition = function (pPosition) {
		this.mPosition = pPosition;
	};

	House.prototype.getDoorColour = function() {
	
		return this.mDoorColour;
	};
	House.prototype.setDoorColour = function (pDoorColour) {
		this.mDoorColour = pDoorColour;
	};
	
	House.prototype.getScale = function() {
	
		return this.mScale;
	};
	House.prototype.setScale = function (pScale) {
		this.mScale = pScale;
	};
	
	House.prototype.getRotationAngle = function() {

		return this.mRotationAngle;
	};
	
	House.prototype.setRotationAngle = function (pRotationAngle) {
		this.mRotationAngle = pRotationAngle;
	};
	
	House.prototype.draw = function (pContext) {
		pContext.save();
		pContext.lineWidth = 5;
		pContext.translate(this.getPosition().getX(), this.getPosition().getY());
		pContext.scale(this.getScale(), this.getScale());
		pContext.rotate(this.getRotationAngle());
		this.drawBody(pContext);
		this.drawRoof(pContext);
		this.drawRightWindow(pContext);
		this.drawLeftWindow(pContext);
		this.drawDoor(pContext);
		pContext.restore();
	};
	
	House.prototype.drawBody = function (pContext)
	{
		pContext.beginPath();
		pContext.fillStyle = '#ffffff';
		pContext.strokeStyle = '#000000';
		pContext.moveTo(-100,0);
		pContext.lineTo(100,0);
		pContext.lineTo(100,100);
		pContext.lineTo(-100,100);
		pContext.closePath();
		pContext.fill();
		pContext.stroke();
	}

	House.prototype.drawRoof = function (pContext)
	{
		pContext.beginPath();
		pContext.fillStyle = '#ff0000';
		pContext.strokeStyle = '#000000';
		pContext.moveTo(-100,0);
		pContext.lineTo(100,0);
		pContext.lineTo(0,-100);
		pContext.closePath();
		pContext.fill();
		pContext.stroke();
	}

	House.prototype.drawWindow = function (pContext)
	{
		pContext.beginPath();
		pContext.fillStyle = '#0000ff';
		pContext.strokeStyle = '#000000';
		pContext.moveTo(-20,-20);
		pContext.lineTo(20,-20);
		pContext.lineTo(20,20);
		pContext.lineTo(-20,20);
		pContext.closePath();
		pContext.fill();
		pContext.moveTo(0,-20);
		pContext.lineTo(0,20);
		pContext.moveTo(-20,0);
		pContext.lineTo(20,0);
		pContext.stroke();
	}
	
	House.prototype.drawRightWindow = function (pContext)
	{
		pContext.save();
		pContext.translate(60, 50);
		this.drawWindow(pContext);
		pContext.restore();
	}
	
	House.prototype.drawLeftWindow = function (pContext)
	{
		pContext.save();
		pContext.translate(-60, 50);
		this.drawWindow(pContext);
		pContext.restore();
	}
	
	House.prototype.drawDoor = function (pContext)
	{
		pContext.beginPath();
		pContext.fillStyle = this.getDoorColour();
		pContext.strokeStyle = '#000000';
		pContext.moveTo(-20,30);
		pContext.lineTo(20,30);
		pContext.lineTo(20,100);
		pContext.lineTo(-20,100);
		pContext.closePath();
		pContext.fill();
		pContext.stroke();
	}
	
	return House;
})();