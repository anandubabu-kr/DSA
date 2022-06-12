function getSecondLargest(nums) {
    // Complete the function
    let max=-Infinity
    let secLarge=-Infinity
    for(let num of nums){
        if(num>max){
            secLarge=max
            max=num
        }else if(num<max&&num>secLarge){
            secLarge=num
        }
    }
    // console.log(secLarge)
    return secLarge
}