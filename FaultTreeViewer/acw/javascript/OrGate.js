var OrGate = (function (_super) {
	__extends(OrGate, _super);
    function OrGate(pPosition) {
		_super.call(this);
	}
	
    OrGate.prototype.draw = function (pContext) {
		pContext.save();
		pContext.lineWidth = 5;
		this.drawOrGate(pContext); // drawing the OrGate
		this.drawChild(pContext); // drawing any children the OrGate has
		pContext.restore();
	};
	
	OrGate.prototype.drawOrGate = function (pContext) {
		pContext.save();
		pContext.beginPath();	
		pContext.strokeStyle = '#000000'; // setting stroke colour to black
		pContext.lineWidth = 5;
		pContext.moveTo(0, -50);
		pContext.bezierCurveTo(0, -50, -60, 0, -50, 50); // left curve
		pContext.bezierCurveTo(-50, 50, 0, 10, 50, 50); // bottom curve
		pContext.bezierCurveTo(50, 50, 60, 0, 0, -50); // right curve, this way all lines connect 
		pContext.moveTo(0, -50); // drawing the small lines which go above and below the OrGate for connecting to branches
		pContext.lineTo(0, -77.5);
		pContext.moveTo(0, 35);
		pContext.lineTo(0, 75);
		pContext.stroke();
		pContext.restore();
	};
		
    return OrGate;
})(FaultTreeGate);
