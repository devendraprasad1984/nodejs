function test28() {
    let tempStr = 'fatigue'.split('')
    let str1 = 'fatigue'
    let str2 = 'tiguefa'
    let iterationCounter = 0
    for (let i = 0; i < str1.length; i++) {
        let b = str1[str1.length - i - 1]
        tempStr.unshift(b)
        let newStr = tempStr.join('').substring(0, tempStr.length - i - 1)
        iterationCounter++
        console.log(str1, str2, iterationCounter, newStr)
        if (newStr === str2) break
    }
    return iterationCounter === 0 ? -1 : iterationCounter
}

//console.log(test28())


function test29() {
    // You are provided a string containing a list of positive integers separated by a space (" ").
    // Take each value and calculate the sum of its digits, which we call it's "weight".
    // Then return the list in ascending order by weight, as a string joined by a space.
    //
    // For example 99 will have "weight" 18, 100 will have "weight"
    // 1 so in the ouput 100 will come before 99.
    //
    // Example:
    //
    //     "56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes:
    //     "100 180 90 56 65 74 68 86 99"
    //
    // When two numbers have the same "weight", let's consider them to be strings and not numbers:
    //
    // 100 is before 180 because its "weight" (1) is less than the one of 180 (9)
    // and 180 is before 90 since, having the same "weight" (9) it comes before as a string.
    //
    //     All numbers in the list are positive integers and the list can be empty.

    let str1 = "2000 65 56 11 11 74 180 99 68 86 100 90".split(" ")
    let strSorted = str1.sort((a, b) => {
        return a.toString().localeCompare(b.toString())
    })
    console.log('strSorted', strSorted)
    let sums = []
    let onlySums = []
    let weights = []
    for (let pos in strSorted) {
        let sum = 0
        let digits = parseInt(strSorted[pos])
        for (let i of digits.toString()) {
            sum += parseInt(i)
        }
        onlySums.push(sum)
        sums.push([{pos: parseInt(pos), sum, val: strSorted[pos], done: false}
        ])
    }
    onlySums.sort((a, b) => a - b) //sorting sums
    for (let i of onlySums) {
        for (let j of sums) {
            if (j[0].sum === i && j[0].done === false) {
                j[0].done = true
                weights.push(strSorted[j[0].pos])
                break
            }
        }
    }
    console.log('sums', sums)
    console.log('weights', weights)
    return weights.join(' ')
}

function test30() {
    // "Chennai" -> "Banglore"
    // "Bombay" -> "Delhi"
    // "Goa"    -> "Chennai"
    // "Delhi"  -> "Goa"
    //
    // Output:
    //     Bombay->Delhi, Delhi->Goa, Goa->Chennai, Chennai->Banglore
    //touring of cities
    let arr = [
        ["chennai", "bengalore"],
        ["bombay", "delhi"],
        ["goa", "chennai"],
        ["delhi", "goa"]
    ]
    let map = {} //for from->to direction
    let rmap = {} //for to->from direction
    for (let i of arr) {
        map[i[0]] = i[1]
        rmap[i[1]] = i[0]
    }
    //loop every key in rmap and see if its present, if not, that where we need to start
    let kmap = Object.keys(map)
    let rkmap = Object.keys(rmap)
    let start = ''
    for (let i of kmap) {
        if (rkmap.indexOf(i) === -1) {
            //found where to start
            start = i
            break
        }
    }
    let retVal = []
    console.log(map, rmap, kmap, rkmap, start)
    if (start !== '')
        retVal.push(start)
    while (start !== '' && start !== undefined) {
        let location = map[start]
        if (location === '' || location === undefined) break
        retVal.push(location)
        start = location

    }
    console.log('itenery', retVal)
    return retVal.join(', ')
}

console.log(test30())
