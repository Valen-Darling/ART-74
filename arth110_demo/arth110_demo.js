let cols = 20;
let rows = 20;
let size = 30;

let clickX = -1000;
let clickY = -1000;
let startTime = 0;


function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
 let t = millis() - startTime;
 for (let i = 0; i < cols; i++) {
   for (let j = 0; j < rows; j++) {
     
     let x = i * size;
     let y = j * size;
     
     let d = dist(x,y,clickX,clickY);
     
  let wave = sin(d * 0.05 - t * 0.005);
  
 if (wave > 0.5) {
  fill(0, 200, 255); // blue
} else {
  fill(0, 255, 100); // green
}
  rect (x,y,size,size);
   }
 } 
}

function mousePressed () {
  clickX = mouseX;
  clickY = mouseY;
  startTime = millis ();
}
