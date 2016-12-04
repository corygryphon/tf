var express = require('express');
var app = express();
var mysql = require("mysql");
var bodyParser = require('body-parser');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: '8889',
    password: 'root',
    database: 'talk_fusion'
});
connection.connect();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/api/createCustomer', urlencodedParser, function (request, response) {
    var name = request.param('name'),
        address = request.param('address'),
        zip = request.param('zip'),
        country = request.param('country'),
        id='';
    connection.query('INSERT INTO Customers SET NAME="'+name+'";');
    connection.query('SELECT ID FROM Customers ORDER BY ID DESC LIMIT 1', function(err, rows){
        if (err) throw err;
        var string=JSON.stringify(rows),
            json =  JSON.parse(string);
        id = json[0].ID;
        connection.query('INSERT INTO Customer_Addresses SET CUSTOMER_ID="'+id+'",STREET_ADDRESS="'+address+'",POSTAL_CODE="'+zip+'",COUNTRY="'+country+'"', function(err){
            if (err) throw err;
            response.writeHead(201);
            response.end();
        });
    });
});

app.get('/api/readCustomer', urlencodedParser, function (request, response) {
    var id = request.param('cid');
    connection.query('SELECT * FROM Customers as C LEFT JOIN Customer_Addresses as CA ON CA.CUSTOMER_ID=C.ID WHERE CA.STREET_ADDRESS IS NOT NULL AND C.ID="'+id+'"', function(err, rows){
        if (err) throw err;
        response.writeHead(200);
        var objs = [];
        objs.push(rows[0]);
        response.write(JSON.stringify(objs));
        response.end();
    });
});

app.get('/api/updateCustomer', urlencodedParser, function (request, response) {
    var name = request.param('name'),
        address = request.param('address'),
        zip = request.param('zip'),
        country = request.param('country'),
        id = request.param('cid');
    connection.query('UPDATE Customers SET name="'+name+'" WHERE ID="'+id+'"', function(err){
        if (err) throw err;
        connection.query('UPDATE Customer_Addresses SET STREET_ADDRESS="'+address+'", POSTAL_CODE="'+zip+'", COUNTRY="'+country+'" WHERE CUSTOMER_ID ="'+id+'"', function(err){
            if (err) throw err;
            response.writeHead(200);
            response.end();
        });
    });
});

app.get('/api/delCustomer', urlencodedParser, function (request, response) {
    var id = request.param('cid');
    connection.query('DELETE FROM Customers WHERE ID="'+id+'"', function(err){
        if (err) throw err;
        connection.query('DELETE FROM Customer_Addresses WHERE CUSTOMER_ID="'+id+'"', function(err){
            if (err) throw err;
            response.writeHead(200);
            response.end();
        });
    });
});

var server = app.listen(8001, function () {
 console.log("API listening at http://localhost:8001");
 });
