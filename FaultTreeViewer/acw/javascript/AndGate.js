var AndGate = (function (_super) {
	__extends(AndGate, _super);
    function AndGate(pPosition) {
		_super.call(this);
	}
	
	AndGate.prototype.draw = function (pContext) {
		pContext.save();
		pContext.lineWidth = 5;
		this.drawAndGate(pContext); // drawing the AndGate
		this.drawChild(pContext); // drawing any children the AndGate has
		pContext.restore();
	};
	
	AndGate.prototype.drawAndGate = function (pContext) {
		pContext.save();
		pContext.beginPath();
		pContext.strokeStyle = '#000000'; // setting the stroke to black
		pContext.moveTo(50,0);
		pContext.lineTo(50,30);
		pContext.lineTo(-50,30);
		pContext.lineTo(-50,0);
		pContext.arc(0,0,50, Math.PI, 0, false);
		pContext.moveTo(0,-50);
		pContext.lineTo(0,-77.5);
		pContext.moveTo(0,30);
		pContext.lineTo(0,75);
		pContext.stroke();
		pContext.restore();
	};
	
    return AndGate;
})(FaultTreeGate);
