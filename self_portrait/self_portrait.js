function setup() {
createCanvas(600,600);
background(252,203,231);

//cherry blossom plank divider- vertical lines
strokeWeight (0);
fill (235,152,199);
rect(250, 0, 40, 100);
rect(0, 100, 40, 150);
rect(100, 230, 40, 150);
rect(458, 230, 40, 150);
rect(0, 360, 35, 135);
rect(570, 360, 35, 135);
rect(100, 480, 35, 135);
rect(458, 480, 35, 135);

//cherry blossom plank- horizontal rectangles-light
strokeWeight (0);
fill (255,222,241);
rect(30, 20, 180, 40);
rect(140, 55, 150, 40);
rect(300, 20, 80, 40);
rect(450, 55, 150, 40);
rect(0, 130, 180, 40);
rect(110, 190, 180, 40);
rect(300, 150, 180, 40);
rect(550, 190, 180, 40);
rect(0, 320, 30, 40);
rect(70, 250, 60, 40);
rect(450, 320, 100, 40);
rect(35, 380, 90, 40);
rect(460,450, 90, 40);
rect(530, 380, 90, 40);
rect(0, 500, 90, 40);
rect(520, 560, 90, 40);

//cherry blossom plank- horizontal lines- darker
strokeWeight (0);
fill (255,189,227);
rect(0, 20, 80, 40);
rect(250, 55, 95, 40);
rect(382, 20, 80, 40);
rect(80, 190, 50, 40);
rect(510, 260, 70, 40);
rect(35, 450, 70, 40);


//cherry blossom plank divider
strokeWeight (0);
fill (255,176,221);
rect(0, 100, 600, 30);
rect(0, 230, 600, 30);
rect(0, 360, 600, 30);
rect(0, 480, 600, 30);


//cherry blossom plank- dark dividers
strokeWeight (0);
fill (204,133,173);
rect(50, 100, 100, 30);
rect(230, 100, 200, 30);
rect(500, 100, 90, 30);
rect(0, 230, 150, 30);
rect(530, 230, 100, 30);
rect(0, 360, 70, 30);
rect(130, 360, 75, 30);
rect(485, 360, 150, 30);
rect (50, 480, 100, 30);
rect(550, 480, 50, 30);

//window pane
strokeWeight (0);
fill (86, 174, 255);
square(300, 0, 300);

//window pane- white
strokeWeight (0);
fill (255);
rect(270, 0, 35, 150);
rect(300, 0, 60, 35);
rect(400, 0, 200, 35);
square(326, 90, 35);
square(362, 55, 35);

//window pane- light blue
strokeWeight (0);
fill (209, 255, 253)
square(565, 0, 35);
}



function draw() {
    //hair-under
beginShape();
fill (71, 71, 71);
strokeWeight (7);
vertex (180, 350);
vertex (100, 450);
vertex (80, 500);
vertex (115, 480);
vertex (125, 550);
vertex (140, 530);
vertex (350, 580);
vertex (495, 530);
vertex (530, 580);
vertex (535, 525);
vertex (530, 450);
vertex (460, 350);
endShape();

  
  //head
fill (255, 211, 122);
strokeWeight (6);
arc(400, 300, 150, 150, 0, HALF_PI);
arc(195, 300, 150, 150, HALF_PI, PI);
rect(225, 350, 150, 200);
ellipse(300, 300, 250, 300);

//hair1
beginShape();
strokeWeight (7);
fill (71, 71, 71);
vertex(200,300);
vertex (300, 250);
vertex (280, 300);
vertex (400, 250);
vertex (425, 300);
vertex (450, 350);
vertex (425, 430);
vertex (500, 300);
vertex (460, 220);
vertex (500, 220);
vertex (410, 155);
vertex (380, 155);
vertex (360, 130);
vertex (240, 110);
vertex (260, 155);
vertex (170, 160);
vertex (80, 310);
vertex (135, 300);
vertex (170, 450);
vertex (180, 350);
vertex (200, 300)
endShape();

//eyebrows
strokeWeight (5);
arc(230, 230, 45, 55, PI, TWO_PI);
arc(362, 230, 45, 55, PI, TWO_PI);


//eyes
strokeWeight (15);
point (230,300);
point (360,300);

//smile
fill (255, 211, 122);
strokeWeight (5);
arc(270, 370, 60, 60, 0, PI, TWO_PI);
arc(332, 370, 60, 60, 0, PI, TWO_PI);

//blush
strokeCap(ROUND);
strokeWeight (6);
stroke (255,168,173);
line(240, 335, 210, 365);
line(260, 335, 230, 365);
line(220, 335, 190, 365);
line(360, 335, 330, 365);
line(380, 335, 350, 365);
line(405, 335, 375, 365);

//jacket
fill (164, 33, 196);
strokeWeight (7);
stroke (0);
arc(300, 650, 400, 300, PI, TWO_PI);
fill (255);
rect(310, 500, 30, 200);
rect(260, 500, 30, 200);
fill (164, 33, 196);
rect(300, 455, 150, 90, 50, 15, 50, 5)
rect(150, 455, 150, 90, 15, 50, 5, 50);

;
}
