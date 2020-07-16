console.log("Sanity"); // check that files are linked

// PROBLEM 1 -------------------------------------------------------------------

// // create two variables
// let word1 = "Chris";
// let word2 = "Chris"
// // create an if statement comparing the two variables. 
// if(word1 == word2){// If they are the same print CORRECT
//     console.log("CORRECT");
// } else {// Else print INCORRECT
//     console.log("INCORRECT");
// }

// PROBLEM 2 -------------------------------------------------------------------

// // Ask the user to enter a number. 
// let userNum = parseInt(prompt("Enter a number!"))

// if(userNum > 0){// If the number is positive print [NUMBER] is positive.
//     console.log(userNum + " is positive")
// } else {// Otherwise print [NUMBER] is negative.
//     console.log(userNum + " is negative")
// }

// PROBLEM 3 -------------------------------------------------------------------

// // Ask the user to enter a number. 
// let userNum1 = parseInt(prompt("Enter a number"));
// // Ask the user to enter another number. 
// let userNum2 = parseInt(prompt("Enter ANOTHER number"));

// // get the sum of the numbers
// let userSum = userNum1 + userNum2;

// if(userSum % 2 == 0){// If the sum of those two numbers is even alert the user The sum of [FIRST NUMBER] and [SECOND NUMBER] is even.
//     alert("The sum of  " + userNum1 +  " and " +  userNum2 + " is even");
// } else {// Otherwise alert the user The sum of [FIRST NUMBER] and [SECOND NUMBER] is odd.
//     alert("The sum of  " + userNum1 +  " and " +  userNum2 + " is odd");
// }

// PROBLEM 4 -------------------------------------------------------------------

// Define a variable called `secretWord` with the string value "secret".
let secretWord = "secret";
// Ask the user to enter a word. 
let userWord1 = prompt("Enter a word!");
// Ask the user to enter another word. 
let userWord2 = prompt("Enter ANOTHER word");


if(userWord1 == userWord2 && userWord1 != secretWord){
    // If both words are the same but DO NOT match `secretWord` print You got in...but only because your words matched
    console.log("You got in...but only because your words matched")
} else if (userWord1 == userWord2 && userWord1 == secretWord){
    // If both words are the same AND they match `secretWord` print You got in!
    console.log("You got in!")
} else if (userWord1 == secretWord || userWord2 == secretWord){
    // If only one of the words matched `secretWord` print You got in..but only because one of your words matched the secret word
    console.log("You got in..but only because one of your words matched the secret word")
} else if (userWord1 == userWord2 || userWord1 == secretWord || userWord2 == secretWord){
    // If the words are the same OR one of the words matches `secretWord` print You got in...but we don't know how
    console.log("You got in but we don't know how");
} else {// Otherwise print Locked Out
    console.log("LOCKED OUT")
}
 









