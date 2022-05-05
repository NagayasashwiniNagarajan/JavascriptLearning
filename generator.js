User = [{
    name:"A",
    no:1
},{
    name:"B",
    no:2
}];

function* generateID(){
    for(let i=0;i<User.length;i++){
        yield User[i];
    }
}
const generatorIdO = generateID(User);
console.log(generatorIdO.next());
console.log(generatorIdO.next());
// console.log(generatorIdO.throw(new Error("Hello")));   //Uncaught Error"Hello"

// { value: { name: 'A', no: 1 }, done: false }
// { value: { name: 'B', no: 2 }, done: false }

function* geneId(User){
    let no = 1;
    while(true){
        const increment = yield no;
        if(increment != null){
            no += increment;
        }else{
            no++;
        }
    }
}
const obj = geneId();
console.log(obj.next());
console.log(obj.next());
console.log(obj.next(4));
console.log(obj.return(10));
console.log(obj.next());
// { value: 1, done: false }
// { value: 2, done: false }
// { value: 6, done: false }
// { value: 10, done: true }
// { value: undefined, done: true }

function randstr(prefix){
    return Math.random().toString(8).replace('FULL',prefix || '');
}
let idx = randstr('FULL');
console.log(idx);
//0.36142447264454042
