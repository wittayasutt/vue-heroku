var express = require('express')
var path = require('path')

app = express()
app.get('/hello', (req, res) => res.send({ hi: 'there' }));

app.use(express.static('dist'));
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'dist/index.html'));
});

console.log('server started '+ port)