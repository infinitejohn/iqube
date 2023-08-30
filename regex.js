const text = "Hello, this is a sample text with some numbers 12345.";

const pattern = /\d+/; // Match one or more digits
console.log(pattern.test(text)); // Checks if the pattern exists in the text

const matches = text.match(pattern); // Find all matches of the pattern
console.log(matches);
