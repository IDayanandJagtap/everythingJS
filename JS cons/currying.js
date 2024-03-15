// In currying function with multiple arguments is transformed into sequence of nested
// single-argument(unary) functions.
// Each function takes one argument and returns another function and so on.

// We can create more specialized function from normal ones
// Reusable by changing the arguments
// Modular

function add(x, y) {
    return x + y;
}

console.log(add(2, 3)); // 5, normal function

function curriedAdd(x) {
    return function (y) {
        return x + y;
    };
}

const addTwo = curriedAdd(2);
console.log(addTwo(2)); // 4
console.log(addTwo(4)); // 6

const addFive = curriedAdd(5);
console.log(addFive(5)); // 10
console.log(addFive(10)); // 15
