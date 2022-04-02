function validate(input)
{
    if(Array.isArray(input))
    {
        var isInteger = input.every(function(elements){
            return elements>0;
        });
        console.log(`Array integer check :${isInteger}`);

        if(isInteger){
            var sum = input.reduce(function(accumulator,currentValue){
                return accumulator + currentValue;
            });
            console.log(`The sum of positive array elements : ${sum}`);
            return sum;
        }
        else{
            return "Invalid Input";
        }
    }
}
console.log(validate([1,2,3]));

function validate(input){
    if(Array.isArray(input)){
        var isInteger = input.every((elements)=>(elements>0));
        if(isInteger){
            var sum = input.reduce((accumulator,currentValue)=>(accumulator + currentValue));
            return sum;
        }
        else{
            return "Invalid Input";
        }
    }
}
console.log(validate([1,-2,3,4]));

// Refactored

function validate(i){
    let value =  Array.isArray(i) ?(i.every((e)=>(e>0))? (i.reduce((a,c)=>(a + c))):"Invalid Input"):'Invalid Input';
    return value;
}
console.log(validate([1,-2,3]));  //Invalid input
console.log(validate([1,2,3]));  //6


