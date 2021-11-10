// DB connection
require('./0_ddbb-connection')

// Model
const Duck = require('./models/duck.model')


// Duck
//     .findByIdAndUpdate('618b8a5653a8e427917c9888', { $inc: { age: 100 } }, { new: true })
//     .then(duck => console.log("El perro modificado es:", duck))
//     .catch(err => console.log('Hubo un error', err))

// // .findByIdAndUpdate()

// // Dos argumentos: string con ID, y query de manipulación
// // Por defecto, retorna el elemento anterior al update
// // El argumento adicional {new: true} hará que retorne el elemento tras el update


////////////////////////////


// Duck.updateOne({ name: 'Donald' }, { name: 'Donald reloaded' })
//     .then(info => console.log("Los detalles de la modificación son:", info))
//     .catch(err => console.log('Hubo un error', err))

// .updateOne()
// Recibe query, actualiza el primer match
// Retorna objeto con detalles de la operación


/////////////////////

Duck
    .updateMany({ name: 'Patito' }, { name: 'Patito the best pato' })
    .then(details => console.log("Los detalles de la modificación son:", details))
    .catch(err => console.log('Hubo un error', err))

// // .updateMany()
// // Recibe query, actualiza todos los documentos que hagan match
// // Retorna objeto con detalles de la operación
