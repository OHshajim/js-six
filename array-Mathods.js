const products = [
    { name: 'laptop', brand: 'lanovo', price: 30000, color: 'black' },
    { name: 'phone', brand: 'apple', price: 150000, color: 'black' },
    { name: 'watch', brand: 'Navy Force', price: 5000, color: 'black' },
    { name: 'sunglass', brand: 'mty', price: 3000, color: 'black' },
    { name: 'earpods', brand: 'apple', price: 30000, color: 'black' },
];

//**   map
const brands = products.map(product => product.brand)
// console.log(brands);
const price = products.map(price => price.price)
// console.log(price);

//** foreach
products.forEach(element => {
    // console.log(element.name)
});

//**  filter
const cheap = products.filter(product => product.price <= 10000);
// console.log(cheap);
const search = products.filter(product=>product.name.includes('n'));
// console.log(search);


// ** find
const spacial = products.find(product=>product.name.includes('n'));
// console.log(spacial);