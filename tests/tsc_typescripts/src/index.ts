//tsc --watch index
//tsc --init
let id: number = 5
console.log('id is', id)
let company: string = 'Devendra Prasad'
let isPublished: boolean = true

let x: any = 'hello'
let age: number;
age = 39

let ids: number[] = [1, 2, 3, 4]
let arr: any[] = [1, 2, 3, 4]

//tuple
let arrTuple: [number, string, boolean] = [1, 'hello', false]
//tuple array
let employee: [number, string][] = [[1, 'hello'], [2, 'hello world']]
//unions
let pid: string | number = 'hello'
pid = 124

//enums - named constants
enum Direction1 {
    Up = 10,
    down,
    left,
    right
}

console.log('default direction value is', Direction1.down, Direction1.Up)

//objects
const user: { id: number, name: string } = {
    id: 1, name: 'john'
}


//similar to interface
type UserAgain = {
    id: number,
    name: string
}
const userAgain: UserAgain = {
    id: 1, name: 'john'
}


//type assertions
let cid: any = 1
let customerId = <number>cid //casting
customerId = cid as number //casting

//functions, implicit type is any
function addNum(x: number, y: number): number {
    return x + y
}

console.log('adding 2 numbers', addNum(2, 3))

function log(message: string | number): void {
    console.log(message)
}

log('hello world message')


//interfaces - custom type or specific structure to an object or function
interface UserInterface {
    id: number,
    name: string
}

const userByInterface: UserInterface = {
    id: 1, name: 'john'
}



