//my calculator

function add(num1,num2){
    return num1+num2
}
function sub(num1,num2){
    return num1-num2;
}
function mult(...arr){
    let product=1;
    for (const num of arr){
        product*=num;
    }
    return product;
}
function div(num1,num2){
    return num1/num2;
}
function calculator(num1,num2,Callback){
    console.log("It is calculating....");
    result=Callback(num1,num2);
    console.log(`The answer is ${result}`);
}
calculator(2,3,add);