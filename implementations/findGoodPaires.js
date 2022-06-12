// let arr = readLine().split(' ')
let arr=[1,2,3,1,1,3]
let i=0
let j;
let count=0
while(i<arr.length){
	j=i+1
    // console.log(i,j)
	while(j<arr.length){
        if(arr[i]==arr[j]){
            console.log(i,':',arr[i],' | ',j,':',arr[j])
			count++
		}
		j++
	}
	i++
}

console.log(count)