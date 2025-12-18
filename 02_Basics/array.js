const arr1 = [0, 1, 2, 3, 4];

const myHeros = ["IronMan", "Hulk", "Steve Rogers"];
console.log(myHeros[2])

const arr2 = new Array(1, 2, 3, 4);
arr2.push(45);
arr2.push(263);
arr2.pop();
console.log(arr2);
console.log(arr2.join())

// Slice and Splice
console.log("A", arr1);
const arr1_ = arr1.slice(1, 3);
console.log("arr1_", arr1_);
console.log("B", arr1);

const arr1__ = arr1.splice(1, 3);
console.log("arr1__: ", arr1__);
console.log("C", arr1);