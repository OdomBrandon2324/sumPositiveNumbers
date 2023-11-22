// Problem: Find the Sum of Positive Numbers in an Array

// Write a function called sumPositiveNumbers that takes an array of numbers as input and returns the sum of all the positive numbers in the array.

// function sumPositiveNumbers(arr) {
//     // Your code here
// }

// const arr = [1, 2, 3, 4, 5];
// const result = sumPositiveNumbers(arr);
// console.log(result); // Expected output: 15 (1 + 2 + 3 + 4 + 5)

// const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// const result = sumPositiveNumbers(arr);
// console.log(result); // Expected output: 12 (1 + 4 + 2 + 1 + 4)

// const arr = [-2, -3, -4, -1, -2];
// const result = sumPositiveNumbers(arr);
// console.log(result); // Expected output: 0 (No positive numbers in the array)

const sumPositiveNumbers = (arr) => {
    // Initialize the sum variable to 0 to add index sums
    let sum = 0; 
    // iterate through the arr so we can add each element of the arr to the   contigious element
    // arr.forEach(arr[x] > positive ? sum += x : x++)
    arr.forEach(x => x > 0 ? sum += x : '')
    console.log(sum);
  }
  sumPositiveNumbers([1, 2, 3, 4, 5])
  sumPositiveNumbers([-2, 1, -3, 4, -1, 2, 1, -5, 4])
  sumPositiveNumbers([-2, -3, -4, -1, -2])
  
  
  