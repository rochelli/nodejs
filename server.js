const http = require("http")
const pug = require("pug")
const fs = require('fs');

var file_name = process.argv[2];
if (!file_name){
	console.error('Mising argument! Example: node server.js FILE_NAME');
	process.exit(1);
}

const compiledFunction = pug.compileFile("template.pug");
const port = 3000;

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
    console.log(content);
	const server = http.createServer((req, res) => {
        const generatedTemplate = compiledFunction ({
            list : content
        });
    
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.end(generatedTemplate);
    })
    
    server.listen(port, () => {
        console.log(`Server running at port ${port}`);
    })
})

