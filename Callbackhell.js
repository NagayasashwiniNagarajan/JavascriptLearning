let stock = {
    fruits: ["apple","grapes","mango","banana"],
    liquid: ["water","ice cubes"],
    holder: ["cone","cup","stick"],
    topping: ["chocolate","peanuts"],
}
console.log(stock);
// {
//   fruits: [ 'apple', 'grapes', 'mango', 'banana' ],
//   liquid: [ 'water', 'ice cubes' ],
//   holder: [ 'cone', 'cup', 'stick' ],
//   topping: [ 'chocolate', 'peanuts' ]
// }

//callback hell

let order = (fruit_name,call_production)=>{
    setTimeout(()=>{
        console.log(`${stock.fruits[fruit_name]} was selected`);    
        call_production();
    },2000);
    
};

let production = ()=>{

    setTimeout(()=>{
        console.log(" production has started ");

        setTimeout(()=>{
            console.log(" The fruit have been chopped");

            setTimeout(()=>{
                console.log(`${stock.liquid[0]} and ${stock.liquid[1]} were given`);

                setTimeout(()=>{
                    console.log(" Machine was started");

                    setTimeout(()=>{
                        console.log(`${stock.holder[0]} was added`);

                        setTimeout(()=>{
                            console.log(`${stock.topping[0]} was added as toppings`);

                            setTimeout(()=>{
                                console.log(" serve the ice cream");
                            },1000);
                        },3000);
                    },2000);
                },1000);
            },1000);
        },2000);
    },0000);
};
order(0,production);

// apple was selected
//  production has started 
//  The fruit have been chopped
// water and ice cubes were given
//  Machine was started
// cone was added
// chocolate was added as toppings
//  serve the ice cream
