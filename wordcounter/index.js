#!usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
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
