// **PROBLEM 1** MAX OF TWO

let x = 1;
let y = 2;

// Write your code below this line.

if (x > y) {
  console.log(x);
} else {
  console.log(y);
}

// Solution to additional challenge:

if (x > y) {
  console.log(x);
} else if (y > x) {
  console.log(y);
} else [console.log("The values are identical.")];

/****PROBLEM 2** FIND THE RANGE
 * The key to solving this is creating variables 'smallest' and 'largest'
 * Then iterate through the array of numbers, checking to see if the number (AKA array[i])
 * is smaller than the smallest current value or higher than the highest current value.
 * If it is, then we update variable 'smallest' or 'largest' and set it to that value (I am refering to array[i] when I say element).
 */
// Starting array
let array = [28, 43, -12, 30, 4, 0, -36];

// Write your solution below:
let smallest = array[0];
let largest = array[0];

for (let i = 0; i < array.length; i++) {
  if (smallest > array[i]) {
    smallest = array[i];
  } else if (largest < array[i]) {
    largest = array[i];
  }
}

console.log(smallest, largest);

/****PROBLEM 3** FIZZ BUZZ
 * The key to solving this is understanding how to use the modulo operator and the `&&`
 * correctly inside conditional statements like `if` of `else if`.
 * We iterate through, checking if the number is divisible by 3 or 5 (Review modulo if you do not understand this concept).
 * If it is divisible by either of these numbers or both 3 & 5, then we console log different strings.
 */

// Write your solution below this line:
for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("fizzbuzz");
  } else if (i % 3 === 0) {
    console.log("fizz");
  } else if (i % 5 === 0) {
    console.log("buzz");
  } else {
    console.log(i);
  }
}

/****PROBLEM 4** FIND LONGEST WORD
 * The key to solving this is understanding how to set an initial variable to 0
 * and update that value based on the use of the if statement.
 */
// Write your solution below:

function findLongestWord(arr) {
  let longestWordLength = 0;
  for (let i = 0; i < arr.length; i++) {
    // arr[i] is a string (ex. 'flower') so we iterate
    // through array of words and use the string.length property
    if (arr[i].length > longestWordLength) {
      longestWordLength = arr[i].length;
    }
  }
  return longestWordLength;
}

/****PROBLEM 5** ADD TO ZERO
 * The key to solving this is understanding how to set an initial variable to 0
 * and update that value based on the use of the if statement.
 */
// Write your solution below:
// Starting array
let arr = [28, 43, -12, 30, 4, 0, 12];

// Write your solution below:
let value = "False";
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (i !== j) {
      if (arr[i] + arr[j] === 0) {
        value = "True";
      }
    }
  }
}

console.log(value);

/****PROBLEM 6** FIND LUCKY NUMBERS
 * The key to solving this is understanding how to use
 * the Math.floor(), Math.random(), and .splice() methods to randomly generate numbers
 */

// Write your code below this line.
function findLuckyNumbers(n) {
  let possibleNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let luckyNumbers = [];
  for (let i = 0; i < n; i++) {
    let x = Math.floor(Math.random() * possibleNumbers.length);
    luckyNumbers.push(possibleNumbers[x]);
    possibleNumbers.splice(x, 1);
  }
  return luckyNumbers;
}

/****PROBLEM 7** HAS UNIQUE CHARACTERS
 * The key to solving this is understanding how to use a 'set'. It is a data structure similar to array
 * but with NO duplicate values. So we create a 'set' from the word and check if that is equal to the parameter word.length
 */

// Write your code below
function hasUniqueChars(word) {
  let uniqueChars = new Set([]);
  for (let i = 0; i < word.length; i++) {
    uniqueChars.add(word[i]);
  }
  return uniqueChars.size === word.length;
}

/****PROBLEM 8** IS PALINDROME
 * The key to solving this is understanding how to check two conditions simultaneously in each iteration of the loop
 */

// Write your code below
function isPalindrome(word) {
  //declare variable from last character of word
  let j = word.length - 1;
  for (let i = 0; i < (word.length - 1) / 2; i++) {
    if (word[i] !== word[j]) {
      return false;
    }
    j--;
  }
  return true;
}

/****PROBLEM 9** CONVERT TO PIG LATIN
 */

// Write your code below
function pigLatin(sentence) {
  let words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (
      words[i][0] === "a" ||
      words[i][0] === "e" ||
      words[i][0] === "i" ||
      words[i][0] === "o" ||
      words[i][0] === "u"
    ) {
      words[i] += "yay";
    } else {
      words[i] += words[i][0];
      words[i] += "ay";
      words[i] = words[i].substring(1);
    }
  }
  console.log(words);
}

/****PROBLEM 10** HAS MORE VOWELS
 * The key to solving this is understanding how to check two conditions simultaneously in each iteration of the loop
 */

// Write your code below
function hasMoreVowels(word) {
  let vowels = ["a", "e", "i", "o", "u"];
  let vowelCount = 0;
  let vowelsNeeded = word.length / 2;
  let wordSplit = word.toLowerCase().split("");

  for (let i = 0; i < wordSplit.length; i++) {
    let letter = wordSplit[i];

    if (vowels.includes(letter)) {
      vowelCount++;
    }

    if (vowelCount > vowelsNeeded) {
      return true;
    }
  }

  return false;
}

// hasMoreVowels('moose')
// hasMoreVowels('Aal')
// hasMoreVowels('yay')
// hasMoreVowels('mice')

/****PROBLEM 11** STOCK PRICES
 * The key to solving this is understanding how to check two conditions simultaneously in each iteration of the loop
 */

// Write your code below
function bestStockPrice(prices) {
  let maxDiff = 0;
  let lowSoFar;

  for (let i = 0; i < prices.length; i++) {
    if (lowSoFar === undefined || prices[i] < lowSoFar) {
      lowSoFar = prices[i];
    }

    let diff = prices[i] - lowSoFar;

    if (diff > maxDiff) {
      maxDiff = diff;
    }
  }

  return maxDiff;
}

// best([1, 2, 3, 4, 5])\
// best([2, 3, 10, 6, 4, 8, 1])
// best([5, 4 , 3, 2, 1])

/****PROBLEM 12** STRING DECODER
 * The key to solving this is understanding how to check two conditions simultaneously in each iteration of the loop
 */

// Write your code below
const decoder = (code) => {
  let splitStr = code.split("");
  let result = "";

  for (let i = 0; i < splitStr.length; i++) {
    if (!isNaN(+splitStr[i])) {
      i += +splitStr[i];
    } else {
      result += splitStr[i];
    }
  }

  return result;
};

// decoder('0y4akjfe0s')
// decoder('0h2xce5ngbrdy')
// decoder('2bna0p1mp2osl0e')

/****PROBLEM 13** PRINT DIGITS BACKWARDS
 * The key to solving this is understanding how to check two conditions simultaneously in each iteration of the loop
 */

// Write your code below
const printDigits = (num) => {
  while (num) {
    let digitToPrint = num % 10;
    console.log(digitToPrint);
    num = (num - digitToPrint) / 10;
  }
};

//   printDigits(1)
//   printDigits(162)
//   printDigits(597842)

/****PROBLEM 14** MISSING NUMBER
 * The key to solving this is understanding how to check two conditions simultaneously in each iteration of the loop
 */

// Write your code below
function missingNumber(nums, maxNum) {
  for (let i = 1; i <= maxNum; i++) {
    if (!nums.includes(i)) {
      return i;
    }
  }
}

/****PROBLEM 15** DECODE STRING
 * The key to solving this is understanding how to check two conditions simultaneously in each iteration of the loop
 */

// Write your code below
function decodeString(code) {
  // Capture the number to decode the string
  let decipher = Number(code[0]);
  // Create a solution string to add letters to one-by-one
  let solution = "";
  // Start iterating through the string, starting at index 1 to avoid the decipher
  for (let i = 1; i < code.length; i++) {
    // Capture the ascii code for the given letter, plus the value of the decipher
    let strValue = code[i].charCodeAt() + decipher;
    // Add the letter the belongs to the updated ascii value to the solution string
    solution += String.fromCharCode(strValue);
  }
  // return the solution string
  return solution;
}

/****PROBLEM 16** MAKE UNIQUE STRING
 * The key to solving this is understanding how to check two conditions simultaneously in each iteration of the loop
 */

// Write your code below
// Solution 1:
function makeUnique(str) {
  let uniqueStr = "";

  for (let i = 0; i < str.length; i++) {
    if (uniqueStr.includes(str[i])) {
      continue;
    } else {
      uniqueStr += str[i];
    }
  }
  return uniqueStr;
}

// Solution 2:
// function makeUnique(str) {
//   let strSet = new Set(str.split(""));
//   return [...strSet].join("");
// }

/****PROBLEM 17** BALANCED PARENTHESIS
 * The key to solving this is understanding how to check two conditions simultaneously in each iteration of the loop
 */

// Write your code below
// Sample Strings
let sample1 = "This ( is unbalanced.";
let sample2 = "(This (is (a) balanced) string.)";
let sample3 = "This is () also ) unbalanced.";
let sample4 = "Balanced.";

// Write your solution below:

function balancedParens(str) {
  let openPar = 0;
  let closedPar = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      openPar += 1;
    } else if (str[i] === ")") {
      closedPar += 1;
    }
  }
  return openPar === closedPar;
}

/****PROBLEM 18** T-SHIRT SORTER
 * The key to solving this is understanding how to check two conditions simultaneously in each iteration of the loop
 */

// Write your code below

// Solution 1:
function tshirtSorter(str) {
  let small = "";
  let medium = "";
  let large = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "s") {
      small += "s";
    } else if (str[i] === "m") {
      medium += "m";
    } else {
      large += "l";
    }
  }
  return small + medium + large;
}

// Solution 2:
// function tshirtSorter(str) {
// splits the string into a array of characters
// sorts the array (alphabetically automatiically)
// reverses the now sorted array (which happens to give us the order we need)
// rejoins the elements into a single string
//   return str.split("").sort().reverse().join("");
// }
