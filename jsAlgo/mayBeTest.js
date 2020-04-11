// Write a maybe function that, given a predicate (a function at returns a boolean value) and any other function, only calls the latter if
// the former returns true: maybe(x => x > 100, myFn). If the predicate returns true, the value of x should be passed to myFn. If it the predicate returns false,
// x should be returned unchanged.

var mayBe = function (x) {
    let test=x > 100
    if(test){
        return myFunction
    }else{
        return x
    }
}
var myFunction=function () {
    console.log("myFunction is called, predicate is true")
}

var retunrVal=mayBe(110)
if(typeof retunrVal==="function")
    retunrVal()
else
    console.log(retunrVal)