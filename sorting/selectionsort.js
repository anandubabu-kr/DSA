let arr = [30, 25, 24, 12, 3, 1, 1]

let i = 0
let n = arr.length
let steps = 0
let swaps = 0
while (i < n) {
    let j = i + 1
    steps++
    while (j < n) {
        if (arr[i] > arr[j]) {
            swaps++
            let x = arr[j]
            arr[j] = arr[i]
            arr[i] = x
        }
        j++
    }
    i++
}

console.log(arr)
console.log('swaps : ', swaps, 'steps : ', steps)

/**
 * The most straight approch
 * 1. starts from the first element and loops through the array if any element is smaller immedietely swaped
 * the steps is repeated from next element
 * in each step the beginnig of the array is sorted
 */