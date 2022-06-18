function main(input) {
    let inpRef=input
    if(inpRef%10==0){
        console.log(10)
        return
    }
    let sum=0
    
    while(inpRef>0){
        sum+=inpRef%10
        inpRef=parseInt(inpRef/10)
    }
    console.log(sum)
}