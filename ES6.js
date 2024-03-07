// object 
const Masud = {
    name: 'masuidda',
    age: 24,
    wifes: ['tuli', 'botki', 'mithila', 'bristi'],
    son : "kallo"
}


// template string
const about = `My name is ${Masud.name} and iam ${Masud.age} years old , and i have too many wifes and sons 
my first wife is ${Masud.wifes[3]} and my son is ${Masud.son} `;

console.log(about);

// arrow function 
const getNumber = () => 5;
const Add = num => 5 + num;
const even = x => x % 2 == 0;
const addMore = (x,r,t) => x+r+t;
const more = ()=>{
// multiline
}


// spread operator ('...')
const number = [86, 78, 46, 57, 34];
const num = [...number]
const num1 = [...number , "add numbers"]

number.push(98)
number.push(98)
number.push(98)

console.log(number);
console.log(num);
console.log(num1);