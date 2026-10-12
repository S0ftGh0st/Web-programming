### 2.1
let student = new Object();
student.firstName = "Anna";
student.lastName = "Ivanova";
student.age = 18;
student.adress = new Object();
student.adress.city = "Moscow";
student.adress.street = "Lenina";
student.age = 19;
delete student.lastName;
console.log(student.adress.city);
counter = 0;
for (let key in student) {
    counter +=1;
}
console.log(counter);
function hasProperty(obj, propertyName) {
    for (let key in obj) {
        if (key === propertyName) {
            return true;
        } 
    }
    return false;
}
console.log(hasProperty(student, 'age'));

### 2.2

if (student.age >= 14 && student.age <= 90) {
    console.log(true);
}
else {
    console.log(false);
}

if (student.age < 14 || student.age > 90) {
    console.log(true);
}
else {
    console.log(false);
}
