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
class PersonC {
    constructor(name) {
        this.name = name
    }
}

class StudentC extends PersonC {
    constructor(id, name) {
        super(name);
        this.studentid = id
    }
}

