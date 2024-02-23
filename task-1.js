/**
 * 1.map()
 * 2.filter()
 * 3.find()
 */

/** task-1 
 * take an array number of odd 
 * convert with number of even
 * by using map
 */
const numbers = [1, 3, 5, 7, 9];
const number = numbers.map(num => num + 1)
// console.log(number);

/**task-2
 * give  the number who divisible by 10
 * by using filter and find
 */


const roll = [33, 50, 79, 78, 90, 101, 30]

// filter()
const Roll = roll.filter(num => num % 10 == 0);
// console.log(Roll);

// find()
const rollFind = roll.find(num => num % 10 == 0);
// console.log(rollFind);


/**Task-3
 * give the name who senior
 */
const instructor = [
    { name: 'Nodi', age: 18, position: 'Senior' },
    { name: 'Akhi', age: 26, position: 'Junior' },
    { name: 'Shobuj', age: 28, position: 'Senior' }
];
const Name = instructor.filter(id => id.position === 'Senior')
const Names = Name.map(id => id.name)
// console.log(Names); 



/**task-4
 * take the age value and return the total
 */
const people = [{ name: 'Rana', age: 20 }, { name: 'Mana', age: 29 }, { name:'Kana', age: 42 }, { name: 'Lona', age: 20 }]
// 1st method
const AgeTotal = people.map(id=>id.age).reduce((p,c)=>p+c);
console.log(AgeTotal);