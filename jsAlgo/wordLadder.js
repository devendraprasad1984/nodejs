// //word ladder - BFS on implicit Graph
// //Word Ladder is “a puzzle that begins with two words, and to solve the puzzle one must find a chain of other words to link the two, in which two
// // adjacent words (that is, words in successive steps) differ by one letter.” For example: COLD → CORD → CARD → WARD → WARM
//
// let start = "cold"
// let end = "warm"
// let word_list = ["COLD", "GOLD", "CORD", "SOLD", "CARD", "WARD", "WARM", "TARD"].map(x => x.toLowerCase())
// let word_list_set = new Set(word_list)
// word_list_set.delete(start)
// let queue = [start]
// let tmpqueue = [start]
// const alphabets = "abcdefghijklmnopqrstuvwxyz";
//
// let depth = 1
// //assume words are unique
// if (start === end) depth = -1 //do nothing
// if (start.length !== end.length) depth = -1 //do nothing, transformation is not possible
//
// while (queue.length > 0) {
//   depth += 1
//   for (let i = 0; i < queue.length; i++) {
//     let word = queue.shift()
//     for (let j = 0; j < word.length; j++) {
//       for (const letter of alphabets) {
//         let next_word = word.slice(0, i) + letter + word.slice(i + 1)
//         if(!word_list_set.has(next_word)) continue
//         if(next_word===end) break
//         queue.push(next_word)
//         tmpqueue.push(next_word)
//         word_list_set.delete(next_word)
//       }
//     }
//   }
// }
// //time complexity: O(M^2N), O(no_of_words * len * min(no_of_words, 26 * len)).
// console.log(word_list, tmpqueue, depth)
//


const alphabet = "abcdefghijklmnopqrstuvwxyz";

function word_ladder(begin, end, word_list) {
  const words = new Set(word_list);  // make a set because existence query is O(1) vs O(N) for list
  words.delete(begin)
  const queue = [begin];
  const tmpqueue = [begin];
  let distance = 0;
  while (queue.length > 0) {
    const n = queue.length;
    distance++;
    for (let i = 0; i < n; i++) {
      const word = queue.shift();
      for (let j = 0; j < word.length; j++) {
        for (const letter of alphabet) {
          const next_word = word.slice(0, j) + letter + word.slice(j + 1);
          if (!words.has(next_word)) continue;
          if (next_word === end) {
            console.log('graph sequence',tmpqueue)
            return distance;
          }
          queue.push(next_word);
          tmpqueue.push(next_word);
          // removing from the set is equivalent as marking the word visited
          words.delete(next_word);
        }
      }
    }
  }
  return 0;
}

// Driver code

var inputs = ["cold", "fool"];
var inputs1 = ["warm", "sage"];
var inputs2 = [["cold", "gold", "cord", "card", "ward", "warm", "tard", "sold"], ["fool", "pool", "poll", "pole", "pale", "sale", "sage"]];

for (var i = 0; i < inputs.length; i++) {
  console.log("Word ladder : ", word_ladder(inputs[i], inputs1[i], inputs2[i]))
}

