
function isPalindrome(str) {
  // Convert the string to lowercase and remove non-alphanumeric characters
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Check if the clean string is equal to its reverse
  return cleanStr === cleanStr.split('').reverse().join('');
}

/* 
  Add your pseudocode here
  create the isPalindrome function
  then create if statement
  for each case, write a condition
  take the condition from the test file
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
