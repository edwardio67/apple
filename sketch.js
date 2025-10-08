var apple=mouseX

//The setup function only happens once
function setup() {
	createCanvas(700, 700); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(126,72,137); //an RGB color for the canvas' background
  //circle
  stroke(68,112,25); // an RGB color for the circle's border
  fill(89,135,44,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(700/2,700/2,680,680); // center of canvas, 20px dia
  //nose
  triangle(60,60,700,400,400,400);
  fill(89,135,44,150);

  fill(89,135,44);
  //the right eye
  stroke(188,28,28); // an RGB color for the circle's border
  fill(155,23,17,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(1000/2,600/2,200,40); // center of canvas, 20px dia
  //the right eye pupil
  stroke(33,28,17); // an RGB color for the circle's border
  fill(33,66,45,255); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(1000/2,600/2,mouseX,40); 
}

