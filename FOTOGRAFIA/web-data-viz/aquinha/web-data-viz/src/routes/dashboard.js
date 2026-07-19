var express = require("express");

var router = express.Router();

var dashboardController = require("../controllers/dashboardController");


router.get("/kpis", function(req,res){

    dashboardController.kpis(req,res);

});


router.get("/estilos", function(req,res){

    dashboardController.estilos(req,res);

});


router.get("/evolucao", function(req,res){

    dashboardController.evolucao(req,res);

});


module.exports = router;