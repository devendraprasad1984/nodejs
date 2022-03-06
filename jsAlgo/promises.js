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


//promise.all, when all promises resolve
let p1 = Promise.resolve('promise 1 resolving')
let p2 = Promise.resolve('promise 2 resolving')
let p3 = 200
let p4 = new Promise((res, rej) => {
    setTimeout(res('promise 4 resolving'), 1000, 'dummy promise 4 value')
})

Promise.all([p1, p2, p3, p4]).then(values => {
    console.log('from all promises', values)
}).catch(e => console.log('one or many promises failing'))


const p = new Promise((resolve, reject) => {
    const sum = 1 + 2
    if (sum === 2)
        resolve('success')
    else
        reject('failed')
})

p.then((msg) => console.log('this is in then, promise resolved - ' + msg))
    .catch(msg => console.log('this is in catch, promise rejected - ' + msg))

var _p2 = new Promise((resolve, reject) => {
    resolve('Success!');
    // or
    // reject(new Error("Error!"));
});

_p2.then(value => {
    console.log(value); // Success!
}, reason => {
    console.error(reason); // Error!
});


//chaining
Promise.resolve('foo')
    .then(function (string) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                string += 'bar';
                resolve(string);
            }, 1);
        });
    })
    .then(function (string) {
        setTimeout(function () {
            string += 'baz';
            console.log(string); // foobarbaz
        }, 1)
        return string;
    })
    .then(function (string) {
        console.log("Last Then:  oops... didn't bother to instantiate and return " +
            "a promise in the prior then so the sequence may be a bit " +
            "surprising");
        console.log('last hit promise on string', string)
    });

//rejected promise
Promise.resolve()
    .then(() => {
        // Makes .then() return a rejected promise
        throw new Error('Oh no!');
    })
    .then(() => {
        console.log('Not called.');
    }, error => {
        console.error('onRejected function called: ' + error.message);
    });