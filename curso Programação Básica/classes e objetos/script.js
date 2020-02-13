
var bruno = new Figura("Bruno Pacheco", "Brazil", "Lateral esquerdo","./img/bruno.jpg");
var martha = new Figura("Marthã", "Brazil", "Volante","./img/martha.jpg");
var fernando = new Figura("Fernando Prass", "Brazil", "Goleiro","./img/prass.jpeg");
var rogerio = new Figura("Rogério", "Brazil", "Atacante","./img/rogerio.jpg");
var rafael = new Figura("Rafael Sóbis", "Brazil", "Atacante","./img/sobis.jpg");

var colecaoFiguras = [];

colecaoFiguras.push(bruno);
colecaoFiguras.push(martha);
colecaoFiguras.push(fernando);
colecaoFiguras.push(rogerio);
colecaoFiguras.push(rafael);

for (var i =0; i<colecaoFiguras.length; i++){
    colecaoFiguras[i].exibir();
}
