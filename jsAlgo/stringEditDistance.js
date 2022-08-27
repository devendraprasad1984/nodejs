/*
 * This problem was asked by Google.
 The edit distance between two strings refers to the minimum number of character insertions, deletions, and substitutions required to change one string to the other. For example, the edit distance between “kitten” and “sitting” is three: substitute the “k” for “s”, substitute the “e” for “i”, and append a “g”.
 * */

function calculateEditDistance(str1, str2) {
  let size1 = str1.length
  let size2 = str2.length
  let maxSize = size2 > size1 ? size2 : size1
  let dict = {}
  for (let i = 0; i < maxSize; i++) {
    dict[i] = []
    if (str1[i] !== undefined) dict[i].push(str1[i])
    if (str2[i] !== undefined) dict[i].push(str2[i])
  }
  //calculate edit distance
  let editDistanceCounter = 0
  for (let i in dict) {
    let elem = dict[i]
    if (elem[0] !== elem[1] || elem.length === 1) editDistanceCounter++
  }
  console.log(dict, editDistanceCounter)
}

calculateEditDistance('kitten', 'sitting')

