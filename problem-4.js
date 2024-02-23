/**write an arrow function 
 * 1. who take two array
 * 2. add between 
 * 3. give the largest element 
 * 4. by using spread operator
 */

const large =(array1=[0] , array2=[0])=>{
    const finalArray = [...array1,...array2]
    console.log(finalArray);
    return Math.max(...finalArray);
};
// console.log(large([5,78,57,45],[4,-534,-0,45,53]));
