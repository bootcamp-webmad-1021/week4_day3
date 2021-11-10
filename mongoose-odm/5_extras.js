require('./0_ddbb-connection')

const Duck = require('./models/duck.model')



// Duck
//     .countDocuments({ age: { $lte: 15 } })
//     .then(info => console.log(`Hay un total de ${info} patos`))
//     .catch(err => console.log('Se produjo un error:', err))

// // .countDocuments()
// // recibe opcionalmente una query como argumento
// // retorna el sumatorio de elementos




Duck
    .find({query})
    .sort({ age: 1, name: 1 })                          // ordena
    .select('name age')                                 // proyecta
    .skip(4)                                            // ignora
    .limit(4)                                           // limita
    .then(allDucksFromDB => console.log(allDucksFromDB))
    .catch(err => console.log('Se produjo un error:', err))

// .sort() ordena el retorno
// .limit() limita el retorno