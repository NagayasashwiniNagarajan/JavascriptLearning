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

//modified
//method1
function filterItems(input){
    let obj = {};
    for(item in input){
        obj[Object.keys(input[item])[0]] = Object.values(input[item])[0];
    }
    console.log(obj);
}
filterItems(array);
