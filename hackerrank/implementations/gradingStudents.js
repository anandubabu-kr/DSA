function gradingStudents(grades) {
    var newgrade = []
    for (let scr of grades) {
        console.log('score : ', scr, 'reminder : ', (scr % 5))
        if (scr < 38) {
            newgrade.push(scr)
        } else if ((scr % 5) >= 3) {
            newgrade.push(scr + (5 - (scr % 5)))
        } else {
            newgrade.push(scr)
        }
    }
    return newgrade

}
