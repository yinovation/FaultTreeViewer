var Vector = (function () {
	function Vector(pX, pY) {
	
	};
	Vector.prototype.getX = function() {
	
		return this.mX;
	};
	Vector.prototype.setX = function (pX) {
		this.mX = pX;
	};
	
	function Vector(pX, pY) {
		this.setX(pX);
	};
	
	// this function will actually draw on the canvas
	function draw(pPosition)
	{
		// set the draw fill style colour to black
		context.fillStyle = "#000000";
		// fill the canvas with black
		context.fillRect(0,0,canvas.width,canvas.height);
		// choose a font for our message
		context.font = "40pt calibri";
		// set the draw fill colour to white
		context.fillStyle = "#ffffff";
		// draw the text in the specified position
		context.fillText("Hello World!", pPosition.getX{}, pPosition.getY{});		
	}
	
	// the window load event handler
	function onLoad()
	{
		var canvas;
		var context;
		var textPosition;
		
		// this function will intialise our variables
		function intialise ()
		{
			context = canvas.getContext('2d');
			if (!context)
			{
				alert('Error: failed to getContext!');
				return;
			}
			textPosition = new Vector(150,100);
		}
	}
	// call the intialise and draw functions
	intialise();
	draw(textPosition);
	
	
	return Vector;
}) ();