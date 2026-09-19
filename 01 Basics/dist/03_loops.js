for (let i = 0; i <= 10; i++) {
    console.log(i);
}
for (let i = 1; i <= 100; i *= 7) {
    console.log(i);
}
let value = 1;
while (value < 50) {
    value *= 2;
}
console.log(value);
const array = [];
let number = 0;
while (number < 20) {
    number += 1;
    array.push(number);
}
console.log(array);
let sum = 0;
for (const n of [4, 7, 2, 9]) { // We use of to get values from array, if we want to get the index instead, we need to use in.
    if (n < 0)
        continue;
    sum += n;
}
console.log(sum);
let min = Infinity; // We do this so we can set the min number to the first value of the array.
let max = -Infinity; // Same thing here.
for (const n of [5, 6, 3, 2, 5, 65, 61]) {
    if (n < min) {
        min = n;
    }
    if (n > max) {
        max = n;
    }
}
console.log(min);
console.log(max);
for (let row = 1; row <= 5; row++) {
    let line = "";
    for (let col = 1; col <= 5; col++)
        line += "*";
    console.log(line);
}
export {};
//# sourceMappingURL=03_loops.js.map