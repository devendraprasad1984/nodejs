console.log([10] === [10]); //false because these are different objects in js memory
JSON.stringify(a) === JSON.stringify(b)  //true

var oldArray = [];
var object = {};
object.newArray = oldArray; //by ref
oldArray.push(10);
console.log(object.newArray === oldArray); //true

//primitives by value
var a = 5;
var b = a;
a = 10;
console.log(a); // 10
console.log(b); // 5

//objects by reference
var a = {};
var b = a;
a.a = 1;
console.log(a); // {a: 1}
console.log(b); // {a: 1}

var a = [];
var b = a;
a.push(1);
console.log(a); // [1]
console.log(b); // [1]
console.log(a === b); // true

