const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const cors = require('cors')
const path = require('path')
const routes = require('./routes')

let app = express();
let port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname,'app')))
app.use('/', routes)

mongoose.connect('mongodb://localhost/db', err => {
	if (err) {console.log(err)}
})

app.listen(port, err => {
	if (err) {console.log(err)}

	console.log('servidor corriendo en el puerto ' + port)
})