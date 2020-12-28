/*
This function returns true (0) for input that is a number and 
false for anything else, and 
will help us identify if user input is an integer or a Roman Numeral.*/
function isNumber(n) { 
    return /^-?[\d.]+(?:e-?\d+)?$/.test(n); 
}

/*
Takes a string of characters(Roman letters) as input and 
converts it to an integer, and 
returns the converted integer.
*/
function romanToInt(str1){
    // If no string with roman numerals is passed, function returns -1.
    if (str1 == null) {
        return -1;
    }

    // Initialize variable to hold result of convertion from roman numeral to integer. 
    var integer = romanCharToInt(str1.charAt(0));
    // Declare variables to hold intermediate values while iterating through given string.
    var pre, curr;
    
    /* 
    Initialize a for loop that iterates from 1 to length of the string and 
    convert roman numerals to integer.
    */
    for (var i = 1; i < str1.length; i++) {
        curr = romanCharToInt(str1.charAt(i));  //  Convert roman numeral at ith position to integer.
        pre = romanCharToInt(str1.charAt(i-1));  //  Convert roman numeral at (i-1)th position to integer.

        /*
        If integer of current/ ith numeral is 
        smaller than that of previous numeral,
        add integer of current/ith numeral to the result.
        */
        if (curr <= pre){   
            integer += curr;    
        } else {
            integer = integer - pre*2 + curr;
        }
    }     // End of loop
    return integer;
}     // End of function

// Helper function to convert a roman numeral to Int.
function romanCharToInt(c) {
    switch (c) {
        case 'I': return 1;
        case 'V': return 5;
        case 'X': return 10;
        case 'L': return 50;
        case 'C': return 100;
        case 'D': return 500;
        case 'M': return 1000;
        default: return -1;
    }
}     // End of function

/*
Takes an integer as input and 
converts it to a string of characters(Roman numerals), and 
returns the converted roman numerals.
*/
function intToRoman(int) {        
    var integer = Number(int);

    // Check if given value is integer.
    if (!Number.isInteger(integer)){
        return 'NaN (error)'
    }

    // Initialize variable to hold result of convertion from integer to roman numeral. 
    var roman = '';
    
    // Dictionary that holds the integer values of roman letters. Keys hold roman numerals and values hold their respective integers.
    var roman_numerals = {'M': 1000, 'CM': 900, 'D': 500, 'CD': 400, 'C': 100, 'XC': 90, 'L': 50, 'XL': 40, 'X': 10, 'IX': 9, 'V': 5, 'IV': 4, 'I' : 1};
    
    /* 
    Initializing a for loop that iterates through all the keys in roman_numerals dictionary.
    In each iteration, we are adding/repeating a roman numeral(key) to the string as many times as 
    we can divide given number by int value of key.
    Since that numeral is added as many times [0...inf] needed already, 
    we only use the remainder from (given integer / value of key) for next operation.
    */
    for (var key in roman_numerals)
    {
        roman += key.repeat(integer / roman_numerals[key]);  
        integer %= roman_numerals[key];
    }     // End of loop

    return roman;
}     // End of function
 

/*
Create a function called get_args that, 
quite literally, gets arguments from the user 
and returns the arguments. 
The user will provide these arguments in the command line 
when they run their code.
*/
function get_args(){
    let args = [];  // Setting a variable to empty array
    var j;   // Initialize a variable

    /* 
    Initialize a for loop that iterates from 2 
    to length of the arguments passed in command line.
    Initialized to 2 because the arguments provided by the users 
    start from index 2 in process.argv.
    */
    for (j = 2; j < process.argv.length; j++) {
        // Storing the argument in the current iteration to use repeatedly.
        var argument = process.argv[j];
        /* Checking if the user operand input is a number. 
        If not, convert operand(s) to number [from roman numeral].
        Does not change operator. */
        if (j != 3 && !isNumber(argument)){
            argument = romanToInt(argument);
        }
        args.push(argument); // Adding the arguments to array
    }  // End of loop
    return args;
}  // End of function

/*
 Calculates using operands and operator from the user 
 and returns the result.
*/
function calculate(){
    // Initialize variables with the second, third, and fourth arguments from user input.
    let op = get_args();
    const firstOperand = Number(op[0]);
    const secondOperand = Number(op[2]);
    const operator = op[1];

    // Initialize variable to hold result of operations.
    var result;

    // Conditions to determine what the operation is from the user input and calculate the result.
    if (operator === '+') { // Addition
        result = firstOperand + secondOperand;
    } else if (operator === '-') {  // Subtraction
        result = firstOperand - secondOperand;
    } else if (operator === 'x') {  // Multiplication
        result = firstOperand * secondOperand;
    } else if (operator === '/') {  // Division
        result = firstOperand / secondOperand;
    } else if (operator === '^') {  // Exponents
        result = firstOperand ** secondOperand;
    } else if (operator === '%') {  // Modulus
        result = firstOperand % secondOperand;
    } else if (operator === '<<') {  // Shift left
        result = firstOperand << secondOperand;
    } else if (operator === '>>') {  // Shift right
        result = firstOperand >> secondOperand;
    } else { // Error management
        console.log("Operator not recognized. Please enter a valid operator.");
        console.log("Valid Operators are: \nAddition: +, Subtraction: -, Multiplication: x, Division: /, Exponents: ^, Modulus: %, Shift left: <<, Shift right: >>");
    }

    return result;
}  // End of function



// Testing phase 1
// let op = get_args();  // Code to check that the get_args function returns an array
// Prints arguments to the terminal.
// console.log("Phase 1 test");
// console.log("The first operand is: ", op[0]);
// console.log("The second operand is: ", op[2]);
// console.log("The operator is: ", op[1]);

// // Testing Phase 2
// console.log("\nPhase 2 test");
// console.log("The result is:", calculate());

// Testing Phase 3
// console.log("Roman Numerals to Int conversion:", romanToInt(process.argv[2]));

// Testing Phase 4
// console.log("Int to Roman Numerals conversion:", intToRoman(process.argv[2]));

// Testing Phase 5
let op = get_args();
var result = calculate();
// Check if the result is integer. 
// If it is, get the roman numeral representing integer result.
if (Number.isInteger(result)) {
    result += ", " + intToRoman(result);
}

// Give output to user.
console.log("The result is:", result);
