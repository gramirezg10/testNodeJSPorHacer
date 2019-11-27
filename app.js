const argv = require('./config/yargs').argv
const toDo = require('./por-hacer/por-hacer')
const colors = require('colors/safe');
// console.log(argv)
let command = argv._[0]

switch (command.toUpperCase()) {
    case 'CREAR':
        // console.log(command.toUpperCase(), `Create toDo '${argv.d}'`)
        let job = toDo.create(argv.d)
        console.log(job)
        break;
    case 'LISTAR':
        // console.log(command.toUpperCase(), `List alls toDo's`)
        let list = toDo.getListToDo()
        for (let listOne of list) {
            console.log(colors.green('==============ToDo=================='))
            console.log(`ToDo: ${listOne.desc}`)            
            console.log(`Status: ${listOne.completed}`)            
            console.log(colors.green('===================================='))
        }
        break;
        
    case 'ACTUALIZAR':
        // console.log(command.toUpperCase(), `Update a toDo '${argv.d}'`)
        console.log(toDo.updateToDo(argv.descripcion, argv.completed))
        break;

    case 'BORRAR':
        let deleted = toDo.deleteToDo(argv.d);
        console.log(deleted)
        break;
    
    default:
        console.log('command undefined')
        break;
}