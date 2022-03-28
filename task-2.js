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

for(var i = 0;i<array.length;i++){
    delete array[i].garbage;
}

let element = {};
for(var i=0;i<array.length;i++){
    element = Object.assign(element,array[i]);
}
console.log(element);