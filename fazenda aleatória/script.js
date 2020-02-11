
var canvas = document.getElementById("meu-canvas");
var papel = canvas.getContext("2d");

var fundo = {
    url: "./images/fundo.png"
}

var vaca = {
    url: "./images/vaca.png"
}
var galo = {
    url: "./images/frango.png"
}

fundo.imagem = new Image();
fundo.imagem.src = fundo.url;
vaca.imagem = new Image();
vaca.imagem.src = vaca.url;
galo.imagem = new Image();
galo.imagem.src = galo.url;

fundo.imagem.addEventListener("load", carregaFundo);
vaca.imagem.addEventListener("load", carregaVaca);

function carregaFundo(){
    papel.drawImage(fundo.imagem, 0, 0);
}

function carregaVaca(){
    var numeroVacas = numeroAleatorio(2, 10);
    var animal = numeroAleatorio(0, 2);
    console.log(animal);

    if (animal == 2){
        img = vaca.imagem;
    }else{
        img = galo.imagem;
    }

    for (var i=0; i<numeroVacas; i++){
        var xA = numeroAleatorio(100, 400);
        var yA = numeroAleatorio(100, 400);
        papel.drawImage(img, xA, yA);

        
        console.log(animal);
    }
    
    
}

function numeroAleatorio(x, y){
    return Math.floor(Math.random()*(y-x)+1) + x;
}

var z = 10;

for(var i=0; i<z; i++){
    console.log(numeroAleatorio(100, 200))
}
