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

//undefined
let a;
console.log(a + 2);

//Number
let num = 3.6;
let numbe = 4.6;
console.log(num + numbe);

// String 
let nam = "Beau";
console.log("Hii "+ nam);

var stringOne = "freecoding is the best practise."
//charAt()
console.log(stringOne.charAt(1));

console.log(stringOne.concat(stringOne));

console.log(stringOne.charCodeAt(1));

console.log(stringOne.endsWith("to"));

console.log(stringOne.fromCharCode(114));

console.log(stringOne.includes("st"));

console.log(stringOne.lastIndexOf("st"));

console.log(stringOne.match(/ing/g));

console.log(stringOne.repeat(2));

console.log(stringOne.slice(2,3));

console.log(stringOne.split(" "));

console.log(stringOne.startsWith("free"));

console.log(stringOne.substr(2,4));

console.log(stringOne.substring(2,5));

console.log(stringOne.toLocaleLowerCase());





//object
let person = {
    first : "Student",
    id : 44
}; 

//console.log(person);

person.first = "employee";
// console.log(person.first);

person['first'] = "Student_Intern";
console.log(person.first);  

