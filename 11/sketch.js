let mCamera;

function setup() {
  createCanvas(windowWidth, windowHeight);
  mCamera = createCapture(VIDEO);
  mCamera.size(width/2, width/2 * (3/4));
  mCamera.hide();
}

function draw() {
  background(0);
  mCamera.loadPixels();

  let rectDim = 16;
  noStroke();
  for (let y = 0; y < height; y += rectDim) {
    for (let x = 0; x < width; x += rectDim) {
      let pixX = map(x, 0, width, 0, mCamera.width);
      let pixY = map(y, 0, height, 0, mCamera.height);
      let pixIdx = int(pixY) * mCamera.width + int(pixX);
      let p5Idx = 4 * pixIdx;

      let redVal = mCamera.pixels[p5Idx + 0];
      let greenVal = mCamera.pixels[p5Idx + 1];
      let blueVal = mCamera.pixels[p5Idx + 2];

      fill(redVal, greenVal, blueVal);
      let dim = map(redVal, 0, 255, 32, 8);
      ellipse(x, y, dim);
    }
  }
}
