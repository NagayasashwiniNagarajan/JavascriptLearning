// map -> key value pairs of iterable object
// Syntax: new Map()
const crack = new Map();  
crack['name'] = "Saran";
crack['city'] = "Bangalore";
console.log(crack);
// Map(0) { name: 'Saran', city: 'Bangalore' }

//Convert array into map
const product = [["A",1],["B",2],["C",3]];
console.log("product",product);
const mapData = new Map(product);
console.log("mapData:",mapData);
// product [ [ 'A', 1 ], [ 'B', 2 ], [ 'C', 3 ] ]
// mapData: Map(3) { 'A' => 1, 'B' => 2, 'C' => 3 }

//Adding value to map
mapData.set("D",4);
mapData.set("D",5);        //value will be override
console.log(mapData);
//Map(4) { 'A' => 1, 'B' => 2, 'C' => 3, 'D' => 5 }

//get a value form map
console.log(mapData.get("C")); //3

//Check key in map will return boolean value
console.log(mapData.has("A"));       //true

// object =>map
let obj1 = { "a": 1};
let obj2 = { "b": 2};
let c = {};
let map = new Map();
map.set(obj1,"Hii");
map.set(obj2,"Hii");
map.set(obj1,"Hii");
console.log(map.size);        //2
console.log(map);             //Map(2) { { a: 1 } => 'Hii', { b: 2 } => 'Hii' }
console.log(map.has(obj1));   //true
console.log(map.get(obj2));   //Hii
//map.delete(obj1);             
//console.log(map.clear());    //undefined

//iterations in map
for(let i of map.values()){
    console.log(`Value = ${i}`);
}
// Value = Hii
// Value = Hii
for(let index of map.keys()){
    console.log(`Key = ${index.keys}`);
}
// Key = undefined
// Key = undefined

map.forEach((values,keys) => console.log(`Value = ${values} Keys = ${keys}`));
// Value = Hii Keys = [object Object]
// Value = Hii Keys = [object Object]

map.set("Hello","string");
map.set([1,2,3,4],"Array");
console.log(map);
// Map(4) {
//     { a: 1 } => 'Hii',
//     { b: 2 } => 'Hii',
//     'Hello' => 'string',
//     [ 1, 2, 3, 4 ] => 'Array'
//   }

  
