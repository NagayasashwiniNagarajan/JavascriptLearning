let stock = {
    fruits: ["Apple","Grapes","Mango","Banana"],
    liquid: ["Water","Ice Cubes"],
    holder: ["Cone","Cup","Stick"],
    topping: ["Chocolate","Peanuts"],
}
console.log(stock);
// {
//   fruits: [ 'Apple', 'Grapes', 'Mango', 'Banana' ],
//   liquid: [ 'Water', 'Ice Cubes' ],
//   holder: [ 'Cone', 'Cup', 'Stick' ],
//   topping: [ 'Chocolate', 'Peanuts' ]
// }

let is_shop = true;

function time(ms){
    return new Promise((resolve, reject)=>{
        if(is_shop){
            setTimeout(resolve,ms);
        }else{
            reject(console.log("Shop is closed"));
        }
    });
}

async function kitchen(){
    try{
        await time(2000);
        console.log(`${stock.fruits[0]} was selected`);

        await time(1000);
        console.log("cut the fruit were added");
        console.log(`${stock.liquid[1]}`);
        
        await time(1000);
        console.log(`${stock.topping[0]} !! was added as toppings`);
    }
    catch(error){
        console.log("Customer left");
    }
    finally{
        console.log("Day ended! Shop closed");
    }
}
 
kitchen();

// Apple was selected
// cut the fruit were added
// Ice Cubes
// Chocolate !! was added as toppings
// Day ended! Shop closed
