const mongoose = require('mongoose')

const duckSchema = new mongoose.Schema({
    name: String,
    age: Number,
    city: String,
    color: String
})

const Duck = mongoose.model('Duck', duckSchema)

module.exports = Duck