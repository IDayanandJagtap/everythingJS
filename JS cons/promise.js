function prom() {
    return new Promise(function (resolve, reject) {
        // Now either we can resolve (success) or reject (fail) the asynchronous request
        setTimeout(() => {
            reject(new Error("Something went wrong ."));
        }, 3000);
    });
}

// prom()
//     .then(function (value) {
//         return value;
//     })
//     .then(function (v) {
//         console.log(v);
//     });

// Now consider if we want to only catch the error cause by first then and don't want to monitor the second then
// Then we can either attach a catch after first then but if the chaining was long it might result into ambiguity so
// there is another way to do it

prom().then(
    (val) => {
        console.log("Success ", val);
    },
    (err) => {
        console.log("Failure ", err.message);
    }
);

// Handling both states in then block ! ... The first is when a promise is resolved and the other is when promise is rejected

//*** */
// console.log(typeof p);

/* 
    What happens in async-await , it is checked whether if the promise is resolved or not ... if it is resolved it continues the execution of next line and if the state is pending then the execution of the program is suspended until the promise is resolved !
*/

const p = new Promise((res, rej) => {
    setTimeout(() => res("Promise 1"), 10000);
});

// Async await
const p2 = new Promise((res, rej) => {
    setTimeout(() => res("Promise 2"), 5000);
});

console.log(p2);
setTimeout(() => console.log(p2), 6000);

const greet = new Promise((res) => {
    setTimeout(() => res("Greet"), 15000);
});

// const p = async () => {
//     return new Promise((res) => {
//         setTimeout(() => res("Promise 1"), 10000);
//     });
// };

// // Async await
// const p2 = async () => {
//     return new Promise((res) => {
//         setTimeout(() => res("Promise 2"), 5000);
//     });
// };

// const greet = async () => {
//     return new Promise((res) => {
//         setTimeout(() => res("Greet"), 15000);
//     });
// };

async function hello() {
    const curr = new Date().getTime();

    const res1 = await p;
    console.log(res1);

    const res2 = await p2;
    console.log(res2);

    const res3 = await greet;
    console.log(res3);

    const now = new Date().getTime();

    console.log(now - curr);
}

hello();
// setTimeout(() => hello(), 15000);

/* 
    In the above example we have created promises using two methods 
    1. promise constructor 
    2. promise wrapper

    1 -> as soon as the promise is encountered it's execution is started. 
        so it won't take much time to execute all the promises and that's why these promises run in parallel. Because they are already registered

        if we delay hello() by 15sec then the promises are logged immediately that explains the concept. 


    2-> The promise execution will start once the function is invoked.
        Here the promise starts is execution (in our case timeout) once it is called ... so in this case it appears to be sequential and it takes whole 30 seconds to complete the task (all promises);
        And this is how real world promises work;
    
*/
