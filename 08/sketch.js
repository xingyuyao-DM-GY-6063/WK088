let mImg;
let mMask;

function preload() {
  mImg = loadImage("../assets/arara.jpg");
  mMask = loadImage("../assets/star_mask.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);

  mImg.resize(600, 0);

  mImg.mask(mMask);

  image(mImg, 0, 0);
}

function draw() {}
