console.log("Hello World");  

//this is a comment 
/* This is a multiline comment 
and it can be written in different lines*/

let x=6,y=2;
// console.log(x%y);
// console.log(x**y);
// console.log(x+y);
console.log(x++);
console.log(x);
console.log(x--);
console.log(x);

x+=3;
console.log("x = ",x);
console.log(x==y);

//comparision operator 
console.log(x!=y);
console.log();
console.log();

console.log("=== used for strict comparision and also checks the data type:")
//js explicitly changes the string to number to compare the variables 
let a=5,b="5";
console.log("== Doesnot check the datatype ",a==b);
console.log('=== also checks the data type ',a===b);
console.log("*********************************************************************");
