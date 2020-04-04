const express = require('express');
const app = express();
const fs = require('fs');

app.set('view engine', 'pug');
app.use(express.json())

const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/TP_Web", {useNewUrlParser : true});
const db = mongoose.connection;
const citySchema = new mongoose.Schema({
    name : String
})
const port = 3000;

const city = mongoose.model("cities", citySchema);

db.on("error", console.error.bind(console, "Connection error : "));
db.once("open", function(){
});

app.get('/', function (req, res) {

    res.render('addCity');
    
});

app.get('/:file', function (req, res) {

    city.find(function (err, cities){
        if (err){
            res.status(500).send("Internal error");
            return console.log(err); 
        }
        console.log(cities);
        res.render('listCities', {list : cities});
        return;
    });
});

app.post('/city', function (req, res) {

    if (req.body.name != undefined)
    {
        var find = false;
        city.where('name', req.body.name).exec(function (err, cities){

            if (err){
                res.status(500).send("Internal error");
                return console.log(err); 
            }  

            if (cities.length >= 1){
                find = true;
            }

            if (find == true){
                res.status(500).send("City already exist");
                return;
            } 

            //Add city
            const new_city = new city({name : req.body.name});
            new_city.save(function(err){
                if (err) {
                    res.status(500).send("Internal error");
                    return console.log(err);
                } 
                city.find(function (err, cities){
                    if (err) {
                        res.status(500).send("Internal error");
                        return console.log(err);
                    } 
                    res.status(200).send(cities);
                    return;
                });
            })
        });

    }else{

        res.status(500).send("Invalid parameter");
        return;
    }
    return;
});

app.put('/city/:id', function (req, res) {

    console.log(req.body.name);
    if (req.body.name != undefined)
    {
        var find = true;
        city.where('name', req.body.name).exec(function (err, cities){

            if (err) {
                res.status(500).send("Internal error");
                return console.log(err);
            } 

            if (cities.length == 0){
                find = false;
            }

            //City not found
            if (find == true) {
                res.status(500).send("City already exist");
                return;
            }

            city.findById(req.params.id, function(err, elt){
                if (err) {
                    res.status(500).send("Internal error");
                    return console.log(err);
                } 
                elt.name = req.body.name
                elt.save(function (err){
                    if (err) {
                        res.status(500).send("Internal error");
                        return console.log(err);
                    } 
                    city.find(function (err, cities){
                        if (err) {
                            res.status(500).send("Internal error");
                            return console.log(err);
                        } 
                        res.status(200).send(cities);
                        return;
                    });
                });
            })
        });

    }else{

        res.status(500).send("Invalid parameter");
        return;
    }

});

app.delete('/city/:id', function (req, res) {

    city.remove({ _id: req.params.id }, function(err) {
        if (!err) {
            city.find(function (err, cities){
                if (err) {
                    res.status(500).send("Internal error");
                    return console.log(err);
                } 
                res.status(200).send(cities);
                return;
            });
        }
        else {
            res.status(500).send("City not found");
            return;
        }
    });

});

app.listen(port, () => console.log(`Example app listening on port ${port}`))


