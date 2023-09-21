// Function to generate a random phone number with the specified format
function generatePhoneNumber() {
    var prefix = '234';
    var remainingDigits = Math.random()
        .toString()
        .slice(2, 15);
    return prefix + remainingDigits;
}
// Function to generate an array of 5 unique random numbers between 1 and 99
function generateLuckyNumbers() {
    var numbers = []; // Specify the type as number[]
    while (numbers.length < 5) {
        var num = Math.floor(Math.random() * 99) + 1;
        if (!numbers.includes(num)) {
            numbers.push(num);
        }
    }
    return numbers;
}
// Function to generate an array of players
function generatePlayers(count) {
    var players = [];
    for (var i = 0; i < count; i++) {
        var player = {
            phoneNumber: generatePhoneNumber(),
            subscribed: Math.random() < 0.5,
            luckyNumbers: generateLuckyNumbers(),
        };
        players.push(player);
    }
    return players;
}
// Generate 5000 players
var players = generatePlayers(5000);
// Filter eligible players (subscribed === true)
var eligiblePlayers = players.filter(function (player) { return player.subscribed; });
// Calculate the number of pools
var poolSize = 1000;
var numberOfPools = Math.floor(eligiblePlayers.length / poolSize);
// Determine the remaining players who don't make up a complete pool
var remainingPlayers = eligiblePlayers.slice(numberOfPools * poolSize);
// Initialize variables to track winners and trials
var totalWinners = 0;
var totalTrials = 0;
// Calculate the total amount that can be won (50% of subscription fees)
var totalSubscriptionFees = eligiblePlayers.length * 1000;
var totalAmountWon = totalSubscriptionFees * 0.5;
// Function to perform a draw
function performDraw(pool) {
    var winningNumbers = generateLuckyNumbers();
    for (var _i = 0, pool_1 = pool; _i < pool_1.length; _i++) {
        var player = pool_1[_i];
        var correctGuesses = player.luckyNumbers.filter(function (num) {
            return winningNumbers.includes(num);
        }).length;
        if (correctGuesses >= 3) {
            return true; // At least one winner
        }
    }
    return false; // No winners in this draw
}
// Perform draws for each pool until there's at least one winner
for (var i = 0; i < numberOfPools; i++) {
    var pool = eligiblePlayers.slice(i * poolSize, (i + 1) * poolSize);
    var drawCount = 0;
    var winnerFound = false;
    while (!winnerFound) {
        drawCount++;
        winnerFound = performDraw(pool);
    }
    totalWinners += 1;
    totalTrials += drawCount;
}
// Split the total amount won equally among the winners
var amountPerWinner = totalAmountWon / totalWinners;
// Output results
console.log("Total eligible players: ".concat(eligiblePlayers.length));
console.log("Total winners: ".concat(totalWinners));
console.log("Total trials: ".concat(totalTrials));
console.log("Amount per winner: ".concat(amountPerWinner));
