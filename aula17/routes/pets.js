var express = require('express');
var router = express.Router();
let PetsController=require('../controllers/PetsController');

/* GET pets listing. */
router.get('/', PetsController.index);

/* Request body*/
router.post('/request-body', function(req, res, next) {
    console.log(req.body)
    let{nome, sobrenome} = req.body;
    let mensagem = ("Recebemos sua solicitação "+nome + ' ' + sobrenome);
    res.send(mensagem);
});

/* Request Params */
router.get('/request-params/:nome', function(req, res, next) {
    let{nome} = req.params;
    res.send("Olá "+nome);
  });

/* Query Params */
router.get('/query-params', function(req, res, next) {
    let{cor, tamanho, preco} = req.query;
    let mensagem = "encontramos x tenis das caracteristicas: cor "+cor+" e tamanho "+tamanho;
    
    res.send(mensagem);
  });


module.exports = router;
