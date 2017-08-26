var Employee = (function () {
    function Employee(name, age) {
        this.name = name;
        this.age = age;
    }
    return Employee;
}());
var emp = new Employee("nishtha", 22);
console.log(emp);
