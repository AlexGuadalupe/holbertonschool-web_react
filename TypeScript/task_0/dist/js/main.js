var student1 = {
    firstName: 'Alex',
    lastName: 'Guadalupe',
    age: 30,
    location: 'P FKN R',
};
var student2 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    location: 'USA',
};
var studentsList = [student1, student2];
function renderTable(students) {
    console.log('First Name\tLocation');
    students.forEach(function (student) {
        console.log(student.firstName + "\t" + student.location);
    });
}
renderTable(studentsList);
//# sourceMappingURL=main.js.map