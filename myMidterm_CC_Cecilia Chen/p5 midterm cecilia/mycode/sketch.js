var starx = [-600,-450,-300,-333,-240,-214,-100,-33,1,50,37,155,233,260,279,340,346,389,411,450,555,600];
let size,size1;
let leaf1, leaf2,leaf3,leaf4,leaf5,leaf6,leaf7,leaf8,leaf9;
let waveto;
let waveback;
let pox_x;
let pos_y;


//butterfly
let q=150;
let w=200;
let e=130;
let r=50;
let qwaveto;
let qwaveback;
let wwaveto;
let wwaveback;
let rwaveto;
let rwaveback;
let ewaveback;
let ewaveto;

var angle = 0;

let z=600;


function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);

  leaf1 = new Leaf(0,50,45,0);
  leaf2 = new Leaf(-150,100,90);
  leaf3 = new Leaf(-100,560,120);
  leaf4 = new Leaf(100,-50,200);
  leaf5 = new Leaf(30,-165,30);
  leaf6 = new Leaf(-560,500,100);
  leaf7 = new Leaf(100,870,80);
  leaf8 = new Leaf(500,300,80);
  leaf9 = new Leaf(100,350,-35);

    
  
}

function draw() {
  //if (mouseX<300){
  //background(17,62,102);}
  //else {
  background(17-mouseX/8,62-mouseX/8,102-mouseX/8);//move the mouse to change the color of the sky
 size = (random(1,3));
  size1 = (random(2,4.5));
    for (var i = 0; i < 30; i++) {
      //for (var u = 0; u < 50; u++) {
    noStroke();
    fill(255);
    ellipse(starx[i+1],starx[i+12],size,size);
    ellipse(starx[i],starx[i+5],size,size);
    //ellipse(starx[i+1],starx[i+2],size,size);
      ellipse(starx[i+3],starx[i],size,size);
      //ellipse(starx[i+4],starx[i],size,size);
     // ellipse(starx[i+6],starx[i],size,size);
      ellipse(starx[i+8],starx[i],size,size);
    ellipse(starx[i+12],starx[i],size,size);
     // }
    }
  for (var u = 0; u < 50; u++) {
    noStroke();
    fill(255);
    ellipse(starx[u],starx[u+10],size1,size1);
    ellipse(starx[u+1],starx[u+2],size1,size1);
    ellipse(starx[u+10],starx[i=u],size1,size1);
  }
  
  moon(280,180);
  moon(280,180);
  
  //moon(280,180);
  tree(200,500,-10);
  tree(400,400,0);
  tree(-400,-100,190);
  tree(-450,300,235);
  tree(200,-150,90);
  butterfly(mouseX-130,mouseY-75,0.8);
  

     z=z-1;
    butterfly(z,200,0.5);
  
  
 
  leaf1.show();
  leaf1.move();
  leaf2.show();
  leaf3.show();
  leaf4.show();
  leaf5.show();
  leaf6.show();
  leaf7.show();
  leaf8.show();
  leaf9.show();
 
  //butterfly fly in circle
      var x = 250 + 200 * cos(angle);//250 is the center x and 200 is the radius
  var y = 100 + 250 * sin(angle);//100 is the center y and 200 is the radius
  noStroke();
    butterfly(x,y,1);
  angle = angle + 0.2;
  //print(x);
  
  

  /*stroke(0,82,110);
  strokeWeight(2);
  fill(0,82,110);
  bezier(80,22,78,43,122,125,48,125);
    bezier(x,x-58,x-2,x-37,x+42,x+45,x-32,x+45);
  bezier(80,22,15,77,27,110,48,125);
    bezier(x,x-58,x-65,x-3,x-53,x+30,x-32,x+45);
  bezier(80,22,58,57,50,105,47,171);
         80,23,64,56,52,115,45,158
    bezier(x,x-58,x-16,x-24,x-28,x+35,x-35,+78);
  */
}


function butterfly(pos_x, pos_y,size){
//Butterfly
  push();
    translate(pos_x, pos_y);
  
    fill(77, 57, 102);
    triangle(150*size, 100*size, r*size, 0*size, 100*size, 75*size);
    fill(60, 48, 90);
    triangle(w*size, 100*size, e*size, 0*size, 100*size, 75*size);
  
  
  //if (q<=130){
  //    qwaveto=true;
  //    qwaveback=false;
  //  }
   // if (qwaveto==true){
   //   q=q+1
   // }
   // if (q>160){
   //   qwaveto=false;
    //  qwaveback=true;
   // }   
   // if (qwaveback==true){
    //  q=q-1
//}
  
    if (w<=150){
      wwaveto=true;
      wwaveback=false;
    }
    if (wwaveto==true){
      w=w+1
    }
    if (w>=200){
      wwaveto=false;
      wwaveback=true;
    }   
    if (wwaveback==true){
      w=w-1
}
  
 
  if (e<=100){
      ewaveto=true;
      ewaveback=false;
    }
    if (ewaveto==true){
      e=e+2
    }
    if (e>150){
      ewaveto=false;
      ewaveback=true;
    }   
    if (ewaveback==true){
      e=e-2
}

  
    if (r<=50){
      rwaveto=true;
      rwaveback=false;
    }
    if (rwaveto==true){
      r=r+1
    }
    if (r>=100){
      rwaveto=false;
      rwaveback=true;
    }   
    if (rwaveback==true){
      r=r-1
}
  pop();
}

function tree(pos_x,pos_y,pos_angle)
{
  push();
  rotate(pos_angle);
  stroke(99,157,184,160);
  strokeWeight(2);
  fill(151,195,230,160);
  line(pos_x+67,pos_y+25,pos_x+70,pos_y-23);
  line(pos_x+67,pos_y+25,pos_x+64,height+200);
  bezier(pos_x+67,pos_y+40,pos_x+20,pos_y-40,pos_x+120,pos_y-50,pos_x+66,pos_y+40);
  
for(pos_y=pos_y;pos_y<height;pos_y=pos_y+40){
    lightleaf(pos_x,pos_y);
  }
  pop();
  
  
}

function lightleaf(pos_x,pos_y){
  stroke(99,157,184,160);
  strokeWeight(2);
  fill(151,195,230,160);
    push();
    translate(pos_x, pos_y);
    line(65,54,139,25);
    line(65,54,5,10);
    bezier(65,54,1,-45,-37,33,65,54);
  bezier(65,54,185,60,146,-25,65,54);
    pop();
}


//pox_x=200
//pos_y=100
function moon(pos_x,pos_y){
  noStroke();
  fill(255,150);
  ellipse(pos_x+100,pos_y,100,100);
  //fill(255,255,100,4);
  //noStroke();
  //rect(pos_x+45,pos_y-50,110/2,110)
  //noStroke();
  fill(255,255,100,6);
  for(i = 0; i < 50; i++){//moon glow?
    ellipse(pos_x+100,pos_y, i*3);
  }
  //fill(255,255,100,4);
  //noStroke();
  //ellipse(pos_x+100,pos_y,100/2,100);
  
}





class Leaf{
  constructor (x,y,a,z){
    this.x = x;
    this.y = y;
    this.a=a;
    this.z=z;
  }
  move(){
    translate(0,0);
    rotate(this.z);
    if (this.z<=0){
      waveto=true;
      waveback=false;
    }
    if (waveto==true){
      this.z=this.z+0.05
    }
    if (this.z>=5){
      waveto=false;
      waveback=true;
    }   
    if (waveback==true){
      this.z=this.z-0.05
      
      
  }
   // print(this.z);
  }
  
  show(){
    translate(100,100);
    rotate(this.a);
   stroke(0,26,54);
   strokeWeight(2.5);
   fill(0,37,72,240);
   bezier(this.x,this.y-58,this.x-2,this.y-37,this.x+42,this.y+45,this.x-32,this.y+45);
   bezier(this.x,this.y-58,this.x-65,this.y-3,this.x-53,this.y+30,this.x-32,this.y+45);
   fill(0,37,72,240);
   strokeWeight(2);
   bezier(this.x,this.y-58,this.x-22,this.y-23,this.x-30,this.y+25,this.x-33,this.y+89);
  }

}