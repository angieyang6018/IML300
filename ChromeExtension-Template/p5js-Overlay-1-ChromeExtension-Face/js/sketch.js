/* 
Face sketch adapted from Kayla Adams:
https://editor.p5js.org/kaylaada/sketches/HX8uZtynj
 */

document.body.insertAdjacentHTML('afterbegin', '<div id="p5Canvas"></div>') //Embed in body

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('p5Canvas');
}

function draw() {
  clear() //Make the background transparent

/* try the line of code below */
// translate(mouseX, mouseY); //Make the face move with mouse

/* then try the line of code below */
  // translate(mouseX-300, mouseY-240); //Make the face move with mouse

  //hair
  noStroke();
  fill(mouseX, mouseY, 37);
  ellipse(300, 240, 300, 300);
  
  //head
  noStroke();
  fill(189, 153, 91);
  ellipse(300, 300, 200, 200);
  
  //eye 1
  noStroke();
  fill(255);
  ellipse(260, 280, 30, 20);
  
  //eye 2
  noStroke();
  fill(255);
  ellipse(330, 280, 30, 20);
  
  //pupil 1
  noStroke();
  fill(0);
  ellipse(330, 280, 10, 20);
  
  //pupil 2
  noStroke();
  fill(0);
  ellipse(260, 280, 10, 20);
  
  //nose
  noStroke();
  fill(163, 128, 82);
  triangle(300, 300, 310, 320, 320, 320);
  
  //hair pik
  noStroke();
  fill(54, 50, 48);
  quad(200, 180, 250, 160, 270, 180, 200, 205);
  
  //hair pik handle
  noStroke();
  fill(54, 50, 48);
  quad(200, 140, 230, 130, 230, 180, 220, 180);
  
  //mouth
  noStroke();
  fill(255, 218, 201);
  ellipse(280, 360, 30, 20);
  
  
}