const fs = require('fs')
//Paso 1
fs.readFile('tareas.txt', 'utf8',
    (err, data) => {
        //Paso 2
        fs.writeFile('tareas.txt', data + 
            '\n 2) Cocinar para mañana', 'utf8',
            () => {
                //Paso 3
                console.log('Archivo sobrescrito con éxito')
            }
        )
    }
)

