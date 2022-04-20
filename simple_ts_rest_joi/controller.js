const data = require('./data')

class Controller {
    async getTodos() {
        return new Promise((resolve, _) => resolve(data))
    }

    async getSingleTodo(id) {
        return new Promise((resolve, reject) => {
            let todo = data.filter(_ => parseInt(_.id) === parseInt(id))
            todo.length !== 0 ? resolve(todo) : reject(`${id} not found`)
        })
    }

    async createToDo(todo) {
        return new Promise((resolve, _) => {
            let newTodo = {
                id: Math.floor(4 + Math.random() * 10),
                ...todo
            }
            resolve(newTodo)
        })
    }

    async updateToDo(id) {
        return new Promise((resolve, reject) => {
            let todo = data.filter(_ => parseInt(_.id) === id)
            if (!todo) reject(`${id} not found`)
            todo['completed'] = true
            resolve(todo)
        })
    }
}

module.exports = Controller