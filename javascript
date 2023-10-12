//1. Take a sentence as an input and reverse every word in that sentence.
//Example - This is a sunny day > shiT si a ynnus yad.

function reverseWordsInSentence(sentence) {

    let words = sentence.split(/\s+/);

    let reversedWords = words.map(word => reverseWord(word));

    let reversedSentence = reversedWords.join(' ');

    return reversedSentence;
}

function reverseWord(word) {
   
    return word.split('').reverse().join('');
}


let inputSentence = "This is a sunny day";
let reversedSentence = reverseWordsInSentence(inputSentence);
console.log(reversedSentence); 

//2. Perform sorting of an array in descending order.

let numbers = [5, 2, 9, 1, 5, 6];

numbers.sort(function(a, b) {
    return b - a;
});

console.log(numbers);
