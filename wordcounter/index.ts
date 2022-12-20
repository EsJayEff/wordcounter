#!usr/bin/env node
import PromptSync from "prompt-sync";
const prompt=PromptSync();

let userInput:string =prompt("Please Enter your Text: ");
let trimmedText:string =userInput.trim();

function getCount(trimmedText:string) {
    return trimmedText.split(' ').filter(function(num) {return num != ''}).length;
}

let count:number = 0;
        
        for (var i = 0, len = trimmedText.length; i < len; i++) {
            if (trimmedText[i] !== ' ')
                count++;
        }


console.log(`Total characters in Input Text is: ${count}`);
console.log('Total Words in Input Text is: '+ getCount(trimmedText));
