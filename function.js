// factorial using recursion
function fact(x){
    if(typeof(x)!= 'number'){
        return "It is not a number";
    }
    else if(x == 0){
        return 1;
    }
    else{
        return x * fact(x-1);
    }
}
fact(0);

//factorial using for loop
function fact(x){
    var num = 1
    if(typeof(x)!="number"){
        return ("it is not a number");
    }
    else if(x == 0||x == 1){
        return 1;
    }
    else{
        for(var i = 0; i < x; i++){
            num = i * x;
        }
        return num;
    }
}
fact(3);

function fact(x){
    var num = 1
    if(typeof(x)!="number"){
        return ("it is not a number");
    }
    else if(x == 0||x == 1){
        return 1;
    }
    else{
        for(var i = 1; i < x; i++){
            num = num * i;
        }
        return num;
    }
}
fact(3);

function fact(x){
    var num = 1
    if(typeof(x)!="number"){
        return ("it is not a number");
    }
    else if(x == 0||x == 1){
        return 1;
    }
    else{
        for(var i = x; i > 0; i--){
            num = i * num;
        }
        return num;
    }
}
fact(3);

//factorial using while loop
function fact(x){
    var num = 1;
    if(typeof(x)!="number"){
        return ("it is not a number");
    }
    else if(x == 0||x == 1){
        return 1;
    }
    else{
        var i = 1;
        while(i <= x){
            num = num * i;
            i++;
        }
        return num;
    }
}
fact(3);

function fact(x){
    var num = 1;
    if(typeof(x)!="number"){
        return ("it is not a number");
    }
    else if(x == 0||x == 1){
        return 1;
    }
    else{
        while(x > 0){
            num = num * x;
            x--;
        }
        return num;
    }
}
fact(3);

// factorial using do..while loop
function fact(x){
    var num = 1;
    if(typeof(x)!="number"){
        return ("it is not a number");
    }
    else if(x == 0||x == 1){
        return 1;
    }
    else{
        var i = 1;
        do{
            num = num * i;
            i++;
        }while(i<=x);
        return num;
    }
}
fact(3);

function fact(x){
    var num = 1;
    if(typeof(x)!="number"){
        return ("it is not a number");
    }
    else if(x == 0||x == 1){
        return 1;
    }
    else{
        do{
            num = num * x;
            x--;
        }while(x>0);
        return num;
    }
}
fact(3);

function checkdata(x){
    return typeof(x);
}
checkdata("string");
checkdata(1234567890806790);

//check truthy false value
function value(x){
    if(x==false || x==0 || x==null || x==undefined || x==NaN || x==""){
        return "false value";
    }
    else{
        return "true value";
    }
}
value(0);
value(1);
value('');

//check truthyOrFalsy value
function truthyOrFalsy(a) {
    if(a){
        return "truthy";
    }else{
        return "falsy";
    }
}
truthyOrFalsy(0);

