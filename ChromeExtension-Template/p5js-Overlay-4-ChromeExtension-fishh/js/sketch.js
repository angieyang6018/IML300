
let yoff = 0.0; 
let numballs = 10;
let spring = 0.05;
let gravity = 0.03;
let friction = -0.9;
let balls = [];

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight)
  createCanvas('p5Canvas');
  for (let i = 0; i < numBalls; i++) {
      balls[i] = new Ball(
        random(width),
        random(height),
        random(random(204, 135, 75),
        i,
        balls
      );
  }
  noStroke();
  fill(204, 135, 75);      
}

function draw() {
  background(204, 135, 75);
    
  balls.forEach(ball => {
      ball.collide();
      ball.move();
      ball.display();
  });
    
  fill(204, 135, 75);
  beginShape();
  let xoff = 0;
  for (let x = 0; x <= width; x += 10) {
    let y = map(noise(xoff, yoff), 0, 1, 200, 300); 
    vertex(x, y);
    xoff += 0.05;
  }
  yoff += 0.01;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);

class Ball {
  consturctor(xin, yin, din, idin, oin){
    this.x = xin;
    this.y = yin;
    this.vx = 0;
    this.vy = 0;
    this.diameter = din;
    this.id = idin;
    this.others = oin;
      
  collide() {
    for (let i = this.id + 1; i < numBalls; i++) {
        let dx = this.others[i].x - this.x;
        let dy = this.others[i].y - this.y;
        let distance = sqrt(dx * dx + dy * dy);
        let minDist = this.others[i].diameter / 2 + this.diameter / 2;
        if (distance < minDist) {
          let angle = atan2(dy, dx);
          let targetX = this.x + cos(angle) * minDist;
          let targetY = this.y + sin(angle) * minDist;
          let ax = (targetX - this.others[i].x) * spring;
          let ay = (targetY - this.others[i].y) * spring;
          this.vx -= ax;this.vy -= ay;
          this.others[i].vx += ax;
          this.others[i].vy += ay;
        }
    }
}
    move() {
      this.vy += gravity;
      this.x += this.vx;
      this.y += this.vy;
      if (this.x + this.diameter / 2 > width) {
        this.x = width - this.diameter / 2;
        this.vx *= friction;
      } else if (this.x - this.diameter / 2 < 0) {
        this.x = this.diameter / 2;
        this.vx *= friction;
      }
      if (this.y + this.diameter / 2 > height) {
        this.y = height - this.diameter / 2;
        this.vy *= friction;
      } else if (this.y - this.diameter / 2 < 0) {
        this.y = this.diameter / 2;
        this.vy *= friction;
      }  
    }

  display() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}
