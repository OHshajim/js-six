/** write an arrow function  
 * 1. who take an array
 * 2. where thr element will be the name 
 * 3. check the name length
 * 4. if length is even than create a new array with those name
 */
const nam = []
const Names = (list) => {
    for (const name of list) {
        if (name.length % 2 === 0) {
            nam.push(name)
        }
    }
    console.log(nam);
};

Names(["fakhim","hati","miraj", "masud", "boni","roton"])

