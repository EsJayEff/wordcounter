#! /usr/bin/env node

import PromptSync from "prompt-sync";
const prompt = PromptSync();
let userInput = prompt("Please Enter your Text: ");
let trimmedText = userInput.trim();
function getCount(trimmedText) {
    return trimmedText.split(' ').filter(function (num) { return num != ''; }).length;
}
let count = 0;
for (var i = 0, len = trimmedText.length; i < len; i++) {
    if (trimmedText[i] !== ' ')
        count++;
}
console.log(`Total characters in Input Text is: ${count}`);
console.log('Total Words in Input Text is: ' + getCount(trimmedText));
