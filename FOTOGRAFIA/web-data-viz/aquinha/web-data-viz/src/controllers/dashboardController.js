var dashboardModel = require("../models/dashboardModel");


function kpis(req, res) {

    dashboardModel.totalQuiz()
    .then(function (resultadoTotal) {

    dashboardModel.mediaAcertos()
    .then(function (resultadoMedia) {

    dashboardModel.usuarios()
    .then(function (resultadoUsuarios) {

    dashboardModel.melhorPontuacao()
    .then(function (resultadoMelhor) {

        res.json({

            total: resultadoTotal[0].total,

            media: Number(resultadoMedia[0].media).toFixed(1),

            usuarios: resultadoUsuarios[0].total,

            favorito: resultadoMelhor[0].melhor

        });

    })
    .catch(function (erro) {
        console.log(erro);
        res.status(500).json(erro);
    });

    })
    .catch(function (erro) {
        console.log(erro);
        res.status(500).json(erro);
    });

    })
    .catch(function (erro) {
        console.log(erro);
        res.status(500).json(erro);
    });

    })
    .catch(function (erro) {
        console.log(erro);
        res.status(500).json(erro);
    });

}


function estilos(req, res) {

    dashboardModel.graficoAcertos()
        .then(function (resultado) {

            var nomes = [];
            var quantidades = [];

            for (var i = 0; i < resultado.length; i++) {

                nomes.push(resultado[i].nome);
                quantidades.push(resultado[i].acertos);

            }

            res.json({

                estilos: nomes,
                quantidades: quantidades

            });

        })
        .catch(function (erro) {

            console.log(erro);
            res.status(500).json(erro);

        });

}


function evolucao(req, res) {

    dashboardModel.evolucaoQuiz()
        .then(function (resultado) {

            var datas = [];
            var valores = [];

            for (var i = 0; i < resultado.length; i++) {

                datas.push(resultado[i].data);
                valores.push(Number(resultado[i].media).toFixed(1));

            }

            res.json({

                datas: datas,
                valores: valores

            });

        })
        .catch(function (erro) {

            console.log(erro);
            res.status(500).json(erro);

        });

}


module.exports = {

    kpis,
    estilos,
    evolucao

};