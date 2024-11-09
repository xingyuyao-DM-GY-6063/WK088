let video;
let faceMesh;
let faces = [];

function preload() {
  faceMesh = ml5.faceMesh();
}

function gotFaces(results) {
  faces = results;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  faceMesh.detectStart(video, gotFaces);
}

function draw() {
  image(video, 0, 0);
  noStroke();

  if (faces.length > 0) {
    fill(0, 255, 0);
    let keypoints = faces[0].keypoints;
    for (let idx = 0; idx < keypoints.length; idx++) {
      ellipse(keypoints[idx].x, keypoints[idx].y, 4);
    }

    fill(200, 0, 0);
    keypoints = faces[0].lips.keypoints;
    for (let idx = 0; idx < keypoints.length; idx++) {
      ellipse(keypoints[idx].x, keypoints[idx].y, 20);
    }
  }
}
