let str = 'abcdabcdaaabbbb'
let charCounter = {}
for (let i of str) {
    charCounter[i] = charCounter[i] === undefined ? 1 : charCounter[i] + 1
}
console.log(charCounter)
let max = {key: '', val: 0}
for (let i in charCounter) {
    if (charCounter[i] > max.val) {
        max.key = i
        max.val = charCounter[i]
    }
}
console.log('max', max)
