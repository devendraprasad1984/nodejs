function test() {
    var abc = 40
    abc = 58
}

abc = 11
test()

console.log('abc variable', abc)

function test1(...args) {
    const [param1, param2, ...rest] = args
    console.log(param1, param2, rest)
}

function test2() {
    const [param1, param2, ...rest] = arguments //test2.arguments
    console.log(param1, param2, rest)
}

test1(1, 2, 3, "hello", {a: 1, b: 2})
test2(1, 2, 3, "hello", {a: 1, b: 2})

const test2_fn = function () {
    //annonymous functions are light as they dont have prototype or arguments attachment
    console.log('annonymous attachment of prototypes and arguments', test2_fn.arguments, test2_fn.prototype, test2.prototype)
}
test2_fn()
test2_fn(1, 2, 3)


const halve = function (n) {
    return n / 2;
};
let n = 10;
console.log(halve(100)); // → 50
console.log(n); // → 10

//hoisting is to make any declation at the beginning of the scope, be it function or variable
console.log("The future says:", future());

function future() {
    return "You'll never have flying cars";
}


function greet(who) {
    console.log("Hello " + who);
}

greet("Harry");
console.log("Bye");


function findSolution(target) {
    function find(current, history) {
        if (current == target) {
            return history;
        } else if (current > target) {
            return null;
        } else {
            return find(current + 5, `(${history} + 5)`) || find(current * 3, `(${history} * 3)`);
        }
    }

    return find(1, "1");
}

console.log(findSolution(24));
console.log(findSolution(18));
console.log(findSolution(21));


function printFarmInventory(cows, chickens) {
    let addZeros = str => {
        let tmp = str
        while (tmp.length < 3) {
            tmp = "0" + tmp;
        }
        return tmp
    }
    console.log(`${addZeros(String(cows))} Cows`);
    console.log(`${addZeros(String(chickens))} Chickens`);
}

printFarmInventory(7, 11);

function student(name, age, grade) {
    this.name = name
    this.age = age
    this.grade = grade
    this.print = () => {
        console.log('printing student', this.name, this.age, this.grade)
    }
}

let devendra = new student('devendra', 37, 10)
devendra.print()
console.log(devendra.age, devendra.name, devendra)
for (let i in devendra) {
    console.log('props of devendra', i, typeof i, devendra[i])
}


function television(brand, size, price, num) {
    this.brand = brand
    this.size = size
    this.price = price
    this.num = num
    this.sell = sell
    this.buy = buy
    this.display = display
}

function sell(quantity) {
    if (quantity > this.num)
        console.log("Not enough " + this.brand + " " + this.size + "\" sets in stock.")
    else
        this.num -= quantity
    if (quantity < 5)
        console.log("Order more " + this.brand + " " + this.size + "\" sets urgently.")
}

function buy(quantity) {
    this.num += quantity
}

function display() {
    var result = ""
    result += "<TABLE BORDER=2><TR>"
    result += "<TD WIDTH = 60>" + this.brand + "</TD>"
    result += "<TD WIDTH = 30>" + this.size + "\"</TD>"
    result += "<TD WIDTH = 45>$" + this.price + "</TD>"
    result += "<TD WIDTH = 45>" + this.num + " left</TD>"
    result += "</TR></TABLE>"
    console.log(result)
    // document.write(result)
}

var tel1 = new television("Sony", 27, 1200, 30)
var tel2 = new television("JVC", 20, 650, 20)
var tel3 = new television("Grundig", 14, 420, 45)
tel1.sell(27)
tel1.buy(16)
tel1.display()
tel2.sell(21)
tel2.sell(1)
tel2.display()
tel3.display()


//ancient way to create arrays back in 90s when array wasnt part of js
function createArray(n, init) {
    this.length = n
    for (i = 1; i <= n; i++) {
        this[i] = init
    }
    return this
}

// console.log(createArray(10, 0))

Array.prototype.grep = function (str) {
    let arr = []
    for (let i in this) {
        if (typeof this[i] === "string" && this[i].indexOf(str) !== -1) {
            arr.push(this[i])
        }
    }
    return arr
}
let arr = ['abc', 'mask', 'master']
console.log(arr.shift(), arr.splice(1, 2, 'named', 'deven', 'master'), arr)
console.log(arr.slice(1, 3), arr)
console.log(arr.grep('mas').join(', '))

let arrMulti = []
for (let i = 0; i < 5; i++) {
    arrMulti[i] = []
    arrMulti[i].push(0, 1, 2)
}
console.log(arrMulti)

let now = new Date()
console.log(now, now.getDate(), now.getTime(), now.getHours(), now.getMinutes())

let kim = 'kim'
kim.age = 40
console.log(kim, kim.age)

let coconut = 'coconut'
console.log(coconut.slice(3, 6), coconut.indexOf('u'))
console.log(String(6).padStart(3, "0"));


function test_vars() {
    var v1 = 10, v2 = 20
    let v3 = 10, v4 = 20
    console.log(v1, v2, v3, v4)
}

test_vars()


//HOC
function greaterThan(n) {
    return m => m > n;
}

let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
// → true

// And we can have functions that change other functions.
function noisy(f) {
    return (...args) => {
        console.log("calling with", args);
        let result = f(...args);
        console.log("called with", args, ", returned", result);
        return result;
    };
}

noisy(Math.min)(3, 2, 1)

let words = "The characterCount function reduces the ranges assigned to a script by sum- ming their sizes".split(' ')
console.log(words)
let res = words.reduce((a, b) => {
    console.log(a, b)
    return a.length>b.length ? a: b
}, '')
console.log(res)
res = [1, 2, 3, 4, 5].reduce((a, b) => a + b, 0)
console.log(res)
