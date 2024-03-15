let arr = [1, 2, "car"];

// console.log(arr[0], arr[1], arr[2]);

arr[0] = "3";

// console.log(arr);

// console.log(arr.slice(0, 1));

// arr.forEach(run);

function run(e) {
    console.log(e);
}

// Add ;
function add(a, b) {
    return a + b;
}

// console.log(add(1, 3));

// scope
function hello() {
    // let arr = "world";
    function newScope() {
        // let arr = ["hello"];

        console.log(arr);
    }

    newScope();
}

// hello();
let x = 20;
console.log(typeof x);

/* 
    number 
    string 
    boolean 
    null 
    undefined 
    symbol 
    bigint
*/

arr = [1, 2, 3, 4, "apple", "zebra", "cat"];

arr.push("car");
console.log(arr);
arr.pop();
console.log(arr);

console.log(arr.reverse());
console.log(arr.reverse());

arr.shift();
console.log(arr);
arr.unshift(2);
console.log(arr);

console.log(arr.indexOf("cat"));

console.log(Array.isArray(arr));

// map filter reduce ...
// destructuring .. spread operator..
