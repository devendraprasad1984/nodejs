function reduce(arr, func, init) {
    let res;
    let counter=0
    let isArray=Array.isArray(arr)
    for(let i in arr){
        let val=arr[i]
        if(counter===0){
            res= isArray ? func(init, val) : func(init, val, i)
        }else{
            res= isArray ? func(init, val) : func(init, val, i)
        }
        counter++
    }
    return res
}
const result1 = reduce( [1, 2, 3],function(sum, n) {
  return sum + n;
}, 0);
console.log(result1)
// => 6

const result2 = reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
    (result[value] || (result[value] = [])).push(key);
    return result;
}, {});
console.log(result2)
// => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)