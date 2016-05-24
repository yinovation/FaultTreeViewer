var TransferGate = (function (_super) {
	__extends(TransferGate, _super);
    function TransferGate(pPosition) {
		_super.call(this);
	}
	// this function is used by the recursive function in FaultTreeGate
	// to get the width of the TransferGate
	TransferGate.prototype.branchWidth = function (pContext) {
		var width = 120;
		
		return width;
	}
	
	TransferGate.prototype.maxTreeDepth = function (pContext) {

		depth += 1;
		
		return depth;
	}
	
    TransferGate.prototype.draw = function (pContext) {
		pContext.save();
		pContext.lineWidth = 5;
		this.drawTransferGate(pContext); // drawing the TransferGate
		pContext.restore();
	}
	
	TransferGate.prototype.drawTransferGate = function (pContext) {		
		var centerX = 0; // centre points which are drawn around to make the TransferGate
		var centerY = 0;
		var numSegments = 3; // 3 segments, drawing a triangle
		var radius = 50; // setting the radius of the object
		pContext.beginPath();		
		pContext.strokeStyle = '#000000'; // setting stroke colour to black
		var anglePerSegment = Math.PI * 2 / numSegments; 
		pContext.save();
		pContext.rotate(-Math.PI/2);
		// the angle is initially set to zero (first iteration is 0)
		// the angle increases each iteration through the loop
		for (var i = 0; i <= numSegments; i += 1) {
			var angle = anglePerSegment * i;
			var x = centerX + radius * Math.cos(angle);
			var y = centerY + radius * Math.sin(angle);
			if (i == 0) {
				pContext.moveTo(x,y);
			}
			else {
				pContext.lineTo(x,y);
			}
		}
		pContext.restore();
		pContext.moveTo(0,-50); // drawing the line which goes above the TransferGate
		pContext.lineTo(0,-77.5);
		pContext.stroke();
	}

    return TransferGate;
})(FaultTreeNode);
