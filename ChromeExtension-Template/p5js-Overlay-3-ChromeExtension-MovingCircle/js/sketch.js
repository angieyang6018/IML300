/* 
standard bounce motion adapted from:
https://p5js.org/examples/motion-bounce.html
 */

document.body.insertAdjacentHTML('afterbegin', '<div id="p5Canvas"></div>') //Embed in body

let r = 100;
let x, y;
let xSpeed = 2;
let ySpeed = 2;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight)
  canvas.parent('p5Canvas')
  noStroke();
  fill(168, 247, 134, 150) 
// Set the starting position of the shape
  x = width / 2;
  y = height / 2;
}

function draw() {
  clear() //Make the background transparent
  circle(x, y, r);
// Update the position of the shape while it's moving
  x += xSpeed;
  y += ySpeed;

// Test to see if the shape exceeds the boundaries of the screen
// If it does, reverse its direction
  if (x > width - r || x < r) {
    xSpeed = -xSpeed;
  }
  if (y > height - r || y < r) {
    ySpeed = -ySpeed;
  }
}