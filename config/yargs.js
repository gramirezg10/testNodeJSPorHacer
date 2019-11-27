const DescOpts = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Element to be created'
    }
}

const UpdateOpts = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Element to be updated'
    },
    completado: {
        alias: 'c',
        default: true,
        desc: 'Show toDo as completed'
    }
}

const DeleteOpts = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Element to be deleted'
    }
}

const argv = require('yargs')
    .command('crear', 'Create a toDo element', DescOpts)
    .command('actualizar', 'Update status as completed', UpdateOpts)
    .command('borrar', 'Delete a toDo', DeleteOpts)
    .help()
    .argv

module.exports = {
    argv
}