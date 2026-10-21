let myColors = ["#132a13", "#31572c", "#90a955"];

let currentRotation = 30; 

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
}

function draw() {
  background("#ecf39e"); 
  
  translate(width/2, height/2);
  
//   rotate(currentRotation); 
rotate(frameCount * 0.8)


    fill('#f49fbc'); 
  rect(100,150, 700); 
  
  fill("#452103");
  circle(-100, -150, 300);
  fill("#452103");
  circle(-5, -10, 430);
  fill("#f2e8cf");
  circle(10, 20, 400);

  fill("white");
  circle(100, -20, 50);
  fill("#333d29");
  circle(100, -20, 20);

  fill("white");
  circle(-90, 80, 50);
  fill("#333d29");
  circle(-90, 80, 20);

  fill('#f49fbc'); 
  arc(40, 50, 40, 40, 0, 180); 

}

function mouseClicked() {
  currentRotation += 30; 
}
