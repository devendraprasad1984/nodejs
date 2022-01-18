const reverseIntegerMathsWay = (int) => {
    let parsedInt = parseInt(int, 10)
    console.log('parsedInt', parsedInt)
    let digit = 10
    let reversedInt = 0
    while (parsedInt) {
        digit = parsedInt % 10
        reversedInt = reversedInt * 10 + digit
        parsedInt = (parsedInt / 10) | 0
        console.log('in every iteration', 'digit', digit, 'reversedInt', reversedInt, 'parsedInt', parsedInt)
    }
    return reversedInt
}

console.log(reverseIntegerMathsWay(10019202772))