//create a 2d array having subarray of 0/1 sequences
var createSubArray = function (ar) {
    let sNew = []
    let sSubArr = []
    let cnt = 0
    for (let i = 0; i < ar.length; i++) {
        if (ar[i] != ar[i + 1]) {
            sSubArr.push(ar[i])
        } else {
            sSubArr.push(ar[i])
            sNew.push(sSubArr)
            sSubArr = []
            cnt += 1
        }
    }
    return sNew;
}

var checkLargestAndEqualZeroAndOnes = function (ar1, ar2) {
    var stempArray = []
    if (ar1.length > ar2.length) {
        stempArray = ar1
    } else {
        stempArray = ar2
    }
    var bCheck = checkIfEqualElements(stempArray)
    if (bCheck)
        return stempArray
    else
        return []
}

var checkIfEqualElements = function (sArrCheck) {
    let zcnt = 0
    let ocnt = 0
    for (let i = 0; i < sArrCheck.length; i++) {
        if (sArrCheck[i] == 0) zcnt += 1
        if (sArrCheck[i] == 1) ocnt += 1
    }
    let bFlag = Boolean
    if (zcnt == ocnt) {
        bFlag = true
    } else {
        bFlag = false
    }
    return bFlag
}

var givenArraySeq = [1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1]
var newArraySubArraySeq = createSubArray(givenArraySeq);
console.log("new sub array is", newArraySubArraySeq)
var largestSubArray = newArraySubArraySeq.reduce(checkLargestAndEqualZeroAndOnes)
if (largestSubArray.length > 0) {
    console.log("largest sub array having equal 0/1 is", largestSubArray)
} else {
    console.log("largest sub array couldnt be found")
}


// var checkLargestAndEqualZeroAndOnes=function(ar1,ar2){
//     var stempArray=[]
//     if(ar1.length>ar2.length){
//         stempArray=ar1
//     }else{
//         stempArray=ar2
//     }
//     // return checkIfEqualElements(stempArray)
//     return (function(sArrCheck){
//         let zcnt=0
//         let ocnt=0
//         for(let i=0;i<sArrCheck.length;i++){
//             if(sArrCheck[i]==0) zcnt+=1
//             if(sArrCheck[i]==1) ocnt+=1
//         }
//         let bFlag=Boolean
//         if(zcnt==ocnt){
//             bFlag=true
//         }else{
//             bFlag=false
//         }
//         return bFlag
//     })(stempArray) +"->"+ stempArray
// }