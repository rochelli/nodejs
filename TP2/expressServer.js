const express = require('express');
const app = express();
const fs = require('fs');
var path = require('path');
const pug = require("pug")

app.set('view engine', 'pug');

const port = 3000;
console.log(__dirname)

var file_name = process.argv[2];
if (!file_name){
	console.error('Mising argument! Example: node server.js FILE_NAME');
	process.exit(1);
}

app.get('/', function (req, res) {

    fs.readFile(file_name, 'utf-8', (err, data) => {

        if(err){
            console.error(err)
            return
        }
        
        var row = data.split('\n');
        var content = {};
        var user = []
        row.forEach(function (elt){
            var res = {};
            var cells = elt.split(";");
            res.users = cells[0];
            res.location = cells[1];
            user.push(res);
        });

        content.users = user;
        console.log(content)
        res.render('template', {list : content});

    })
    
});

app.listen(port, () => console.log(`Example app listening on port ${port}`))


