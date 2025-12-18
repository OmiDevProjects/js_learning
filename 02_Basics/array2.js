const marvel_heroes = ['IronMan', "Hulk", "Steve Rogers"]
const dc_heroes = ["BatMan", "SuperMan", "SuperGirl"]

// Push: It will add the array at the last position as it is. 
// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes, marvel_heroes.length);

// Concat: It will return a new array with extending the elements 
// const allHeroes = marvel_heroes.concat(dc_heroes);
// console.log(allHeroes);

// Spread: It can concat two or more arrays.
const allHeroes = [...marvel_heroes, ...dc_heroes]
console.log(allHeroes);

const another_array = [2,3,[3,4,5],4,5,[2,5,2,1,[3,2,1]]]
const newarr = another_array.flat(1);
console.log(newarr);

console.log(Array.isArray("Onkar"));
console.log(Array.from("Onkar"));
console.log(Array.from({
    name: "Onkar",
}));