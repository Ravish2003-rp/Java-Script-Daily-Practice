//count no of digits in number//
/*let num = 908;
count = 0 ;
while (num>0) {
num = Math.floor (num/10);
count++;
}
console.log(count);*/

let num = 45000;
count = 0; let rem =0;
while(num>0){
rem = num % 10 ;
num = (num-rem)/10;
count++;
}
console.log(count);
// its easy for eg take example of 45 now 45 % 10 gives us rem = 5; now take this value  put in no that is num = i.e  num here 45 - rem i.e 5 bcsms 45-5 = 40 then / 10 = 4 and process 
//continues until num > 0 here  4%10 = 4 rem num is 4- 4 = 0 / 10 = less than 0.