//array and objects behave same way in js
//array is also like object with default keys as integer indexes
//but diff is that you can define keys in object yourself
//see same loop for objects and arrays

let fn_loop = (ar) => {
    let xval = ""
    for (el in arr1)
        xval += el + "->" + arr1[el]+", "
    return xval
}

let arr1 = [1, 2, 3]
arr1.push(4)
console.log(arr1)
//push into array
arr1[arr1.length] = arr1[arr1.length - 1] + 1
console.log(arr1)
for (let i = 0; i < 10; i++) {
    arr1[arr1.length] = arr1[arr1.length - 1] + 1
}
//push into array
console.log(arr1)
console.log("print array", fn_loop(arr1))
arr1 = {a: 1, b: 2, c: 3}
arr1["x"]=4
arr1.y=5
console.log("print object", fn_loop(arr1))


