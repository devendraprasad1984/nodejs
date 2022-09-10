/*
* This problem was asked by Amazon.
Given a string, find the longest palindromic contiguous substring. If there are more than one with the maximum length, return any one.
For example, the longest palindromic substring of "aabcdcb" is "bcdcb". The longest palindromic substring of "bananas" is "anana".
* */
function findLongestPalindrom(str) {
    let size = str.length
    let res = ''

    function centeredPalindrom(left, right) {
        while (left >= 0 && right < size && str[left] === str[right]) {
            left--
            right++
        }
        return str.slice(left + 1, right)
    }

    for (let i = 0; i < size - 1; i++) {
        let oddPal = centeredPalindrom(i, i + 1)
        let evenPal = centeredPalindrom(i, i)
        if (oddPal.length > res.length) {
            res = oddPal
        }
        if (evenPal.length > res.length) {
            res = evenPal
        }
    }
    console.log('longest palindrom is', res)
}

findLongestPalindrom('aabcdcb') //bcdcb
findLongestPalindrom('bananas') //bananas
