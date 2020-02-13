var expressjs = require("express");

var aplicacao = expressjs();

aplicacao.get("/", hello);

function hello(req, res){
    res.send("Olá, tudo bem?")
}
aplicacao.listen(8989);
console.log("Aplicação em execução...")