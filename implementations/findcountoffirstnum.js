let arr=[1,2,3,5,4,5,2,,3,4,1,6,1,1,1]
let arrlen=arr.length
let firstele=arr[0]
let inp;
let count=1


for (let i =1;i<arrlen;i++){
	inp=arr[i]
	if (inp==firstele){
		count++
	}
}
console.log(count)