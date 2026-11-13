let marks1 = 34
let marks2 = 35
//37 variables

//creating an array we use square brackets and comma separated values
let studentsMarks = [35, 34, 50, 60, 78, 23, 90, 56, 57, 57, 58, 45, 48] // this array store numbers
let studentNames = ["John","Claire","Esther", "Sam", "Vincent"] //this array stores string values
let mixedList = ["John", 20 , true] //mixed array that holds different values of different datatypes
let emptyArray = []; //creating an empty array

console.log(studentNames[0]);
console.log(studentNames[1]);
console.log(studentNames[2]);
console.log(studentNames[3]);
console.log(studentNames[4]);


//Length of an array is the total number of elements inside the array
console.log(studentsMarks.length)

let days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
console.log(days[1]) //Tuesday
console.log(days.length) // 5
console.log(days[days.length - 1])////fri
console.log(days[7])//

studentNames[1] = "Clair Njeri";
console.log(studentNames)

//adding or removing items from at the end of an array
let cart = ["Milk","Bread", "Water"];
console.log(cart)
//push method adds an element at the end of an array
cart.push("chocolate")
cart.push("Sugar")
cart.push("Flour")
console.log(cart)
//pop() method removes the last element of an array
cart.pop();
console.log(cart)

//Adding or removing Items at the beginning of an array

//unshift() method adds an Item at the beginning of the array
cart.unshift("Soap")
cart.unshift("Knife")
cart.unshift("Curtains")
cart.unshift("Salt")
console.log(cart)
//shift() method removes and Item at the beginning of the array
cart.shift();
console.log(cart)

let playList = ["Hold on", "Mocking bird", "Dynamite" , "re-write the stars"]
console.log(playList)
playList.push("Kitemeo");
console.log(playList)
playList.unshift("dance ukining,inia")
console.log(playList)
console.log(playList[playList.length - 1])
playList.pop();
console.log(playList)

playList.shift();
console.log(playList)


//using loops to iterate through an array
//for
for(let i = 0; i < studentNames.length; i++){
    console.log(`This was displayed with
         a loop ${studentNames[i]}`)
}
//i = 0 => John i + 1 = 1
//i = 1 => Claire i + 1 = 2
//i = 2 => Esther i + 1 = 3
//i = 3 => Sam i + 1 = 4;
//i = 4 => Vincent i + 1 = 5
//i = 5 the loop terminates because the
// length of the array is 5 and 5 is not less than
//5 

let marks = [50, 55, 70, 20, 56, 90, 35, 50, 45, 78, 34]


let total = 0;

for (const mark of marks) {
    total = total + mark;
}

//total = 50 + 55 + 70 + 20 + 56 + 90
console.log(total)

//searching through the array
//find returns the first match
let firstFail = marks.find(mark => mark < 50);
console.log(firstFail)

//map method replaces every item on the array
//use the map method to add 5 marks to every student
let bonus = marks.map(mark => mark + 5)
console.log(bonus)

//filter method returns items that meet a certain cliteria
let allFails = marks.filter(m => m < 50)
console.log(allFails)

let allPass = marks.filter(m => m >= 50)
console.log(allPass)

//reduce method sums up the array to one value
let totals = marks.reduce((sum, m) => sum + m , 0)
console.log(totals)
let average = totals/marks.length
console.log(average)


