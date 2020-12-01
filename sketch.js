let angle = 0;
let w = 20;
let hue = 0;
let numR = 20;
let numY = 180;
let r = 0;
let phrase = ['F', 'L', 'U', 'X'];
let offset = 0.05;
let x;
let y;
let yOffset = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);

  let offset = 0;

  //  frameRate(10);


}

function draw() {
  background(0);
  // textSize(10);

  noStroke();
  push()
  fill(255);
  x = map(sin(frameCount * 0.005), -1, 1, 0, width);
  y = map(sin((frameCount + offset) * 0.005), -1, 1, 0, height);
  translate(x, y);
  textSize(map(sin(frameCount * 0.05), -1, 1, 3, 30));

  for (let y = 5; y <= numY; y++) {

    push();
    rotate(r * (numY - (y * 8)));

    for (let i = 0; i <= numR; i++) {

      push();
      rotate(radians(360 / numR) * i);

      push();
      let a = angle + offset;
      translate(y * 10 + offset, 0);
      rotate(-1 * (radians(360 / numR) * i) - (r * (numY - (y * 8))));
      text(phrase[y % phrase.length], 0, 0);

      pop();

      pop();
    }
    pop();

    offset = map(sin(frameCount * 0.01), -1, 1, width * -1, width / 2);

    r += 0.000001;
  }
  //angle += 0.0001;





  pop();

  offset += 10;

}