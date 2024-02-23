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
console.log(number);

/**task-2
 * give  the number who divisible by 10
 * by using filter and find
 */

// filter()
const roll = [33, 50, 79, 78, 90, 101, 30]
const Roll = roll.filter(num => num % 10 == 0);
console.log(Roll);

const rollFind = roll.find(num => num%10==0);
console.log(rollFind);