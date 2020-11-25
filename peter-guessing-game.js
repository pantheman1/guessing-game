const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
/* checkGuess and setup
[x] initialize global variable
// checkGuess //
[x] define checkGuess function based on req's
[x] verify code works
*/

let secretNumber;
let numAttempts;

function checkGuess(num) {
    if (num > secretNumber) return console.log("Too high") //returning a console.log returns undefined
    if (num < secretNumber) return console.log("Too low")
    console.log("Correct!")
    return true;
}

/*
// askGuess //
[x] import readline module at top of document
[x] define askGuess function
*/

function guessAgain() {
    //this function will be a cb for askGuess when someone guesses a number that is too high or too low.
    //write a function which handles guesses that are NOT numbers
}

function askGuess() {
    rl.question("Enter a guess: ", answer => {
        let guess = Number(answer)
        checkGuess(guess)
        if (guess === secretNumber) {
            console.log("You win!")
            rl.close()
        } else if (guess !== secretNumber && numAttempts > 1) {
            numAttempts--
            console.log(`You have ${numAttempts} attempts left!`)
            askGuess()
        } else if (numAttempts === 1) {
            console.log("Sorry, you lost!")
            rl.close()
        }
    })
}

/* Make it Random
[x] use Math functions to get random integers
[x] define randomInRange function
*/

function randomInRange(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    let randNum = Math.floor(Math.random() * (max - min + 1) + min);
    return randNum;
}

/*
[x] define askRange function
    [x] ask the enter min num
    [x] ask to enter max num
    [x] print message confirming their answer range
    [NOT WORKING] ensure max and min are numbers, if not, ask them to enter a number
*/

function askRange() {
    rl.question("Please enter a min number: ", minAnswer => {
        // if (typeof Number(minAnswer) !== 'number') {
        //     rl.question("Please enter a valid number: ", minAnswer => {
        //     })
        // }
        minAnswer = Number(minAnswer)
        rl.question("Please enter a max number: ", maxAnswer => {
            // if (typeof Number(maxAnswer) !== 'number') {
            //     rl.question("Please enter a valid number: ", maxAnswer => {
            //     })
            // }
            maxAnswer = Number(maxAnswer);
            console.log(`So you're thinking of a number between ${minAnswer} and ${maxAnswer}...that's easy!`)
            secretNumber = randomInRange(minAnswer, maxAnswer)
            askGuess()
        })
    })
}

function askLimit() {
    rl.question("How many chances do you want to guess the number? ", answer => {
        numAttempts = Number(answer);
        askRange()
    })
}

function askPlayerName() {
    rl.question("Welcome! What is your name? ", name => {
        if (name === 'Ella') {
            console.log(`Hello ${name}-cutie pie! Step right up and try your luck.`)
        } else if (name === 'Calvin') {
            console.log(`Hello ${name}-bo-balvin! Step right up and try your luck.`)
        } else if (name === 'Louis') {
            console.log(`Hello ${name}-the-stud! Step right up and try your luck.`)

        } else if (name === 'Theo') {
            console.log(`Hello ${name}-dorable! Step right up and try your luck.`)
        } else if (name === 'Peter') {
            console.log(`Hello ${name} Pan! Step right up and try your luck.`)
        } else {
            console.log("I'm sure you're my gorgeous wife. You can play any time baby!")
        }
        askLimit();
    })
}

askPlayerName()