function shuffle(arr){
    //Implement this function
	let i=0
	let j= Math.round(arr.length/2)
	let newarr=[]
	while(i<arr.length/2){
		newarr.push(arr[i])
		newarr.push(arr[i+j])
		i++
	}
	return newarr
}

let arr=[1,3,5,7,2,4,6]
console.log(shuffle(arr))

