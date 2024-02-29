// task-1 -delay time

//  a function that displays a message after 5s.
function late() {
    setTimeout(() => {
        console.log('late');
    }, 5000)
}
// late();

//  a function called delayedGreeting() that takes two parameters, name and delay time, and logs a greeting message after the given delay time.
function delayedGreeting(name, time) {
    setTimeout(() => {
        console.log(name);
    }, time);
}
// delayedGreeting("Masud",500)


// task-2
// The function tellJoke() below logs a funny message every 2 seconds and after 10 seconds, it stops. Complete the code below and see the output.
// function tellJoke() {
//     console.log("Why don't scientists trust atoms? Because they make up everything!");
// }

// const jokeInterval = setInterval(tellJoke, 2000);

// // After 10 seconds, stop telling jokes
// setTimeout(() => {
//     clearInterval(jokeInterval,1);

// }, 10000);


// Write an async/await function that fetch data from an api and logs a message.

async function joke() {
    const res =await fetch('https://v2.jokeapi.dev/joke/Programming?type=single');
    const data =await res.json();
    console.log(data.joke);
}
joke()