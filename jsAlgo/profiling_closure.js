function f(func) {
    return function () { //closure is used in such scenarios also
        var start = new Date();
        returnVal = func.apply(this, arguments);
        stop = new Date();
        duration = stop.getTime() - start.getTime();
        return `took ${duration} ms to execute and result is ${returnVal}`;
    };
}

let testDP = (p1, p2) => {
    return `testof p1 p2 is done ${p1}, ${p2}`;
}

console.log('power of 9,2 is', f(Math.pow).call(undefined, 9, 2));
console.log('max of 9,2 is', f(Math.max).call(undefined, 9, 2));
console.log('testdp is called at', f(testDP).call(undefined, 'hello', 'dp'));


