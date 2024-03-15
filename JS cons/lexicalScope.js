/**
 * Lexical scope of x is local memory of x + lexical scope of it's parent
 *
 *
 * In below example ...
 * 3 entries are present in call stack
 *    |         |
 *    |   b     |
 *    |   a     |
 *    | global  |
 *
 *
 *     b has it's var's and functions in it's memory as well as it has a reference to
 *      it's parents memory ... this is called as lexical scope
 *
 *      in our  case b will have access to the variable c as well as variable Y
 *
 *      Here a is lexical parent of b and Global object is lexical parent of a
 *      and for the global object ... it refers to null as it's lexical parent
 *
 *      and this accessing the scope of one's parent is called as scope chain
 */
var y = 10;

function a() {
    var c = 10;
    let d = "something";
    console.log(y);
    function b() {
        console.log(c);
    }
}

a();
