//this = For all regular function , this points to window object 

console.log(this);                     //object(window)
// {}

var user = {
    firstName: "Arun",
    yearExperience: 4,
    getCourseCount: function(){
        console.log("Line8",this);     
        //print object with first 3properties
        function sayHello(){
            console.log("Line11",this);
            console.log("Hello");
        }
        sayHello();
    },
};

user.getCourseCount();

// Line8 {
//   firstName: 'Arun',
//   yearExperience: 4,
//   getCourseCount: [Function: getCourseCount]
// }
// Line11 <ref *1> Object [global] {
//   global: [Circular *1],
//   clearInterval: [Function: clearInterval],
//   clearTimeout: [Function: clearTimeout],
//   setInterval: [Function: setInterval],
//   setTimeout: [Function: setTimeout] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   queueMicrotask: [Function: queueMicrotask],
//   performance: Performance {
//     nodeTiming: PerformanceNodeTiming {
//       name: 'node',
//       entryType: 'node',
//       startTime: 0,
//       duration: 68.33800005912781,
//       nodeStart: 1.2140998840332031,
//       v8Start: 5.055599927902222,
//       bootstrapComplete: 49.54959988594055,
//       environment: 26.273499965667725,
//       loopStart: -1,
//       loopExit: -1,
//       idleTime: 0
//     },
//     timeOrigin: 1649915687527.798
//   },
//   clearImmediate: [Function: clearImmediate],
//   setImmediate: [Function: setImmediate] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   }
// }
// Hello
