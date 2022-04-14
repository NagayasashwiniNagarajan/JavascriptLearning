//JavaScript objects have a unique hidden property [[Prototype]]. It is either null or references another object. The object is named “a prototype.”
//When one wants to read a property from the object, and it’s missing, JavaScript takes it from the prototype. 
//This action is called “prototypal inheritance” in programming.
//The property [[Prototype]] can be internal and hidden.

//method1
let animal = {
    speaks: true
};
let dog = {
    runs: true
};
dog.__proto__ = animal; // (*
// we can find both properties in dog now:
console.log(dog.speaks); // true (**)
console.log(dog.runs); // true

//method2
let animal = {
    speaks: true,
    walk() {
      console.log("Animal walks");
    }
};
let dog = {
    runs: true,
    __proto__: animal
};
dog.walk(); // Animal walks,walk is taken from the prototype

//method3
let animal = {
    speaks: true,
    walk() {
      // this method doesn’t be used by dog 
    }
};
let dog = {
    __proto__: animal
};


