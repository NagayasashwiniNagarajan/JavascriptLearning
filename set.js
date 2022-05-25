//set is a collection of elements that contains only unique elements.
//Syntax: new Set()

//create the set
const setData = new Set();
console.log('setData:',setData);

//setData: Set(0) {} (Entries and prototype having all methods)

//Converting array into set
const product = ["a","b","c","d","e"];
console.log('Product:',product);
const setData1 = new Set(product);
console.log('setData:',setData1);
console.log('length:',setData.size);
// Product: [ 'a', 'b', 'c', 'd', 'e' ]
// setData: Set(5) { 'a', 'b', 'c', 'd', 'e' }

//Adding elements into set
setData1.add("f");
setData1.add("d");                     //unique elements only been in set
console.log('setData:',setData1);
// setData: Set(6) { 'a', 'b', 'c', 'd', 'e', 'f' }

//Deleting element form set
setData1.delete("b");

// check an element in set return boolean value
setData1.has("a");    //true

//clear the set
setData1.clear();

//UseCase
const numbers = [5,3,2,5,5,9,4,5];
const unique_numbers = new Set(numbers);
console.log(unique_numbers);
//Set(5) { 5, 3, 2, 9, 4 }
