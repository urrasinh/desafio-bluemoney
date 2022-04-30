const fs = require('fs')

const argumentos = process.argv
console.log(argumentos)
const nombreArchivo = argumentos[2]
const extencion = argumentos[3]
const indicadorEconomico = argumentos[4]
const valor = argumentos[5]

const https = require('https');
https
    .get('https://mindicador.cl/api', (resp) => {
        let data = '';
        resp.on('data', (chunk) => {
            data += chunk;
        });
        resp.on("end", () => {
            let indicador = JSON.parse(data);
            console.log('El valor actual del dolar es $' + indicador[indicadorEconomico].valor);
            fs.writeFile(`respuesta.json`, data, 'utf8', () => {

            });
        });
    })
    .on('error', (err) => {
        console.log('Error: ' + err.message);
    })
