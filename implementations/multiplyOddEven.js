var nums = [1,2,3,4,5,6]
function modifyArray(nums) {
    let i=0
    while(i<nums.length){
        if(nums[i]%2){
            nums[i]*=3
        }else{
            nums[i]*=2
            
        }
        i++
    }
    return nums
}

console.log(modifyArray(nums))