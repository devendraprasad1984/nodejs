//Amazon
//given a string, find the length of smallest window that contains every distinct character
//chars may appear more than once
//jiujitsu, should return 5 corresponding to final 5 letters

let dict = {}
let str1 = 'jiujitsu'
for (let i of str1) {
  dict[i] = dict[i] === undefined ? 1 : dict[i] + 1
}
let uniqueChars = Object.keys(dict)
let uniqueCharsLen = uniqueChars.length
console.log('object', dict, 'unique chars in string', str1, uniqueChars, uniqueCharsLen)
