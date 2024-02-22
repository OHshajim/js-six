// 1st problem
// An arrow function to take 2 number and give its multiply
const multiply = (x = 0, y = 0) => x * y;
console.log(multiply(10, 20));

// 2nd problem
// write the three sentence in tree line 

//1. 1st method
const text1 = "I am a web developer .\nI love to code .\nI love to eat kacci biriyani ."
console.log(text1);

//2. 2nd method 
const text2 =
    `My name is Shajim .
I am a big loser .
I am a fool developer .`
console.log(text2);

// third problem 
// set a default value 
const totalValue = (x, y = 50.9) => x + y;
console.log(totalValue(49.1));