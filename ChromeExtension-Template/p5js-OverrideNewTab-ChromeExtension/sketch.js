/* 
Drawing Machine sketch adapted from Tiffany Wang:
https://editor.p5js.org/JiachengTiffanyWang/sketches/Otounm4rZ
 */

 //In this sketch, I used the element of thin rectangle to symbolize emotional storm and also walls. With the mouse staying at one point, the program will draws a zebra 

let wall;

function setup() {
  createCanvas(windowWidth, windowHeight)
  background(228, 113, 124);
  
  // wall = 'myself';
  
  /*
  1.Built a wall
  2.If the wall comes from myself
  3.Then break the wall
  */
  
  // if(wall == 'myself'){
  
  //   console.log('break the wall!');
    
  //   }
  
}

function draw() {
  rect ((mouseX = mouseX+12), (mouseY = mouseY+6), 5,46);
  const myCont = 'emotional storm';
  console.log(myCont);
  // console.log(x);
}
function mousePressed (){
  x = random(0, 166);
  background (x);
  // console.log (x);
}