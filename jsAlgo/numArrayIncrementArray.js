//number array to increment by 1 and retain the array
//[1,1,2]=>[1,1,3]
//[9,9]=>[1,0,0]

//dynamic programing question
//take iterative approach and consider edge cases
//take recursive approach
//compare the best optimum solution

let arr=[9,9,9];
let num1=parseInt(arr.join(''));
let num2=num1+1;
let arr1=num2.toString().split('')
let x=num2.toString()
let arr2=[]
for(let i in x){
    arr2.push(parseInt(x[i]))
}
console.log(arr,arr2);


//iterative
arr=[1,3,1];
let l=arr.length-1;
lnum=arr[l];
arr1=arr.map(x=>x);
let carry=false;
if(lnum!==9){
    arr1[l]+=1;
    carry=false;
}else{
    let n=0;
    for(let i=l;i>=0;i--){
        if(arr[i]===9 && carry===false){
            n=arr[i]+1;
        }else{
            n=(carry===true?arr[i]+1:arr[i]);
        }
        carry=false;
        if(n===10){
            arr1[i]=0;
            carry=true;
        }else{
            arr1[i]=n;
            break;
        }
    }
    if(arr[0]===9 && arr1[0]===0){
        arr1.unshift(1);
    }
}
console.log(arr,arr1);





