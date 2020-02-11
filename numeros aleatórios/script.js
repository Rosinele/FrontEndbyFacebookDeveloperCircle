
var canvas = document.getElementById("meu-canvas");
var papel = canvas.getContext("2d");

function numeroAleatorio(x, y){
    return Math.floor(Math.random()*(y-x)+1) + x;
}

var z = 10;

for(var i = 0; i < z; i++){
    console.log(numeroAleatorio(100, 200))
}