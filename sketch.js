var matheus,matheusImg;
var bordas;

function preload(){
  //pré carrega imagens, animacoes, musicas etc

  matheusImg = loadAnimation("trex3.png","trex4.png");
}

function setup(){
  //funcao de configuração
  createCanvas(600,200);

  matheus = createSprite(50,100,20,20);
  matheus.addAnimation("correndo",matheusImg);
  matheus.scale = 0.5;

  bordas = createEdgeSprites();
}

function draw(){
  background('white');

  if(keyDown("space")){
    matheus.velocityY = -10;
  }

  matheus.velocityY = matheus.velocityY + 1;

  matheus.collide(bordas);


  drawSprites();
}


