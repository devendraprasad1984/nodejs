console.log("traditional way")
const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
    console.log(i, arr[i])
//pass needed parameter to inside function so that it becomes available to inner function
    setTimeout(function (i_local) {
        console.log("inner local variable: " + i_local)
        return function () {
            console.log('Index: ' + i_local + ', element: ' + arr[i_local]);
        }
    }(i), 3000);
}


console.log("ES6 way")
//ES6 -let creates a new binding and hence it becomes available to inner function as well
for (let i = 0; i < arr.length; i++) {
    console.log(i, arr[i])
    setTimeout(function () {
        console.log('Index: ' + i + ', element: ' + arr[i]);
    }, 3000);
}
