var initial_text;
var cnv;
var cnv2;
var name;
var one;
var url_string = window.location.href
var url = new URL(url_string);
var name = url.searchParams.get("nome");
var mainpar;
var mainpar2;
var font;
var allies;
var tentativi = [];
var nemici = [];
var ypos = 100;
var counter = 0;
var positioning;
var defeat = [];
var number;
var n1;
var n2;
var n3;
var n4;
var points = ['-', '-', '-', '-'];
var gui;
var q = 0;

//GUI PARAMS

var params = {
  n1: 0,
  n2: 0,
  n3: 0,
  n4: 0
};



var params2 = {
  n1: 0,
  n2: 0,
  n3: 0,
  n4: 0
};






function preload() {}

function setup() {
  createCanvas(windowWidth, windowHeight)
  background("black");
  translate(width / 2, height / 2)
  fill("green");
  textSize(30);
  textAlign(CENTER)

  frameRate(30)
  positioning = (windowWidth / 100 * 30) / 2;

  cnv = createDiv("Hi, " + name);
  cnv.class("mainpar")
  cnv.position(0, 100)




  mainpar = createDiv("Allies")
  mainpar.class("structure")
  mainpar.position(0, 0)

  mainpar2 = createDiv("Enemies")
  mainpar2.class("structure")
  mainpar2.position(windowWidth - windowWidth / 100 * 30, 0);



  number = [0, 1, 2, 3, 4];
  n1 = random(number);
  number.splice(number.indexOf(n1), 1);
  n2 = random(number);
  number.splice(number.indexOf(n2), 1);
  n3 = random(number);
  number.splice(number.indexOf(n3), 1);
  n4 = random(number);


  for (var i = 0; i < 7; i++) {
    tentativi[i] = new CreateAllies;
    nemici[i] = new CreateAllies;
    ypos += 70
    tentativi[i].allies();
    tentativi[i].coordinate(ypos);
    nemici[i].enemies();
    nemici[i].coordinate(ypos);

  }



  gui = createGui('set a combination to defeat the enemy');

  sliderRange(0, 4, 1);
  gui.addObject(params);
  gui.setPosition(windowWidth / 2 - 200, height / 2 + 50);
  gui.hide();




}



function draw() {
  // if (frameCount > 100) {
  //   counter++;
  //   var random_pos = noise(counter/10)
  //   var position_text = map(random_pos, 0, 1, -windowWidth, windowWidth)
  //   cnv.position(position_text, 100) //random(windowHeight/2-100,windowHeight/2+100))
  // }

  if (frameCount == 50) {
    cnv.html(cnv.html() + '<br>We need your help <br> to decode the enemy message<br>');
  }

  if (frameCount == 150) {
    cnv.html(cnv.html() + '<br>Our machine will help you find <br>what you did wrong<br>');
  }
  if (frameCount == 250) {
    cnv.html(cnv.html() + '<br>Be carefull, <br>you got only seven attempts');

  }
  if (frameCount == 320) {
    cnv.html('');

  }
  if (frameCount == 350) {
    cnv.html('Set the numbers you want to try.<br><br>When you are ready press ENTER.<br>Repetition are not allowed!');
    gui.show();
  }

  if (frameCount == 550) {
    cnv.style('font-size', '190%')
    cnv.style('font-family', 'digit')
    cnv.html('X <br>means a wrong number<br><br>* <br>means a right number in a wrong position<br><br>°<br> means a right number in a right position<br><br>The order is random');
  }

  for (var i = 0; i < tentativi.length; i++) {
    tentativi[i].display();
  }

  for (var i = 0; i < nemici.length; i++) {
    nemici[i].display();
  }

  tentativi[0].change();


}



function battle() {
  defeat = [false, false, false, false, false];
  var i = 0;

  if (params.n1 != n1 || params.n2 != n2 || params.n3 != n3 || params.n4 != n4) {

    defeat[i] = true;
    if (defeat[i] == true) {
      tentativi.splice(0, 1);
    }
    i++;



  }





  if (params.n1 == n1 && params.n2 == n2 && params.n3 == n3 && params.n4 == n4) {
    defeat[i] = false;
    if (defeat[i] == false) {
      print('won')
      tentativi[i].won();
      nemici[i].won_show();
      window.open('index2.html?code=' + n1 + n2 + n3 + n4 + '&nome=' + name + '&win=' + true, '_self')
    }
  }






  if (defeat[i] == true) {

  } else if (defeat[i] == false) {

  }

}

function animation() {
  var i = 0;
  points = ['X', 'X', 'X', 'X'];
  tentativi[i].points();
  tentativi[i].animation_won();


  // if (tentativi[i].animation_won()===true) {
  //   tentativi[i].allies.style('left', -windowWidth - positioning - positioning / 100 * 60 + 'px')
  // }

  i++;
}

function error() {
  cnv.html("You can't repeat numbers")
}

function error_hide() {
  cnv.html('X <br>means a wrong number<br><br>* <br>means a right number in a wrong position<br><br>°<br> means a right number in a right position<br><br>The order is random');

}


function keyPressed() {
  if (keyCode === ENTER) {
    if (params.n1 == params.n2 || params.n1 == params.n3 || params.n1 == params.n4 || params.n2 == params.n1 || params.n2 == params.n3 || params.n2 == params.n4 || params.n3 == params.n1 || params.n3 == params.n2 || params.n3 == params.n4 || params.n4 == params.n1 || params.n4 == params.n2 || params.n4 == params.n3) {
      error();
      setTimeout(error_hide, 2000)
    } else {
      animation();
      battle();
      q++
      if (q == 7) {
        window.open('index2.html?code=' + n1 + n2 + n3 + n4 + '&nome=' + name + '&win=' + false, '_self')
      }
    }


  }
}









  function CreateAllies() {

    this.enemies = function() {
      this.allies = createDiv(n1 + ' ' + n2 + ' ' + n3 + ' ' + n4)
      this.allies.style('z-index', '3')
      this.allies.style('background', 'black')
      this.x = windowWidth - positioning - positioning / 100 * 60;
      this.y = 200;
      this.won_show = function() {
        this.allies.style('background-color', 'green')
      }
    }

    this.allies = function() {

      this.allies = createDiv(params.n1 + ' ' + params.n2 + ' ' + params.n3 + ' ' + params.n4)
      this.allies.style('z-index', '4')
      this.x = positioning - positioning / 100 * 60;
      this.y = 200;




    }

    this.coordinate = function(ypos) {
      this.y = ypos;

    }

    this.points = function() {
      if (params.n1 == n1) {
        points.splice(0, 1, "°")
        print(points);
      }
      if (params.n2 == n2) {
        points.splice(1, 1, "°")
        print(points);
      }
      if (params.n3 == n3) {
        points.splice(2, 1, "°")
        print(points);
      }
      if (params.n4 == n4) {
        points.splice(3, 1, "°")
        print(points);
      }
      if (params.n1 == n2 || params.n1 == n3 || params.n1 == n4) {
        points.splice(0, 1, "*")
        print(points);
      }
      if (params.n2 == n1 || params.n2 == n3 || params.n2 == n4) {
        points.splice(1, 1, "*")
        print(points);
      }
      if (params.n3 == n2 || params.n3 == n1 || params.n3 == n4) {
        points.splice(2, 1, "*")
        print(points);
      }
      if (params.n4 == n2 || params.n4 == n3 || params.n4 == n1) {
        points.splice(3, 1, "*")
        print(points);
      }

      points.sort();



    }


    this.animation_won = function() {



      //print(points);

      this.points = createDiv(points[0] + ' ' + points[1] + ' ' + points[2] + ' ' + points[3]);
      this.points.html(params.n1 + ' ' + params.n2 + ' ' + params.n3 + ' ' + params.n4)
      this.allies.html(points[0] + ' ' + points[1] + ' ' + points[2] + ' ' + points[3]);
      this.points.position(this.x, this.y)
      this.points.parent(mainpar)
      this.points.class('punteggio')
      this.points.style('z-index', '5')

      this.allies.style('left', windowWidth - positioning - positioning / 100 * 60 + 'px');
      this.won = function() {
        this.points.style('background', 'green')
      }

      //points.splice(0)


    }







    this.display = function() {
      this.allies.parent(mainpar)
      this.allies.class('elementi')
      this.allies.position(this.x, this.y)


    }





    this.change = function() {
      // this.allies.style('outline-width', params.stroke + 'px')
      // this.allies.style('outline-color', params.stroke_color)
      // this.allies.style('', '')
      // this.allies.style('', '')
      this.allies.html(params.n1 + ' ' + params.n2 + ' ' + params.n3 + ' ' + params.n4)
    }
  }




  function windowResized() {
  	resizeCanvas(windowWidth, windowHeight);
  }
