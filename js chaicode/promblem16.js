//create a simple calculator//
let num1 = 50;
let num2 =100;
let operator = "/"
let result;

if(operator === "+"){
    result = num1 + num2;
}else if( operator === "-"){
    result = num1 - num2;
}else if ( operator === "*"){
    result = num1 * num2;
}else if ( operator === "/"){
    result = num1/num2;
}else{
    console.log(result = " error")
}
console.log(result);