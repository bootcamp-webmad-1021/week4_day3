// DB connection
require('./0_ddbb-connection')

// Model
const Duck = require('./models/duck.model')



// Duck.findByIdAndDelete('618b8920c7f3b226b47f3cda')
//     .then(removedDuck => console.log('El pato eliminado es:', removedDuck))
//     .catch(err => console.log('Hubo un error:', err))

// // .findByIdAndDelete()
// // Recibe como argumento el ID string
// // Retorna el objeto eliminado



/////////////////////////////


Duck
    .deleteMany({ age: { $lte: 2 } })
    .then(info => console.log('Se han eliminado', info.deletedCount, 'pato/s'))
    .catch(err => console.log('Se produjo un error', err))


// // .deleteMany()
// // Recibe como argumento una query, afecta a cualquier match
// // Retorna los detalles de la operación


Duck
    .deleteOne({ age: { $lte: 10 } })
    .then(info => console.log('Este es un objeto informativo sobre una elimiación', info))
    .catch(err => console.log('Se produjo un error', err))


// .deleteOne()
// Recibe como argumento una query, afecta al primer match
// Retorna los detalles de la operación 