function reverse(fn){
    console.log("inside reverse",fn())
    return function (a,b) {
        return fn(b,a)
    }
}

function func(a,b){
    return a/b
}

var retFn=reverse(func)
console.log("the simple function params",func(1,2))
console.log("the reverse of a function params",retFn(1,2))
