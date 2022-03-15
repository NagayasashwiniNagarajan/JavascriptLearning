let name = "Yash";
let age = 21;
let isGood = true;
let firstName;          //undefined
let lastName = null; 

//Boolean
let data = true;
if (data) {
    console.log("Rule!");
}else{
    console.log("Lame");
}
// Rule!

//undefined
let a;
console.log(a + 2);
// NaN

//Number
let num = 3.6;
let numbe = 4.6;
console.log(num + numbe);
// 8.2

// String 
let nam = "Beau";
console.log("Hii "+ nam);
// Hii Beau
var stringOne = "freecoding is the best practise."

//object
let person = {
    first : "Student",
    id : 44
}; 

console.log(person);

person.first = "employee";
console.log(person.first);

person['first'] = "Student_Intern";
console.log(person.first);  

// { first: 'Student', id: 44 }
// employee
// Student_Intern