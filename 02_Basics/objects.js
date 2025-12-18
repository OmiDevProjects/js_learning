// Singleton 
// Object.create()

const sym = Symbol("key1");

// Object Literals
const jsObject = {
    name: "Onkar",
    age: 25,
    [sym]: "MyKey1",
    location: "Mumbai",
    isLoggedIn: true,
    lastLoggedIn: ["Monday", "Thursday"]
}

console.log(jsObject["name"]);
console.log(jsObject[sym])

jsObject.greetings = function() {
    console.log("Hello JS user");
}

jsObject.adgreetings = function() {
    console.log(`hello JS user, ${this.name}`);
}

Object.freeze(jsObject);
jsObject.age = 23;

console.log(jsObject);

jsObject.greetings()
jsObject.adgreetings()