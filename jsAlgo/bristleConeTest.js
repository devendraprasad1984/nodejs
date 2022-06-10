//find if lottery tickets are lucky or not.
//12 34 13 46 57 => form new number and divide by 5, if it is, then lucky else unlucky


let nums = "12 34 13 46 57"
let numsArray = nums.split(" ").map(x => parseInt(x))
let newNum = ''
for (let i of numsArray) {
    newNum += (i % 10).toString()
}
let isDivisibleBy5 = parseFloat(newNum) % 5
let isLucky = isDivisibleBy5 === 0 ? true : false
console.log(numsArray, newNum, isDivisibleBy5, (isLucky ? "LUCKY": "UNLUCKY"))
