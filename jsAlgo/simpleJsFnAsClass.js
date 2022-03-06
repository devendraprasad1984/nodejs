function Person(name) {
    this.name = name
    this.show = () => {
        console.log('hello, ' + this.name)
    }
}

Person.prototype.showMe = function () {
    console.log('showing name ' + this.name)
}

let dp = new Person('devendra')
let dp1 = new Person('akshat')
dp.show()
dp1.showMe()




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
