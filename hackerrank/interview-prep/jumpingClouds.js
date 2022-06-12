function jumpingOnClouds(c) {
    // Write your code here
    /**
     * We have to find the minimum steps to be taken to reach the final 
     * cloud. The maximum steps we can take at time is to jump 2 clouds. 
     * So attepts to jump to a safe cloud with +2 is not possible move +1
     * step will be increased in each case
     */
    let currentCloud = 0
    let size=c.length
    let steps=0
    while(currentCloud<size-1){
        if(c[currentCloud+2]==1){
            currentCloud++
        }else{
            currentCloud+=2
        }
        steps++
        console.log('Current Cloud : ',currentCloud)
    }
    console.log(steps)
    return steps
}