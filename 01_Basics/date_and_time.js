let myDate = new Date()
console.log(myDate);

console.log(`toDateString: ${myDate.toDateString()}`);

console.log(`toISOString: ${myDate.toISOString()}`);

console.log(`toJSON: ${myDate.toJSON()}`);

console.log(`toLocaleDateString: ${myDate.toLocaleDateString()}`);

console.log(`toLocaleString: ${myDate.toLocaleString()}`);

console.log(`toLocaleTimeString: ${myDate.toLocaleTimeString()}`);

const date_ = new Date(2025, 0, 24);
console.log(date_.toDateString());


// Calculate timeStamp
const timeStamp = Date.now();
console.log(Math.floor(timeStamp/1000))

const newDate = new Date();
console.log(newDate.toLocaleString('default', {
    weekday: "long"
}))