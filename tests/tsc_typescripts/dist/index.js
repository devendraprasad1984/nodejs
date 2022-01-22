"use strict";
//tsc --watch index
//tsc --init
let id = 5;
console.log('id is', id);
let company = 'Devendra Prasad';
let isPublished = true;
let x = 'hello';
let age;
age = 39;
let ids = [1, 2, 3, 4];
let arr = [1, 2, 3, 4];
//tuple
let arrTuple = [1, 'hello', false];
//tuple array
let employee = [[1, 'hello'], [2, 'hello world']];
//unions
let pid = 'hello';
pid = 124;
//enums - named constants
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 10] = "Up";
    Direction1[Direction1["down"] = 11] = "down";
    Direction1[Direction1["left"] = 12] = "left";
    Direction1[Direction1["right"] = 13] = "right";
})(Direction1 || (Direction1 = {}));
console.log('default direction value is', Direction1.down, Direction1.Up);
//objects
const user = {
    id: 1, name: 'john'
};
const userAgain = {
    id: 1, name: 'john'
};
//type assertions
let cid = 1;
let customerId = cid; //casting
customerId = cid; //casting
//functions, implicit type is any
function addNum(x, y) {
    return x + y;
}
console.log('adding 2 numbers', addNum(2, 3));
function log(message) {
    console.log(message);
}
log('hello world message');
const userByInterface = {
    id: 1,
    name: 'john'
};
userByInterface.id = 6;
const p1 = 1;
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
console.log('adding 2 numbers using interface type', add(3, 4));
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    //overriding toString, polymorphs
    toString() {
        return this.id + '==>' + this.name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
    toString() {
        return this.id + '==>' + this.name + '===>' + this.position;
    }
}
const dp = new Person(1, 'devendra prasad');
const harish = new Person(2, 'harish');
console.log(dp.register(), harish.register());
console.log('Person Objects', dp.toString(), harish.toString());
const emp1 = new Employee(3, 'dp', 'tech lead');
console.log(emp1.register(), emp1.toString());
//generics - used to build reusable components
//has to has numbers or has to has specific type
//placeholder for specific types
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 4, 5, 6]);
let strArray = getArray(['1', '2', '3', '4', '5']);
numArray.push(10);
// numArray.push('hello')
