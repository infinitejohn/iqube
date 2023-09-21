interface Player {
    phoneNumber: string;
    subscribed: boolean;
    luckyNumbers: number[];
  }
  
  // Function to generate a random phone number with the specified format
  function generatePhoneNumber(): string {
    const prefix = '234';
    const remainingDigits = Math.random()
      .toString()
      .slice(2, 15);
    return prefix + remainingDigits;
  }
  
  // Function to generate an array of 5 unique random numbers between 1 and 99
  function generateLuckyNumbers(): number[] {
    const numbers: number[] = []; // Specify the type as number[]
    while (numbers.length < 5) {
      const num = Math.floor(Math.random() * 99) + 1;
      if (!numbers.includes(num)) {
        numbers.push(num);
      }
    }
    return numbers;
  }
  
  
  // Function to generate an array of players
  function generatePlayers(count: number): Player[] {
    const players: Player[] = [];
    for (let i = 0; i < count; i++) {
      const player: Player = {
        phoneNumber: generatePhoneNumber(),
        subscribed: Math.random() < 0.5, // 50% chance of being subscribed
        luckyNumbers: generateLuckyNumbers(),
      };
      players.push(player);
    }
    return players;
  }
  
  // Generate 5000 players
  const players = generatePlayers(5000);
  
  // Filter eligible players (subscribed === true)
  const eligiblePlayers = players.filter((player) => player.subscribed);
  
  // Calculate the number of pools
  const poolSize = 1000;
  const numberOfPools = Math.floor(eligiblePlayers.length / poolSize);
  
  // Determine the remaining players who don't make up a complete pool
  const remainingPlayers = eligiblePlayers.slice(numberOfPools * poolSize);
  
  // Initialize variables to track winners and trials
  let totalWinners = 0;
  let totalTrials = 0;
  
  // Calculate the total amount that can be won (50% of subscription fees)
  const totalSubscriptionFees = eligiblePlayers.length * 1000;
  const totalAmountWon = totalSubscriptionFees * 0.5;
  
  // Function to perform a draw
  function performDraw(pool: Player[]): boolean {
    const winningNumbers = generateLuckyNumbers();
    for (const player of pool) {
      const correctGuesses = player.luckyNumbers.filter((num) =>
        winningNumbers.includes(num)
      ).length;
      if (correctGuesses >= 3) {
        return true; // At least one winner
      }
    }
    return false; // No winners in this draw
  }
  
  // Perform draws for each pool until there's at least one winner
  for (let i = 0; i < numberOfPools; i++) {
    const pool = eligiblePlayers.slice(i * poolSize, (i + 1) * poolSize);
    let drawCount = 0;
    let winnerFound = false;
    while (!winnerFound) {
      drawCount++;
      winnerFound = performDraw(pool);
    }
    totalWinners += 1;
    totalTrials += drawCount;
  }
  
  // Split the total amount won equally among the winners
  const amountPerWinner = totalAmountWon / totalWinners;
  
  // Output results
  console.log(`Total eligible players: ${eligiblePlayers.length}`);
  console.log(`Total winners: ${totalWinners}`);
  console.log(`Total trials: ${totalTrials}`);
  console.log(`Amount per winner: ${amountPerWinner}`);
  