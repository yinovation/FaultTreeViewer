// check to see if the browser supports
// the addEventListener function
if(window.addEventListener)
{
	window.addEventListener
	(
		'load', // this is the load event
		onLoad, // this is the event handler we are going to write
		false   // useCapture boolean value
	);
}

// the window load event handler
function onLoad()
{
	var canvas;
	var context;
	
	// this function will initialise our variables
	function intialise ()
	{
		// Find the canvas element using its id attribute.
		canvas = document.getElementById('canvas');
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
	}
	
	// this function will automatically draw the canvas
	function draw()
	{
		// set the draw fill style colour to black
		context.fillStyle = "#000000";
		// fill the canvas with black
		context.fillRect(0,0,canvas.width,canvas.height);
		// choose a font for our message
		context.font = "40pt Calibri";
		// set the draw fill colour to white
		context.fillStyle = "#ffffff";
		// draw the text at the specified position
		context.fillText("Hello World!", 150, canvas.height);
	}
	
	// call the initialise and draw functions
	intialise();
	draw();
}