"use strict";
{
    function countWordOccurrences(sentence, word) {
        // Converting the sentence in lowercase
        const convertedSentence = sentence.toLowerCase();
        const convertedWord = word.toLowerCase();
        // making an array of words in the sentence and filter matched word
        const words = convertedSentence.split(" ");
        const matchedArray = words.filter(w => w === convertedWord);
        return matchedArray === null || matchedArray === void 0 ? void 0 : matchedArray.length;
    }
    console.log(countWordOccurrences("I love typescript", "typescript"));
}
