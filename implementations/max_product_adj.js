let n=readLine()
let i=0
let max=0
let prev=0
let num
let prod
while(i<n){
    num= parseInt(readLine())
    prod=num*prev
    if(prod>max){
        max=prod
    }
    prev=num
    i++
}
console.log(max)