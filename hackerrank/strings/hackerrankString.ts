function hackerrankInString(s: string): string {
    // Write your code here
    let targer:string='hackerrank'
    let i:number=0
    let len:number=s.length
    let expect:number=0

    for (let char of s ){
        console.log(char,targer[i])
        if(char==targer[i]){
            i++
            if (i==10){
                return 'YES'
            }
        }
    }
    return 'NO'

}