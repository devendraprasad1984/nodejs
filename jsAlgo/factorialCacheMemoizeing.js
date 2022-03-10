let cache = {};
function factorial(num) {
    //check num in cache, if found, return it
    let isFoundInCache = cache[num] !== undefined;
    let output = isFoundInCache ? cache[num] : -1;
    console.log(isFoundInCache ? `returning ${num} from cache: ${output}`:'couldnt find in cache, need to calculate')
    if (output !== -1) return output;

    //if not found in cache, calculate and save it cache and return it
    let fact=1
    for (let i = num; i >0; i--) {
        fact = fact * i; //factorial
    }
    // console.log('calc',num, fact)
    console.log(`calculating factorital of ${num} is ${fact}`)
    cache[num] = fact;
    return fact;
}

console.log(factorial(2), factorial(7), factorial(3));
console.log(cache);

/*
2=1*2
3=1*2*3
4=1*2*3*4
*/
//can we store each factorial as cache and when bigger factorial comes in, take existing facttorial from it
