function SeatingStudents(arr) {
    let totalSeets = arr.shift()
    let count = 0
    // console.log(2 - 2)
    for (let i = 1; i < totalSeets; i++) {
        if (arr.indexOf(i) == -1) {
            if (i % 2 == 0) {
                console.log('even', i, i - 2, count)
                if ((i - 2) > 0 && i + 2 < totalSeets && (i != 2)) {
                    if (arr.indexOf(i - 2) == -1) {
                        count++
                    }
                    if (arr.indexOf(i + 2) == -1) {
                        count++
                    }
                }
            } else {
                console.log('odd', i, i - 2, count)
                if (arr.indexOf(i + 1) == -1) {
                    count++
                }
                if (i - 2 > 0 && i + 2 < totalSeets) {
                    if (arr.indexOf(i - 2) == -1) {
                        count++
                    }
                    if (arr.indexOf(i + 2) == -1) {
                        count++
                    }
                }
            }

        }

    }
    // code goes here  
    return count;

}

// keep this function call here 
console.log(SeatingStudents([8, 1,8]));

