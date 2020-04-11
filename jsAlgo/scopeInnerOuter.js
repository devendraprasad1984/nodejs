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


function foo1() {
    return {
        bar: "hello"
    };
}

function foo2() {
    return
    {
        bar: "hello"
    }
    ;
}

console.log(foo1(), foo2())

console.log(NaN == NaN, (typeof NaN))

console.log(0.1 + 0.2)
console.log(0.1 + 0.2 == 0.3)


function isInteger(x) {
    return (x ^ 0) === x;
}

console.log("is integer check", isInteger(10))


function isPalindrome(str) {
    str = str.toLocaleLowerCase()
    return (str == str.split('').reverse().join(''));
}

console.log(isPalindrome("deven"), isPalindrome("level"))


function sum(x, y) {
  if (y !== undefined) {
    return x + y;
  } else {
    return function(y) { return x + y; };
  }
}

console.log(sum(10,20),sum(10)(10));

