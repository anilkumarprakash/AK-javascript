"use strict";  // treat all JS code as newer version
/* console.log("This is a test file.");
let name="Anil";
let age=22;
let istrue=true;
console.log("My Name is: " +name + "\nMy Age is: " +age + "\nI am a Student: " +istrue);     */

/* funtion calling and parameters 

let num1=10;
let num2=20;
let sum = add(num1,num2);
console.log(sum);

function add(){
    return num1+num2;
}
*/

/* convert of data types 

let name="20";
let age=22;
console.log(typeof name);
console.log(typeof Number(name));
console.log(typeof age);
console.log(typeof String(age));
let b=Boolean(age);
console.log(b);

*/

/* conditional if statements

let age=18;
if (age>=18){
    console.log("You can vote");
}
else{
    console.log("You can't vote");
}
*/

/* create objects and access them 

let person={
    name:"Anil",
    age:22,
    isStudent:true
};
let address={
    city:"Delhi",
    country:"India"
};
console.log(person.name);
console.log(address);

*/

/* Array and loops 
let arr=[10,20,30,40,50];
for (let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

*/
/*
let person={
    name:"Anil",
    age:22,
    isStudent:true,

    contact:{
        email:"abcd@gamil.com",
        phone:1234567890
    },
};

console.log("Name: " + person.name + "\n" + "Age: " + person.age);
console.log(person.contact.email);
console.log(person.contact.phone)
console.log(person["contact"]["phone"]);

console.log(Math.sqrt(16));
console.log(Math.pow(4,3));

//  Date objet  
let now=new Date();
console.log(now);
console.log(now.getFullYear());
console.log(now.getDate());

*/

// String
/*
let name="Anil Kumar";
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.slice(0,4));
console.log(name.replace("Anil","Sunil"));
console.log(name.concat(" Singh"));
console.log(name.trim());

*/

/*

let x=11;
let y=20;
let str="Hello";

console.log(x-=y);
console.log(x+=y);
console.log(x*=y);
console.log(x==y);
console.log(x===y);
console.log(x!=y);
let z=0
console.log(`Check Z: $(!z)`);

*/

// ------------------------------------------------------------------------

/*
// Stack (Premitive) , Heap (Non-Premitive) memory


let user={
    email: "1234@google.com",
    phonenum:1234569
};
let user2=user;  // Stack memory
console.log(user.email);
console.log(user2.phonenum);
user2.email="ank@info.com";  // change in user2 also reflect in user (heap memory)
console.log(user.email);
console.log(user2.email);


*/

/*

let y=10; // global variable
function add(){
    let x=20;  // local variable
    console.log(`Sum of x and y is: ${x+y}` );
}
add(); // calling function

*/

const name= new String("Goodmorning");
console.log(name);
console.log(typeof name);
console.log(name.toUpperCase());
console.log(typeof name.valueOf());
console.log(name.length);
console.log(typeof name.toString());