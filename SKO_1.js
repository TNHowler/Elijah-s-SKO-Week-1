//GitHub Copilot was used to assist in writing the code;

var elevator;
var ellipses = [];
let InterstateBCFont;
let C82;
let CW1;

function preload(){
  elevator = loadImage("data/Elevator.jpeg");
  InterstateBCFont = loadFont("Interstate_BoldCondensed.ttf");
  C82 = loadImage("data/C82.jpeg");
  CW1 = loadImage("data/CW1.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipses = [
    { x: width / 1.1321, y: height / 1.475, w: width / 40, h: height / 22, url: "https://tnhowler.github.io/Elijah-s-SKO-CW/" },
    { x: width / 1.1321, y: height / 1.617, w: width / 40, h: height / 22, url: "https://tnhowler.github.io/Elijah-s-SKO-Week-1/" },
    { x: width / 1.1321, y: height / 1.789, w: width / 40, h: height / 22, url: "https://tnhowler.github.io/Elijah-s-SKO-Week-3/" },
    { x: width / 1.1321, y: height / 2, w: width / 40, h: height / 22, url: "https://tnhowler.github.io/Elijah-s-SKO-Week-5/" },
    { x: width / 1.1321, y: height / 2.27, w: width / 40, h: height / 22, url: "https://tnhowler.github.io/Elijah-s-SKO-Week-7/" },
    { x: width / 1.1321, y: height / 2.625, w: width / 40, h: height / 22, url: "https://tnhowler.github.io/Elijah-s-SKO-Week-9/" },
    { x: width / 1.1321, y: height / 3.11, w: width / 40, h: height / 22, url: "https://tnhowler.github.io/Elijah-s-SKO-Week-11/" },

    { x: width / 1.0925, y: height / 1.475, w: width / 40, h: height / 22, url: "https://tnhowler.github.io/Elijah-s-SKO-Week-0/" },
    { x: width / 1.0925, y: height / 1.617, w: width / 40, h: height / 22, url: "https://tnhowler.github.io/Elijah-s-SKO-Week-2/" },
    { x: width / 1.0925, y: height / 1.789, w: width / 40, h: height / 22, url: "https://tnhowler.github.io/Elijah-s-SKO-Week-4/" },
    { x: width / 1.0925, y: height / 2, w: width / 40, h: height / 22, url: "https://tnhowler.github.io/Elijah-s-SKO-Week-6/" },
    { x: width / 1.0925, y: height / 2.27, w: width / 40, h: height / 22, url: "https://tnhowler.github.io/Elijah-s-SKO-Week-8/" },
    { x: width / 1.0925, y: height / 2.625, w: width / 40, h: height / 22, url: "https://tnhowler.github.io/Elijah-s-SKO-Week-10/" },
    { x: width / 1.0925, y: height / 3.11, w: width / 40, h: height / 22, url: "https://tnhowler.github.io/Elijah-s-SKO-Week-12/" },
  ];
}

function draw() {
  background("white");
  image(elevator, 0, 0, windowWidth, windowHeight);

  imageMode(CENTER);
  image(C82, width / 3, height / 1.3, width / 7, height / 3);

  image(CW1, width / 1.8, height / 1.3, width / 5, height / 3);

  imageMode(CORNER);

  strokeWeight(width / 550);
  noFill();

  for (let i = 0; i < ellipses.length; i++) {
    let e = ellipses[i];
    if (i === 1) {
      stroke(0, 255, 0);
    } else if (i === 1) {
      stroke(255, 0, 0);
    } else {
      stroke(255, 0, 0);
    }
    ellipse(e.x, e.y, e.w, e.h);
  }

    // Display text in the middle of the screen
    textAlign(CENTER, CENTER);
    textSize(windowWidth / 50);
    textFont(InterstateBCFont); 
    noStroke();
    fill(0); 
    text(
      "Codewords Creative Coding and Typography",
      width / 2.5,
      height / 10,
      width / 5, // Specify the width for wrapping the text
      height / 12,  // Specify the height for wrapping the text
    );
  
    // Display text in the middle of the screen
    textAlign(CENTER, CENTER);
    textSize(windowWidth / 100);
    textFont(InterstateBCFont); 
    noStroke();
    fill(0); 
    text(
      "The morning session with Andy consisted of us picking a phrase of our choosing. My phrase was “Erm what the sigma”, because Tik Tok brain rot has taken me over. With our phrase we did a crazy eight, which was the first time I had ever heard of the process. It is essentially the generation of ideas phase. We were tasked with quickly generating our phrase in 8 different ways.\n\n In the afternoon class with Karen, we set up our programming softwares and then moved onto our first bit of code. We used our crazy eights to do our first bit of coding. We had to select one of our crazy eights and recreate it with code and have an image with it. I found this pretty straight forward and easy to get a hold of.\n\n\ Click on the code!",
      width / 2.8,
      height / 8,
      width / 3.5, // Specify the width for wrapping the text
      height / 2  // Specify the height for wrapping the text
    );
}

function mousePressed() {
  for (let i = 0; i < ellipses.length; i++) {
    let e = ellipses[i];
    let d = dist(mouseX, mouseY, e.x, e.y);
    if (d < e.w / 2) {
      window.location.href = e.url;
    }
  }

  let cw1X = width / 1.8;  
  let cw1Y = height / 1.3;  
  let cw1W = width / 5;  
  let cw1H = height / 3;  
  if (mouseX > cw1X - cw1W / 2 && mouseX < cw1X + cw1W / 2 && mouseY > cw1Y - cw1H / 2 && mouseY < cw1Y + cw1H / 2) {  
   window.location.href = "https://tnhowler.github.io/ERM-WHAT-THE-SIGMA/"; 
  }  
}
