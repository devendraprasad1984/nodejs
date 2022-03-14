console.log('var creating i in global scope')
for(var i=0; i<5; i++){
    setTimeout(()=>console.log(i))
}// 5 5 5 5 5

console.log('fix using let for block scoped')
for(let i=0; i<5; i++){
    setTimeout(()=>console.log(i))
}// 01,2,3,4

console.log('fix using var and closure scope')
for(var i=0; i<5; i++){
    //concept of closure and iife
    (function(i){
        setTimeout(()=>console.log(i))
    })(i)
}// 0 1 2 3 4


