const fs = require('fs');
var username = process.argv[2];
if (!username){
	console.error('Mising argument! Example: node script.js FILE_NAME');
	process.exit(1);
}
fs.readFile(username, 'utf-8', (err, data) => {
	if(err){
		console.error(err)
		return
	}
	console.log(data)
})