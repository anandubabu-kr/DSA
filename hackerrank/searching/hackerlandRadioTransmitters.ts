function hackerlandRadioTransmitters(building: number[], range: number): number {
    let i: number = 0
    let n: number = building.length
    building.sort(function (a, b): number { return a - b })
    console.log(building)
    let count: number = 0
    while (i < n) {
        count++
        let tower: number = building[i] + range
        while (i < n && building[i] <= tower) i++
        let lastHome: number = building[i - 1] + range
        while (i < n && building[i] <= lastHome) i++

    }
    return count
}

/**
 * - Notes 
 * We will start from the first element 
 * 
 * The variable, tower will hold the best optimal home to place the tower, 
 * which is building[i]+range
 * 
 * This building may not be there so we will go through all buildings within
 * the range. If a building is out of that range the last one will be the
 * best place
 * 
 * Then we have to find the last building which can be covered by that tower
 * 
 * Since the first while loop is exiting when it finds a building next of tower
 * last home will be building[i-1]+range. 
 * 
 * In the next loop we will look for the last buildings location. Loop 
 * will exit when i holds next towers first building, with that value outer 
 * loop will proceed :)
 * 
 * Ech time outer loop start there is a new tower about to place so count 
 * is incremented there 
 * 
 * Since the loop control variable and its range is same in both inner and 
 * outer loops; time complexity is O(n)
 * 
 * - Anandu Babu
 */