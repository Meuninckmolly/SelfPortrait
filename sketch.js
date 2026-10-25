// let myColors = ["#132a13", "#31572c", "#90a955"];

// let currentRotation = 30; 

// function setup() {
//   createCanvas(800, 800);
//   angleMode(DEGREES);
// }

// function draw() {
//   background("#ecf39e"); 
  
//   translate(width/2, height/2);
  
// //   rotate(currentRotation); 
// rotate(frameCount * 0.8)


//     fill('#f49fbc'); 
//   rect(100,150, 700); 
  
//   fill("#452103");
//   circle(-100, -150, 300);
//   fill("#452103");
//   circle(-5, -10, 430);
//   fill("#f2e8cf");
//   circle(10, 20, 400);

//   fill("white");
//   circle(100, -20, 50);
//   fill("#333d29");
//   circle(100, -20, 20);

//   fill("white");
//   circle(-90, 80, 50);
//   fill("#333d29");
//   circle(-90, 80, 20);

//   fill('#f49fbc'); 
//   arc(40, 50, 40, 40, 0, 180); 

// }

// function mouseClicked() {
//   currentRotation += 30; 
// }
function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  noStroke();
}

function draw() {
  background("#fff0f5");

  push();
  translate(width / 2, height / 2);
  rotate(frameCount * 0.5);
  translate(-width / 2, -height / 2);

  fill("#f2c14e");
  star(100, 120, 12);
  star(490, 160, 12);
  star(120, 430, 10);
  star(480, 440, 12);

  fill("#593a35");
  circle(300, 155, 75);

  fill("#f4a7c5");
  circle(300, 155, 22);

  fill("#593a35");
  ellipse(300, 280, 200, 250);

  fill("#f5c6a5");
  rect(280, 350, 40, 70);

  fill("#f4a7c5");
  ellipse(300, 500, 240, 160);

  fill("#f5c6a5");
  ellipse(300, 280, 150, 190);

  fill("#593a35");
  arc(300, 230, 155, 120, 180, 360);
  // ellipse(245, 235, 45, 85);
  // ellipse(350, 235, 40, 75);

  fill("#593a35");
  circle(270, 280, 9);
  circle(330, 280, 9);

  fill("#ed9caf");
  circle(260, 305, 20);
  circle(340, 305, 20);

  noFill();
  stroke("#b85c75");
  strokeWeight(3);
  arc(300, 310, 25, 15, 0, 180);
  noStroke();

  fill("#f2c14e");
  star(400, 240, 15);

  pop();
}

function star(x, y, size) {
  beginShape();

  for (let i = 0; i < 10; i++) {
    let angle = i * 36 - 90;
    let radius = i % 2 === 0 ? size : size / 2;

    vertex(
      x + cos(angle) * radius,
      y + sin(angle) * radius
    );
  }

  endShape(CLOSE);
}