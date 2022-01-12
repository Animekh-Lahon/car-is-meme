canvas =document.getElementById('myCanvas')
ctx = canvas.getContext("2d")

greencar_height = 75;
greencar_width = 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_y = 5;
greencar_x = 225;

function add() {
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground
	background_imgTag.src = background_image;

	background_imgTag = new Image();
	background_imgTag.Image = uploadgreencar;
	background_imgTag.src = greencar_image;
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0,0,canvas.width,canvas.canvas_height)

}

function uploadgreencar() {
	ctx.drawImage(background_imgTag, greencar_x,greencar_y, greencar_width, greencar_height);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_y>=0)
	{
		greencar_y = greencar_y - 10;
		console.log("when up arrow is peressed, x = " + greencar_x + " | y = " +greencar_y);
		uploadBackground();
		uploadgreencar();

	
	}
}

function down()
{
	if(greencar_y>=0)
	{
		greencar_y = greencar_y - 10;
		console.log("when up arrow is peressed, x = " + greencar_x + " | y = " +greencar_y);
		uploadBackground();
		uploadgreencar();

	
	}
}

function left()
{
	if(greencar_y>=0)
	{
		greencar_y = greencar_y - 10;
		console.log("when up arrow is peressed, x = " + greencar_x + " | y = " +greencar_y);
		uploadBackground();
		uploadgreencar();

	
	}
}

function right()
{
	if(greencar_y>=0)
	{
		greencar_y = greencar_y - 10;
		console.log("when up arrow is peressed, x = " + greencar_x + " | y = " +greencar_y);
		uploadBackground();
		uploadgreencar();

	
	}
}
