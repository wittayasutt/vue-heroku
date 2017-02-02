var express = require('express')
var path = require('path')

app = express()
app.use(express.static(__dirname))

var port = process.env.PORT || 8080
app.listen(port)

console.log('server started '+ port)