
function getSecondLargest(nums) {
    let narr=[]
    for(let i=0;i<nums.length;i++){
        if(narr.indexOf(nums[i])===-1){
            narr.push(nums[i])
        }
    }
    let x =narr.sort((a,b)=>a-b)
    return x[x.length-2]
}

getSecondLargest([2,3,6,6,5])

