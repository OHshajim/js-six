// 'abcd' ,55,true ,{},[]
// '',0,false,null ,undefined

// check truthy 
let myvar = 1;
// check truthy
if (myvar) {
    // console.log("truthy");
}
else {
    console.log("falsy");
};

// check falsy
let mymoney = 0;
if (!mymoney) {
    // console.log("falsy");
}




// ternary 

let food = 200 , money = 300 ;

let food1 = money > 1000 ? 'biriany' : 'tea' ;

let drink = (money > 100 && myvar >100)? "coke": "filter water";


// number to string 
const age = 23 ;
const ageStr = age + "" ;

// string to number 
const numStr = "234";
const num = +numStr ;

// console.log(ageStr ,num);


// 
let isActive = false ;
const show =()=> console.log("display user");
const hide  =()=> console.log("hide user");

// isActive? show():hide()

// if both side are true then  run 
isActive&& show()

// use or ||
isActive|| hide()

isActive=!isActive;