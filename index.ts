#! /usr/bin/env node

// This line is called a shebang, it tells the os to run it with nodejs

// Import the "inquire" module, which is a command line interface for Node.js
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.blueBright.bold("\n \t WElcome to 'CodeWithYasir' - Word Counter\n"));
// Declare a constant "answers" and assign it to the result of inquire.promt funcation

const answers:{
    Sentence: string
} = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: chalk.green("Enter your sentence to count the word:")
    },
]);

const words =answers.Sentence.trim().split(" ");

// Print the array of words to the comsole
console.log(words)

// Print the word count of the sentence to the console
console.log(chalk.greenBright`Your sentence word count is ${words.length}`);