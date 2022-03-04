//{value: 5, left:{....}, right:{....}}

function invertTree(node) {
    let left = node.left
    let right = node.right
    node.right = left
    node.left = right
    invertTree(left)
    invertTree(right)
}


function invertTree1(node) {
    let left = node.left
    node.left = node.right
    node.right = left
    invertTree(node.left)
    invertTree(node.right)
}
