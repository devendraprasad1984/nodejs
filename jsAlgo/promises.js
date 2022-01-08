//fetch then catch example of a promise
import fetch from 'node-fetch'

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(r => r.json())
    .then(d => console.log('data', d))
    .catch(e => console.log(e))

let fifteen = Promise.resolve(15)
fifteen.then(v => console.log('promise is resolved', v))

function buttonClick() {
    return new Promise((resolve, reject) => {
        //only resolve or reject would be returned, any state is final fulfilled, error
        let x = 0
        x === 0 ? resolve('completed button click') : reject(new Error('failing with code'))
        setTimeout(() => reject('settimeout error'), 2000) //will be ignore
    })
}

let btn1 = buttonClick().then(success => {
    console.log('promise success', success)
}, error => {
    console.log('promise error', error)
}).catch(e => {
    console.log('promise in catch error', e)
}).finally(() => console.log('promise ends'))


new Promise((_, reject) => {
    return reject(new Error("failed rejection as returned"))
})
.then(value => console.log("Handler 1", value))
.catch(reason => {
    console.log("Caught failure " + reason);
    return "nothing";
})
.then(value => console.log("Handler 2", value));

