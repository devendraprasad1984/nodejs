
// basic class:
// https://javascript.info/class
//     https://www.digitalocean.com/community/tutorials/understanding-classes-in-javascript
//         class MyClass {
//             prop = value; // field
//             constructor(...) { // constructor
//                 // ...
//             }
//             method(...) {} // method
//             get something(...) {} // getter method
//             set something(...) {} // setter method
//             [Symbol.iterator]() {} // method with computed name/symbol name
//             // ...
//         }

class User {
    constructor(name) {
        this.name = name;
    }
    get name() {
        return this._name;
    }

    set name(value) {
        if (value.length < 4) {
            alert("Name is too short.");
            return;
        }
        this._name = value;
    }
    sayHi() {
        alert(this.name);
    }
}
let user = new User("John");
console.log(user.name,"is perfactly valid")
user.sayHi();
alert(typeof User);
alert(User === User.prototype.constructor);
alert(User.prototype.sayHi);
alert(Object.getOwnPropertyNames(User.prototype));

// rewriting class User in pure functions
// 1. Create constructor function
function User(name) {
    this.name = name;
}
// any function prototype has constructor property by default, so we don't need to create it
// 2. Add the method to prototype
User.prototype.sayHi = function() {
    alert(this.name);
};
let user = new User("John");
user.sayHi();

// class expression may/may not have a name
let User = class {
    sayHi() {
        alert("Hello");
    }
};
new User().sayHi();

function makeClass(phrase) {
    // declare a class and return it
    return class {
        sayHi() {
            alert(phrase);
        };
    };
}
let User = makeClass("Hello");
new User().sayHi(); // Hello

// computed properties
function f() { return "sayHi"; }

class User {
    [f()]() {
        alert("Hello");
    }

}
new User().sayHi();
