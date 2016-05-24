// check to see if the browser supports
// the addEventListener function
if (window.addEventListener) 
{
	window.addEventListener
	(
		'load', // this is the load event
		onLoad, // this is the event handler we are going to write
		false   // useCapture boolean value
	);
}

// global variables for the recursive depth function 
//window.maxDepth = 0;
//window.depth = 0;

// the window load event handler
function onLoad()
{
	var context, vector, exampleFaultTrees, pan, mousePos, previousMousePos, treeWidth;
	var instructions;
		
	var canvas = document.getElementById('canvas');
	
	// setting mouseDown to false initially
	var mouseDown = false;
	
	// setting the bool for if the instructions screen
	// is up
	var showInstruct = false;
	
	// setting a bool to toggle between using the dynamicCanvas
	// and fixed states of the canvas
	var dynamicMode = false;

	// setting the initial scale of the canvas
	var scale = 0.8;
	
	// currentTreeID defines what fault tree is drawn
	// initially and when 1,2,3 is pressed to switch trees
	var currentTreeID = 0;
	
	var depth = 0;
	
	// this function will initialise our variables
	function intialise ()
	{
		// Find the canvas element using its id attribute.
		//canvas = document.getElementById('canvas');
		// if it couldn't be found
		if (!canvas)
		{
			// make a message box pop up with the error.
			alert('Error: I cannot find the canvas element!');
			return;
		}
		// check if their is a getContext function
		if (!canvas.getContext)
		{
			// make a message box pop up with the error.
			alert('Error: no canvas.getContext!');
			return;
		}
		// Get the 2D canvas context.
		context = canvas.getContext('2d');
		if (!context)
		{
			alert('Error: failed to getContext!');
			return;
		}
		
		// adding the eventlisteners for key presses
		if (window.addEventListener) {
			window.addEventListener('keydown', onKeyDown, false);
		}
		
		// adding the eventlisteners for mouse movemovents/presses
		if (canvas.addEventListener) {
			canvas.addEventListener('mousedown', onMouseDown, false); 
			canvas.addEventListener('mouseup', onMouseUp, false); 
			canvas.addEventListener('mousemove', onMouseMove, false); 
			canvas.addEventListener('mousewheel', onMouseWheel, false); 
			canvas.addEventListener('mouseover', onMouseOver, false);
		}
		
		// creating a new instance of ExampleFaultTrees so it can
		// be used inside the canvas for drawing the fault trees
		exampleFaultTrees = new ExampleFaultTrees();
		
		// creating an instance of the instructions object
		instructions = new Instructions();
		
		// creating vectors for pan and previousMousePos, these
		// are used for the panning functionality of the canvas
		pan = new Vector(canvas.width / 2, canvas.height * 0.25);
		previousMousePos = new Vector(event.clientX, event.clientY);		
	}

	function onKeyDown(event) {
		var keyCode = event.keyCode; // keyCode is the event used for key presses
		// switch statement used to distinguish actions taken by certain key presses
		switch(keyCode) {
			//switching between fault trees
			case 49: //1 (not numpad)
					currentTreeID = 0; // currentTreeID changed to 1, 2nd fault tree
					showInstruct = false;
					clearCanvas();
					resetCanvas(); // scale reset to 0.5
					draw(); // canvas is redrawn to show new tree
				break;
				
			case 50: //2 (not numpad)
					currentTreeID = 1; // currentTreeID changed to 1, 2nd fault tree
					showInstruct = false;
					clearCanvas();
					resetCanvas(); // scale reset to 0.5
					draw(); // canvas is redrawn to show new tree
				break;
				
			case 51: //3 (not numpad)
					currentTreeID = 2; // currentTreeID changed to 2, 3rd fault tree
					showInstruct = false;
					clearCanvas();
					resetCanvas(); // scale reset to 0.5
					draw(); // canvas is redrawn to show new tree
				break;
			
			// fits the tree to the size of the canvas
			case 70: // F
				scaleToCanvas();
				break;
				
			// toggle for switching between dynamic and
			// fixed canvas sizing
			case 68: // D
				if (dynamicMode == false) {
					dynamicMode = true;
				}
				else {
					dynamicMode = false;
				}				
				break;
			/*
			case 73: // i 
				drawInstructions();
				break;
			*/
		}
	}

	// when the mouse is called, mouseDown is activated
	function onMouseDown(event) {
		if (showInstruct) {
			mouseDown = false;
		}
		else {
			mouseDown = true;
		}
	}
	
	// what happens when the mouse is clicked and dragged
	function onMouseMove(event) {
		mousePos = new Vector(event.clientX, event.clientY);
		if (mouseDown) {
			mousePos.subtract(previousMousePos); // mousePos subtracts the previousMousePos, getting the offset
			pan.add(mousePos); // the values of mousePos are then added to the pan vector
			draw(); // draw is then called to apply panning
		}
		// previousMousePos is then reset back to the current mouse values
		previousMousePos = new Vector(event.clientX, event.clientY);
	}
	
	// functions used to stop the canvas from panning
	// when not needed
	function onMouseUp(event) {
        mouseDown = false;	
	}
		
	function onMouseOut(event) {
        mouseDown = false;	
	}
	
	function onMouseOver(event) {
        mouseDown = false;	
	}
	
	function onMouseWheel(event) {
		var wheelDelta = event.wheelDelta; // event.wheelDelta is the mouse wheel
		if (wheelDelta > 0) {
			scale = scale + 0.05; // the canvas scale is multiplied by 0.8, making it larger
			//zoomToCursor();
			draw(); // draw is then called to apply the new scale
		}	
		else {
			scale = scale - 0.05; // the canvas scale is divided by 0.8, making it smaller
			//zoomToCursor();
			draw(); // draw is then called to apply the new scale				
		}
	}

	
	/*
	function zoomToCursor() {
		var previousScale = scale;
		
		var A = mousePos.getX() - canvas.width / 3;
		var B = pan.getX() - A;
		var C = B / previousScale;
		var D = C * scale;
		var E = D / 20;
		
		pan.setX(E);
		console.log(pan.getX());
		
		var F = mousePos.getY() - canvas.height / 3;
		var G = pan.getY() - F;
		var H = G / previousScale;
		var I = H * scale;
		var J = I / 20;
		
		pan.setY(J);
		console.log(pan.getY());	
	}
	*/
	
	// Scaling the canvas according to how many children the fault tree has by accessing
	// the mFaultTree array in exampleFaultTrees (treeWidth is defined in draw)	
	function scaleToCanvas() {
		clearCanvas();
		resetCanvas();
	
		//scale = 5.5 / depth;
		scale = 0.8 / treeWidth;
		draw();
		drawMinimap();
		
		depth = 0;
	}
	
	window.onresize = function dynamicCanvas() {
		if (dynamicMode == true) {
			clearCanvas();
			resetCanvas();
			
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
			
			draw();
			drawMinimap();
		}
	}
	
	// rescaleCanvas is used whenever the canvas scale needs to be
	// reset instead of hard coding it every time
	function resetCanvas() {
		scale = 0.8;
		pan = new Vector(canvas.width / 2, canvas.height * 0.25);
		previousMousePos = new Vector(event.clientX, event.clientY);
	}
	
	function clearCanvas() {
		context.save();		
		//clearing the canvas
        context.clearRect(0, 0, canvas.width, canvas.height);
		context.translate(canvas.width / 2, canvas.height * 0.25);	
		context.restore();
	}
	
	// Removes the browser scroll bars and the canvas margins
	function removePageElements() {
		document.documentElement.style.marginTop = '0';
		document.documentElement.style.marginRight = '0';
		document.documentElement.style.marginLeft = '0';
		document.documentElement.style.marginBottom = '0';		
	}
	
	function drawInstructions() { 
		clearCanvas();
		resetCanvas();
		showInstruct = true;
			
		instructions.draw(context);		
	}
	
	function drawMinimap() { 
	
		context.beginPath();
				
		context.save();
		context.lineWidth = 5;
		context.translate(canvas.width * 0.84, canvas.height * 0.005);
		context.scale(0.15,0.15);
		context.fillStyle = '#ffffff';
		context.rect(40, 40,canvas.width,canvas.height);
		context.fill();
		context.stroke();
		context.clip();
		context.translate(canvas.width / 2, canvas.height * 0.3);
		
		if (currentTreeID == 2) {
			context.translate(pan.getX() - 900, pan.getY() - 375);
		}
			
		exampleFaultTrees.getFaultTree(currentTreeID).draw(context);
		

		context.beginPath();
		
		context.lineWidth = 25;
		context.scale(0.95 / scale, 0.97 / scale);
		context.translate(canvas.width / 50, canvas.height / 25);
		context.strokeStyle = '#ff0000';
		context.translate(-pan.getX(), -pan.getY());
		context.rect(20, 20, canvas.width, canvas.height);
		context.clip();
		context.stroke();
		context.restore();
		
		/*
		context.save();
		context.font = "15pt Arial";
		context.fillText("Press i for instructions", canvas.width * 0.84, canvas.height * 0.2);
		context.restore();
		*/
				
	}
	
	// this function will automatically draw the canvas
	function draw() {
		clearCanvas();
		
		// Getting the width of the tree and storing it in a variable which can
		// be used in the canvas 
		treeWidth = exampleFaultTrees.mFaultTrees[currentTreeID].numChildren();
		
		// getting the depth of the tree and storing it in a variable which can
		// be used in the canvas
		//depth = exampleFaultTrees.mFaultTrees[currentTreeID].maxTreeDepth();
		
		context.save();
		
		// translating the canvas by the pan values
		context.translate(pan.getX(), pan.getY());
		
		// preventing the canvas from zooming into negative values and from zooming
		// in too far as well 
		if (scale <=  0) {
			scale = 0.05;
		}
		if (scale >= 3.2) {
			scale = 3.15;
		}
		
		// scaling the canvas according to the zooming function
		context.scale(scale, scale);
	
		// draws whatever fault tree currentTreeID is set to (0,1,2),
		// the default is always 0, the first fault tree
		exampleFaultTrees.getFaultTree(currentTreeID).draw(context);
		
		context.restore();
		
		removePageElements();
		drawMinimap();
	}
	
	// call the initialise and draw functions
	intialise();
	draw();
}