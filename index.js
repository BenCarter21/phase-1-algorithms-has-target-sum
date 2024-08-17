function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++){ // need to describe the for loop here
    for (let j = i + 1; j < array.length; j++){ 
      console.log(array[j] + array[i])
      console.log(target)
      if (array[j] + array[i] === target){ // not sure if this is looping all array items through equation or just one
        return true
      }
  }
} return false 
}


// for (let i = 0; i < word.length; i++) {
//   word.charAt(i)
//   console.log(word.charAt(i))
//   console.log(word.charAt(word.length - (i + 1)))
//   console.log(word.charAt(i) === word.charAt(word.length - (i + 1)))
//   if(word.charAt(i) !== word.charAt(word.length - (i + 1))) {
//     return false
//   }
// }
// return true
// }


/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
// focus on inputs and return values
// loop through each of numbers in the array, adding it to the others one by one
// if any of them add up to the target, return true; if not, move to the next number in the array and repeat
// if no combos add to the target number, return false

/*
  Add written explanation of your solution here

  // create a function that accepts two arguments
// 1st argument accepts an array of numbers
// 2nd argument accepts a target number
// the goal is to return true of if two of the array numbers add up to the target number

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: false")
  console.log("=>", hasTargetSum([6, 3, 2, 7]), 27)
  
  console.log("")

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum