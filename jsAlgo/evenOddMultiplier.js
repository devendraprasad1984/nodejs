/*multiply odd by 3 and even by 2*/
nums=[1,2,3,4,5]
//output=[3,4,9,8,15]
output=nums.map(x=>x % 2 ===0?x*2:x*3)
console.log(nums,output)