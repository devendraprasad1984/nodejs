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
    id: 1, name: 'john'
};
