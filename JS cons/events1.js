// Event bubbling and event capturing(trickling)

/**
 * Bubbling -> child-to-parent ... bubble out
  
 * trickling -> parent-to-child ... trickle in
 */

// grandParent.addEventListener("click", (e) => {
//     console.log("Grandparent clicked!");
// });

// parent.addEventListener("click", (e) => {
//     console.log("Parent clicked!");
// });

// child.addEventListener("click", (e) => {
//     console.log("Child clicked!");
// });

/*
    So for the above code the event bubbles out ... means when clicked on the child, 
    it will first fire child->parent->grandparent event

    similarly when clicked on parent, parent->grandparent will be fired
*/

/*
  ? eventListener takes three args, 1-> eventName , 2-> eventHandler, 3 -> useCapture(boolean) (default-false)
  when useCapture is set true, the event is then propagated in trickling manner ie
  when clicked on child, firstly grandParent->parent->child listener will be fired
 */

grandParent.addEventListener(
    "click",
    (e) => {
        console.log("Grandparent clicked!");
        console.log(e.target);
    },
    true
);

parentEl.addEventListener(
    "click",
    (e) => {
        console.log("Parent clicked!");
    },
    true
);

child.addEventListener(
    "click",
    (e) => {
        console.log("Child clicked!");
    },
    true
);

/* 
    Nothing fancy it is ... just the way of propagating or we can say priority is changed ... 
    if clicked on a node ... first priority is given to the topmost node in the heirarchy with the same event
    and then the following nodes in heiarchy.

    in our case if the node is #child firstly the topmost node with same event is #grandParent, so the event handler associated with the same event will be fired first,
    then the next node in heirarchy which is #parent will be fired and then #child's event handler will be executed
*/

//* There is a way to stop this propagation using
//? e.stopPropagation()
