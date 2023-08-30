const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(num => num * 2); // Doubling each element
console.log(doubled);

const evenNumbers = numbers.filter(num => num % 2 === 0); // Filtering even numbers
console.log(evenNumbers);

const sum = numbers.reduce((total, num) => total + num, 0); // Summing up all elements
console.log(sum);
