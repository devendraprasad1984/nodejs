//approach1
const userFunction = {
    display: function () {
        console.log('display name', this.name)
    }
}

function userCreator(name, age) {
    const obj = Object.create(userFunction) //returns empty object with its __proto__
    obj.name = name
    obj.age = age
    return obj
}

const paidUserFunction = Object.create(userFunction) //returns empty object with its __proto__
userFunction.updateBalance = function () {
    this.balance++
    console.log('balance is', this.balance)
}

function paidUserCreator(name, age, amount) {
    const paidUser = userCreator(name, age)
    paidUser.balance = amount
    Object.setPrototypeOf(paidUser, userFunction) //inherit from it
    return paidUser
}

const paidUser1 = paidUserCreator('devendra', 38, 2900)
paidUser1.updateBalance()
paidUser1.display()


//approach2
function createUser(name, age) {
    this.name = name
    this.age = age
}

createUser.prototype.display = function () {
    console.log('name is', this.name, 'age', this.age, 'amount: ', this.balance)
}

function createPaidUser(name, age, balance) {
    createUser.call(this, name, age)
    this.balance = balance
}

createPaidUser.prototype = Object.create(createUser.prototype) //inheritence applied here
// createPaidUser.prototype = createUser.prototype //shallow object referencing
createPaidUser.prototype.updateBalance = function () {
    this.balance++
    console.log('balance is', this.balance)
}
const user1 = new createPaidUser('dp', 29, 3000) //create instance of it
const user2 = new createUser('dp_1', 38) //create instance of it
user2.balance=5000 //directly changing property

user1.display()
user1.updateBalance()
user1.display()

user2.display()



//using class
class CreateUser {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    display() {
        console.log('name', this.name, 'age', this.age, 'having balance', this.balance)
    }
}

class PaidUser extends CreateUser {
    constructor(name, age, balance) {
        super(name, age)
        this.balance = balance
    }

    udpateBalance() {
        this.balance++
    }
}

const userPaid1 = new PaidUser('dp1', 20, 2323)
userPaid1.udpateBalance()
userPaid1.display()


