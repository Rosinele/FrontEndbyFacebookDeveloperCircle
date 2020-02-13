var canvas = document.getElementById("meucanvas");
var papel = canvas.getContext("2d");

var teclas = {
    Up: 38,
    Right: 39,
    Down: 40,
    Left: 37
}

document.addEventListener("mousedown", comecarDesenho);
document.addEventListener("mousemove", desenharMouse);
document.addEventListener("mouseup", pararDesenho);
document.addEventListener("keydown", desenharTeclado);

var x = 100;
var y = 100;

var mousePressionado = false;

function desenhaLinha(cor, xInicial, yInicial, xFinal, yFinal, papel){
    papel.beginPath(); //começar a fazer o desenho
    papel.strokeStyle = cor; //cor da linha 
    papel.lineWidth = 3; //espessura da linha
    papel.moveTo(xInicial, yInicial); //onde começa o desenho
    papel.lineTo(xFinal, yFinal); //ponto final da linha
    papel.stroke(); //definição do desenho
    papel.closePath(); //parar o desenho
}

function comecarDesenho(event){
    console.log(event);
    mousePressionado = true;
    x = event.layerX;
    y = event.layerY;
}

function desenharTeclado(event){
    var cor = "green";
    var velocidadeMovimento  = 10;
    switch (EventSource.keyCode){
        case teclas.Up:
            desenhaLinha(cor, x, y, x, y + velocidadeMovimento, papel);
            y= y - velocidadeMovimento;
        break;
        case teclas.Down:
            desenhaLinha(cor, x, y, x, y + velocidadeMovimento, papel);
            y= y + velocidadeMovimento;
        break;
        case teclas.Left:
            desenhaLinha(cor, x, y, x + velocidadeMovimento, y, papel);
            x = x - velocidadeMovimento;
        break;
        case teclas.Right:
            desenhaLinha(cor, x, y, x, velocidadeMovimento, y, papel);
            x = x + velocidadeMovimento;
        break;
    }
}
function desenharMouse(evClick){
    if(mousePressionado == true){
        var corMouse = "orange";
        desenhaLinha(corMouse, x, y, evClick.clientX, evClick.clientY, papel);
        x = evClick.clientX;
        y = evClick.clientY;
    }
}
function pararDesenho(){
    mousePressionado = false;
}