function marcsCakewalk(calorie) {
    let mindist=0
    calorie.sort((a, b) => { return b - a })
    
    for(let index in calorie){
        mindist+=Math.pow(2,index)*calorie[index]
    }
    return mindist
}