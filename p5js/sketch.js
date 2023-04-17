let darkMode = true

let capture

let bg, tc, newScreen

const font = 'monospace'
const font_ratio = 0.5

let charRamp = " .:-=+*#%@"
//"$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\|()1{}[]?-_+~<>i!lI;:,\"^`'. "

const density = 25; //how many pixels go into one character

function reverseStr(str){
  rev = ''
  for (let l = str.length - 1; l >= 0; l-= 1) {
    rev += str[l]
  }
  return rev
}

function setup() {
  if (darkMode) {
    bg = color(10, 10, 20)
    tc = color(255)
    charRamp = reverseStr(charRamp)
  } else {
    bg = color(255)
    tc = color(0)
  }

  capture = createCapture(VIDEO);
  capture.size(windowHeight, windowWidth);
  width = windowWidth;
  height = windowHeight;
  createCanvas(width, height);
  screen = createGraphics(width, height)
  newScreen = createGraphics(int(screen.width / density / font_ratio), int(screen.height / density))
  
  screen.fill(0)
  textFont(font, density)
  fill(tc)
  noStroke()
  textSize(density)
  textLeading(density)
  textAlign(LEFT, TOP)
}

function draw() {
  background(bg);
  screen.image(capture, 0, 0, screen.width, screen.height)
  updateAscii()
  
  if (keyIsPressed) {
    image(screen, 0, 0, width, height)
  }
}

function updateAscii() {
  const inv_max = 1/(255*3*256)
  newScreen.clear()
  newScreen.image(screen, 0, 0, newScreen.width, newScreen.height)

  newScreen.loadPixels()
  newText = ''
  const pxs = newScreen.pixels
  for (let y = 0; y < newScreen.height; y++) {
    for (let x = 0; x < newScreen.width; x++) {
      const i = ((y*newScreen.width) + x)*4
      br = (pxs[i] + pxs[i + 1] + pxs[i + 2])*pxs[i + 3]
      pixChar = charRamp[int(br*inv_max*charRamp.length)]
      newText += pixChar
    }
    newText = newText + '\n'
  }
  text(newText, 0, 0)
}
