let kMax;
let step;
let n = 5000; // number of blobs
let radiusR = 155;
let radiusS = 160; // diameter of the circle
let inter = 1; // difference between the sizes of two blobs
let maxNoise = 500;
let clockwise = true;
let angle1;
let angle2;
let noiseProg = (x) => (x*x*x);

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(RGB, 1);
  noFill();
  kMax = 20;
  step = 0.05;
  clockwise = true;
  angle1 = PI/2;
  angle2 = PI;
  background(0);
}

function draw() {
  translate(width/2, height/2);

  
  if (frameCount < n) {
    let i = frameCount;
    let alpha = 1 - i / n;
    let sizeR = radiusR + i * inter;
    let sizeS = radiusS + i * inter;
    let k = kMax * (i / n);
    let noisiness = maxNoise * noiseProg(i / n);
    blobSpiral1(sizeS, 0, 0, k, i * step, noisiness, clockwise, alpha/10);
    blobSpiral2(sizeR, 0, 0, k, i * step, noisiness, clockwise, alpha/10);
  } else {
    noLoop();
  }
}

function blobSpiral1(sizeS, xCenter, yCenter, k, t, noisiness, clockwise, alpha) {
  let f = clockwise ? -1 : 1;
  let theta0 = random() * 2 * PI;
  let theta = theta0;
  let s;
  let h = random(0.1, 1);
  while ((theta < theta0 + 2 * PI) && (theta > theta0 - 2 * PI)) {
    let r1, r2;
    r1 = cos(theta) + 1;
    r2 = sin(theta) + 1;
    if (clockwise) {
      s = map(theta, theta0, theta0 + 2 * PI, radiusS, sizeS);
    } else {
      s = map(theta, theta0, theta0 - 2 * PI, radiusS, sizeS);
    }
    let r;
    if (theta > PI) {
      r = s + noise(k * r1, k * r2, t) * noisiness *20; // smaller for above PI
    } else if (theta < PI) {
      r = s + noise(k * r1, k * r2, t) * noisiness * 20; // smaller for below PI
    } else {
      r = s + noise(k * r1, k * r2, t) * noisiness;
    }
    let rh = r * h;
    let x = xCenter + r * cos(theta);
    let y = yCenter + rh * sin(theta);
    stroke(1, 1, 1, map(y, -width/2, 0, alpha*3, alpha*0.5));
    ellipse(x, y, random(0.1, 1));
    theta += 0.01 * f;
  }
}


function blobSpiral2(sizeR, xCenter, yCenter, k, t, noisiness, clockwise, alpha) {
  let f = clockwise ? -1 : 1;
  let theta0 = random() * 2 * PI;
  let theta = theta0;
  let s;
  let h = random(0.5, 0.2);
  while ((theta < theta0 + 2 * PI) && (theta > theta0 - 2 * PI)) {
    let r1, r2;
    r1 = cos(theta) + 1;
    r2 = sin(theta) + 1;
    if (clockwise) {
      s = map(theta, theta0, theta0 - 2 * PI, radiusR, sizeR);
    } else {
      s = map(theta, theta0, theta0 + 2 * PI, radiusR, sizeR);
    }
    let r;
    if (theta > PI) {
      r = s + noise(k * r1, k * r2, t) * noisiness * 10; // smaller for above PI
    } else if (theta < PI) {
      r = s + noise(k * r1, k * r2, t) * noisiness * 0.1; // smaller for below PI
    } else {
      r = s + noise(k * r1, k * r2, t) * noisiness;
    }
    let rh = r * h;
    let x = xCenter + r * cos(theta);
    let y = yCenter + rh * sin(theta);
    stroke(1, 1, 1, map(x, -width/2, 0, alpha*2, alpha*0.6));
    ellipse(x, y, random(0.1, 1));
    theta += 0.01 * f;
  }
}

