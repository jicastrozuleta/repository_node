const opts = {
    'id': {
        alias: 'i',
        demandOption: true,
        describe: 'ID que identifica el curso de su interes.',
        type: 'number',
        requiresArg: true
    },
    'nombre': {
        alias: 'n',
        demandOption: true,
        describe: 'Nombre de la persona interesada.',
        type: 'string',
        requiresArg: true
    },
    'cedula': {
        alias: 'c',
        demandOption: true,
        describe: 'Identificacion de la persona interesada.',
        type: 'string',
        requiresArg: true
    }
}

let builder = (yargs) => {
    return yargs.option(opts);
}

let handler = (argv) => {
    return argv;
}
var argv = require('yargs').command('inscribir', 'Inscribir a la persona interesada en el curso', builder, handler).argv;

module.exports = { argv };