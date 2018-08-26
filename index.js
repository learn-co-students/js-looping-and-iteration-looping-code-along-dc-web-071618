// Code your solutions in this file
function printBadges(people) {;
  for (let i = 0; i < people.length; i++) {
    console.log(`Welcome ${people[i]}! You are employee #${i + 1}.`);
  }
  return people
}

function tailsNeverFails() {
  let flips = 0;
  while (Math.random() >= 0.5) {
    flips ++;}
  return `You got ${flips} tails in a row!`
}
