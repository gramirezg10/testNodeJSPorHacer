const fs = require('fs')
const saveData = () => {
    let data = JSON.stringify(toDoList)

    fs.writeFile(`DB/data.json`, data, (err) => {
        if (err) throw new Error ('no se pudo escribir')
    });
}


const uploadDb = () => {
    try {
        toDoList = require ('../DB/data.json')        
    } catch (error) {
        toDoList = []
    }
}

const create = (desc) => {
    uploadDb()
    let toDo = {
        desc,
        completed: false
    }
    toDoList.push(toDo)
    saveData()
    return toDo
}

const getListToDo = () => {
    uploadDb()
    return toDoList 
}

const updateToDo = (desc, completed = true) => {
    uploadDb()
    let index = toDoList.findIndex (toDo => toDo.desc === desc)
    if (index >= 0) {
        toDoList[index].completed = completed
        saveData()
        return true
    } else return false
}

const deleteToDo = (desc) => {
    uploadDb()
    let index = toDoList.findIndex (toDo => toDo.desc === desc)
    if (index >= 0) {
        toDoList.splice(index)
        saveData()
        return true
    } else return false
}

module.exports = {
    create,
    getListToDo,
    updateToDo,
    deleteToDo
}