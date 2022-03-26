function solution(shoes) {
    let obj = {}
    for (let shoe in shoes) {
        let type = shoes[shoe][0]
        let size = shoes[shoe][1]
        if (obj[size] === undefined) {
            obj[size] = [type]
        } else {
            obj[size].push(type)
        }
    }
    let values = Object.values(obj)
    let countOfZero = 0, countOfOne = 0
    for (let v of values) {
        switch (v) {
            case 0:
                countOfZero += 1
            case 1:
                countOfOne += 1
        }
    }
    return countOfZero === countOfOne
}


console.log(solution([
    [0, 21], [1, 23], [0, 23], [1, 23]
]))
