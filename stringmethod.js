var stringOne = "freecoding is the best practise.";

console.log(typeof String(stringOne));       //Constructor
//string
console.log(typeof new String(stringOne));
// object
// [String: 'freecoding is the best practise.'] 
console.log(stringOne.charAt(1));
// r
console.log(stringOne.concat(stringOne));
// freecoding is the best practise.freecoding is the best practise.
console.log(stringOne.charCodeAt(1));
// 114
console.log(stringOne.endsWith("to"));           
// false
console.log(stringOne.includes("st"));           
// true
console.log(stringOne.lastIndexOf("st"));
// 20                             
console.log(stringOne.match(/ing/g));
// [ 'ing' ]
console.log(stringOne.repeat(2));
// freecoding is the best practise.freecoding is the best practise.
console.log(stringOne.slice(2,3));
// e
console.log(stringOne.split(" "));
// [ 'freecoding', 'is', 'the', 'best', 'practise.' ]
console.log(stringOne.startsWith("free"));
// true
console.log(stringOne.substr(2,4));
// eeco
console.log(stringOne.substring(2,5));
// eec
console.log(stringOne.toLocaleLowerCase());
// freecoding is the best practise.
console.log(stringOne.toLocaleUpperCase());
// FREECODING IS THE BEST PRACTISE.
console.log(String.fromCharCode(94,44));          //static method
// "^,"
console.log(stringOne.indexOf('the'));           
// 14
console.log(stringOne.replace('the','most'));
// freecoding is most best practise.
console.log(stringOne.search('best'));
//18
console.log(stringOne.valueOf());
// freecoding is the best practise.

// by default, "2" > "10"
console.log("2".localeCompare("10")); // 1
