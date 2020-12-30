/* 
A recursive function that returns the factorial of an integer n.
The factorial of a number n is denoted by n!, where:
n! = n * (n-1) * (n-2) * .... * 3 * 2 * 1
*/
function findFactorial(n) {
    if (n < 2) return n;
    return n * findFactorial(n-1);
}

// Test Cases
console.log('1! =', findFactorial(1));  // 1
console.log('2! =', findFactorial(2));  // 2
console.log('3! =', findFactorial(3));  // 6
console.log('4! =', findFactorial(4));  // 24
console.log('5! =', findFactorial(5));  // 120
console.log('6! =', findFactorial(6));  // 720
console.log('7! =', findFactorial(7));  // 5040
console.log('8! =', findFactorial(8));  // 40320
console.log('12! =', findFactorial(12));  //479001600