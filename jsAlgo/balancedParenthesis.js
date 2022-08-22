/*
 * Given a string of round, curly, and square open and closing brackets, return whether the brackets are balanced (well-formed).
 For example, given the string "([])[]({})", you should return true.
 Given the string "([)]" or "((()", you should return false.
 * */

let openingBrackets = '([{'
let closingBrackets = ')]}'
let closingOpenCombination = {')': '(', ']': '[', '}': '{'}

let brackets = "[]{}()<>"

function isBalancedSol1(str) {
  let stack = []
  let size = str.length
  for (let i = 0; i < size; i++) {
    if (openingBrackets.indexOf(str[i]) !== -1) {
      stack.push(str[i])
    } else if (closingBrackets.indexOf(str[i]) !== -1) {
      if (stack.length === 0)
        return -1
      let openCloseCheck = closingOpenCombination[str[i]]
      if (stack.indexOf(openCloseCheck) !== -1) {
        stack.pop()
      }
    }
  }
  console.log(str, stack.length === 0)
  return stack.length === 0
}

function isBalancedSol2(str) {
  let stack = []
  for (let bracket of str) {
    let bracketIndex = brackets.indexOf(bracket)
    if (bracketIndex === -1) continue
    if (bracketIndex % 2 === 0) {
      stack.push(bracketIndex + 1)
    } else {
      if (stack.pop() !== bracketIndex) {
        console.log(str, stack.length === 0)
        return false
      }
    }
  }
  console.log(str, stack.length === 0)
  return stack.length === 0
}


isBalancedSol1('([)]')
isBalancedSol1('((()')
isBalancedSol1('([])[]({})')


isBalancedSol2('([)]')
isBalancedSol2('((()')
isBalancedSol2('([])[]({})')
