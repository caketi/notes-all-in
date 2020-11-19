/**
 * Polymorphism --> capability --> create a property, a function or an obj(has more than one implementation)
 *  similar to method overriding 
 */


function Employee(name){
    this.name = name;
    this.getName = () => {
        return this.name;
    }
}

const employee = new Employee("Caketi");

console.log(employee.getName()); // Caketi

Employee.prototype.getDetails = function () {
    return this.name.toUpperCase();
}

console.log(employee.getDetails()); // CAKETI