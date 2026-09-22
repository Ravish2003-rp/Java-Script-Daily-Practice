//sum//
let num = 321;
let sum = 0;
let count = 0; let rem = 0;

while(num>0){

rem = num%10;
num = (num-rem)/10;
sum = sum+rem;

count++
}
console.log(sum);

