// sum(1)(2)(3)(4)...(n)

// Let's firstly do it for sum(1)(2)
/* 
    So basically what we'll do, we'll create a function which returns a function.
*/

let sum = 0;
function x(num) {
    sum += num;

    // return function y(num) {
    //     sum += num;

    // };
    if (num) {
        return x;
    } else return sum;
}

x(1)(2)(3)(4)(5);
console.log(sum);
console.log(x);

let s = function (a) {
    return function (b) {
        if (b) {
            return s(a + b);
        } else {
            return a;
        }
    };
};

console.log(s(1)(2)(3)(4)(5)());
