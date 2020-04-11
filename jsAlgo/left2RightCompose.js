function left2WriteCompose(funcList, xVal) {
    var res = xVal
    for (i = 0; i < funcList.length; i++) {
        var fn = funcList[i]
        res = reverseCall(res)

        function reverseCall(newVal) {
            return fn(newVal)
        }
    }
    return res
}


var funcArr = [
    x => x * 2,
    x => x + 1,
    x => x - 5,
    x => x - 10,
    x => x + 40
]
var iVal = 100
var fnRes = left2WriteCompose(funcArr, iVal)
console.log(fnRes)
