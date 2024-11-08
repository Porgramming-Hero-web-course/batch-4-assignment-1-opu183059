{
    function removeDuplicates(numbers: number[]): number[] {
        const uniqueNumArray: number[] = [];
        
        for (let num of numbers) {
          if (!uniqueNumArray.includes(num)) {
            uniqueNumArray.push(num);
          }
        }
        
        return uniqueNumArray;
      }
      console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
      
}