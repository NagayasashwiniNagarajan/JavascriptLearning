// input: [
//   {personA: 'A', garbage: 'asldkfj'},
//   {personB: 'B', garbage: 'asldkfj'},
//   {personC: 'C', garbage: 'asldkfj'},
//   {personD: 'D', garbage: 'asldkfj'},
//   {personE: 'E', garbage: 'asldkfj'},
//   {personF: 'F', garbage: 'asldkfj'},
//   {personG: 'G', garbage: 'asldkfj'}
// ]

// output: {
//   personA: 'A',
//   personB: 'B',
//   personC: 'C',
//   personD: 'D', 
//   personE: 'E',
//   personF: 'F',
//   personG: 'G'
// }

var array = [
    {personA: 'A', garbage: 'asldkfj'},
    {personB: 'B', garbage: 'asldkfj'},
    {personC: 'C', garbage: 'asldkfj'},
    {personD: 'D', garbage: 'asldkfj'},
    {personE: 'E', garbage: 'asldkfj'},
    {personF: 'F', garbage: 'asldkfj'},
    {personG: 'G', garbage: 'asldkfj'}
];

let element = {};
for(let i of array){
    delete i.garbage;
}
element = Object.assign(element,array); 
console.log(element);

