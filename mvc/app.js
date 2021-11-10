const express = require('express')
const path = require('path')

//Requerimos la configuración de conexión
require("./config/db.config")

//Requiero el modelo
const Duck = require("./models/duck.model")

const app = express()

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

//ENDPOINTS

app.get("/", (req, res) => {
  Duck.find()
    .then(ducksArray => res.render("index", { ducks: ducksArray }))
    .catch(err => console.log(err))
})


app.listen(3000, () => console.log('Server running on port 3000'))