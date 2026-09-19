//create login check using username and passwor//
const validusername = 'RAHUL';
const inputusername = 'RAHUL';
const validpassword = 'Rahul@123';
const inputpassword =  'Rahul@123';
let login_check = validusername === inputusername && validpassword === inputpassword ? "successful login" : "fail";
console.log (login_check);