var gTerra = 9.8;
var gMarte = 3.7;
var gJupiter = 24.8;

var peso = prompt("Digite o peso do objeto na terra")
var planeta = prompt("Qual planeta deseja saber o peso? (Escolha entre marte e jupiter)");
var pesoFinal;


if (planeta == "marte"){
    pesoFinal = (peso / gTerra) * gMarte;
    document.write("O peso deste objeto em Marte é:  " + pesoFinal);

}else if(planeta == "jupiter"){
    pesoFinal = (peso / gTerra) * gJupiter;
    document.write("O peso deste objeto em Jupiter é:  " + pesoFinal);

}else{
    document.write("Não é possível calcular o peso do objeto para este planeta");
}



