
/* 
Inspired by from concept from Adam Vossen:
"Breathe"
This extension will randomly send you an alert to stop what you're doing and focus on your breath for 30 minutes.

 */
document.body.insertAdjacentHTML('afterbegin', '<div id="p5Canvas"></div>') //Embed in body

let r = 10;
let speed = 0.9;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('p5Canvas');
  noStroke();
  fill(168, 247, 134, 150);
}

function draw() {
  clear() //Make the background transparent
  r += speed;  // radius grows with the speed
  if (r > 200){
  speed = -speed; // If the radius is bigger than 200, then the radius shrinks with the speed
  } else if (r < 10){ 
    speed = -speed; // If the radius is smaller than 10, then the radius grows with the speed
  }
  
  circle(200,200,r);
}