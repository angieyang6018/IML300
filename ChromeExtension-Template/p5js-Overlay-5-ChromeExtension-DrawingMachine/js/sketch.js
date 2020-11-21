/* 
Drawing Machine sketch adapted from Angie Yang:
https://editor.p5js.org/angieyan/sketches/sz2UcNeo3
 */

document.body.insertAdjacentHTML('afterbegin', '<div id="p5Canvas"></div>') //Embed in body

let brushSize = 50;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight)
  canvas.parent('p5Canvas')
}

function mouseDragged() {
  
  if (mouseX < width/2){
    brushSize = random(50);
    fill(random(230), random(10), random(74));
  } else {
    brushSize = random(50);
    fill(random(5), random(3));
  }
  ellipse(mouseX, mouseY, brushSize);
  
}