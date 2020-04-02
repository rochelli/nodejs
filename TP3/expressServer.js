const express = require('express');
const app = express();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const port = 3000;

app.use(express.json())

app.get('/:file', function (req, res) {

    var file_name = "./public/"+req.params.file+".json";
    fs.readFile(file_name, 'utf-8', (err, data) => {

        if(err){
            res.status(404).send("Error file not found");
            return
        }
        res.send(data);
    })
});

app.post('/city', function (req, res) {

    var file_name = "public/cities.json";
    fs.readFile(file_name, 'utf-8', (err, data) => {

        if (req.body.name != undefined)
        {
            var content = data;
            //Create File
            if(err){

                content = {};
                content.cities = [];
                content = JSON.stringify(content);
                fs.writeFile(__dirname+'/public/cities.json', content, function(erreur) {
                    if (erreur) {
                        console.log(erreur);
                        res.status(500).send("Internal error");
                        return;
                    }
                })
            }

            //City already exist
            content = JSON.parse(content);
            var find = false;
            var cities = content["cities"];
            cities.forEach(function (elt){
                if (elt.name == req.body.name){
                    res.status(500).send("City already exist");
                    find = true;
                    return;
                }
            });

            if (find == true) return;

            //Add city
            var json = {};
            req.body.id = uuidv4();
            cities.push(req.body);
            json.cities = cities;
            json = JSON.stringify(json);
            fs.writeFile(__dirname+'/public/cities.json', json, function(erreur) {
                if (erreur) {
                    console.log(erreur);
                    res.status(500).send("Internal error");
                    return;
                }
                res.send(json);
                return;
            })

        }else{

            res.status(500).send("Invalid parameter");
            return;
        }

        return;
    })
});

app.put('/city/:id', function (req, res) {
    
    var file_name = "public/cities.json";
    fs.readFile(file_name, 'utf-8', (err, data) => {

        if (req.body.name != undefined)
        {
            if(err){

                console.log(erreur);
                res.status(500).send("File not found");
                return;
            }

            //City already exist
            var content = JSON.parse(data);
            var find = false;
            var cities = content["cities"];
            cities.forEach(function (elt){

                if (elt.name == req.body.name)
                {
                    find = false;
                    return;

                }else {

                    if (elt.id == req.body.id){

                        elt.name = req.body.name;
                        find = true;
                    }
                }
                
            });

            if (find == false){
                
                res.status(500).send("City not found or already exist");
                return;

            }else {

                var json = {};
                json.cities = cities;
                json = JSON.stringify(json);
                fs.writeFile(__dirname+'/public/cities.json', json, function(erreur) {
                    if (erreur) {
                        console.log(erreur);
                        res.status(500).send("Internal error");
                        return;
                    }
                })
                res.status(200).send(json);
                return
            };


        }else{

            res.status(500).send("Invalid parameter");
            return;
        }
    })
});

app.delete('/city/:id', function (req, res) {

    const file_name = 'public/cities.json';
    fs.readFile(file_name,'utf8',(err,data)=>{

        if(err){

            console.log(erreur);
            res.status(500).send("File not found");
            return;
        }

        //search id on file
        var city_id=req.params.id;
        const cities = JSON.parse(data);

        var find = false;
        cities.cities.forEach(function (item, index, object){
            if(item.id == city_id){
                //existe
                find = true;
                //remove from file
                delete cities.cities[index];
                return;
            }
        })

        if(find){
            //eliminate all the null values from the data
            cities.cities = cities.cities.filter(function(x) { return x !== null }); 
            fs.writeFile(file_name, JSON.stringify(cities), function (err) {
                if (err) {
                    console.log(erreur);
                    res.status(500).send("Internal error");
                    return;
                }
                res.status(200).send(cities);
                return;
            });  

        }else{
            res.status(500).send("City not found");
            return;
        }

        return
    });

});

app.listen(port, () => console.log(`Example app listening on port ${port}`))


