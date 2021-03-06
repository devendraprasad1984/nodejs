"use strict"
//https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php
//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript

function reverseAString(num) {
    let reverseNum = ""
    num = num.replace(' ', '')
    for (let i = num.length - 1; i >= 0; i--) {
        reverseNum += num[i]
    }
    // console.log("one line reverse",num.split('').reverse().join(''))
    return reverseNum
}

let num = "32243"
console.log("reverse of ", num, "is", reverseAString(num))

let check_palindrom = (vals) => {
    if (vals === reverseAString(vals)) {
        console.log("vals", vals, "is A PALINDROME")
    } else {
        console.log("vals", vals, "is NOT A PALINDROME")
    }
}

check_palindrom("madam")
check_palindrom("naveen")
check_palindrom("nurses run")


let generateCombination = (word) => {
    let char_arr = word.split('')
    let combinations = []
    combinations.push(word)
    char_arr.map((v) => {
        combinations.push(v)
        char_arr.map((k) => {
            if (v !== k) {
                let new_combi = v + k
                let rev = reverseAString(new_combi)
                let idx = combinations.indexOf(rev)
                // let idx=combinations.find(el=>el===rev)
                // console.log(new_combi,rev, idx)
                // if(typeof idx==='undefined')
                if (idx === -1)
                    combinations.push(new_combi)
            }
        })
    })
    console.log("all possible unique combinations of", word, combinations)
}

generateCombination("dog")

let sort_alphabets = (stringVal) => {
    let new_word_arr = stringVal.split("")
    let sort_word = new_word_arr.sort()
    console.log("sorted array", sort_word)
    return sort_word.join("")
}

let word = "webmaster"
let sort_word = sort_alphabets(word)
console.log("sorted value for", word, "is", sort_word)

//byval, byref case - objects are byref default
let change_first_letter_upper_case = (string) => {
    let new_str = string + " - updated"
    string = new_str
}
let change_first_letter_upper_case_ref = (obj) => {
    let vowel_counter = 0
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let words_array = obj.string.split('')
    let last_char = ''
    words_array.map((x, idx) => {
        if (last_char === ' ' || last_char === '') {
            words_array[idx] = x.toUpperCase()
        }
        if (vowels.indexOf(x) >= 0)
            vowel_counter += 1
        last_char = x
    })
    return {string: words_array.join(''), vowels: vowel_counter}
}
word = "the quick brown fox"
change_first_letter_upper_case(word)
console.log("updated values is-BY Value", word)
word = {string: "the quick brown fox"}
let new_obj = change_first_letter_upper_case_ref(word)
console.log("updated values is - BY Ref", new_obj)

let get_longest_word = (string) => {
    console.log("typeof '", string, "' is", (typeof string))
    let words = string.split(' ')
    let max_len = words[0].length
    let longest_word = words[0]
    words.map((x, id) => {
        if (x.length > max_len) {
            max_len = x.length
            longest_word = x
        }
    })
    return longest_word
}
console.log("longest word in 'Web Development Tutorial'", get_longest_word("Web Development Tutorial"))

let generate_identity_matrix = (n) => {
    let matrix = []
    for (let i = 0; i < n; i++) {
        let row = []
        for (let j = 0; j < n; j++) {
            if (i === j)
                row.push(1)
            else
                row.push(0)
        }
        matrix.push(row)
    }
    return matrix
}
console.log("identity matrix", generate_identity_matrix(5))
console.log("identity matrix", generate_identity_matrix(10))

Array.prototype.sort_asc = function () {
    return this.sort((a, b) => a - b)
}
Array.prototype.sort_dsc = function () {
    return this.sort((a, b) => b - a)
}

let find_second_lowest_greatest = (arr) => {
    let new_arr = []
    // arr=arr.sort((a,b)=>a-b) //integer sorting in ascending (a-b), descending(b-a) order otherwise it assumes strings
    arr.sort_asc()
    let size = arr.length
    for (let i = 0, j = size - 1; i < size, j >= 0; i++, j--) {
        // console.log(arr[i],arr[j])
        new_arr.push(arr[i] + "=>" + arr[j])
    }
    return new_arr[1]
}

// let arr=[1,2,3,4,5]
//array and objects are passed by references
let arr = [41, 35, 89, 9, 151]
console.log("second lowest and second greatest of", arr, "is", find_second_lowest_greatest(arr))
arr = [12, 43, 234, 32, 465, 32, 68, 43, 25, 4, 45, 674]
console.log("sorted using Array.prototype binding", arr, "is")
console.log(arr.sort_asc())
console.log(arr.sort_dsc())


/*
According to Wikipedia : In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.
* */
Array.prototype.sum = function () {
    let sum = 0
    this.map(x => sum += parseInt(x))
    return sum
}

let factors_of_positive_number = (num) => {
    let factors = []
    for (let i = 1; i < num; i++) {
        if (num % i === 0)
            factors.push(i)
        // if (num / i !== i)
        //     factors.push(num / i);
    }
    return factors.sort_asc()
}

let perfect_number = (num_array) => {
    let final_obj = num_array.sort_asc().map((num) => {
        let all_divisors = factors_of_positive_number(num)
        let sum_all = all_divisors.sum()
        let is_perfect = (sum_all === num ? true : false) && ((sum_all + num) / 2 === num ? true : false)
        return {perfect: is_perfect, divisors: all_divisors, sum_of_all: sum_all}
    })
    return final_obj
}
let perfect_numbers_arr = [6, 28, 45, 496, 8128]
console.log("perfect number", perfect_numbers_arr, perfect_number(perfect_numbers_arr))

let convert_amount_coins_dp = (amount, valid_coins) => {
    let cLen = valid_coins.length
    let coins_converted = Array(cLen)
    let mLen = coins_converted.length
    console.log("valid coins", valid_coins, coins_converted)
    for (let i = 0; i <= mLen; i++) {
        coins_converted[i] = Array(amount + 1)
        coins_converted[i][0] = 1
    }
    let prevPerms = 0
    for (let a = 1; a <= cLen; a++) {
        for (let b = 1; b <= amount; b++) {
            coins_converted[0][b] = 0
            prevPerms = coins_converted[a - 1][b]
            prevPerms += valid_coins[a - 1] <= b ? coins_converted[a][b - valid_coins[a - 1]] : 0
            coins_converted[a][b] = prevPerms
        }
    }
    // console.log(coins_converted)
    return coins_converted[cLen][amount]
}

let amount_to_coin = (amount, coins) => {
    // let coins_copy=coins //by ref - shallow copy
    let coins_copy = Object.assign([], coins) //by val - deep copy
    let left_amt = 0
    if (amount === 0) {
        return []
    } else {
        if (amount >= coins_copy[0]) {
            left_amt = (amount - coins_copy[0])
            return [coins_copy[0]].concat(amount_to_coin(left_amt, coins_copy))
        } else {
            coins_copy.shift()
            return amount_to_coin(amount, coins_copy)
        }
    }
}

let distinct_func = (value, index, self) => {
    return self.indexOf(value) === index
}

Array.prototype.distinct = function () {
    console.log("getting distinct for", this)
    let new_arr = this.map((x, id) => {
        if (this.indexOf(x) === id)
            return x
    })
    // return new_arr.filter(x=>x===true)
    return new_arr.filter(x => x !== undefined)
}
Array.prototype.distinct_es6 = function () {
    return Array.from(new Set(this))
}


let amount_to_coin2 = (amount, coins) => {
    let left = amount
    let used_coins = []
    if (amount === 0) {
        return []
    } else {
        for (let i = 0; i < coins.length; i++) {
            let cur_coin_val = coins[i]
            if (left - cur_coin_val >= 0) {
                left -= cur_coin_val
                used_coins.push(cur_coin_val)
                while (left > cur_coin_val) {
                    left -= cur_coin_val
                    used_coins.push(cur_coin_val)
                }
            }

        }
    }
    // let distinct_coins=[new Set(used_coins)]
    // let distinct_coins=used_coins.filter(distinct_func)
    let distinct_coins = used_coins.distinct()
    return {
        used: used_coins,
        num: used_coins.length,
        distinct_coins: distinct_coins,
        distinct_count: distinct_coins.length
    }
}

let coins = [25, 10, 5, 2, 1].sort_dsc()
console.log("amount converted to coins", amount_to_coin(46, coins), "original copy of coins", coins)
console.log("amount converted to coins", amount_to_coin2(46, coins))

console.log([20, 102, 20, 102, 102, 20].distinct())
console.log([25, 10, 1, 10].distinct())

var items = [4, 5, 4, 6, 3, 4, 5, 2, 23, 1, 4, 4, 4]
var uniqueItems = Array.from(new Set(items))
console.log("unique", items, uniqueItems, items.distinct_es6())

let get_exponent = (b, n) => {
    let expo = 1
    for (let i = 0; i < n; i++) {
        expo *= b
    }
    return expo
}
console.log("exponent", get_exponent(2, 3))


"use strict"
/*
Sachin likes sweets a lot. So, he goes to a market of sweets. There is a row of sweet stalls. Every sweet stall has different sweets. To save some time, he decided to buy sweets from contiguous stalls. So, he can buy from as many stalls as he wants, but all of those stalls need to be contiguous. He also decided to buy only 1 kg of sweets from each of those stalls. Cost of 1 kg of sweets for each stall is given. There is a strange rule of billing in that market. And that rule is as follows- Total cost of all sweets bought is sum of the cost of all sweets multiplied by the cost of sweet he bought at the end. e.g. if he buys sweets having cost 2, 3, 4 in the same order than total cost of sweets will be 2*4+3*4+4*4=36. Now he wonders what will be the total cost of all possible ways of buying sweets. Can you help him. Because this number could be large, you should take modulo of the final result by 10^9+7.



Input Format

Your function contains a single argument- A One dimensional Integer array of Size N in which ith element denotes the cost of 1 kg sweets from ith stall.

First line of input contains an Integer N denoting the size of Array.

Next N lines of input each containing a single integer from 1 to 9.

* */
//
//
// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// })
//
// readline.question(`What's your name?`, (name) => {
//     console.log(`Hi ${name}!`)
//     readline.close()
// })
//


let generateArrayCombination = (new_arr) => {
    let combinations = []
    let arr = new_arr.slice(1)
    let mlen = arr.length
    combinations.push(arr)
    for (let i = 0; i < mlen; i++) {
        combinations.push([arr[i]])
        for (let j = i; j < mlen; j++) {
            if (arr[j] - arr[i] === 1)
                combinations.push([arr[i], arr[j]])
        }
    }
    let final_sum = 0
    combinations.map(xarr => {
        let last_val = xarr[xarr.length - 1]
        xarr.map(xval => {
            final_sum += xval * last_val
        })
    })
    console.log(arr, "all possible unique combinations of", combinations)
    return final_sum
}
let arr = [3, 1, 2, 3]
console.log("final sum - buying algo output", generateArrayCombination(arr))


"use strict"
/*
Thinking Hat..!!! (100 Marks)
Rohan was asked to solve the following problem:
For any given permutation in range(1,2,3...n), Rohan calculates two values S1 and S2.
where,
S1 = number of pairs(i , j) in that permutation such that i < j and perm[i] > perm[j] and
S2 = Sum(max(0 , i - perm[i])) where perm[i] is the value present at index i in the current permutation.

For example : For permutation(4, 1, 2, 3)
Value of S1 = 3   ( {4 , 1} , {4 , 2} , {4 , 3} )
S2 = max(0 , 1 - 4) + max(0 , 2 - 1) + max(0 , 3 - 2)  + max(0 , 4 - 3) = 0 + 1 + 1 + 1 = 3
We can see value of both S1 and S2 are equal.

Now you are provided the length of permutation and some initial value of permutation, you have to count the total number
of valid permutation of  given length such that for each permutation value of S1 and S2 are equal.


Input Format
First line contain length of the permutation ( N )
Second line contain length of the initial prefix ( K )
Next K lines contain a single integer

A,B,C=2,3,5
1,4,A,B,C
1,4,2,3,5
1,4,3,2,5
1,4,3,5,2
1,4,5,3,2
1,4,5,2,3
1,4,2,5,3

Constraints
 1<= length<= 30

Output Format
You need to print in how many ways(integer only) we can augment the prefix to a complete permutation so that the Rohan's algorithm gives correct results.
(Output your result in range(-2^31 to 2^31 - 1))

Note : Output should be -1 if input is invalid.


Sample TestCase 1
Input
5
2
1
4
Output
3

*/

Array.prototype.sort_dsc = function () {
    return this.sort((a, b) => b - a)
}
Array.prototype.sum = function () {
    let sum = 0
    this.map(x => sum += parseInt(x))
    return sum
}
let calc_permutation_output = (orig_permu) => {
    let total_valid_permutations = 0
    orig_permu.map(x_arr => {
        let new_arr = Object.assign([], x_arr) //deep copy
        let max_val = new_arr.sort_dsc()[0]
        let combi = []
        let sum_max_arr = []
        // x_arr.map((x,idx)=>{
        //     if(x!==max_val && max_val>x){
        //         combi.push([max_val,x])
        //     }
        //     sum_max_arr.push(Math.max(0,(idx+1)-x))
        // })
        x_arr.map((x, i) => {
            sum_max_arr.push(Math.max(0, (i + 1) - x))
            x_arr.map((y, j) => {
                if (i < j && x > y) {
                    combi.push([x, y])
                }
            })
        })
        let S1 = combi.length
        let S2 = sum_max_arr.sum()
        if (S1 === S2) {
            total_valid_permutations += 1
        }
        console.log("combination", combi, "sum", sum_max_arr)
        console.log("S1", S1, "S2", S2, "total_valid_permutations:", total_valid_permutations)
        console.log("--------------")
    })

    return total_valid_permutations
}

function shuffle(array) {
    // array.sort(() => Math.random() - 0.5);
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    return array
}

Array.prototype.distinct_es6 = function () {
    return Array.from(new Set(this))
}

let permutations = new Set()
let input = [5, 2, 1, 4]
let n = input[0]
let inits = input.slice(2)
let orig_inits = Object.assign([], inits)
let cut_range = []
for (let i = 1; i <= n; i++) {
    if (inits.indexOf(i) == -1)
        cut_range.push(i)
}
let clen = cut_range.length
let mlen = Math.pow(2, clen);
permutations.add(inits.concat(cut_range).join(''))
var matrix = []
for (let i = 0; i < mlen; i++) {
    matrix = shuffle(Object.assign([], cut_range));
    permutations.add(inits.concat(matrix).join(''))
}
let perms_str = Array.from(permutations)
let distinct_perm = []
perms_str.map(x => {
    distinct_perm.push(x.split('').map(y => parseInt(y)))
})
console.log(distinct_perm)
console.log("total count of valid permutations where S1=S2 is:", calc_permutation_output(distinct_perm))