let Q = 6;
let W = 5;

let cond1 = Q > W; //true
let cond2 = Q === 6; //true

console.log("Logical And: ", cond1 && cond2);
console.log("Logical OR: ", cond1 || cond2);
console.log("Logical Not: ", !cond2);

console.log("Conditional Statements");
let age = 25;
// if(age>=18){
//     console.log("You can vote")
// }
// else{
//     console.log("You cannot vote");
// }

let color;
let mode = "grey";
if (mode === "dark") {
  color = "Black";
} else if (mode === "grey") {
  color = "Grey";
} else {
  color = "White";
}
console.log(color);

let result = age > 18 ? "Adult" : "Not Adult";
console.log(result);

switch (age) {
  case age < 18:
    console.log("Underage");
    break;
  case 1:
    console.log("Teen");
    break;
  // …
  case 2:
    console.log("Adult");
    break;
  default:
    console.log("Sorry no matching conditions.");
}
alert("Help"); //one time pop up message in browser
// let name = prompt("What is your name ?");
// console.log(name);
