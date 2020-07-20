const express = require("express");
const server = express()
const pug = require('pug');

var furkan = {
    name: "furkan",
    alter: 15,
    geschlecht: "maskulin",
    eigenschaften: "unsterblich"
}

var abdu = {
    name: "abdu",
    alter: 26,
    geschlecht: "maskulin",
    eigenschaften: "Pro Progger"
}


var port = process.env.PORT || 3000;

server.listen(port, function(){
    console.log("server ist erreichbar unter dem port: " + port);
});

server.get('/furkan', function(req,res){
    res.render('./namen.pug',{person: furkan});
});


server.get('/abdu', function(req,res){
    res.render('./namen.pug',{person: abdu});
});

server.get('/af', function(req,res){
    var af = {
        name : abdu.name + " " + furkan.name,
        alter : abdu.alter + furkan.alter,
        geschlecht : abdu.geschlecht + furkan.geschlecht,
        eigenschaften : furkan.eigenschaften
    }
    res.send(af);
})