var botao = document.getElementById("botao")

botao.addEventListener("click", executaFizzBuzz);

function executaFizzBuzz(){
    
    var numInteracoes = document.getElementById("numIteracoes").value;
    var resultado = document.getElementById("resultado");

    var numero = 1;
    while(numero <= numInteracoes){
        if(((numero % 5) == 0)&& (numero % 3) == 0){
            document.write("FizzBuzz")

        }else if((numero % 3) == 0){
            document.write("Fizz")

        }else if((numero % 5) == 0){
            console.log("Buzz")

        }else{
            console.log(numero)
        }
        numero++;
    }
}