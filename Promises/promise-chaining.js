const mongoose = require('mongoose')

const databaseName = 'Ducks-1021'
const connectionString = `mongodb://localhost/${databaseName}`

mongoose
    .connect(connectionString, { useNewUrlParser: true, })
    .then(connectionInfo => console.log(`Connected to Mongo! Database name: "${connectionInfo.connections[0].name}"`))
    .catch(err => console.error('Error connecting to mongo', err))

const Duck = require("./models/duck.model")


// Promesas anidadas: MAL!
// Duck.collection.drop()
//     .then(() => console.log("Colección vaciada"))
//     .catch(err => console.log("Hubo un error!", err))


// Duck.create({ name: 'Patito' })
//     .then(theDuck => {

//         console.log('El método .create() retorna el objeto de la BBDD:', theDuck, 'El gato se llama', theDuck.name)

//         Duck.find()
//             .then(allTheDucks => {
//                 console.log("El método .find() retorna un Array", allTheDucks)

//                 allTheDucks.forEach(duck => console.log("Hay un duck llamado", duck.name))

//                 Duck.create([{ name: 'Belcebú' }, { name: 'Pepsicola' }])
//                     .then(allNewDucks => {
//                         console.log("Los patos nuevos son:", allNewDucks)
//                     })
//                     .catch(err => console.log("Hubo un error!", err))
//             })
//             .catch(err => console.log("Hubo un error!", err))
//     })
//     .catch(err => console.log("Hubo un error!", err))



//////////////////////////////////////

// Igual que arriba, pero encadenadas
// Cada .then() espera a que el anterior haya finalizado
// // Cada .then() recibe como parámetro lo que el callback del anterior .then() retorna


// Duck.collection.drop()
//     .then(() => console.log("Colección vaciada"))
//     .catch(err => console.log("Hubo un error!", err))


//Añadir un usuario a la lista de amigos
//busco si existe un usuario ya con este email
User.findOne({ email: "teo@teo.com" })
    .then(user => {
        return Friend.create(user)
    })
    .then(friend => {
        //busco al usuario logeado
        return User.findOneAndUpdate({ email: "usuario@logeado.com" }, { friendList: [friend] })
    })
    .then(

    )














Duck.create({ name: 'Michifú' })
    .then(theDuck => {
        console.log('El método .create() retorna el objeto de la BBDD:', theDuck, 'El gato se llama', theDuck.name)
        return Duck.find()
    })
    .then(allTheDucks => {
        console.log("El método .find() retorna un Array", allTheDucks)

        allTheDucks.forEach(duck => console.log("Hay un gato llamado", duck.name))

        return Duck.create([{ name: 'Belcebú' }, { name: 'Pepsicola' }])
    })
    .then(allNewDucks => console.log("Los patos nuevos son:", allNewDucks))
    .catch(err => console.log("Hubo un error!", err))










// // Promesas encadenadas pro?
// Duck.collection.drop()
//     .then(() => console.log("Colección vaciada"))
//     .catch(err => console.log("Hubo un error!", err))

Duck.create({ name: 'Michifú' })
    .then(theDuck => console.log('El método .create() retorna el objeto de la BBDD:', theDuck, 'El gato se llama', theDuck.name))
    .then(() => Duck.find())
    .then(allTheDucks => console.log("El método .find() retorna un Array", allTheDucks))
    .then(() => Duck.create([{ name: 'Belcebú' }, { name: 'Pepsicola' }]))
    .then(allNewDucks => console.log("Los gatos nuevos son:", allNewDucks))
    .catch(err => console.log("Hubo un error!", err))