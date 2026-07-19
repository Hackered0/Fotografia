// Controller responsável por receber a requisição do quiz e acionar o model pra salvar no banco
var quizModel = require("../models/quizModel");
// Pega os dados do corpo da requisição e manda pro model salvar, tratando sucesso e erro
function salvar(req,res){

    var acertos = req.body.acertos;
    var idUsuario = req.body.idUsuario;

    console.log(acertos);
    console.log(idUsuario);

    quizModel.salvar(acertos,idUsuario)
    .then(function(resultado){
        res.json(resultado);
    })
    .catch(function(erro){
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    });

}

module.exports = {
    salvar
}

