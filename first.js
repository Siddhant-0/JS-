console.log("This is my first time learning JavaScript.");
console.log("I like it ............");

//alert("You have been hacked")   ---->  pops out alerts in the current page.

let age = 24
console.log(age);
let fullName = "Siddhant";   // let and const used to define variables
const pi = 3.14;             // var was old way of defining the variables 

x=null;
y=undefined;

console.log(x);
console.log(y);
console.log("Name : "+ fullName +" and Age : "+ age );      //concatenation is same is in python 

//************************************************************************************************************//
//DATATYPES ----> PRIMITIVE(Number,String,Bool,Undefined,Null,Bigint,Symbol) AND NON-PRIMITIVE(Objects--->>Key:Value)


console.log("*********************************************************************************************************");
fname = "Rahul Ram ";
console.log(typeof fname);  

/*defining a objecct
Objects--->>Key:Value*/

const student = {
    fullName : "Siddhat Shrestha",
    rollNo : 83,
    faculty : "Computer Engineering",
    isPass : true
};

console.log(student ["fullName"]);
console.log(student.rollNo);

console.log(`After updating
the value of rollno in object 
student..isssss `);

student["rollNo"] =91
console.log("Updated rollNo value : ",student.rollNo);

document.write("<br>");
console.log("Practise question of instagram profile object");
const profile ={
    userName : "Shraddha Khapra",
    isFollowing : true,
    follower : 12344,
    accountType : "private"
}

console.log("The Datatype of userName in the object profile is",typeof profile.userName)


