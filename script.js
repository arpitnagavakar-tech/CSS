// Function to find the greatest of two numbers
function findGreatest(a, b) {
  if (a > b) {
    return a;
  } else if (b > a) {
    return b;
  } else {
    return "Both numbers are equal";
  }
}

// Example usage
let num1 = 15;
let num2 = 42;

console.log("The greatest number is: " + findGreatest(num1, num2));
