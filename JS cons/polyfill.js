//!  Polyfill of call;

Function.prototype.myCall = function (reference, ...args) {
    const uniqueName = Symbol("name");
    reference[uniqueName] = this;
    reference[uniqueName](...args);
    delete reference[uniqueName];
};

function x(arg1, arg2) {
    console.log(this.name + arg1 + arg2);
}

const newObj = {
    name: "DJ",
};

// x.myCall(newObj, " programmer", " problem-solver");
// console.log(newObj);

//! Polyfill of Bind

Function.prototype.myBind = function (reference, ...args) {
    let func = this;
    return function () {
        func.call(reference, ...args);
    };
};

function bindable(arg1, arg2) {
    console.log(this.name + " " + arg1 + arg2);
}

let method = bindable.myBind(newObj, " is best", " programmer!");
console.log(method());
