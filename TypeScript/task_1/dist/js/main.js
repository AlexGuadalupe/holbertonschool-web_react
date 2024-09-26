// Pruebas
var teacher1 = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: true,
    location: 'New York',
    contract: true
};
var teacher2 = {
    firstName: 'Jane',
    lastName: 'Smith',
    fullTimeEmployee: false,
    yearsOfExperience: 5,
    location: 'Los Angeles',
    contract: false,
    subject: 'Mathematics'
};
console.log(teacher1);
console.log(teacher2);
// Example
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log(director1);
// Implement the function
var printTeacher = function (firstName, lastName) {
    return firstName.charAt(0) + ". " + lastName;
};
// Example usage
console.log(printTeacher("Alex", "Guadalupe"));
//# sourceMappingURL=main.js.map