let dragon1 = (name, size, element) => name + ' is a ' + size + ' dragon that breathes ' + element
let dragon = name => size => element => name + ' is a ' + size + ' dragon that breathes ' + element

let dragonNotCurried = dragon1('name1', 100, 'hmmm')
let dragonCurried = dragon('name2')(200)('wow')

console.log(
    dragonNotCurried,
    dragonCurried
)