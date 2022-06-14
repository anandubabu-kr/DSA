function icecreamParlor(m, arr) {
    let res = []
    let length = arr.length
    let i = 0
    while (i < length - 1) {
        let j = i + 1
        if (arr[i] < m) {
            while (j < length) {
                console.log(arr[i], arr[j], m)
                if (arr[i] + arr[j] == m) {
                    res.push(i + 1)
                    res.push(j + 1)
                }
                j++
            }
        }

        i++
    }
    return res
}