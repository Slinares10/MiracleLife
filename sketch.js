//The setup function only happens once
var ruby=4;

function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(197,15,mouseX); //an RGB color for the canvas' background
  //circle
  stroke(0,64,193) // an RGB color for the circle's border
  fill(0,0,mouseX); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(mouseX,mouseY,47,47); // center of canvas, 20px dia
  stroke(15,128,241);
  strokeWeight(7);
  fill(176,mouseY,mouseX);
  rect(ruby,20,24,ruby,ruby);
  line(ruby,200,974,ruby);
  strokeWeight(54);
  point(random(width),random(height));
  quad(mouseX,52,86,40,40,38,14,mouseY);
  stroke(250,2,224);
  fill(mouseX,242,250,4);
  ellipse(70,mouseX,mouseY,17);
  stroke(242,250,4);
  fill(249,246,32);
  ellipse(74,mouseY,47,mouseX,40);
  triangle(40,75,58,20,87,ruby);
  strokeWeight(77);
  fill(88,249,32);
  point(random(height),random(width));

  

 


}

function mousePressed() {
  if (ruby>=174) 
    {ruby=0;}
    else
      {ruby=ruby+87;}





}
