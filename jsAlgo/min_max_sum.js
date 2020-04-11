// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.
// arr=[1,3,5,7,9],min:1+3+5+7,max: 3+5+7+9
// For example, . Our minimum sum is  and our maximum sum is . We would print
// 16 24

arr = [5, 5, 5, 5, 5];
let min = 0;
let max = 0;
for (let i = 0; i < arr.length; i++) {
    let tmp = [];
    for (let j = 0; j < arr.length; j++) {
        if (i !== j) {
            tmp.push(arr[j]);
        }
    }
    // console.log(tmp);
    let s1 = tmp.reduce((i, v,) => i + v, 0);
    min = (min == 0 ? s1 : (s1 < min ? s1 : min));
    max = (max == 0 ? s1 : (s1 > max ? s1 : max));
}
console.log(min, max);


