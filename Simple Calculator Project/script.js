let firstNumber = prompt("Enter firstNumber:")
let secondNumber = prompt("Enter secondNumber:")
let operatorSign = prompt("Enter the Operator:")
let answer;

firstNumber = Number(firstNumber); //type conversion from string to Number
secondNumber = Number(secondNumber); // type conversion from string to Number
function add(a, b) {
    return a + b;
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

switch (operatorSign) {
    case "+":
        answer = add(firstNumber, secondNumber);
        break;
    case "-":
        answer = subtraction(firstNumber, secondNumber);
        break;
    case "/":
        if (firstNumber === 0 || secondNumber === 0) {
            alert("error");
        }
        answer = division(firstNumber, secondNumber);
        break;
    case "*":
        answer = multiplication(firstNumber, secondNumber);
        break;
    default:
        alert('invalid Operand');

}

alert(`Answer is : ${answer}`)

