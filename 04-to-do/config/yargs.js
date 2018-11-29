const opts = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'descripcion de la tarea por hacer'
    }
}

const actualizarOpts = {
    descripcion: opts.descripcion,
    completado: {
        default: true,
        alias: 'c',
        desc: 'marca como completado o pendiente la tarea'
    }
}

const argv = require('yargs')
    .command('crear', 'crea un elemento por hacer', opts)
    .command('actualizar', 'actualiza el estado completado de una tarea', actualizarOpts)
    .command('borrar', 'borrar un elemento por hacer', opts)
    .help()
    .argv;

module.exports = {
    argv
}