//create a basic number pattern//
/*let n = 5;//basic in order
for(let i=1; i<=n;i++){
  let row = ""
  for(let j=1;j<=i;j++){
    row = row + j;
  }
  console.log(row);
}
let n = 5;//inc repeated no
for(let i =1 ; i<=n; i++){
  let row = ""
  for(let j =1; j<=i;j++){
    row = row +i;
  }
  console.log(row);
}
let n =5;//dec no
for(let i = 1 ; i<=n; i++){
  let row = "";
  for (let j = 5 ; j>= n-i+1; j--){
    row = row + j;
  }
  console.log(row);
}*/
let n = 5;
for(let i=1;i<=n;i++){
  row = "";
  for(let k = 1; k<=n-1;k++){
    row = row  + " ";
  }
  for(let j =5 ; j>=n-i+1;j--){
    row = row +  j;
  }
  console.log(row);
}
