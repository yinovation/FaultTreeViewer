// These var control the size and scale of the grid
var gridLength = 8000; // The length along the x-axis of the grid (default: 500)
var gridHeight = 6000; // The height along the y-axis of the grid (default: 500)
var gridScale = 10; // The distance each square in the grid represents (default: 10)
var gridPos = 0; // The starting position of the grid (default: 0)

function drawGrid(pContext)
	{
		pContext.beginPath();
		for (var x = gridPos; x < gridLength + 1; x += gridScale) 
		{
		  pContext.moveTo(x, gridPos);
		  pContext.lineTo(x, gridHeight);
		}

		for (var y = gridPos; y < gridHeight + 1; y += gridScale) 
		{
		  pContext.moveTo(gridPos, y);
		  pContext.lineTo(gridHeight, y);
		}
		pContext.strokeStyle = "#000000";
		pContext.stroke();

		pContext.beginPath();
		pContext.moveTo(gridLength/2, 0);
		pContext.lineTo(gridLength/2, gridHeight);
		pContext.lineWidth = "2";
		pContext.strokeStyle = "#000000";
		pContext.stroke();

		pContext.beginPath();
		pContext.moveTo(0, gridHeight/2);
		pContext.lineTo(gridLength, gridHeight/2);
		pContext.lineWidth = "2";
		pContext.strokeStyle = "#000000";
		pContext.stroke();
	}
