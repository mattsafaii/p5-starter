// Change SEED to vary the output deterministically.
const SEED = 1;

function setup() {
	createCanvas(windowWidth, windowHeight);
	pixelDensity(displayDensity());
	randomSeed(SEED);
	noiseSeed(SEED);
}

function draw() {
	background(240);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function keyPressed() {
	if (key === "s") saveCanvas("frame", "png");
}
