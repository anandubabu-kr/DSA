
function balancedSums(arr) {
    let total = 0
    arr.forEach((num) => {
        total += num
        console.log(num, total)

    })
    let i = 0
    let length = arr.length
    let firstSum = 0
    let lastSum = total
    while (i < length) {
        let currentNum = arr.shift()
        lastSum -= currentNum
        if (firstSum == lastSum) {
            return 'YES'
        }
        firstSum += currentNum
        i++
    }
    return 'NO'
}