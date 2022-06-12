function countingValleys(steps, path) {
    // Write your code here
    /**
     * If the hiker moves upwards from seel level it is a vally, 
     * So we have to check if the currentLevel of the hiker is 0;
     * If so he can and he moves upwards it means the hiker visited a vally
     * So the count can be increased
     */
    let currentLvl=0
    let countVally=0
    for(let step of path){
        if(step=='U'){
            currentLvl++
            if (currentLvl==0){
                countVally++
            }
        }else{
            currentLvl--
        }
    }
    console.log(countVally)
    return countVally
}