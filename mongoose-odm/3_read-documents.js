// DB connection
require('./0_ddbb-connection')

// Model
const Duck = require('./models/duck.model')


// Duck.find()
//     .then(allDucksFromDB => console.log(`Hay un total de ${allDucksFromDB.length} patos`))
//     .catch(err => console.log('Se produjo un error:', err))

// // .find()
// // Sin argumento
// // retorna un array de objetos con todos los registros 


//////////////////////////

// Duck
//     .find({ age: { $lt: 13 } })
//     .then(allMatchingDucks => {
//         allMatchingDucks.forEach(eachDuck => console.log(`El pato ${eachDuck.name} tiene ${eachDuck.age} años`))
//     })
//     .catch(err => console.log('Se produjo un error:', err))

// // .find()
// // Puede recibir un primer argumento (query), retorna un array de objetos con todos los registros que hagan match

//////////////////////////////////

// Duck
//     .findById('618b8a5653a8e427917c9887')
//     .then(theDuck => console.log(theDuck))
//     .catch(err => console.log('Se produjo un error:', err))

// // .findById()
// // Recibe un string con un ID, retorna el objeto que haga match, o null si no exitse


////////////////////////

// Duck
//     .findOne({ age: { $lt: 14 } })
//     .then(firstMatchDuck => console.log(firstMatchDuck))
//     .catch(err => console.log('Se produjo un error:', err))

// .findOne()
// Recibe un argumento (query), retorna un objeto con el primer registro que haga match 