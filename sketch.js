// var shapes = [];
let shapes = []
// console.log(shapes.length)
let shapeType = 'square'
let removedItem = shapes.splice()

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < 35; i++) {
    shape1 = {
      x: random(width),
      y: random(height),
      color: random(['pink', 'green','yellow']),
      shapeType: random(['square' , 'circle', 'ellipse'])
    }
    shapes.push(shape1);
    // shapes.pop('square')
  }
}

 //press mouse to get rid of shapes
 function mousePressed() {
  //  let shapes = ('square','circle','ellipse')
   shapes.splice(0,1);
  //  shapes.pop()
   }

function draw() {
  background(200);

  for (let shape of shapes) {
    console.info(shape.shapeType);

    fill(shape.color)
    if (shape.shapeType === 'square') {
      rect(shape.x, shape.y,100,100);
    }
    if (shape.shapeType === 'circle') {
      circle(shape.x, shape.y,100); 
    }
    if (shape.shapeType === 'ellipse'){
      ellipse(shape.x, shape.y, 15, 150);
    }

    if (mouseIsPressed === true) {
      mousePressed();
    }
    if (keyIsPressed === true) {
      keyPressed();
    }
  }
  function keyPressed() {
    s = random(width);
    d = random(height)
    rect(s,d ,100,100);
  }
}
 