function dpfirst(str) {
    return str === "first"
}

// module.exports = dpfirst
module.exports = {
    dpfirst,
    add: (a, b) => a + b,
    sub: (a, b) => a - b,
    mul: (a, b) => a * b,
    div: (a, b) => a / b
}