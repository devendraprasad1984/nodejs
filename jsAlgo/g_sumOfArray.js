"use strict"
module.exports=(arr)=>{
    // let sum=0;
    // for(let i in arr){
    //     sum+=arr[i];
    // }
    // return sum;
    return arr.reduce((x,y)=>x+y);

}