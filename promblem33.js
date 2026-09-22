//rev a num//
//589=985; num ; rev num 
let num = 9765; let rem  = 0;
let rev = 0; let  count = 0;
while (num>0){
rem = num%10;
num = (num-rem)/10;
rev =  rev * 10  + rem ;
count++;
}
console.log(rev);
// notes num%10 = get last digit of no.    to remove last digit= num  - rem /10 or simply math.floor (num/10);  for  rev digit = rev*10+num rev storing in container intiaize 0//