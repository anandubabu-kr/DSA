function insertionSort1(n, arr) {
    let i: number = 1
    let j: number
    let currentValue: number
    while (i < n) {
        currentValue = arr[i]
        j = i - 1
        while (j >= 0 && arr[j] > currentValue) {
            arr[j + 1] = arr[j]
            // console.log(arr.join(' '))
            j--
        }
        arr[j + 1] = currentValue
        i++
    }
    console.log(arr.join(' '))
}