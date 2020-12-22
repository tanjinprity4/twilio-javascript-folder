const args = process.argv.slice(2)  // An integer between 1-100 accepted as an argument from terminal
var num;  // Initialize a variable to keep the numbers
var emoji; // Initialize a variable to keep the emoji     
for (num = 1; num <= args[0]; num++) {     // Initialize a for loop that iterates from 1 to the given interger, args[0]
    if (num% 3 == 0 && num% 5 == 0) {
        emoji = '🛰';   // If number is divisible by 3 and 5, emoji assigned is 🛰
    } else if (num% 3 == 0) {
        emoji = '👽';   // If number is divisible by 3, emoji assigned is 👽 
    } else if (num% 5 == 0) {
        emoji = '🚀';   // If number is divisible by 5, emoji assigned is 🚀 
    } else {
        emoji = '💩';   // If number is not divisible by either 3 or 5, emoji assigned is 💩 
    }
    console.log(emoji, num);    // Print emoji and the number
} // End of loop
