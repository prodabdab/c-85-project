canvas=document.getElementById("palm");
ctx=canvas.getContext("2d");


var RH=100;
var RW=90;
var RY=10;
var RX=10;


background_img=" racing.jpg "
car1_img=" car1.png ";


function add() {
    RTX= new Image();
    RTX.onload=RTX_load;
    RTX.src=background_img;

    ETX= new Image();
    ETX.onload=ETX_load;
    ETX.src=car1_img;
}


function RTX_load() {
    ctx.drawImage(RTX,0,0,canvas.width,canvas.height);
}
function ETX_load() {
    ctx.drawImage(ETX,RX,RY,RW,RH);
}

window.addEventListener("keydown",my_keydown);

function my_keydown (e) {

    
 keyname=e.keyCode;


 if (keyname == '87') {
     up();
     console.log(keyname);
 }


 if (keyname == '83') {
    down();
    console.log(keyname);
}


if (keyname == '65') {
    left();
    console.log(keyname);
}


if (keyname == '68') {
    right();
    console.log(keyname);
}


}
function up() {
    RY= RY - 10 ;console.log("x="+RX+"y="+RY);
    RTX_load();
    ETX_load();
}
function down() {
    RY= RY + 10 ;console.log("x="+RX+"y="+RY);
    RTX_load();
    ETX_load();
}
function left() {
    RX= RX -10 ;console.log("x="+RX+"y="+RY);
    RTX_load();
    ETX_load();
}


function right() {
    RX= RX + 10 ;console.log("x= "+RX+"y="+RY);
    RTX_load();
    ETX_load();
}
var lol = 'u won'
var car1x=canvas.x=700;
var car1y=canvas.y=800;
function won() {
    canvas.x=car1x;
    canvas.y=car1y;
    document.getElementById("oof").innerHTML.html=lol;
  }