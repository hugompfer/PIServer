const express = require('express');
const router= express.Router();
const mysql = require('mysql');
const db = require('../db/dbConnector');


router.post('/', (req, res) => {
    console.log('insert into sessao(dataSessao,tempoPassado,idNivel,idSessaoContra,idPersonagem,idUtilizador)values("'+
    req.body.date+'",'+req.body.elapsedTime+','+req.body.level+','+req.body.opponentSession+','+req.body.character+','+req.body.userID+')');
    let sql='insert into sessao(dataSessao,tempoPassado,idNivel,idSessaoContra,idPersonagem,idUtilizador) values("'+
    req.body.date+'",'+req.body.elapsedTime+','+req.body.level+','+req.body.opponentSession+','+req.body.character+','+req.body.userID+')';
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        res.json({success: true, message: result["insertId"]});
    });
});


router.get('/:id', (req, res) => {
    let sql=`SELECT * FROM sessao where idSessao=${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        //res.send(result);
        res.json({success: true, message: result});
    });
});

module.exports=router;