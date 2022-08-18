/*
 * Least Recently Used (LRU) or temporal locality is a common caching strategy. It defines the policy to evict elements from the cache to make room
 *  for new elements
 *  when the cache is full, meaning it discards the least recently used items first.
 * Hints: Doubly Linked List, Hashing (key value for efficient searching), Think about evictions
 *
 * 1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5
 * Find the number of page faults using the least recently used (LRU) page replacement algorithm with 3-page frames.
 * //insert right after head and get operation too, update the map
 * //LRU object is right before tail, remove and insert new here
 * https://www.youtube.com/watch?v=xDEuM5qa0zg
 * */

const LRUCache = function (capacity) {
  this.capacity = capacity
  this.map = new Map() //stores entire array
  //boundary for doubly linked list
  this.head = {}
  this.tail = {}
  this.head.next = this.tail //initial doubly linked list
  this.tail.prev = this.head
}
//GET operation
LRUCache.prototype.get = function (key) {
  if (this.map.has(key)) {
    //remove element from current position
    let c = this.map.get(key)
    c.prev.next = c.next
    c.next.prev = c.prev
    this.tail.prev.next = c //insert it after the last element
    c.prev = this.tail.prev //update prev to next pointer
    c.next = this.tail
    this.tail.prev = c //update last element as tail
    return c.value
  } else {
    return -1
  }
}
//PUT operation
LRUCache.prototype.put = function (key, value) {
  if (this.get(key) !== -1) {
    //if key doesnt exist, update last element
    this.tail.prev.value = value
  } else {
    if (this.map.size === this.capacity) {
      //delete item both from map and DLL
      this.map.delete(this.head.next.key) //delete first element of list
      this.head.next = this.head.next.next //update first element as next element
      this.head.next.prev = this.head
    }
    let newNode = {key, value}
    //when adding a new node, we need to update both map and dll
    this.map.set(key, newNode) //add cur node to map
    this.tail.prev.next = newNode
    newNode.prev = this.tail.prev //update prev and next pointers
    newNode.next = this.tail
    this.tail.prev = newNode //update last element
  }

}

const cache_lru = new LRUCache(2) //cache capacity is 2
cache_lru.put('red', 'red') //cache has red=red
cache_lru.put('grey', 'grey') //cache has red=red, grey=grey

let param1 = cache_lru.get('red') //get red from cache, grey now become LRU
cache_lru.put('yellow', 'yellow') //LRU key was grey, evicts key grey, cache has red=red, yellow=yellow

let param2 = cache_lru.get('grey')
console.log('param1 ', param1)
console.log('param2 ', param2)

//The best data structure to use when implementing LRU cache is a double-linked list and a hash table. The time complexity for this implementation is O(1).
