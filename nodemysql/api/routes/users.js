const express = require('express');
const router= express.Router();
const mysql = require('mysql');
const db = require('../db/dbConnector');
  
router.get('/', (req, res) => {
    let sql='SELECT * FROM Utilizador';
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
});

module.exports=router;