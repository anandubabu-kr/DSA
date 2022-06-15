let arr: number[] = [1, 2, 3, 24, 1]

let i: number = 1;
let current: number;
for (let x of arr) {
    current=x
    if (x > arr[i]) {
        current=arr[i]
        arr[i]=x
    }
}