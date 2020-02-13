class Figura{
    constructor(nome, pais, posicao, urlImagem){
        this.nome = nome;
        this.pais = pais;
        this.posicao = posicao;
    }

    falar(){
        alert("Meu nome é: " + this.nome)
    }
}