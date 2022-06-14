
function minimumNumber(n, password) {
    let minLenth = 6
    let res = 0
    console.log(password)
    if (password.search(/[A-Z]/) < 0) {
        console.log('no caps ! ')
        res++
    } 
     if (password.search(/[a-z]/) < 0) {
        console.log('no small ! ')
        res++
    } 
     if (password.search(/[0-9]/) < 0) {
        console.log('no num ! ',)
        res++
    } 
     if (password.search(/[!@#$%^&*()\-+]/) < 0) {
        console.log('no specials ! ')
        res++
    }
    if (n + res < minLenth) {
        res += minLenth - (res + n)
    }
    return res
    // Return the minimum number of characters to make the password strong

}