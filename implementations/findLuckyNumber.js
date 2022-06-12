
function findLuckyNumber(nums){
    // implement this function
    let res=-1
    let count=0
    for (let num of nums){
        count=0                 //Why it should start from 0 ?
        for(let x of nums){
            if(x==num){
                count++
            }
        }
        if(count==num){
          res=num
            break;
        }
    }
    return res
  }

  arr=[2,5,3,4,3,3]

console.log(findLuckyNumber(arr))