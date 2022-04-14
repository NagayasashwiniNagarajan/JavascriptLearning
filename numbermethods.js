//Literal syntax 
102
102.0         //same
102 === 102.0 //true

//function syntax
Number('12');       //returns the number 
Number("avvewh");   //NaN
Number(undefined);  //NaN
Number(null);       //0
Number('0x11');     //17

const result = Math.abs(1.2 - 0.3 + 0.4);
console.log(result);                               //1.2999999999999998
console.log(result < Number.EPSILON);              //false
console.log(result< Number.MAX_SAFE_INTEGER + 2);  //true
console.log(result < Number.MAX_VALUE);            //true
console.log(result < Number.MIN_SAFE_INTEGER);     //false
console.log(result < Number.MIN_VALUE);            //false
console.log(result > Number.POSITIVE_INFINITY);    //false

function results(a, b){
    console.log(Math.abs(a + b));                   //7                       
    console.log(Math.acos(a / b));                  //NaN
    console.log(Math.asin(-2 / b));                 //-1.5707963267948966
    console.log(Math.atan(a/ b));                   //1.1902899496825317
    console.log(Math.atan(Infinity / b));           //1.5707963267948966
    console.log(Math.atan2(b, a)*180 / Math.PI);    //21.80140948635181
    console.log(Math.ceil(null));                   //0
    console.log(Math.sqrt((a*a)+(b*b)));            //5.385164807134504
    console.log(Math.log(b)/ Math.log(a));          //0.43067655807339306
    console.log(Math.pow(a, b));                    //25
    console.log(Math.exp(-1));                      //0.36787944117144233
}
results(5,2);

function sequence(a,b,c,d){
    console.log(Math.max(a,b,c,d));                //5
    console.log(Math.min(a,b,c,d));                //-9
}
sequence(-3,-9,-1,5);

function checkNum(a){
    console.log(isNaN(a));                        //false
    console.log(isFinite(-2));                    //true
}
checkNum(4);
