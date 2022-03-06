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
