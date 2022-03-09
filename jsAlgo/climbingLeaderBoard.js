// An arcade game player wants to climb to the top of the leaderboard and track their ranking. The game uses Dense Ranking, so its leaderboard works like this:
// ranking: 100 90 90 80 75 60
// playerScores: 50 65 77 90 102
// output in leaderboard: 6 5 4 2 1

let ranking = [100, 90, 90, 80, 75, 60].sort((a, b) => b - a)
let player = [50, 65, 77, 90, 102]
let newRanking = Array.from(new Set(ranking))
let topRank = newRanking[0]
let bottomRank = newRanking[newRanking.length - 1]
let ranges = {1: topRank}
for (let i = 0; i < newRanking.length - 1; i++) {
    let from = newRanking[i]
    let to = newRanking[i + 1]
    ranges[i + 2] = [from, to]
}
ranges[newRanking.length] = bottomRank
console.log(ranges)

