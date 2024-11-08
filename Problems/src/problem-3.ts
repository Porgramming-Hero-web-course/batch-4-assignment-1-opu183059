{
    function countWordOccurrences(sentence: string, word: string): number {
        // Converting the sentence in lowercase
        const convertedSentence = sentence.toLowerCase();
        const convertedWord = word.toLowerCase();
      
        // making an array of words in the sentence and filter matched word
        const words :string[] = convertedSentence.split(" ");
        const matchedArray :string[] = words.filter(w => w === convertedWord);

        return matchedArray?.length
      }
      
      console.log(countWordOccurrences("I love typescript", "typescript"));
      
}