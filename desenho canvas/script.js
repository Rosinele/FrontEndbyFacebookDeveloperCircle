var canvas = document.getElementById("meucanvas");
var papel = canvas.getContext("2d");

var teclas = {
    Up: 38,
    Right: 39,
    Down: 40,
    Left: 37
}
var x = 50;
var y = 50;
var movimento = 20;

document.addEventListener("keydown", desenhaLinha);

function desenhaLinha(event){
    switch(event.keyCode){
        case teclas.Down:
            desenha("blue", x, y, x, y + movimento)
            y = y + movimento;
        break;
        case teclas.Up:
            desenha("red", x, y, x, y - movimento)
            y = y - movimento;
        break;
        case teclas.Right:
            desenha("green", x, y, x + movimento, y)
            x = x + movimento;
        break;
        case teclas.Left:
            desenha("yellow", x, y, x - movimento, y)
            x = x - movimento;
        break;
    }
}


//desenha("blue", x+150, y, 200, 200)

function desenha(cor, xInicial, yInicial, xFinal, yFinal){
    papel.beginPath(); //começar a fazer o desenho
    papel.strokeStyle = cor; //cor da linha 
    papel.lineWidth = 3; //espessura da linha
    papel.moveTo(xInicial, yInicial); //onde começa o desenho
    papel.lineTo(xFinal, yFinal); //ponto final da linha
    papel.stroke(); //definição do desenho
    papel.closePath(); //parar o desenho
}