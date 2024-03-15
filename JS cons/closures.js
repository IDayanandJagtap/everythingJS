/*
    Closures : A function with it's lexical environment
*/

function x() {
    let name = "DJ";

    function y() {
        console.log(name);
    }

    return y;
}

var z = x();

// after some lines or some time

z();
