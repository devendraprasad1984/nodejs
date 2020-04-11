//pure class
function user(name) {
    this.name = name
}

user.prototype.sayHi = function () {
    console.log("saying hi from pure function", this.name)
}

let userObj = new user("Devendra")
userObj.sayHi()

//annonymous class without name
function makeClass(xparam) {
    return class {
        sayHi() {
            console.log("annonym", xparam)
        }
    }
}
let clsUser=makeClass("without name class - dp this js is cool")
new clsUser().sayHi()
console.log(new makeClass("another imp dp"))


// console.log("(Object.getOwnPropertyNames", (Object.getOwnPropertyNames), Object.prototype)

//es6 class
class userClass {
    constructor(name) {
        this.name = name
        // console.log(this.name)
    }

    sayHello() {
        console.log("ES6 class", this.name)
    }
}

let xuser = new userClass("wow dp")
xuser.sayHello()



// computed properties
function f() { return "sayHi"; }
class UserX {
    [f()]() {
        console.log("computed say hi")
    }
    ["coolFun"](){
        console.log("bingo way to create a function in js")
    }

}
let objX=new UserX()
objX.coolFun()
objX.sayHi()


