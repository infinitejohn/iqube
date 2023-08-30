const date = new Date();

const year = date.getFullYear();
const month = date.getMonth(); // Note: Months are zero-based (0 - January, 11 - December)
const day = date.getDate();

console.log(`Year: ${year}, Month: ${month}, Day: ${day}`);
console.log(date.toDateString()); // Converts date to a human-readable string
console.log(date.toLocaleDateString()); // Converts date to a localized string based on the user's locale
