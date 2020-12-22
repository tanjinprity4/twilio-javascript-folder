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
        args.push(process.argv[j]); // Adding the arguments to array
    }  // End of loop
    return args;
}  // End of function

// Testing 
let op = get_args();  // Code to check that the get_args function returns an array
// Prints arguments to the terminal.
console.log("The first operand is: ", op[0]);
console.log("The second operand is: ", op[2]);
console.log("The operator is: ", op[1]);
