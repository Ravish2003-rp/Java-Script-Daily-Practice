//check weather num is palindrome or not 121 = 121//
let num = 1001; rev = 0;  let original = num; let rem = 0;
while(num>0){
rem = num%10;
rev = (rev*10)+rem;
num = Math.floor(num/10);

}
  if(rev===original){
   console.log("palindrome");
  }
  else{
    console.log("not palindrome")
  }