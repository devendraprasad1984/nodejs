// input set = [1, 2, 3]
// power set = [[], [1], [2], [3], [1, 2], [2, 3], [1, 3] [1, 2, 3]]
//convert to binary number and check 1's cardinal position and return those values from array
//eg i=7 in power loop, will give binary as 111, we need to print back 1's cardinal which is at 0,1,2 and arr[0],arr[1],arr[2]

"use strict" //to support let
function generate_power_set(arr) {
    // let arr = [1, 2, 3];
    arr=arr.sort((a,b)=>a-b);
    let l = Math.pow(2, arr.length);
    let pw = [];
    pw.push([]);
    for (let i = 0; i < l; i++) {
        if (i < arr.length) {
            pw.push([arr[i]]);
        } else {
            let bin = i.toString(2).split('').reverse();
            let tmp = [];
            let bl=bin.length;
            for (let j = 0; j < bl; j++) {
                if (bin[j] === '0') continue;
                else tmp.push(arr[j]);
            }
            let found = false;
            for (let k in pw) {
                if (pw[k].join('') === tmp.join('')) {
                    found = true;
                    break;
                }
            }
            if (found == false)
                pw.push(tmp);
        }
    }
    return pw;
}

// console.log(pw);
// console.log(generate_power_set([1,2,3]));
module.exports = generate_power_set;
// complexity nlogn, memory to array size 2n

