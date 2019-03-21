/* 
Dependencia usada para manejar los retardos de forma mas comoda.
disponible en: https://www.npmjs.com/package/foreach-timeout
instalacion: npm i foreach-timeout 
*/
var foreachTimeout = require("foreach-timeout");
var express = require('express');
var app = express();
const { objetoCursos } = require('./cursos');
const { argv } = require('./options');
const fs = require('fs');


let informacionCurso = (curso) => {
    return '-----------------\n' +
        '- ID: ' + curso.id + '\n' +
        '- Nombre: ' + curso.nombre + '\n' +
        '- Duracion: ' + curso.duracion + '\n' +
        '- Valor: $' + curso.valor + '\n' +
        '-----------------';
}

let mostrarCurso = (curso) => { console.log(informacionCurso(curso)) }

let mostrarResumen = (resumen) => {
    console.log(resumen);
}

let inscribirEstudiante = () => {
    var cursoEncontrado = objetoCursos.find(curso => curso.id == argv.id);
    if (cursoEncontrado != undefined) {
        texto = "-----------\n" +
            "El interesado: " + argv.n + ", identificado con CC: " + argv.c +
            "\nse ha inscrito en el siguiente curso:\n" + informacionCurso(cursoEncontrado);
        fs.writeFile('inscrito.txt', texto, (err) => {
            if (err) throw (err)
            else mostrarResumen(texto);
        });
    } else {
        console.log('-----------\n-- ERROR: El curso con ID: ' + argv.id + ", No existe.\n-----------");
    }
}

let iniciar = () => {
    if (argv._.length > 0) {
        inscribirEstudiante();
    }
    else {
        console.log('\nLista de cursos disponibles');
        foreachTimeout(objetoCursos, mostrarCurso, 2000);
    }
}

iniciar();



 
app.get('/', function (req, res) {
  res.send(texto);
})
 
app.listen(3000)