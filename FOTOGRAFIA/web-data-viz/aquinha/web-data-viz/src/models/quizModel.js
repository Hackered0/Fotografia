// Model responsável por salvar o resultado do quiz (acertos + usuário) na tabela resultado_quiz
var database = require("../database/config");
// Monta e executa o INSERT do resultado do quiz no banco de dados
function salvar(acertos, idUsuario){

    var instrucaoSql = `
        INSERT INTO resultado_quiz
        (acertos, fkUsuario)
        VALUES
        (${acertos}, ${idUsuario});
    `;

    console.log(instrucaoSql);

    return database.executar(instrucaoSql);
}

module.exports = {
    salvar
}