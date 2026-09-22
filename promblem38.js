//find the smallest digit in nnumber//
let number = 9878918; let rem = 0; smallest = 9;

  while(number>0){
    rem = number % 10;
    if(rem<smallest){
      smallest = rem ;

    }
number = Math.floor(number/10);
  }
  console.log(smallest);
