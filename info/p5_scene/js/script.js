// グローバル変数
var posX = [];
var posY = [];
var speedX = [];
var speedY = [];
var diameter = []; //円の直径
var colors = []; //色
var NUM = 100; // 配列の数
var angle = 0;
var n = 0;
var count = 1;
var img;
var n = 0;
var count =1;

//シーンの切り替え
var scene;
//ボタン用の変数
var btnA;
var btnB;
var btnC;

function preload(){
    img = loadImage("img/front01.png");
}

function setup(){
    // size
    var canvas = createCanvas(windowWidth,windowHeight);
    // header#headerの中にcanvasを入れた
    canvas.parent('page-header');
    colorMode(HSB, 360, 100, 100, 100);

//最初のシーン

    //ボタンをクリックしたら
    btnA = select('.btnA').mousePressed(function(){
        scene = 0;
    });
    btnB = select('.btnB').mousePressed(function(){
        scene = 1;
    });
    btnC = select('.btnC').mousePressed(function(){
        scene = 2;
    });

    if(scene == 3){

    }
    else if(scene == 0){
        //1つ目の絵

    } else if(scene == 1){
        //2つ目の絵

    } else if(scene == 2){
        //3つ目の絵

    }
}



function draw(){
    image(img,0,0,1055,1024);


console.log(scene);

    background('#D8CCB7');

    noStroke();



    if(scene == 0){
    //1つ目の円
    scale(0.6);
    push();
    translate(0,-50);
    for (var i = 0; i<5; i++) {
     push();
     translate(0+400, (i+1)*100-16);
     fill('#A61618');
     noStroke();
     beginShape();
     vertex(546, 484);
     vertex(547, 529);
     vertex(924, 168);
     vertex(924, 120);
     endShape(CLOSE);
     pop();
    }
    for (var i = 0; i<5; i++) {
     push();
     translate(0+400, (i+1)*100);
     fill('#E4B823');
     noStroke();
     beginShape();
     vertex(734, 438);
     vertex(1111, 74);
     vertex(1112, 122);
     vertex(735, 483);
     endShape(CLOSE);
     pop();
    }
    for (var i = 0; i<5; i++) {
     push();
     translate(3+400, (i+1)*100);
     fill('#5A4CA2');
     noStroke();
     beginShape();
     vertex(921, 406);
     vertex(1298, 42);
     vertex(1299, 90);
     vertex(922, 451);
     endShape(CLOSE);
     pop();

    }
    pop();
}
else if(scene == 1){
    //drawVertex(startAngle,vertexNum)
    //2つ目の円
    scale(0.7);
    push();
    translate(200,0);
    //rotate(radians(startAngle + (angle/vertexNum)));
    fill('#7A428B');
  noStroke();
  ellipse(926,463,770,770);

   fill('#E45720');
  noStroke();
  ellipse(891.27,501.69,654.89,654.89);

  fill('#244C9E');
  noStroke();
  ellipse(862,476.39,572.53,572.53);

  fill('#48A354');
  noStroke();
  ellipse(904.89,472.36,480.4,480.4);

  fill('#DD3532');
  noStroke();
  ellipse(863.66,499.7,406.91,406.91);

   fill('#E0B115');
  noStroke();
  ellipse(925.5,476.39,344.31,344.31);
  pop();
  //angle += 0.1;
}else if(scene == 2){

    if (n > 250 || n <0) {//250まで来たら折り返し0までカウント
   count = -count;
 }
 n = n + count;
    //3つ目の円
    scale(0.7);
    push();
    translate(200,-50);
    fill('#169597',n);
      noStroke();
      beginShape();
      vertex(749.14, 286);
      vertex(1080.88, 286);
      vertex(1111, 316.84);
      vertex(720, 316.84);
      endShape(CLOSE);

      fill('#D58231',n*3);
      noStroke();
      beginShape();
      vertex(810.79, 229);
      vertex(1024.44, 228);
      vertex(1047.26, 255.84);
      vertex(782, 255.84);
      endShape(CLOSE);

      fill('#B80319',n*5);
      noStroke();
      beginShape();
      vertex(868.54, 168.99);
      vertex(964.44, 168.99);
      vertex(993.94, 199.83);
      vertex(837.04, 199.83);
      endShape(CLOSE);

      fill('#365183',n*7);
      noStroke();
      beginShape();
      vertex(916.47, 120);
      vertex(932.67, 136.84);
      vertex(901.24, 136.84);
      endShape(CLOSE);

      //
      fill('#D58231',n);
      noStroke();
      beginShape();
      vertex(1113, 317);
      vertex(1143.84, 346.14);
      vertex(1143.84, 677.88);
      vertex(1113, 708);
      endShape(CLOSE);

      fill('#B80319',n*3);
      noStroke();
      beginShape();
      vertex(1174, 379);
      vertex(1200.84, 407.79);
      vertex(1201.84, 621.44);
      vertex(1174, 644.26);
      endShape(CLOSE);

      fill('#365183',n*5);
      noStroke();
      beginShape();
      vertex(1230.01, 434.04);
      vertex(1260.85, 465.54);
      vertex(1260.85, 561.44);
      vertex(1230.01, 590.94);
      endShape(CLOSE);

      fill('#169597',n*7);
      noStroke();
      beginShape();
      vertex(1289, 496);
      vertex(1305.84, 510.89);
      vertex(1289, 527.44);
      endShape(CLOSE);

      //
      fill('#B80319',n);
      noStroke();
      beginShape();
      vertex(721, 708);
      vertex(1112, 708);
      vertex(1082.86, 738.84);
      vertex(751.12, 738.84);
      endShape(CLOSE);

      fill('#365183',n*3);
      noStroke();
      beginShape();
      vertex(784.74, 769);
      vertex(1050, 769);
      vertex(1021.21, 795.84);
      vertex(807.56, 796.84);
      endShape(CLOSE);

      fill('#169597',n*5);
      noStroke();
      beginShape();
      vertex(838.06, 825.01);
      vertex(994.96, 825.01);
      vertex(963.46, 855.85);
      vertex(867.56, 855.85);
      endShape(CLOSE);

      fill('#D58231',n*7);
      noStroke();
      beginShape();
      vertex(900, 886);
      vertex(931.44, 886);
      vertex(916.2, 902.84);
      endShape(CLOSE);

      //
       fill('#365183',n);
      noStroke();
      beginShape();
      vertex(719.84, 317);
      vertex(719.84, 708);
      vertex(689, 678.86);
      vertex(689, 347.12);
      endShape(CLOSE);

      fill('#169597',n*3);
      noStroke();
      beginShape();
      vertex(658.84, 380.74);
      vertex(658.84, 646);
      vertex(632, 617.21);
      vertex(632, 403.56);
      endShape(CLOSE);

      fill('#D58231',n*5);
      noStroke();
      beginShape();
      vertex(602.83, 434.06);
      vertex(602.83, 590.96);
      vertex(571.99, 559.46);
      vertex(571.99, 463.56);
      endShape(CLOSE);

      fill('#B80319',n*7);
      noStroke();
      beginShape();
      vertex(541.84, 496);
      vertex(541.84, 527.44);
      vertex(525, 512.54);
      endShape(CLOSE);
pop();

}
    // for(var i=0; i<NUM; i++){
    //     fill(colors[i]);
    //     ellipse(posX[i],posY[i],diameter[i],diameter[i]);
    //     posX[i] += speedX[i];
    //     if (posX[i] > width || posX[i] < 0) {
    //         speedX[i] = -1 * speedX[i];
    //     }
    //     posY[i] += speedY[i];
    //     if (posY[i] > height || posY[i] < 0) {
    //         speedY[i] = -1 * speedY[i];
    //     }
    // }
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);

}
