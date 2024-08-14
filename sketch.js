let onda = 0;

function setup() {
	createCanvas(windowWidth,windowHeight, WEBGL);
	createEasyCam();
    noStroke();
	onda = sin(frameCount*0.7)*16;
}

function draw() {
 background(20);

	ambientLight(230);
	pointLight(160, 0, 0, 0);
	//pointLight(0, 0 , 100, 200, -200, 0);
	//pointLight(0, 100 , 0, -100, 100, 10);
	
	
	rotateY(frameCount * 0.003);
	rotateX(frameCount * 0.002);
	rotateZ(frameCount * 0.001);
	
	specularMaterial(200,0,0);
	
	push();
	rotateY(onda * 0.005);
    fill(20, 24, 223);
	rotateY(onda * 0.005);
    sphere(100);
	pop();
 
  rotateY(frameCount * 0.001);
  
  //애벌레
  push();
  translate(200, 100);
  rotateY(frameCount * 0.09);
  rotateY(frameCount * 0.01);
  fill(214, 214, 142);
  sphere(20);
  translate(20,0);
  sphere(30);
  translate(20,0);
  sphere(20);
  translate(-20,40);
  sphere(30);
  translate(-20,40);
  sphere(30);
  translate(-20,40);
  sphere(30);
  fill(0);
  translate(30,-120,20);
  sphere(10);
  translate(20,0,0);
  sphere(10);
  pop();
  
  //꿀벌
  push();
  translate(-150, 50, 100);
  rotateY(frameCount * 0.01);
  rotateY(frameCount * 0.001);
  fill(231, 192, 23);
  sphere(20);
  translate(20,0);
  sphere(30);
  translate(20,0);
  sphere(20);
  translate(-30,0,20);
  fill(0);
  sphere(10);
  translate(20,0,0);
  sphere(10);
  fill(231, 192, 23);
  translate(-10,30,-50);
  sphere(30);
  fill(0);
  translate(0,0,-30);
  rotateX(-96);
  cone(10, 20, 16);
  rotateX(96);
  translate(-10,30,45);
  ellipsoid(7, 10, 7);
  translate(20,0,0);
  ellipsoid(7, 10, 7);
  pop();
	
	push();
  translate(450, 150, 300);
  rotateY(frameCount * 0.001);
	rotateY(frameCount * 0.005);
  sphere(40);
  pop();
	
	push();
  translate(-150, 50, 100);
  rotateY(onda * 0.001);
	rotateY(onda * 0.005);
  sphere(10);
  pop();
	
	push();
  translate(-250, 50, -500);
  rotateY(onda * 0.001);
	rotateY(onda * 0.005);
  sphere(5);
  pop();
	
	push();
  translate(50, 200, 100);
  rotateY(onda * 0.001);
	rotateY(onda * 0.005);
  sphere(5);
  pop();
}
