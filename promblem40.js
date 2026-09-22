//generate the fibonacci series seriesn starts with usually 0 and 1 1 2 3 5 8 13 where 3rd value is result of sum of 1st and 2nd value//

let fd = 0; let sd=1; let td;
while(fd<=100){
  console.log(fd);
  td=fd+sd;
  fd = sd;
  sd = td;
}