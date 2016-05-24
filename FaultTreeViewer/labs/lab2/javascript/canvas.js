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
	var canvas;
	var context;
	var textPosition;
	
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
		textPosition = new Vector(100, 200);
	}
	
	// this function will actually draw on the canvas 
	function drawHouse(pPosition)
	{
		body(pPosition);
		roof(pPosition);
	    window(pPosition);
		window2(pPosition);
		door(pPosition);
	}
	
	function draw(pPosition)
	{
		var count = 0;
		drawHouse(pPosition);
		
		for(var i = 0; i < 2; i+=1)
		{
			count += 200;
			context.save();
			context.translate(count,0)
			drawHouse(pPosition);
			context.restore();
		}		
	}
	
	function body(pPosition)
	{
		context.beginPath();
		context.lineWidth = 5;
		context.fillStyle = '#ffffff';
		context.strokeStyle = '#000000';
		context.moveTo(pPosition.getX()+0, pPosition.getY()+0);
		context.lineTo(pPosition.getX()+200, pPosition.getY()+0);
		context.lineTo(pPosition.getX()+200, pPosition.getY()+100);
		context.lineTo(pPosition.getX()+0, pPosition.getY()+100);
		context.closePath();
		context.fill();
		context.stroke();
	}
	function roof(pPosition)
	{
		context.beginPath();
		context.lineWidth = 5;
		context.fillStyle = '#ff0000';
		context.strokeStyle = '#000000';
		context.moveTo(pPosition.getX()+0, pPosition.getY()+0);
		context.lineTo(pPosition.getX()+100, pPosition.getY()-100);
		context.lineTo(pPosition.getX()+200, pPosition.getY()+0);
		context.closePath();
		context.fill();
		context.stroke();
	}
	
	function window(pPosition)
	{
		context.beginPath();
		context.lineWidth = 5;
		context.fillStyle = '#0000ff';
		context.strokeStyle = '#000000';
		context.moveTo(pPosition.getX()+170, pPosition.getY()+25);
		context.lineTo(pPosition.getX()+135, pPosition.getY()+25);
		context.lineTo(pPosition.getX()+135, pPosition.getY()+75);
		context.lineTo(pPosition.getX()+170, pPosition.getY()+75);
		context.closePath();
		context.fill();
		context.stroke();
	}
	function window2(pPosition)
	{
		context.save();
		context.translate(-105,0)
		window(pPosition);
		context.restore();
	}
	
	
	function door(pPosition)
	{
		context.beginPath();
		context.lineWidth = 5;
		context.fillStyle = '#ff8000';
		context.strokeStyle = '#000000';
		context.moveTo(pPosition.getX()+75, pPosition.getY()+100);
		context.lineTo(pPosition.getX()+75, pPosition.getY()+25);
		context.lineTo(pPosition.getX()+125, pPosition.getY()+25);
		context.lineTo(pPosition.getX()+125, pPosition.getY()+100);
		context.closePath();
		context.fill();
		context.stroke();
	}
	// call the initialise and draw functions
	initialise();
	draw(textPosition);
}