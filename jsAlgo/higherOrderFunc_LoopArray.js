var names=[
    'DP',
    'as',
    'kartikey',
    'akshat'
]
console.log(names)
names.reduce(function (k,v) {
    console.log("value of array is : "+k+"->"+v)
})


var words = ['space', 'moon','Devendra', 'crater'];
var checkLongest=function (word1,word2) {
    if(word1.length>word2.length)
        return word1
    else
        return word2
}
var longestWord=words.reduce(checkLongest)
console.log(longestWord)
