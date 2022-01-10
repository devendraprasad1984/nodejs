var Employee = {
    company: 'xyz',
    company1: 'testing company',
    company2: 'testing company - 2'
}
var emp1 = Object.create(Employee); //deep referencing employee
delete Employee.company1
// output will be xyz as emp1 becomes prototype object and its property wont be affected by the delete keyword. emp1 is just a reference and xyz doesnt belong to it, so delete wont affect
// emp1 object doesn't have company as its own property. You can test it like:
console.log(emp1, Employee)
delete emp1.__proto__.company2 //can do this
// console.log(emp1, Employee)
console.log(emp1.company, emp1.company2, emp1.hasOwnProperty('company'), Employee.hasOwnProperty('company')); //output : false
// However, we can delete company property directly from Employee object using delete Employee.company or
// we can also delete from emp1 object using __proto__ property delete emp1.__proto__.company.



