//check weather a number is prime//
let num = 13; let count = 0;
for(i = 1 ; i<=13 ; i++){
  if(num%i===0){
    count++;
}
}
if (count==2){
  console.log("prime");

}else{
  console.log("notprime")
}
