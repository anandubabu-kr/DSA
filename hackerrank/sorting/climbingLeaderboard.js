
function climbingLeaderboard(ranked, player) {
    // Write your code here
    let climb = []
    let uniqueRank = ranked.filter((num, index, ar) => {
        return ar.indexOf(num) === index
    })

    console.log(uniqueRank)
    // 100 90 90 80 75 60
    // 50 65 77 90 102
    var i = uniqueRank.length
    for (let score of player) {
        console.log(score, '<', uniqueRank[i - 1], i)
        while (score >= uniqueRank[i - 1] && i > 0) {
            i--
        }
        climb.push(i + 1)
    }
    return climb
}