// 1. how to declare a variable using let and const 

// fixed value
const fatherName = shajim;
// change value
let num = 0;
num = 99;


// 6 basic condition  >, <, ===, !==, <=, >=

if (condition) {}
else if (condition){}
else{}


// 3. array 
// index
// length , push , pop 
const number = [86,78,46,57,345,54,45,4,5,6,7];


// function
function name (num1,num2){
    return num1 + num2 ;
}


// object 
const Masud = {
    name : 'masuidda' ,
    age : 24 ,
    wifes : ['tuli' , 'botki' , 'mithila' , 'bristi'] ,
}
// 3 ways to access 
console.log(Masud.name);
console.log(Masud['age']);

const wife = 'wifes'
console.log(Masud[wife]);