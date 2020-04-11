var passedParam = 10;
function add() {
    var num = 20;
    console.log("the sum is:", passedParam + num);
}
add();
console.dir(add);


add_1 = () => {
    let a = 10;
    let b = 20;
    return () => console.log(a + b);
}
let __adp = add_1()
console.log("__adp is tested");
__adp();
console.log("add_1()() is tested");
add_1()();


console.log('testing other case-2');
let i = 10; //i being accesible inside f() due to lexical scoping thing, outside variable is used inside of function. i being in global namespace
let f;
f = () => {
    console.log(i);
}
f();

console.log('testing other case-3');
let f3;
if (true) {
    let i = 30;
    f3 = () => {
        console.log(i);
    }
}
f3();
console.dir(f3);


console.log('testing other case-4');
let f4 = () => {
    let i = 30;
    let j = 40; //until this is not used inside this inner function, its not gonna be acting as a closure variable
    return () => { console.log("inside closure case 4", i) }
};
f4();
console.dir(f4());


console.log('testing other case-5');
for (let i = 0; i < 3; i++) {
    (() => {
        console.log(i);
    })() //IIFE pattern
}
console.log('testing other case-6--not OK due to var lexical scoping thing');
for (var j = 0; j < 3; j++) {
    setTimeout(() => {
        console.log(j);
    },1000)
}
console.log('after the var loop - closure and context problem')
for (var j = 0; j < 3; j++) {
    ((i)=>setTimeout(() => console.log(i),1000))(j)
}
console.log('after the 2 var loop - closure and context problem')







