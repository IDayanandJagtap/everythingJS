// Only difference between var and let you should know !

/* 

    The scope .. 
    var is function scoped whereas let is block scoped and 
    var can be redeclared whereas let can't 

    checkout below snippets

*/

// var y = 20;

// function changeVar() {
//     if (true) {
//         var y = 30;
//         console.log(y); // 30
//     }

//     console.log(y); // 30
// }

// console.log(y); // 20

var y = 40;
console.log(y); // 40

/*
    This is the problem ... If you have created a global variable and redeclared it ...it could bring some bugs...
*/

//! let

let x = 20;

function changeVar() {
    if (true) {
        let x = 30;
        console.log(x); // 30
    }

    console.log(x); // 20
}

changeVar();
console.log(x); // 20

let x = 40;
console.log(x); // error ... already defined
