//call - function borrowing, passing this context
//every object in js has access to this object
let name = {
    firstname: 'devendra',
    lastname: 'prasad',
    printFullName: function () {
        console.log(this.firstname + ' ' + this.lastname)
    }
}
let printAgain = function (hometown, country) {
    console.log(this.firstname + ' ' + this.lastname + ' from ' + hometown + ', ' + country)
}
let name2 = {
    firstname: 'Akshat',
    lastname: 'Sharma',
}
name.printFullName()
console.log('CALL')
name.printFullName.call(name2) //print is borrowed by name2 object
printAgain.call(name, 'Delhi', 'India')
printAgain.call(name2, 'Mumbai', 'India')

//apply - the only difference with call is the way we pass args, rest same as call
console.log('APPLY')
printAgain.apply(name2, ['Mumbai', 'India']) //thats it

//bind - exact same as call except it doesnt run the function, rather returns the bind copy of the function to be called later
console.log('BIND')
let printMe = printAgain.bind(name2, 'Mumbai', 'India')
console.log('bind copy', printMe)
printMe()