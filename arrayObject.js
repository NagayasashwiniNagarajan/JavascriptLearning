//array having object methods
var array = [1,2,3];

console.log(Object.entries(array));
// [ [ '0', 1 ], [ '1', 2 ], [ '2', 3 ] ]

console.log(Object.keys(array));
// [ '0', '1', '2' ]

console.log(Object.values(array));
// [ 1, 2, 3 ]

console.log(Object.getOwnPropertyDescriptors(array));
// {
//   '0': { value: 1, writable: true, enumerable: true, configurable: true },
//   '1': { value: 2, writable: true, enumerable: true, configurable: true },
//   '2': { value: 3, writable: true, enumerable: true, configurable: true },
//   length: { value: 3, writable: true, enumerable: false, configurable: false }
// }

console.log(Object.getOwnPropertyNames(array));
// [ '0', '1', '2', 'length' ]

console.log(Object.hasOwn(array));
// false

console.log(Object.is(array,array));
//true

console.log(Object.getOwnPropertyDescriptor(array,1));
// { value: 2, writable: true, enumerable: true, configurable: true }

console.log(Object.seal(array));
// [ 1, 2, 3 ]

console.log(Object.isSealed(array));
// true
