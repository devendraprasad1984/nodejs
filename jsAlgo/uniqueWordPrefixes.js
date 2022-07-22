let k = 15
let words = [
  "apple",
  "app",
  "apricot",
  "stone",
  "legal",
  "legislature"
]

let res = []
let resLen = []
for (let i = 1; i <= k; i++) {
  if (i > words.length) continue
  let sub = {}
  for (let w of words) {
    let chars = w.substr(0, i)
    if (w.length < i) continue
    if (sub[chars] === undefined) {
      sub[chars] = 1
    } else {
      sub[chars] = sub[chars] + 1
    }
  }
  let keySubs = Object.keys(sub)
  res.push(keySubs)
  resLen.push(keySubs.length)
}
console.log(res, resLen)