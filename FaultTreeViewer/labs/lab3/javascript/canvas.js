// check to see if the browser supports
// the addEventListener function 
if(window.addEventListener)
{
	window.addEventListener
	(
		'load', //this is the load event
		onLoad, //this is the event handler we are going to write
		false //useCapture boolean value
	);
}

// the window load event handler
function onLoad()
{
	var canvas, context, textPosition, houses, sun;
	
	// this function will initialise our variables 
	function initialise()
	{
		// Find the canvas element using its id attribute.
		canvas = document.getElementById('canvas');
		// if it couldn't be found
		if (!canvas)
		{
			// make a message box pop up with the error.
			alert('Error: I cannot fint the canvas element!');
			return;
		}
		// check if there is a getContext function 
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
		
		sun = new Sun(new Vector(-200, -200), '#ffff00', 50, 0);
		
		houses = new Array();
		var doorColour = '#ff0000';
		var count = 0;
		var scale = 1;
		var rotationAngle = 0;
		for (var j = 0; j < 1; j += 1) {
			var yPosition = j * 200;
			for (var i = 0; i < 1; i += 1) {
				var xPosition = i * 200;
				var pPosition = new Vector (xPosition, yPosition);
				if (count % 2 == 0) {
					doorColour = '#ff0000';
				}
				else {
					doorColour = '#ff8000';
				}
				var house = new House(pPosition, doorColour, scale, rotationAngle);
				houses.push(house);				
				count += 1;
			}
		}		
	}
	
	function draw() {
		context.translate(canvas.width * 0.5, canvas.height * 0.5);
		for (var i = 0; i < houses.length; i += 1) {
			var house = houses[i];
			house.draw(context);
			sun.draw(context);
		}
	}	
	
	// call the initialise and draw functions
	initialise();
	draw();
}