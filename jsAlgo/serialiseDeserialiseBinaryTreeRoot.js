class Node {
  constructor(val, left, right) {
    this.val = val
    this.left = left
    this.right = right
  }
}

//encodes tree into string
const serialise = root => {
  if (!root) {
    return
  }
  const data = []


  return JSON.stringify(data)
}
