/*
 * This problem was asked by Amazon.
 Run-length encoding is a fast and simple method of encoding strings. The basic idea is to represent repeated successive characters as a single count and character. For example, the string "AAAABBBCCDAA" would be encoded as "4A3B2C1D2A".
 * */

//"AAAABBBCCDAA"=> "4A3B2C1D2A".

function encoding(str) {
  let dict = []
  let size = str.length
  for (let i = 0; i < size; i++) {
    let prevChar = str[i]
    let counter = 1
    for (let j = i + 1; j <= size; j++) {
      let newChar = str[j]
      if (newChar === prevChar) {
        counter++
      } else if (newChar !== prevChar) {
        dict.push(counter + prevChar)
        prevChar = newChar
        i = i + counter - 1
        break
      }
    }
  }
  return dict.join('')
}

console.log(encoding('AAAABBBCCDAA'))