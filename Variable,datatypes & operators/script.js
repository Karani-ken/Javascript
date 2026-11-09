//syntax
//let => let value can be reassigned

let firstname = "John";

let age;

console.log(age);
age = 20;
console.log(age);
age = 31
console.log(age)

console.log("My name is " + firstname);

//constants
//const key
const pi = 3.142;
//pi = 3.143 => constants cannot be reassigned
//console.log(pi)

var isStudent = true; //an older way of declaring variable

//Datatypes


//string
let phoneNumber;
console.log(phoneNumber) //undefined
let middleName = null;
console.log(middleName)

//object
let student = {
    studentName: "John",
    studentAge: 21,
    isRegistered: true
}
console.log(student.studentName)
console.log(student)
console.log(student.isRegistered);

let subjects = [
    "English",
    "Mathematics",
    "Physics"
]

console.log(subjects)

console.log(typeof (pi))
console.log(typeof (student))
console.log(typeof (subjects))

let a = 10;
let b = 15;

let sum = a + b; //addition operator
let difference = b - a; //subtraction operator

console.log(sum);
console.log(difference)
console.log(10 % 5) //modulus return the remainder

console.log(b / a) // division operator
console.log(a * b) //multiplication operator

let price = 200;

price = price + 10; //longhand method
price += 10; //short hand method
console.log(price)

price = price - 10;
price -= 10;
console.log(price);

//comparison operator
//== equality

let x = 5;
let y = 5;

console.log(x == y)
//=== checks equal value and equal datatype

x = "5"
y = 5

console.log(x === y) //false

console.log(x != y) // checks for the value false

console.log(x !== y) //check for the value and datatypes => true

//if the user email exists
//if the password is correct

let isEmail = true;
let passwordIsCorrect = false;

console.log(isEmail&&passwordIsCorrect) // && AND both conditions must be true

console.log(isEmail || passwordIsCorrect) // || OR at least one condition must be true

console.log(!isEmail) // reverses a boolean value