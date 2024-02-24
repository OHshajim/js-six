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
const people = [{ name: 'Rana', age: 20 }, { name: 'Mana', age: 29 }, { name: 'Kana', age: 42 }, { name: 'Lona', age: 20 }]

// 1st method ---reduce()
const AgeTotal = people.reduce((p, c) => p + c.age, 0);
// console.log(AgeTotal);

// 2nd method --- for
let total = 0;
for (let i = 0; i < people.length; i++) {
    let age = people[i].age;
    total = total + age;
};
// console.log(total);



// new tasks
// task -1: console log the secondary school location of Sophia 
let data = {
    Sophia: {
        id: 33,
        study: [
            {
                primary:
                    [
                        { school_name: "ABC primary school" },
                        { location: "Peters burg" }
                    ]
            },
            {
                secondary:
                    [
                        { school_name: "ABC secondary school" },
                        { location: "St Lorence" }
                    ]
            },
        ]
    }
}
// console.log(data.Sophia.study[1].secondary[1].location);

// task-2: console .log  output: Petersburg, Herry

let students = {
    2222: {
        name: "Jack",
        section: "C",
        class: "IX",
        address: {
            "building no": 12,
            "street": "St. Jonson",
            "city": "Petersburg",
            "country": "UK"
        }
    },
    3333: {
        name: "Herry",
        section: "D",
        class: "X",
        address: {
            "building no": 85,
            "street": "DC road",
            "city": "Kachukhet",
            "country": "Bangladesh"
        }
    }
}
// console.log(students["2222"].address["city"] ,",", students["3333"].name);

// task-3 : access and then show habluder adda
// show output Beginner
let data2 = {
    data:
        [
            {
                bookId: 1,
                bookDetails: {
                    name: "habluder adda",
                    category: "XYZ",
                    price: "20$",
                },
                bookCategory: "Basic",
            },
            {
                bookId: 2,
                bookDetails: {
                    name: "gobluder adda",
                    category: "ABC",
                    price: "40$",
                },
                bookCategory: "Beginner",
            }
        ]
}
// console.log(data2.data[0].bookDetails.name);
// console.log(data2.data[1].bookCategory);