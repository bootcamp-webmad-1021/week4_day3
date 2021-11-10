////Conexión a la base de datos
const mongoose = require('mongoose')

const databaseName = 'Ducks-1021'
const connectionString = `mongodb://localhost/${databaseName}`

mongoose
  .connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(connectionInfo => console.log(`Connected to Mongo! Database name: "${connectionInfo.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err))
