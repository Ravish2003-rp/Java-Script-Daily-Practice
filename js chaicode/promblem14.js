//create a grade calculator//
let mathsscore = 90
let physcore = 88
let chemscore = 77
let compscore =  73;
let totalscore = mathsscore + physcore + chemscore + compscore;
let avgscore = totalscore / 4; 

if(avgscore > 90 && avgscore <= 100){
    console.log(avgscore + " grade is A");
}else if (avgscore> 80 && avgscore <= 90){
    console.log(avgscore + " grade is B");
}else if (avgscore>70 && avgscore <= 80){
    console.log(avgscore + " grade is C");
}else{
    console.log(avgscore + " fail");
}
