function Counter() {
    let count = 0
    this.increment = function () {
        return ++count
    }
    this.decrement = function () {
        return --count
    }
}

let counter = new Counter()
console.log(
    counter.increment(),
    counter.increment(),
    counter.increment(),
    counter.decrement(),
    counter.decrement()
)