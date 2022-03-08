//find booleans array in numbers such that numbers[i]=(i+1)*x, left<=x>=right

function solution(numbers, left, right) {
    let results = []
    for (let i = 0; i < numbers.length; i++) {
        let x = parseInt(numbers[i] / (i + 1))
        results.push(x >= left && x <= right && numbers[i] === (i + 1) * x)
    }
    return results
}



