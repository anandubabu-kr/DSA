
function missingNumbers(arr, brr) {
    let res = []
    let i = 0
    let j = 0
    arr.sort(function (a, b) { return a - b })
    brr.sort(function (a, b) { return a - b })
    let total = brr.length
    let sub = arr.length
    while (i < total || j < sub) {
        if (brr[i] == arr[j]) {
            j++
            i++
        } else {
            res.push(brr[i])
            i++
        }
    }

    return res
}


    // for (let search of arr) {
    //     for (var num of brr) {
    //         if (num == search)
    //             break
    //     }
    //     if (num == brr[brr.length - 1]) {
    //         res.push(search)
    //     }
    // }