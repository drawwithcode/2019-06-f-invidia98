var initial_text;
var cnv;
var url_string = window.location.href
var url = new URL(url_string);
var code = url.searchParams.get("code");
var name = url.searchParams.get("nome");
var win = url.searchParams.get("win");
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
  textAlign(CENTER)
  textFont(matrix)
  if (win=='true') {
    let one = text("Congratulation " + name + "\n\n The code was " + code, 0, -100)
  } else if (win=='false') {
    let one = text("I'm sorry " + name +", you lost \n\n The code was " + code, 0, -100)
  }

  rectMode(CENTER)
  rect(0,105,150,100);
  fill('black')
  textAlign(CENTER,CENTER)
  text(' RETRY', 0, 100, 150,100)






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
function mouseClicked(){
  var d = dist(mouseX, mouseY, windowWidth/2, windowHeight/2+100)
  if (d<50) {
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
