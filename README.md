# week4_day3

## Main points: Mongoose 

- Establecer una conexión con Mongoose:
  - ```js
    const mongoose = require('mongoose')
    const databaseName = 'NOMBRE-DE-LA-DB'
    const connectionString = `mongodb://localhost/${databaseName}`

    mongoose
      .connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(connectionInfo => console.log(`Connected to Mongo! Database name: "${connectionInfo.connections[0].name}"`))
      .catch(err => console.error('Error connecting to mongo', err))
    ```
- Métodos de mongoose
  - Crear documentos.
    - ```javascript 
        Model.create(object)
      ```
      Crea un único documento con la forma del objeto que se le pasa como argumento.
    - ```javascript
        Model.create([object1, object2, ...])
      ```
      Crea tantos documentos como objectos encuentre en el array que se le pasa como argumento.
  - Borrar documentos.
    - ```javascript
        Model.findByIdAndDelete(id)
      ```
      Elimina un documento buscandolo por id. Recibe como argumento un string.
    - ```javascript
        Model.deleteMany(query)
      ```
      Elimina varios documentos buscandolos por una query que recibe como argumento.
    - ```javascript
        Model.deleteOne(query)
      ```
      Elimina el primer documento que coincide con la query que recibe como argumento.
  - Leer documentos.
    - ```javascript
        Model.find()
      ```
      Devuelve todos los documentos de la base de datos.
    - ```javascript
        Model.find(query)
      ```
      Devuelve todos los documentos que coinciden con la query que recibe como argumento opcional.
    - ```javascript
        Model.findById(id)
      ```
      Devuelve el documento con el id correspondiente.
    - ```javascript
        Model.findOne(query)
      ```
      Devuelve el primer documento que coincide con la query.
  - Actualizar documentos.
    - ```javascript
        Model.findByIdAndUpdate(id, objectoActualización)
      ```
      Recibe como argumento el id y un objecto con las propiedades que han de ser actualizadas. Retorna el elemento *previo* a la actualización. Si necesitas que retorne el actualizado aplica la opción new true.
      ```javascript
        Model.findByIdAndUpdate(id, objectoActualización, {new: true})
      ```
    - ```javascript
        Model.updateOne(query, objectoActualización)
      ```
      Actualiza el primer documento que coincida con la query. Se comporta como el anterior.
    - ```javascript
        Model.updateMany(query, objectoActualización)
      ```
      Actualiza todos los documentos que coincidan con la query.
  
## Main points: Patrón MVC
- Nuestro servidor pasa a estar conformado por 3 piezas clave.
  - El **controlador**, *express*.
    - Define que respuesta corresponde a cada petición de nuestro cliente.
  - El **modelo**, *mongoose*.
    - Comprende la arquitectura de nuestra base de datos. Que datos componen cada documento y su tipo.
  - Las **vistas**, *hbs*.
    - El sistema que genera los html estáticos que terminan renderizandose en el navegador.
