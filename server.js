var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
 
 
// default route
app.get('/', function (req, res) {
    return res.send({ error: true, message: 'Oi' })
});
// connection configurations
var dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'banco'
});
//Base Dados Mysql
//-- Table structure for num_telefones
//  CREATE TABLE IF NOT EXISTS num_telefones (
//    id int(11) NOT NULL,
//    numero varchar(200) NOT NULL,
//    precomensal varchar(200) NOT NULL,
//    instalacao   NOT NUll,
//    moeda     varchar(04)
//    ) ENGINE=InnoDB DEFAULT CHARSET=latin1;
//  ALTER TABLE num_telefones ADD PRIMARY KEY (id);
//  ALTER TABLE num_telefones MODIFY id int(11) NOT NULL AUTO_INCREMENT;
// 
//  "id": 1,
//  "value": "+55 84 99610-2212",
//  "monthyPrice": "0.03",
//  "setupPrice": "3.40",
//  "currency": "BRL"
//
// connect to database
dbConn.connect(); 
// Retrieve all num_telefones 
app.get('/num_telefones', function (req, res) {
    dbConn.query('SELECT * FROM num_telefones', function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'num_telefones list.' });
    });
});
// Retrieve 
app.get('/read-num_telefones/:id', function (req, res) {
 
    let user_id = req.params.id;
 
    if (!user_id) {
        return res.status(400).send({ error: true, message: 'Please provide user_id' });
    }
 
    dbConn.query('SELECT * FROM num_telefones where id=?', user_id, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results[0], message: 'num_telefones list.' });
    });
 
});
// Add   
app.post('/add-num_telefones', function (req, res) {
 
    let user = req.body.user;
 
    if (!user) {
        return res.status(400).send({ error:true, message: 'Please provide user' });
    }
 
    dbConn.query("INSERT INTO num_telefones SET ? ", { user: user }, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'Novo usuario criado com sucesso' });
    });
});
//  Update  
app.put('/update-num_telefones', function (req, res) {
 
    let user_id = req.body.user_id;
    let user = req.body.user;
 
    if (!user_id || !user) {
        return res.status(400).send({ error: user, message: 'Por Favor o user_id' });
    }
 
    dbConn.query("UPDATE num_telefones SET user = ? WHERE id = ?", [user, user_id], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: ' Alteração realizada com sucesso' });
    });
});
//  Delete 
app.delete('/delete-num_telefones', function (req, res) {
 
    let user_id = req.body.user_id;
 
    if (!user_id) {
        return res.status(400).send({ error: true, message: 'Por Favor o id' });
    }
    dbConn.query('DELETE FROM num_telefones WHERE id = ?', [user_id], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'Alteração com Sucesso' });
    });
}); 
// set port
app.listen(3000, function () {
    console.log('Rodando Node app na porta 3000');
});
module.exports = app;