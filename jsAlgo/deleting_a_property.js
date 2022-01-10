var Employee = {
    company: 'xyz'
}
var emp1 = Object.create(Employee); //deep referencing employee
delete emp1.company
console.log(emp1.company)
// output will be xyz as emp1 becomes prototype object and its property wont be affected by the delete keyword. emp1 is just a reference and xyz doesnt belong to it, so delete wont affect
// emp1 object doesn't have company as its own property. You can test it like:
console.log(emp1.hasOwnProperty('company'), Employee.hasOwnProperty('company')); //output : false
// However, we can delete company property directly from Employee object using delete Employee.company or
// we can also delete from emp1 object using __proto__ property delete emp1.__proto__.company.



