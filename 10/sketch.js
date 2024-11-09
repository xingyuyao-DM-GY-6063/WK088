// https://p5js.org/examples/imported-media-video-capture/

let mCamera;

function setup() {
  createCanvas(windowWidth, windowHeight);
  mCamera = createCapture(VIDEO);
  mCamera.size(width/2, width/2 * (3/4));
  mCamera.hide();
}

function draw() {
  background(0);
  image(mCamera, 0, 0);
}

function mousePressed() {
  print(mCamera.width, mCamera.height);
}
