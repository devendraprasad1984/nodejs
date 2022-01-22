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
    readonly name: string
    age?: number
}

const userByInterface: UserInterface = {
    id: 1,
    name: 'john'
}
userByInterface.id = 6
// userByInterface.name='hello again' //error as its readonly

type point = number | string
const p1: point = 1

//interface for functions

interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const subtract: MathFunc = (x: number, y: number): number => x - y
console.log('adding 2 numbers using interface type', add(3, 4))


//classes
//implement interface with a class
//used to create objects
interface PersonInterface {
    id: number,
    name: string,
    age?: number,

    register(): string
}

class Person implements PersonInterface {
    //public by default, public, private(only within this class), protected(either in this class or extended class)
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    //overriding toString, polymorphs
    toString() {
        return this.id + '==>' + this.name
    }

    register() {
        return `${this.name} is now registered`
    }
}

class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name);
        this.position = position
    }

    toString() {
        return this.id + '==>' + this.name + '===>' + this.position
    }

}


const dp = new Person(1, 'devendra prasad')
const harish = new Person(2, 'harish')
console.log(dp.register(), harish.register())
console.log('Person Objects', dp.toString(), harish.toString())

const emp1 = new Employee(3, 'dp', 'tech lead')
console.log(emp1.register(), emp1.toString())


//generics - used to build reusable components
//has to has numbers or has to has specific type
//placeholder for specific types
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 4, 5, 6])
let strArray = getArray<string>(['1', '2', '3', '4', '5'])
numArray.push(10)
// numArray.push('hello')
