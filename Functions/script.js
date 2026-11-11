let Price1 = 200;
let Quantity1 = 3;
let Totals = Price1 * Quantity1;

let Price2 = 200;
let Quantity2 = 3;
let Totals2 = Price1 * Quantity1;

//syntax for creating a function in javascript
function functionName() {
    //code will be here
}

//created a function
function greet(name) { //name is the parameter
    console.log(`Hello ${name}`);
}

greet("claire") //claire the the actual value which is the argument


//Called the function
greet("Paul");
greet("James");
greet("Ivy");

//multiple parameters
function introduceStudent(studentName, age, course) {
    console.log(`Name: ${studentName}`);
    console.log(`Age: ${age}`);
    console.log(`Course: ${course}`);

}

introduceStudent("Claire", 20, "Software development")
introduceStudent("Pauline", 21, "Customer service")
introduceStudent("Tenzin", 22, "Software development")

//This function adds two number
function addNumber(a, b) {
    console.log(`This is inside the function ${a + b}`)
}
let answer = addNumber(7, 10)
console.log(`The answer is: ${answer}`) //the answer 17is not available outside the function
function add(a, b) {
    return a + b; //the return statement send out the result of a + b outside the function
}
function subtraction(a, b) {
    return a - b
}

function division(a, b) {
    return a / b;
}
function multiplication(a, b) {
    return a * b
}

console.log(add(5, 5))
console.log(subtraction(10, 5));
console.log(division(27, 9));
console.log(multiplication(3, 3));

//function expression is another of creating a function
const totals = function (price, qty) {
    console.log(price * qty)
}

totals(300, 5)

//arrow function
const addNum = (a, b) => {
    return a + b;
}

//const addNum = (a, b) => a+ b; this a one liner but it just the same thing as the above arrow function

//local vs Global variables
let schoolName = "Future Labs Africa"; //global variable

function displaySchool(){
    console.log(schoolName)
}

//local variables inside the Function
function addTwoNumber(){
    let num1 = 20;
    let num2 = 30;
    let sum = num1 + num2;
    console.log(`Inside the function ${num1}`)
}
addTwoNumber()
console.log(num1)

displaySchool();