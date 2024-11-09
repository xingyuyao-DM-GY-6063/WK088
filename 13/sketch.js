let sliderRed;
let sliderBlue;
let myLink;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  textSize(24);

  sliderRed = createSlider(0, 255, 0);
  sliderRed.position(10, 10);
  sliderRed.style("width", width - 20 + "px");

  sliderBlue = createSlider(0, 255, 0);
  sliderBlue.position(10, 50);
  sliderBlue.style("width", width - 20 + "px");

  myLink = createA("https://6063b.github.io", "CLASS SITE");
  myLink.position(10, 50);
  myLink.style("fontSize", "20px");
}

function draw() {
  let valR = sliderRed.value();
  let valB = sliderBlue.value();

  background(valR, 0, valB);

  fill(255 - valR, 255, 255 - valB);
  text(valR + ", " + 0 + ", " + valB, width / 2, height / 2);

  let linkY = (frameCount % height)
  myLink.position(10, linkY - 20);
  myLink.style("color", `rgb(${255-valR}, 255, ${255-valB})`);
}
