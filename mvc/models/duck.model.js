const mongoose = require('mongoose')

//Schema
const duckSchema = new mongoose.Schema({
  name: String,
  age: Number,
  color: String,
  street: {
    city: String,
    address: String,
    portal: Number,
  },
  friends: [String]
})

const Duck = mongoose.model('Duck', duckSchema)

module.exports = Duck