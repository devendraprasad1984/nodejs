// An arcade game player wants to climb to the top of the leaderboard and track their ranking. The game uses Dense Ranking, so its leaderboard works like this:
// ranking: 100 90 90 80 75 60
// playerScores: 50 65 77 90 102
// output in leaderboard: 6 5 4 2 1
let ranking = [100, 90, 90, 80, 75, 60]//.sort((a, b) => b - a)
let player = [50, 65, 77, 90, 102]
let leaderBoard = []
let newRanking = ranking// Array.from(new Set(ranking))

function prepareRankingRange() {
    let top = newRanking[0]
    let bottom = newRanking[newRanking.length - 1]
    let ranges = {}
    for (let i = 0; i < newRanking.length - 1; i++) {
        let rankId = i + 2
        let from = newRanking[i]
        let to = newRanking[i + 1]
        if(from===to) continue
        ranges[rankId] = [from, to]
    }
    // ranges[newRanking.length] = bottom
    let rangeKeys = Object.keys(ranges)
    return {ranges, top, bottom, topRank: 1, bottomRank: ranking.indexOf(bottom)+1}
}

function returnPlayerRank(rankingRange, playerScore) {
    let playerRank = -1
    for (let rank in rankingRange) {
        let [to, from] = rankingRange[rank]
        if (playerScore > from && playerRank <= to) {
            playerRank = parseInt(rank)
            break
        }
    }
    return playerRank
}

let {ranges, top, bottom, topRank, bottomRank} = prepareRankingRange()
player.forEach((x, i) => {
    if (x >= top)
        leaderBoard.push(topRank)
    else if (x <= bottom)
        leaderBoard.push(bottomRank)
    else {
        let rank = returnPlayerRank(ranges, x)
        leaderBoard.push(rank)
    }
})
console.log(ranges, topRank, bottomRank, leaderBoard)


