
//Here js searches the HTML document for the element with the Id of "heading";
let heading = document.getElementById("heading");
let paragraph = document.querySelector(".description");
let resultArea = document.getElementById("results");
console.log(paragraph)
let AllParagraphs = document.querySelectorAll(".message");
console.log(AllParagraphs) //gets all the three
console.log(AllParagraphs[0])
console.log(AllParagraphs[1])
console.log(AllParagraphs[2])
console.log(heading)
heading.classList.add("highlight")
console.log(resultArea);
function changeColor() {
    heading.style.color = "blue";
    heading.textContent = "I have learned DOM"
    resultArea.innerHTML = `<h1> Results will show here</h1>`
    console.log(resultArea)
}
const container = document.getElementById("container");

function addElement() {
    const newParagraph = document.createElement("p");
    newParagraph.textContent = "Here is my new paragraph";
    console.log(newParagraph);
    container.appendChild(newParagraph)
    container.style.border = "1px solid #000"

    //A list to an element
    const studentList = ["John", "Mary", "Peter", "Jane"]; //array 

    studentList.forEach(function (name) {
        const li = document.createElement('li');
        li.textContent = name;
        container.appendChild(li)

    })
}



