//condional statements
/**
 * if
 * 
 * if else
 * 
 * if else is
 * 
 * switch case
 */

/**
 * loops
 * 
 * for loop
 * 
 * while loop
 * 
 * do while loop
 */

//a program to display 1-100

/*for (let i = 1; i <= 100; i++) {
    console.log(i)
}*/

/*let x = 1;
while (x <= 100) {
    console.log(x)
    x++
}*/

//a program the calculate the sum of the first 100 numbers
let sum = 0;

for (let j = 1; j <= 100; j++) {
    sum += j // sum = sum + j;
}

console.log(sum)

// 1+2+3+4+5+6 ==> upto 100

// sum = 0 + 1 (j is 1) => increament J with 1 j is now 2
// sum = 1 + 2 ( j is 2 and sum is 1  sum becomes 3) increament j + 1 j is now 3
// sum = 2 + 3 (j is now 3 and sum is 2 2=3 sum 5)

for (let y = 1; y <= 20; y++) {
    if (y % 2 === 0) {
        console.log(y);
    }
}

//using a break statement
for (let num = 1; num <= 10; num++) {
    if (num === 5) {
        continue;
    }

    console.log(num)

}





