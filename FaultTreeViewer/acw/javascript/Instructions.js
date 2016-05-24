var Instructions = (function () { 

	function Instructions() {
		this.gatesImg = new Image();
		this.gatesImg.src = "images/gatesandevents.png";
		
		this.dynamicImg = new Image();
		this.dynamicImg.src = "images/dynamicsizing.png";
		
		this.minimapImg = new Image();
		this.minimapImg.src = "images/minimap.png";
		
		this.zoomImg = new Image();
		this.zoomImg.src = "images/mousewheelzoom.png";
		
		this.panImg = new Image();
		this.panImg.src = "images/panning.png";
		
	};
	
	Instructions.prototype.draw = function (pContext) {
		pContext.save();
		this.drawInstructions(pContext); // drawing the instructions
		pContext.restore();
	};
	
	Instructions.prototype.drawInstructions = function (pContext) {
		pContext.save();
		pContext.beginPath();
		pContext.save();
		pContext.rect(0,0, canvas.width, 2000);
		pContext.font = "15pt Arial";
		
		pContext.drawImage(this.gatesImg, 1150, 400);
		pContext.drawImage(this.dynamicImg, 1350, 1450);
		pContext.drawImage(this.minimapImg, 1150, 600);
		pContext.drawImage(this.zoomImg, 1250, 850);
		pContext.drawImage(this.panImg, 1350, 1050);
		
		
		pContext.fillText("Instructions:", 200, 50);
		pContext.fillText("Switch between fault trees - 1/2/3", 200, 90);
		pContext.fillText("Pan fault tree - Mouse click + drag", 200, 110);
		pContext.fillText("Zoom in/out on fault tree - Mouse scroll wheel", 200, 130);
		pContext.fillText("Scale the fault tree to canvas - F", 200, 150);
		pContext.fillText("Toggle between 'dynamic' and 'fixed' canvas sizing - D", 200, 170);
		pContext.fillText("Using the mouse scroll wheel on this page will allow you to pan down to view more information", 200, 210);
		pContext.fillText("You can return to the fault tree viewer by pressing 1", 200, 230);
		pContext.fillText("Fault Tree Viewer", 200, 310);
		pContext.fillText("This program comes preloaded with 3 fault trees which can be alternated between by", 200, 350);
		pContext.fillText("pressing the 1/2/3 keys on the keyboard. The keypress functions operate using a", 200, 370);
		pContext.fillText("switch statement which performs different functions depending on the key you press.", 200, 390);
		pContext.fillText("The fault trees are composed on 4 different objects: OrGate, AndGate, BasicEvent and", 200, 470);
		pContext.fillText("TransferGate. These are all drawn using the pContext.moveTo/LineTo functions. The AndGate", 200, 490);
		pContext.fillText("uses pContext.arc to draw a semi circle arc. The OrGate is drawn completely using bezier", 200, 510);
		pContext.fillText("curves. BasicEvents and TransferGates are drawn using a algorithm which draws around a", 200, 530);
		pContext.fillText("centre point depending on the number of segments which the viewer has been programmed to", 200, 550);
		pContext.fillText("draw.", 200, 570);
		
		pContext.fillText("In the top right corner of the screen is the mini map, this displays a complete view", 200, 650);
		pContext.fillText("of each fault tree and shows you exactly where you are on the tree, which is indicated", 200, 670);
		pContext.fillText("by a red rectangle inside the mini map showing the current field of view.", 200, 690);
		pContext.fillText("The mini map is basically the fault tree being redrawn again inside the rectangle and", 200, 710);
		pContext.fillText("scaled down to fit inside. It uses the same panning function as the main fault tree but", 200, 730);
		pContext.fillText("the numbers are negated. This is because when you want to view the right hand side of the", 200, 750);
		pContext.fillText("tree, you are actually dragging left to move to the right of the tree. If the pan values were", 200, 770);
		pContext.fillText("positive, the mini map viewing rectangle would move in the opposite direction. The viewing rectangle", 200, 790);
		pContext.fillText("also zooms in when you do on the main tree. A separate scaling variable is used on the rectangle so", 200, 810);
		pContext.fillText("that it zooms in when you zoom out on the canvas and vice versa. ", 200, 830);
		
		
		pContext.fillText("As mentioned with the mini map. The viewer has a zooming functionality which operates using the mouses", 200, 910);
		pContext.fillText("scroll wheel. Javascript has an event called wheelDelta which can be used to determine what happens when", 200, 930);
		pContext.fillText("you scroll the mouse wheel back or forward one increment. The zooming works by reducing the scale (scrolling", 200, 950);
		pContext.fillText("back) or increasing the scale (scrolling forward). There is also a boundary put in place to stop the viewer", 200, 970);
		pContext.fillText("from zooming too far out (below the scale of 0).", 200, 990);
		
		
		pContext.fillText("You can pan the fault tree on the canvas by clicking on the mouse and dragging (unaffected by scale besides going", 200, 1070);
		pContext.fillText("slower when zoomed in by a large amount. Panning is done by making use of a vector object which has add and subtract", 200, 1090);
		pContext.fillText("functions programmed into it. These functions allow the calculations of the panning to be applied. Whenever the canvas", 200, 1110);
		pContext.fillText("is panned, it is basically constantly redrawing on the new coordinates it has been translated to. The canvas dynamically", 200, 1130);
		pContext.fillText("captures the current mouse positions and the previous mouse positions using the event clientX/Y functions for finding", 200, 1150);
		pContext.fillText("mouse positions on the canvas. The previous mouse positions is subtracted from the current mouse position to leave a value", 200, 1170);
		pContext.fillText("which is the offset between the two positions. Whenever the canvas is panning, the pan vector is constantly calculating", 200, 1190);
		pContext.fillText("the new positions of the fault tree.", 200, 1210);
		
		
		pContext.fillText("The fault tree itself is drawn and translated using a recursive function which works out the amount of child the tree has", 200, 1290);
		pContext.fillText("and translates it accordingly using an algorithm. This is dynamic, so despite only having 3 fault trees preloaded, any amount", 200, 1310);
		pContext.fillText("of nodes can be added to the tree and it would calculate the precise amount of space needed and draw the lines between. The", 200, 1330);
		pContext.fillText("recursive function will constantly loop on itself until all of the children of that tree have been found. With each increment", 200, 1350);
		pContext.fillText("of the loop, the branch width also increases to the amount of children that parent has. The children are translated by a ", 200, 1370);
		pContext.fillText("context.translate which is based off dividing the total width, the child width and the previous child's width.", 200, 1390);
		
		
		pContext.fillText("The program can toggle between fixed and dynamic sizing by pressing the D key. The default setting is fixed so pressing", 200, 1470);
		pContext.fillText("D it will enable dynamic sizing. The dynamic sizing of the canvas means that the entire canvas will scale according to", 200, 1490);
		pContext.fillText("the size of the browser window.", 200, 1510);
		pContext.stroke();
		pContext.restore();
	};
	
	return Instructions; 
})();