let y = {
    name: "Hello",
    age: 20,
    arr: [1, 2, 3, 4],

    run: function () {
        console.log("running");
    },
};

console.log(y.name);

y.run();

y.something = "true";

console.log(y);

function dynamicValue(key, value) {
    y[key] = value;
}

dynamicValue("hello", "world");

console.log(y);
