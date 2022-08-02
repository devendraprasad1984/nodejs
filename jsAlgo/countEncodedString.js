/*
 * Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded.
 For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.
 You can assume that the messages are decodable. For example, '001' is not allowed.
 * */

let map = {}
//init map
for (let i = 0; i < 26; i++) {
  let key = String.fromCharCode((97 + i))
  map[i + 1] = key
}
// console.log(map)

let msg = "11"
let size = msg.length
let possibleStrings = new Array(size + 1)
possibleStrings[0] = 1
possibleStrings[1] = 1
let counter = 1

if (msg[0] === '0') {
  console.log('not possible')
}

for (let i = 2; i <= size; i++) {
  possibleStrings[i] = 0
  if (msg[i - 1] > '0') {
    possibleStrings[i] = possibleStrings[i - 1]
    counter = possibleStrings[i]
  }
  if (msg[i - 2] === '1' || msg[i - 2] === '2' && msg[i - 1] < '7') {
    possibleStrings[i] += possibleStrings[i - 2]
    counter = possibleStrings[i]
  }
}
console.log(possibleStrings, possibleStrings[size], counter)