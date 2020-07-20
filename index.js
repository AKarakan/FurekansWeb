//unser server
const express = require("express");
const server = express()
//unsere html template enginge
const pug = require('pug');

//variblen
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

//server hört zu
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


server.get('/', function(req,res){
    console.log(req.rawHeaders[9]);

    if (req.rawHeaders[9].includes('Chrome')){
        res.send("hallo du google schaf")
    }
    else{
        res.send("hallo willkommen auf meiner seite");
    }

})