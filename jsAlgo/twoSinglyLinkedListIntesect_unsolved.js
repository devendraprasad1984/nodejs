/*
 * This problem was asked by Google.
 Given two singly linked lists that intersect at some point, find the intersecting node. The lists are non-cyclical.
 For example, given A = 3 -> 7 -> 8 -> 10 and B = 99 -> 1 -> 8 -> 10, return the node with value 8.
 In this example, assume nodes with the same value are the exact same node objects.
 Do this in O(M + N) time (where M and N are the lengths of the lists) and constant space.
 * */

//singly linked list
class Node {
  constructor(item) {
    this.data = item
    this.next = null
  }
}

function flatten(node) {
  let cur = node
  let arr = []
  while (cur !== null) {
    arr.push(cur.data)
    cur = cur.next
  }
  return arr
}

function getCount(node) {
  let cur = node
  let count = 0
  while (cur != null) {
    count++
    cur = cur.next
  }
  return count
}


let list1, list2
list1 = new Node(3)
list1.next = new Node(6)
list1.next.next = new Node(8)
list1.next.next.next = new Node(10)

list2 = new Node(99)
list2.next = new Node(1)
list2.next.next = new Node(8)
list2.next.next.next = new Node(10)

console.log('singly linked list 1', list1)
console.log('singly linked list 2', list2)

console.log('singly linked flatten list 1', flatten(list1))
console.log('singly linked flatten list 2', flatten(list2))

console.log(getCount(list1), getCount(list2))