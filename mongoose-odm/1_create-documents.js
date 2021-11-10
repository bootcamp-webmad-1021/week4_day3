// DB connection
require('./0_ddbb-connection')

// Model
const Duck = require('./models/duck.model')


// Duck.create({ age: 1, city: 'Madrid', color: 'Amarillo pato' })
//     .then(theDuck => console.log("Hemos creado un patito!", theDuck))
//     .catch(err => console.error("El error", err))

// // .create()
// // argumento: objeto a crear en la BBDD
// // retorno: objeto creado en BBDD

////////////////////////////////////////////////

Duck
    .create([
        { name: 'Donald', age: 7, city: 'Paris', color: 'Blanco' },
        { name: 'Lucas', age: 12, city: 'Madrid', color: 'Blanco' },
        { name: 'Juanito', age: 14, city: 'Estepona', color: 'Grisito' },
        { name: 'Jorgito', age: 1, city: 'Salamanca', color: 'Marroncito' },
        { name: 'Jaimito', age: 16, city: 'Bilbao', color: 'Toffe y caramelo' },
        { name: 'Foie Gras', age: 20, city: 'Bilbao', color: 'Paté' }
    ])
    .then(theNewPatos => console.log('Se ha creado estos registros:', theNewPatos))
    .catch(err => console.log('Se ha producido un error:', err))

    // .create()
    // argumento: arrays de objetos a crear en la BBDD
    // retorno: arrays de objetos creados en BBDD