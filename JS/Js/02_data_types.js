"use strict";
// Data types in js and ts are different
//! :  JS
// Following are the primitive data types in js.
//1. Number (all numbers in js are stored as floating point numbers)
let num = 25;
let num1 = 2.5;
//2. String (All kind of string)
let str = "Hello there !";
//3. Boolean
let pos = true;
let neg = false; // only two values (true & false) (0 & 1)
//4. null (conceptually indicates the absence of an object)
let variable = null; // null and undefined can have only one value that is null and undefined themselves.
//5. undefined (conceptually indicates the absence of a value)
let username = undefined;
// 6. bigint
// let bigNum = 1n; This works in js
//7. Symbol  (A unique and immutable data type can be used as keys)
let sym = Symbol.for("HEllooooo");
let sym1 = Symbol("HEllooooo");
console.log(sym == sym1); // false as every symbol is unique
console.log(Symbol.keyFor(sym));
// Non primitive data types :
//1. Arrays :
let arr = ["Hello", "this", 23, "contains", "mulitple types", true];
// Arrays are also an object.
// Everything except primitive values in js are objects (even functions)
// so typeof (array) returns object
// If you want to check if it is an array do Array.isArray()
//2. Objects :
let obj = {
    name: "Abc",
    age: 20,
    profession: "Student",
};
// Object is an data structure which stores values in key value pairs
// Objects are mutable
// Two object can never be same because object stores the reference and not the values
//
//! TS
// Number :
const a = 43;
console.log(a);
// String :
const str1 = "This is a string ";
// Boolean :
const bool = true;
// Any : disable type checking ... try to avoid it
let var1 = "Can be of any data type ";
var1 = 32;
// Unknown : use instead of any;
let unk = "Safer option to any";
// Never : Not really used ;
let ne;
// Null and undefined:
let some = null; // These values can't be changed !
let some1;
// For reference data types ;
// Arrays
let numArray = [1, 2, 3, 4, 5];
let strArray = ["Hello", "world"];
// Objects
let obj1 = {
    name: "DJ",
    age: 20,
    isStudent: true,
};
// Although there is no need to explicitly define the data types in ts
// This were just the basic types of typescript and javascript
