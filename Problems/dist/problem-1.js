"use strict";
{
    function sumArray(nums) {
        return nums.reduce((acc, singleNumber) => acc + singleNumber, 0);
    }
    console.log(sumArray([1, 2, 3, 4, 5]));
}
