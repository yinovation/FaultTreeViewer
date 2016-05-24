var Bus = (function () {

	function Bus(pPosition, pColour, pScale, pRotationAngle) {
		this.setPosition(pPosition);
		this.setColour(pColour);
		this.setScale(pScale);
		this.setRotationAngle(pRotationAngle);
	};
	
	Bus.prototype.getPosition = function() {

		return this.mPosition;
	};
	
	Bus.prototype.setPosition = function (pPosition) {
		this.mPosition = pPosition;
	};

	Bus.prototype.getColour = function() {
	
		return this.mColour;
	};
	Bus.prototype.setColour = function (pColour) {
		this.mColour = pColour;
	};
	
	Bus.prototype.getScale = function() {
	
		return this.mScale;
	};
	Bus.prototype.setScale = function (pScale) {
		this.mScale = pScale;
	};
	
	Bus.prototype.getRotationAngle = function() {

		return this.mRotationAngle;
	};
	
	// this function updates the buses position
	Bus.prototype.update = function (pContext) {
		this.getPosition().add(new Vector(10, 0));
	}
	
	Bus.prototype.setRotationAngle = function (pRotationAngle) {
		this.mRotationAngle = pRotationAngle;
	};
	
	Bus.prototype.draw = function (pContext) {
		pContext.save();
		pContext.lineWidth = 4;
		pContext.translate(this.getPosition().getX(), this.getPosition().getY());
		pContext.scale(this.getScale(), this.getScale());
		pContext.rotate(this.getRotationAngle());
		this.drawBusBody(pContext);
		this.drawLeftWheel(pContext);
		this.drawRightWheel(pContext);
		this.drawFrontWindow(pContext);
		this.drawBackWindow(pContext);
		this.drawWindow2(pContext);
		this.drawWindow3(pContext);
		this.drawWindow4(pContext);
		pContext.restore();
	};
	
	Bus.prototype.drawBusBody = function (pContext) {
		pContext.save();
		pContext.beginPath();
		pContext.fillStyle = '#ff0000';
		pContext.moveTo(-100, -65);
		pContext.lineTo(100, -65);
		pContext.arc(100, -40, 25, -Math.PI /2, 0, false);
		pContext.lineTo(125,50);
		pContext.lineTo(-125,50);
		pContext.lineTo(-125,-40);
		pContext.arc(-100, -40, 25, Math.PI, 3 * Math.PI /2, false);
		pContext.fill();
		pContext.stroke();
		pContext.restore();
	}
	
	Bus.prototype.drawWheel = function (pContext) {
		pContext.save();
		pContext.beginPath();
		pContext.fillStyle = '#000000';
		pContext.arc(0, 0, 25, 0, 2 * Math.PI, false);
		pContext.fill();
		pContext.beginPath();
		pContext.fillStyle = '#ffffff';
		pContext.arc(0, 0, 10, 0, 2 * Math.PI, false);
		pContext.fill();
		pContext.stroke();
		pContext.restore();
	}
	
	Bus.prototype.drawLeftWheel = function (pContext) {
		pContext.save();
		pContext.translate(-70,50);
		this.drawWheel(pContext);
		pContext.restore();
	}

	Bus.prototype.drawRightWheel = function (pContext) {
		pContext.save();
		pContext.translate(70,50);
		this.drawWheel(pContext);
		pContext.restore();
	}
	
	Bus.prototype.drawWindow = function (pContext) {
		pContext.save();
		pContext.beginPath();
		pContext.fillStyle = '#0000ff';
		pContext.fillRect(-50, -50, 50, 50);
		pContext.strokeRect(-50, -50, 50, 50);
		pContext.fill();
		pContext.stroke();
		pContext.restore();	
	}
	
	Bus.prototype.drawFrontWindow = function (pContext) {
		pContext.save();
		pContext.translate(-100,20);
		pContext.scale(0.5,1);
		this.drawWindow(pContext);
		pContext.restore();
	}
	
	Bus.prototype.drawBackWindow = function (pContext) {
		pContext.save();
		pContext.translate(215,0);
		this.drawFrontWindow(pContext);
		pContext.restore();
	}
	
	Bus.prototype.drawWindow2 = function (pContext) {
		pContext.save();
		pContext.translate(-40,20);
		this.drawWindow(pContext);
		pContext.restore();
	}

	Bus.prototype.drawWindow3 = function (pContext) {
		pContext.save();
		pContext.translate(20,20);
		this.drawWindow(pContext);
		pContext.restore();
	}

	Bus.prototype.drawWindow4 = function (pContext) {
		pContext.save();
		pContext.translate(80,20);
		this.drawWindow(pContext);
		pContext.restore();
	}

	return Bus;
})();