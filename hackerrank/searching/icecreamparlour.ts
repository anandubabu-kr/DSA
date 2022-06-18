function icecreamParlor(m: number, arr: number[]): number[] {
    // Write your code here
    let res: number[] = []
    console.log(m, arr)
    let i: number = 0
    let n: number = arr.length
    while (i < n) {
        let j = i + 1
        while (j < n) {
            if (arr[i] + arr[j] === m) {
                res.push(i + 1)
                res.push(j + 1)
            }
            j++
        }
        i++
    }
    return res
}

/**
 * Logic 
 * basically a linear search to find if there exist a paire that will sum up to m
 * staight forward : 
 * starting from first element if there is a number adding to m its pushed to res
 * 
 */