var initial_text;
var cnv;
var name;
var matrix;


function preload(){
  matrix = loadFont("TravelingTypewriter.ttf")
}

function setup(){
  createCanvas(windowWidth,windowHeight)
  background("black");
  translate(width/2, height/2)
  fill("green");
  textSize(30);
  textFont(matrix)
  textAlign(CENTER)
  let one = text("WELCOME\n\nenter your name", 0, -100)


  //initial_text = createDiv("we are here")
  let inp = createInput('');
  inp.input(myInputEvent);
  //inp.style("align", "center")
  inp.position(windowWidth/2-inp.width/2,windowHeight/2+80)
  //initial_text.position(windowWidth/2-inp.width/2,windowHeight/2+200)



  // cnv = createDiv("Welcome");
  // cnv.style("text-align","center")
  // cnv.style("color","green")
  // cnv.position(windowWidth/2,windowHeight/2)
  //
  // initial_text = createDiv("we are here")
  // initial_text.style("color","green")
  // initial_text.style("text-align","center")
  // initial_text.parent(cnv)



}
function keyPressed(){
  if (keyCode==ENTER) {
    window.open('index1.html?nome=' + name, '_self')

  }
}

function myInputEvent() {
  name = this.value();

}


function draw(){
  // translate(width/2,height/2)
  // background(0);
  // fill("green");
  // textSize(30);
  // textAlign(CENTER)
  // text("Welcome ", 0, 0)
  //text("we are here to protect you", 0, 0)



}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
