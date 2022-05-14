//no reverse logic, plain loop
let str1 = 'abcdcba'
let str2 = '', str3 = ''
let len = str1.length
let halfLen = Math.floor(len / 2)
let isPalindrom = false
for (let i = 0, j = len - 1; i < halfLen+1, j > halfLen-1; i++, j--) {
    str2 += str1[i]
    str3 += str1[j]
}
console.log(str2, str3)
isPalindrom = (str2 === str3)
console.log(isPalindrom)