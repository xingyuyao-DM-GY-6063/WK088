let mImg;
let mPg;

function preload() {
  mImg = loadImage("../assets/arara.jpg");
}

function star(x, y, w, c, ctx) {
  c = c | (w / 10);
  ctx.push();
  ctx.translate(x, y);
  ctx.beginShape();
  let r = w / 2;
  ctx.vertex(0, -r);
  ctx.vertex(c, -c);
  ctx.vertex(r, 0);
  ctx.vertex(c, c);
  ctx.vertex(0, r);
  ctx.vertex(-c, c);
  ctx.vertex(-r, 0);
  ctx.vertex(-c, -c);
  ctx.endShape(CLOSE);
  ctx.pop();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20, 120, 220);
  mPg = createGraphics(mImg.width, mImg.height);

  mPg.background(0, 0);
  mPg.fill(255);
  star(350, 170, 300, 30, mPg);
  
  mImg.mask(mPg);

  image(mImg, 0, 0);

  star(100, 100, 100, 10, this);
}

function draw() {}
