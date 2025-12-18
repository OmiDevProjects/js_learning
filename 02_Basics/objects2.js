const js1 = {1: "A", 2: "B"}
const js2 = {3: "C", 4: "D"}

// const newJs = Object.assign({}, js1, js2);
const newJs = {...js1, ...js2}
console.log(newJs);


console.log(Object.keys(js1));
console.log(Object.values(js2));

console.log(js1.hasOwnProperty('1'))