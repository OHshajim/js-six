/** write an arrow function 
 * 1. who take numbers of array 
 * 2. square element 
 * 3. sum of all
 * 4. return average 
 */
let total = 0;
const calculate = (array) => {
    for (const num of array) {
        let square = Math.pow(num, 2);
        total += square;
    };
    let avg = parseFloat(total / array.length);
    console.log(avg);
};
calculate([5, 1, 2, 1, 5]);