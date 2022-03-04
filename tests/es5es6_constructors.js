//es5
function Person(name) {
    this.name = name
}

function Student(id, name) {
    // Call constructor of superclass to initialize superclass-derived members.
    Person.call(this, name)
    //initialize subclass own member
    this.studentid = id
}



//es6
class Person {
    constructor(name) {
        this.name = name
    }
}

class Student extends Person {
    constructor(id, name) {
        super(name);
        this.studentid = id
    }
}