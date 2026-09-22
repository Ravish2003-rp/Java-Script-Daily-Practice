// find the largest digit in a number//

let num = 543220;
let rem = 0; let largest = 0;
while(num>0){
rem =  num % 10;
if(rem>largest){
  largest = rem ;
}
num = Math.floor(num / 10);
}
console.log(largest);