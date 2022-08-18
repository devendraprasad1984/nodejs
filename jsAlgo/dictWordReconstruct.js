/*
 * This problem was asked by Microsoft.
 Given a dictionary of words and a string made up of those words (no spaces), return the original sentence in a list. If there is more than one possible reconstruction, return any of them. If there is no possible reconstruction, then return null.
 For example, given the set of words 'quick', 'brown', 'the', 'fox', and the string "thequickbrownfox", you should return ['the', 'quick', 'brown', 'fox'].
 Given the set of words 'bed', 'bath', 'bedbath', 'and', 'beyond', and the string "bedbathandbeyond", return either ['bed', 'bath', 'and', 'beyond] or ['bedbath', 'and', 'beyond'].
 * */

let dict = {
  'quick': 1,
  'brown': 1,
  'the': 1,
  'fox': 1,
  'bed': 1,
  'bath': 1,
  'bedbath': 1,
  'and': 1,
  'beyond': 1,
}

function reconstructSequence(word) {
  let size = word.length
  let substr = ''
  let result = []
  for (let i = 0; i < size; i++) {
    substr += word[i]
    if (dict[substr] === 1) {
      result.push(substr)
      substr = ''
    }
  }
  console.log(result)
  return result
}

reconstructSequence('thequickbrownfox')
reconstructSequence('bedbathandbeyond')