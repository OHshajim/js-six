// 1.JSON
const watch = {
    color: 'black ',
    price: 3000
};

// all string 
const watchJSON = JSON.stringify(watch);
console.log(watchJSON);

// normal 
const watchObj = JSON.parse(watchJSON);
console.log(watchObj);


// 2 . fetch
fetch('url')
    .then(res => res.json())
    .then(data => console.log(data));

// obj keys and values 
const keys = Object.keys.watch;
const values = Object.values.watch;

// for 
const numbers = [12, 12, 12, 34];
numbers.forEach(num => console.log(num))
numbers.map(num => num * 2)


// for of on array like obj
// for in on obj


// add or remove array 
const products = [
    { name: 'laptop', brand: 'lanovo', price: 30000, color: 'black' },
    { name: 'phone', brand: 'apple', price: 150000, color: 'black' },
    { name: 'watch', brand: 'Navy Force', price: 5000, color: 'black' },
    { name: 'sunglass', brand: 'mty', price: 3000, color: 'black' },
    { name: 'earpods', brand: 'apple', price: 30000, color: 'black' },
];
const newProduct = { name: 'camara', brand: 'canon', price: '50000', color: 'gray' }

// add 
const newItems = { ...products, newProduct }

// remove
const remaining = products.filter(p => p.name !== "phone")
