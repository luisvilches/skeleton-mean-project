const mongoose = require('mongoose')
let Schema = mongoose.Schema;

let Model = new Schema({
	name: String,
	date: Date
})

module.exports = mongoose.model('Task', Model)
