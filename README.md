# guessing-game
appAcademy Nov 2020

## Instructions
This is an early project and fun game to play in your console! All you need to do is `cd` into the project app and run the app with this command: `node guessing-game`. After that, just follow the prompts, and have fun! (If you need to get out of the game, `ctl-c` will do the trick)

## Code
The application utilizes `readline` and functional programming to take the player through a series of questions to guess a random number between their chosen min and max.

### Guess function
```js
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
```

### A little creativity with the player names (for the kids)
```js
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
```

