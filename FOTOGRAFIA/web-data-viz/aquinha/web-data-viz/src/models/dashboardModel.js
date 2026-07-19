var database = require("../database/config");


function totalQuiz() {

    var instrucaoSql = `
        SELECT COUNT(idResultado) AS total
        FROM resultado_quiz;
    `;

    return database.executar(instrucaoSql);
}


function mediaAcertos() {

    var instrucaoSql = `
        SELECT IFNULL(AVG(acertos), 0) AS media
        FROM resultado_quiz;
    `;

    return database.executar(instrucaoSql);
}


function usuarios() {

    var instrucaoSql = `
        SELECT COUNT(idUsuario) AS total
        FROM usuario;
    `;

    return database.executar(instrucaoSql);
}


function melhorPontuacao() {

    var instrucaoSql = `
        SELECT IFNULL(MAX(acertos), 0) AS melhor
        FROM resultado_quiz;
    `;

    return database.executar(instrucaoSql);
}


function graficoAcertos() {

    var instrucaoSql = `
        SELECT
            usuario.nome,
            resultado_quiz.acertos
        FROM resultado_quiz
        JOIN usuario
            ON resultado_quiz.fkUsuario = usuario.idUsuario
        ORDER BY resultado_quiz.acertos DESC;
    `;

    return database.executar(instrucaoSql);
}


function evolucaoQuiz() {

    var instrucaoSql = `
        SELECT
            DATE(dataResultado) AS data,
            IFNULL(AVG(acertos), 0) AS media
        FROM resultado_quiz
        GROUP BY DATE(dataResultado)
        ORDER BY data;
    `;

    return database.executar(instrucaoSql);
}

module.exports = {

    totalQuiz,
    mediaAcertos,
    usuarios,
    melhorPontuacao,
    graficoAcertos,
    evolucaoQuiz

};