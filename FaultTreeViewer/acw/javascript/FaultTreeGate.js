var FaultTreeGate = (function (_super) {
	__extends(FaultTreeGate, _super);
    function FaultTreeGate(pPosition) {
		_super.call(this);
        this.mChildren = new Array();
    }
    FaultTreeGate.prototype.getChild = function (pIndex) {
        return this.mChildren[pIndex];
    };
	FaultTreeGate.prototype.numChildren = function () {
        return this.mChildren.length;
    };
    FaultTreeGate.prototype.addChild = function (pChild) {
        this.mChildren.push(pChild);
    };
	
	//var maxDepth = 0;
			
	FaultTreeGate.prototype.drawChild = function (pContext) {
		var totalWidth = this.branchWidth();
		var prevChildWidth = 0; // initial width set to 0
		var prevChildWidthTotal = 0; // initial total width set to 0
		for(var i = 0; i < this.numChildren(); i += 1) {
		pContext.save();
			var child = this.getChild(i);
			var childWidth = child.branchWidth();
			pContext.strokeStyle = '#000000'; // setting the stroke to black
			pContext.moveTo(-totalWidth/2 + childWidth/2 + prevChildWidthTotal, 75);
			pContext.lineTo(totalWidth/4 + -childWidth/4 + -prevChildWidthTotal/4, 75); // Drawing the branch lines
			pContext.stroke();
			pContext.translate(-totalWidth/2 + childWidth/2 + prevChildWidthTotal, 150); // Translating all of the children 
			child.draw(pContext);
			prevChildWidth = childWidth;
			prevChildWidthTotal += prevChildWidth;
			pContext.restore();
		}
	};

	FaultTreeGate.prototype.branchWidth = function () {
		var width = 0;
			for (var i = 0; i < this.numChildren(); i += 1) {
				width += this.getChild(i).branchWidth(); // looping through the children and adding
			}		                                     // their width to the overall branchWidth
		return width;
	};
	
	/*
	FaultTreeGate.prototype.maxTreeDepth = function () {
		maxDepth = 0;
		depth = 0;
		
		if (depth > maxDepth) {
			maxDepth = depth;
		}
		for (var i = 0; i < this.numChildren(); i += 1) {
			depth += 1;
			this.mChildren[i].maxTreeDepth();
		}	
		return maxDepth;
	}
	*/
	
    return FaultTreeGate;
})(FaultTreeNode);
