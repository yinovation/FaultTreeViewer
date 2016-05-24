var BasicEvent = (function (_super) {
	__extends(BasicEvent, _super);
    function BasicEvent(pPosition) {
		_super.call(this);
	}
	// this function is used by the recursive function in FaultTreeGate
	// to get the width of the TransferGate	
	BasicEvent.prototype.branchWidth = function (pContext) {
		var width = 120;
		
		return width;
	};
	
	BasicEvent.prototype.maxTreeDepth = function (pContext) {

		depth += 1;
		
		return depth;
	}
	
    BasicEvent.prototype.draw = function (pContext) {
		pContext.save();
		pContext.lineWidth = 5;
		this.drawBasicEvent(pContext);
		pContext.restore();
	};
	
	BasicEvent.prototype.drawBasicEvent = function (pContext) {		
		pContext.save();
		var centerX = 0; // centre points which are drawn around to make the TransferGate
		var centerY = 0;
		var numSegments = 60; // 40 sided polygon, looks like a circle
		var radius = 50; // setting the radius of the object
		pContext.beginPath();	
		pContext.strokeStyle = '#000000'; // setting the stroke to black
		var anglePerSegment = Math.PI * 2 / numSegments;
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
		pContext.closePath();
		pContext.moveTo(0,-77.5); // drawing the line above the BasicEvent
		pContext.lineTo(0,-50);
		pContext.stroke();
		pContext.restore();
	}

    return BasicEvent;
})(FaultTreeNode);
