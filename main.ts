#! /usr/bin/env node

import inquirer from "inquirer";

console.log("\t-------------------");
console.log("\tCURRENCY CONVERTER");
console.log("\t-------------------");

const currency: any = {
    USD: 1,  //BASE CURRENCY
    INR: 74.57,
    PKR: 280,
    GBP: 0.76,
    EUR: 0.91,
};

let user_answer = await inquirer.prompt([
    {
        name: 'from',
        message: "Enter from currency",
        type: 'list',
        choices: ['USD','INR','PKR','GBP','EUR'],
    },
    {
        name: 'to',
        message: "Enter to currency",
        type: 'list',
        choices: ['USD','INR','PKR','GBP','EUR'],
    },
    {
        name: 'amount',
        message: 'Enter your amount',
        type: 'number',
    }
])

let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);