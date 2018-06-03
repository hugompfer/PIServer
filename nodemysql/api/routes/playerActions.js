const express = require('express');
const router= express.Router();
const mysql = require('mysql');
const db = require('../db/dbConnector');


router.post('/', (req, res) => {
    console.log('insert into AçaoJogador(açao,tempoAtual,idSessao) values("'+
    req.body.action+'",'+req.body.timestamp+','+req.body.sectionID+')');
    let sql='insert into AçaoJogador(açao,tempoAtual,idSessao) values("'+
    req.body.action+'","'+req.body.timestamp+'",'+req.body.sectionID+')';
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        res.json({success: true, message: result["insertId"]});
    });
});


router.get('/:id', (req, res) => {
    let sql=`SELECT * FROM AçaoJogador where idSessao=${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        res.json({success: true, message: result});
    });
});

module.exports=router;