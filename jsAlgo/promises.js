//fetch then catch example of a promise
import fetch from 'node-fetch'

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(r => r.json())
    .then(d => console.log('data', d))
    .catch(e => console.log(e))

let fifteen = Promise.resolve(15)
fifteen.then(v => console.log('promise is resolved', v))

