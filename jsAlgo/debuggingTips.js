function Person(name) {
    this.name = name
}

let dp = Person('Devendra Prasad') //here new is not used, so this wont be attached but name will be in global context
console.log(dp, name);

(function () {
    "use strict";
    function Person1(name) {
        this.name = name
    }

    let dp1 = Person1('Devendra Prasad')
})()

//use strict: It disallows giving a function multiple parameters with the same name
//class function always check if they are not invoked with new keyword