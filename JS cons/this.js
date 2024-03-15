// This keyword behaves differently according to following chars
"use strict";

//! 1. Global space
console.log(this); // refers to global object !

//! 2. In functions
function x() {
    // Here it depends on the strict/ non-strict mode
    // Strict -> undefined
    // Non-strict -> this substitution (if this is undefined or null it is replaced with global object)
    console.log(this);
}

//! 3. How it is called
x(); // undefined
window.x(); // global object (in browser)

//! 4. In object methods

const obj = {
    a: 10,
    x: function () {
        console.log(this); // refers to the object
    },
};

obj.x(); // obj

//# arrow functions
// In case of arrow functions, they don't have their own this binding, they refer to the enclosing lexical context
// for simplicity understand like this ... they refer to the grandparent and not parent;

const obj2 = {
    a: 10,
    x: () => {
        console.log(this);
    },
};
obj2.x(); // window as the grandparent is global object

const obj3 = {
    name: "DJ",
    printName: function () {
        // console.log(this.name);
        const y = () => {
            console.log(this.name);
        };
        y();
    },
};

obj3.printName(); // Now it will point to the obj;

//! 5. In dom nodes
// it points to the HTML Element itself
button.addEventListener("click", function () {
    alert(this);
});

//! 6. In oops
// In this case this refers to the class!
class ExplainThis {
    constructor() {
        this.name = "Class it is";
    }

    x = 10;
    y = 15;
    printThis() {
        console.log(this);
        console.log(this.x, this.y);
        console.log(this.name);
    }
}

const v = new ExplainThis();
v.printThis(); // 1-> class , 2-> 10 15 , 3 -> "Class it is"
