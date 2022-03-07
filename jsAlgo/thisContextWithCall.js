let logUpperCase = function () {
    return this.string.toUpperCase()
}
console.log(logUpperCase.call({string: 'devendra'}))