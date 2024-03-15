/* 
    These function works on methods of the object !
*/

/* 
!   1. Call
    call is used to call any function on a object ! 
    A function has "this" associated with it, so what we do, we let the function's this refer to the object on which we want to call the function

*/

const car = {
    com: "Tata",
    model: "Harrier",
    printName: function () {
        console.log(this.com + " " + this.model);
    },
};

const car2 = {
    com: "Mahindra",
    model: "XUV 700",
};

car.printName();

/* 
    So this is simple ... but what if we want printName method in car2 ? 
    we won't repeat right ! ... so we'll call the method printName from car1 but "this" will refer to car2

    
*/

car.printName.call(car2);

/*
    In above case ... [car.printName] is a function right!
    It means we can use call on normal functions as well.
*/

function printName() {
    console.log(this.com + " " + this.model);
}

printName.call(car2);

/* 
    That's how it works !
    But what if we had multiple arguments ? 
        - In that case, the firts argument to the call() is always reference to this and then we can pass whatever args we want;
*/

function printAnotherName(tag) {
    console.log(this.com + " " + this.model + " " + tag);
}

printAnotherName.call(car2, "good");

// That was all about call !

/* 
!   2. Apply 
        - it is pretty similar to call ... in fact it is almost similar 
        - the only difference is how we pass the arguments . 
        - for apply() , the first arg must be reference and second argument is an array of args.
*/

function exampleOfApply(arg1, arg2, arg3) {
    console.log(this.com + " " + this.model + " " + arg1 + arg2 + arg3);
}

exampleOfApply.apply(car, ["best ", "for security ", "and comfort"]);

// that was all about apply

/* 
!   3. Bind
        - again same phenomena ...
        - the difference is it doesn't calls the method right away.
        - instead it creates the copy of a function for that particular "this" reference and allows us to invoke it whenever we want.
        - In simple words , it binds that method to the given reference. 
*/

function exampleOfBind(arg1) {
    console.log(this.com + " " + this.model + arg1);
}

let returnedMethod = exampleOfBind.bind(car, " is best");
// Now call the returnedMethod whenever you want;
returnedMethod();

// That was all about bind
