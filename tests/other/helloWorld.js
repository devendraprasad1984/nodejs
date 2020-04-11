console.log("launching code with xdebug");

//output test
function fn() {
    var a = b = 3;
};
fn()
console.log((typeof a),(typeof b));
console.log("a defined? " + (typeof a !== 'undefined'));



function FnHelloWorld(msg) {
    return function helloWorldRetFun() {
        return "Hello World, This is Devendra Prasad\n" + msg;
    }
}


var fnHello = FnHelloWorld("whats up bro");
console.log(fnHello());

console.log(3 + 2 + "7");
try {
    var x = 10 / 0;
    throw "divide";
    console.log(x);
} catch (err) {
    console.log("error", err)
} finally {
    console.log("finally called")
}


var x = new Array(5);
for (let i = 0; i < x.length; i++) {
    x[i] = new Array(2)
    x[i][0] = i;
    x[i][1] = i + 1;
}
console.log(x);
