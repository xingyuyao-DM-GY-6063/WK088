let mImg;

function preload() {
  mImg = loadImage("../assets/arara.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);

  mImg.resize(600, 0);
  mImg.loadPixels();

  for (let idx = 0; idx < mImg.pixels.length; idx += 4) {
    let redVal = mImg.pixels[idx + 0];
    let greenVal = mImg.pixels[idx + 1];
    let blueVal = mImg.pixels[idx + 2];
    let alphaVal = mImg.pixels[idx + 3];

    let pixelIsYellow = abs(redVal - greenVal) < 64 && redVal > 2 * blueVal && redVal > 16;

    if (!pixelIsYellow) {
      let lVal = (redVal + greenVal + blueVal) / 3;
      mImg.pixels[idx + 0] = lVal;
      mImg.pixels[idx + 1] = lVal;
      mImg.pixels[idx + 2] = lVal;
    }
  }
  mImg.updatePixels();

  image(mImg, 0, 0);
}

function draw() {}
