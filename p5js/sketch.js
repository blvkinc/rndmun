let song, fft;
let cubes = [];
let numCubes = 3;
let cubeSize = 10;
let angleX = 0;
let angleY = 0;
let cam;

let minCamZ = 300;
let maxCamZ = 1000;
let camZ = 500;
let isPlaying = true;

function preload() {
  song = loadSound('/rndmun/p5js/./1.wav');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  
  fft = new p5.FFT();
  
  
  for (let i = 0; i < numCubes; i++) {
    for (let j = 0; j < numCubes; j++) {
      let cube = new Cube(i * cubeSize - (numCubes / 2) * cubeSize, j * cubeSize - (numCubes / 2) * cubeSize, 0);
      cubes.push(cube);
    }
  }

  cam = createCamera();
}

function draw() {
  background(0);
  
  // update camera position
  camera(0, 0, camZ);
  rotateX(angleX);
  rotateY(angleY);
 

  
  let spectrum = fft.analyze();

  for (let i = 0; i < numCubes * numCubes; i++) {
    let cube = cubes[i];
    let level = map(spectrum[i], 0, 255, 0, 4);
    cube.update(level);
    cube.display();
  }
}

function mouseDragged() {
  angleY += (mouseX - pmouseX) * 0.01;
  angleX += (mouseY - pmouseY) * 0.01;
}
function mouseWheel(event) {
  camZ += event.delta;
  camZ = constrain(camZ, minCamZ, maxCamZ);
}
class Cube {
  constructor(x, y, z) {
    this.pos = createVector(x, y, z);
    this.scale = createVector(1, 1, 1);
  }

  update(level) {
    this.scale.z = map(level, 0, 1, 1, 2);
  }

  display() {
    push();
    translate(this.pos.x, this.pos.y, this.pos.z);
    scale(this.scale.x, this.scale.y, this.scale.z);
    stroke(255);
    strokeWeight(0.5);
    fill(0);
    box(cubeSize);
    pop();
  }
}

function keyPressed() {
  if (keyCode === 32) {
    isPlaying = !isPlaying; 
    if (isPlaying) {
      song.play(); 
    } else {
      song.pause(); 
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
 
