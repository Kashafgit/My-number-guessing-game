#!/usr/bin/envnode
import inquirer from "inquirer";
const randomNumber = Math.floor (Math.random() * 10 + 1)
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1-5: "
    },
]);
if(answer.userGuessedNumber === randomNumber){
    console.log("congratulations! you guessed right number")

}else{
    console.log("You guessed wrong number")
}