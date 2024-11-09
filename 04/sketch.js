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
    let pixIdx = idx / 4;
    let y = int(pixIdx / mImg.width);
    let x = pixIdx % mImg.width;

    let redVal = mImg.pixels[idx + 0];
    let greenVal = mImg.pixels[idx + 1];
    let blueVal = mImg.pixels[idx + 2];
    let lVal = (redVal + greenVal + blueVal) / 3;

    let pd = dist(mImg.width / 2.5, mImg.height / 4, x, y);
    let colorFactor = map(pd, 0, mImg.height/2, 1.0, 0.0, true);
    let lFactor = lVal * (1 - colorFactor);

    mImg.pixels[idx + 0] = colorFactor * redVal + lFactor;
    mImg.pixels[idx + 1] = colorFactor * greenVal+ lFactor
    mImg.pixels[idx + 2] = colorFactor * blueVal + lFactor;
  }
  mImg.updatePixels();
  image(mImg, 0, 0);
}

function draw() {}
