

var greenAliens = 6000;
var blueAliens = 1000;
var redAliens = 3000;

function alienChecker(x, y, z) {
	if (( x + y + z == 10000) && x > 5000) {
		console.log("MOTHER OF GOD, not the green ones!");

	} if (( x + y + z == 10000) && x + z > 8000) {
		console.log("DOOOOOOOOM");

	} if (( x + y + z == 10000) && y + z < 3000) {
		console.log("We will not go quietly into the night. We will not vanish without a fight. TODAY WE CELEBRATE OUR INDEPENDANCE DAY!");

	} else if (( x + y + z < 10000)) {
		console.log("You didn't do your math correctly, friend.");
	}

}

alienChecker(greenAliens, blueAliens, redAliens);
