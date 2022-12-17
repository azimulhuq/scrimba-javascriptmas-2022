/* 
Scrimba mascot Pumpkin has won the grand prize at an international 
cat show. Below are Pumpkin's scores from the judges, as well as all the 
prizes he's won. In all the excitement of victory,
they've become a jumbled mess of nested arrays. Let's 
help Pumpkin by sorting it out. 

Write a function to flatten nested arrays of strings or
numbers into a single array. There's a method
for this, but pratice both doing it manually and using the method. 

Example input: [1, [4,5], [4,7,6,4], 3, 5]
Example output: [1, 4, 5, 4, 7, 6, 4, 3, 5]
*/

const kittyScores = [
  [39, 99, 76],
  89,
  98,
  [87, 56, 90],
  [96, 95],
  40,
  78,
  50,
  [63],
];

const kittyPrizes = [
  ["💰", "🐟", "🐟"],
  "🏆",
  "💐",
  "💵",
  ["💵", "🏆"],
  ["🐟", "💐", "💐"],
  "💵",
  "💵",
  ["🐟"],
  "🐟",
];

const kittyMultiLevelScores = [
  [39, 99, [76, 79, 89]],
  89,
  98,
  [87, 56, 90],
  [96, 95],
  40,
  78,
  50,
  [63, [67, 78], 89],
];

const kittyMultiLevelPrizes = [
  ["💵", ["🐟", "🏆"], "💐"],
  ["💰", "🐟", "🐟"],
  "🏆",
  ["💵", "🏆"],
  ["🐟", "💐", "💐"],
  ["🐟", ["🐟", "💐"]],
];

function flatten(arr) {
  // Solution 1 using flat method (perfect for multi level deep array)
  // return arr.flat(Infinity);

  // Solution 2 using spread operator
  // return [].concat(...arr);

  // Solution 3 using reduce method (perfect for three level deep array)
  // return arr.reduce((acc, cur) => Array.isArray(cur) ? acc.concat(...cur) : acc.concat(cur), []);

  // Solution 4 using concat and apply method
  // return [].concat.apply([], arr);

  // Solution 5 using flatmap method (perfect for three level deep array)
  // return arr.flatMap(elem => Array.isArray(elem) ? [].concat(...elem) : [].concat(elem));

  // Solution 6 using for-of loop
  // const outputArr = [];
  // for (const item of arr) {
  //     Array.isArray(item) ? outputArr.push(...item) : outputArr.push(item);
  // }
  // return outputArr;

  // Solution 7 using while loop (perfect for multi level deep array)
  const outputArr = [];
  while (arr.length) {
    let val = arr.shift();
    Array.isArray(val) ? (arr = val.concat(arr)) : outputArr.push(val);
  }
  return outputArr;

  // Solution 8 using for loop
  // const output = [];
  // for(let i = 0; i < arr.length; i++) {
  //   if(!(Array.isArray(arr[i]))) {
  //     output.push(arr[i]);
  //   } else {
  //     for(let j = 0; j < arr[i].length; j++) {
  //       output.push(arr[i][j]);
  //     }
  //     // output.push(...arr[i]);
  //   }
  // }
  // return output;

  // Solution 9 using forEach loop
  // const output = [];
  // arr.forEach(elem => {
  //   if(!(Array.isArray(elem))) {
  //     output.push(elem);
  //   } else {
  //     elem.forEach(nestedElm => {
  //       output.push(nestedElm);
  //     })
  //   }
  // })
  // return output;

  // Solution 10 using reduce method and recursion (perfect for multi level deep array)
  // return arr.reduce((acc, cur) => Array.isArray(cur) ? acc.concat(flatten(cur)) : acc.concat(cur), []);
}

console.log(flatten(kittyPrizes));
console.log(flatten(kittyScores));
console.log("<=====Three Level Deep=====>");
console.log(flatten(kittyMultiLevelScores));
console.log(flatten(kittyMultiLevelPrizes));
