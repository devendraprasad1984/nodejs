function test1() {
    (function () {
        var a = b = 3;
    })();
    console.log("a defined? " + (typeof a !== 'undefined'));
    console.log("b defined? " + (typeof b !== 'undefined'));
} //false true

function test2() {
    var myObject = {
        foo: "bar",
        func: function () {
            var self = this;
            console.log("outer func:  this.foo = " + this.foo);
            console.log("outer func:  self.foo = " + self.foo);
            (function () {
                console.log("inner func:  this.foo = " + this.foo);
                console.log("inner func:  self.foo = " + self.foo);
            }());
        }
    };
    myObject.func();
} //bar bar undefined bar

//Q. What is the significance of, and reason for, wrapping the entire content of a JavaScript source file in a function block?
// A: Modules & packaging: This is an increasingly common practice, employed by many popular JavaScript libraries (jQuery, Node.js, etc.). This technique creates a closure around the entire contents of the file which, perhaps most importantly, creates a private namespace and thereby helps avoid potential name clashes between different JavaScript modules and libraries.

//Q. what is benefit of using "use strict"
//A. Makes debugging easier. Code errors that would otherwise have been ignored or would have failed silently will now generate errors or throw exceptions, alerting you sooner to problems in your code and directing you more quickly to their source.
// Prevents accidental globals. Without strict mode, assigning a value to an undeclared variable automatically creates a global variable with that name. This is one of the most common errors in JavaScript. In strict mode, attempting to do so throws an error.
// Eliminates this coercion. Without strict mode, a reference to a this value of null or undefined is automatically coerced to the global. This can cause many headfakes and pull-out-your-hair kind of bugs. In strict mode, referencing a a this value of null or undefined throws an error.
// Disallows duplicate parameter values. Strict mode throws an error when it detects a duplicate named argument for a function (e.g., function foo(val1, val2, val1){}), thereby catching what is almost certainly a bug in your code that you might otherwise have wasted lots of time tracking down.
// Note: It used to be (in ECMAScript 5) that strict mode would disallow duplicate property names (e.g. var object = {foo: "bar", foo: "baz"};) but as of ECMAScript 2015 this is no longer the case.
// Makes eval() safer. There are some differences in the way eval() behaves in strict mode and in non-strict mode. Most significantly, in strict mode, variables and functions declared inside of an eval() statement are not created in the containing scope (they are created in the containing scope in non-strict mode, which can also be a common source of problems).
// Throws error on invalid usage of delete. The delete operator (used to remove properties from objects) cannot be used on non-configurable properties of the object. Non-strict code will fail silently when an attempt is made to delete a non-configurable property, whereas strict mode will throw an error in such a case.


function test3() {
    function foo1() {
        return {
            bar: "hello"
        };
    }

    function foo2() {
        return
        {
            "hello"
        }
    }
} //object, null/undefined

function test4() {
    console.log(0.1 + 0.2);
    console.log(0.1 + 0.2 == 0.3);
} //0.3, false


function test5() {
    function isPalindrome(str) {
        str = str.replace(/\W/g, '').toLowerCase();
        return (str == str.split('').reverse().join(''));
    }
}

function test6() {
    // currying function: converting function that take multiple arguments into various functions that take single argument
    //console.log(sum(2,3));   // Outputs 5
    // console.log(sum(2)(3));  // Outputs 5
    function sum(x) {
        if (arguments.length === 2) {
            return arguments[0] + arguments[1]
        } else {
            return y => x + y
        }
    }

    function sum2(x, y) {
        if (y !== undefined) {
            return x + y;
        } else {
            return function (y) {
                return x + y;
            };
        }
    }

    console.log(sum(2, 4))
    console.log(sum(2)(4))
}

function test7() {
    for (var i = 0; i < 5; i++) {
        var btn = document.createElement('button');
        btn.appendChild(document.createTextNode('Button ' + i));
        btn.addEventListener('click', function () {
            console.log(i);
        });
        document.body.appendChild(btn);
    }
}

function test8() {
    var arr1 = "john".split(''); //[j,o,h,n], 2nd call [n,h,o,j]
    var arr2 = arr1.reverse(); //[n,h,o,j]
    var arr3 = "jones".split(''); //[j,o,n,e,s]
    arr2.push(arr3); //[n,h,o,j,[j,o,n,e,s]]
    //arr1, arr2 references are same, so arr2 push happens to arr1 also
    console.log(arr1, arr2)
    console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1)); //4, jones
    console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1)); //9, jones
}

function test9() {
    console.log(1 + "2" + "2"); //122
    console.log(1 + +"2" + "2"); //32
    console.log(1 + -"1" + "2"); //02
    console.log(+"1" + "1" + "2"); //112
    console.log("A" - "B" + "2"); //NaN2
    console.log("A" - "B" + 2); //NaN
}

function test10() {
    console.log("0 || 1 = " + (0 || 1));
    console.log("1 || 2 = " + (1 || 2));
    console.log("0 && 1 = " + (0 && 1));
    console.log("1 && 2 = " + (1 && 2));
}

function test11() {
    var a = {},
        b = {key: 'b'},
        c = {key: 'c'};

    a[b] = 123;
    a[c] = 456;

    console.log(a[b]);
    //JavaScript will implicitly stringify the parameter value. In this case, since b and c are both objects, they will both be converted to "[object Object]". As a result, a[b] anda[c] are both equivalent to a["[object Object]"] and can be used interchangeably. Therefore, setting or referencing a[c] is precisely the same as setting or referencing a[b]
}


function test12() {
    (function (x) {
        return (function (y) {
            console.log(x);
        })(2)
    })(1);
} //1

function test13() {
    console.log((function f(n) {
        return ((n > 1) ? n * f(n - 1) : n)
    })(10));
}

function test14() {
    var hero = {
        _name: 'John Doe',
        getSecretIdentity: function () {
            return this._name;
        }
    };

    var stoleSecretIdentity = hero.getSecretIdentity;

    console.log(stoleSecretIdentity());
    console.log(hero.getSecretIdentity());
} //undefine, john doe

function test15() {
    //Create a function that, given a DOM Element on the page, will visit the element itself and all of its descendents (not just its immediate children). For each element visited, the function should pass that element to a provided callback function. The arguments to the function should be:
    // a DOM element
    // a callback function (that takes a DOM element as its argument)

    //Visiting all elements in a tree (DOM) is a classic Depth-First-Search algorithm application. Here’s an example solution:
    function Traverse(p_element, p_callback) {
        p_callback(p_element);
        var list = p_element.children;
        for (var i = 0; i < list.length; i++) {
            Traverse(list[i], p_callback);  // recursive call
        }
    }
}


function test16() {
    var length = 10;

    function fn() {
        console.log(this.length);
    }

    var obj = {
        length: 5,
        method: function (fn) {
            fn();
            arguments[0]();
        }
    };

    obj.method(fn, 1);
} //5.length=1, 10.length=2

function test17() {
    (function () {
        try {
            throw new Error();
        } catch (x) {
            var x = 1, y = 2;
            console.log(x);
        }
        console.log(x);
        console.log(y);
    })();
} //1, undefined, 2

function test18() {
    var x = 21;
    var girl = function () {
        console.log(x);
        var x = 20;
    };
    girl();
} //undefined, vars move up but not the initialisation

function test19() {
    for (let i = 0; i < 5; i++) {
        setTimeout(function () {
            console.log(i);
        }, i * 1000);
    }
} //let is used here, 0,1,2,3,4

function test20() {
    console.log(1 < 2 < 3);
    console.log(3 > 2 > 1);
} //true, false

function test21() {
    for (var i = 0; i < 5; i++) {
        setTimeout(function () {
            console.log(i);
        }, i * 1000);
    }

    //by closure, we can fix this by binding context of i to new funtion call
    for (var i = 0; i < 5; i++) {
        (function (i) {
            setTimeout(function () {
                console.log(i);
            }, i * 1000);
        })(i)
    }
}

function test22() {
    var obj = {a: 1, b: 2, c: {age: 20}}
    var objShallow = Object.assign({}, obj) //shallow copy
    var objDeep = JSON.parse(JSON.stringify(obj)) //deep copy
    console.log(obj, objShallow, objDeep)
    obj.a = 10
    obj.c.age = 30
    console.log(obj, objShallow, objDeep)
}

function test23_curry() {
    function sum(a, b, c) {
        return a + b + c
    }

    function curry(func) {
        return function _(...args) {
            console.log(func.length, args.length, func, args)
            if (args.length < func.length)
                return (...args2) => _.apply(this, args.concat(args2))
            else
                return func.apply(this, args)
        }
    }

    let curried = curry(sum)
    // console.log(curried(1, 2, 3))
    console.log(curried(1)(2, 3))
    // console.log(curried(1)(2)(3))
}

function test24() {
    //encapsulating - tie data and methods that operate together
    let Employee = function () {
        this.baseSalary = 30000,
            this.overtime = 10,
            this.rate = 20,
            this.calcWage = function () {
                return this.baseSalary * (this.overtime * this.rate);
            }
    }
    let dp = new Employee()
    console.log(dp, dp.calcWage())
}

function test25() {
    let employee = {
        create: function (salary, overtime, rate) {
            let obj = {
                baseSalary: salary,
                overtime: overtime,
                rate: rate
            }
            return {...this, ...obj}
        },
        calcWage: function () {
            return this.baseSalary * (this.overtime * this.rate);
        }
    }
    let dp = Object.assign({}, employee).create(20000, 1500, 20)
    console.log(dp.calcWage())
    let dp2 = Object.assign({}, employee).create(10000, 1000, 30)
    console.log(dp2.calcWage())
}

function test26() {
    const obj = {
        name: 'abc',
        address: {
            city: 'mumbai'
        }
    }
    Object.freeze(obj)
    obj.address.city = 'pune'
    console.log(obj)
}

function test27() {
    let arr = [
        {name: 'name1', age: 20},
        {name: 'name2', age: 20},
        {name: 'name3', age: 20},
        {name: 'name4', age: 20},
        {name: 'name5', age: 20}
    ]
    let arrNames = Array.from(arr, ({name}) => name)
    console.log(arrNames)
}