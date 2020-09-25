// LeetCode 26. Remove Duplicates from Sorted Array

/*  Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length. Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory. */

// Solution 2: Two Pointers Technique -->
// overwriting a dulicate number with the next number in the array. It really took me some effort to understand this technique... 

// Version without explanation:
var removeDuplicates = function(nums) {
  if (nums.length === 0) {
      return 0;
  } else {
      var uniqueLength = 0;
      for (var i = 0; i < nums.uniqueLength; i++) {
          if (i == 0 || nums[i] != nums[i - 1]) {
              nums[uniqueLength] = nums[i];
              uniqueLength++;
          }
      }
      return uniqueLength;
  }
}

// version with explanation
var removeDuplicates = function (nums) {
   // if nums is an empty array, there are no duplicates and the length of the array is always going to be 0
  if (nums.length === 0) {
    return 0;
  } 
  // if the array is not empty, but for example [1, 1, 3, 4]
  else {
    // we set pointer 1 (uniqueLength) that defines the length of the part of the array up to which point there are no duplicates --> (nums[0]...nums[uniqueLength - 1])
    var uniqueLength = 0;
    // we loop through the entire array with a for loop
    // pointer 2 is equal to i
    for (var i = 0; i < nums.uniqueLength; i++) {
      // if the number at index i is NOT equal to the previous number OR if i is equal to 0
      // --> loop 1: i == 0
      // --> loop 3: i == 2 -> nums[2] is not equal to nums[2 - 1], because nums[2] === 3 and nums[1] === 1
      // --> loop 5: i == 3 -> nums[3] is not equal to nums[3 - 1], because nums[3] === 4 and nums[2] === 3
      if (i == 0 || nums[i] != nums[i - 1]) {
        // the number at index of 'uniqueLength' will be set to the number at index i
        // --> loop 1: uniqueLength == 0 -> change nums[0] to nums[0]. Basically at this point nothing changes.
        // --> loop 3: uniqueLength == 1 -> change nums[1] (1) to nums[2] (3). So at this point the array looks like this: [1, 3, 3, 4]
        // --> loop 5: uniqueLength == 2 -> change nums[2] (3) to nums[3] (4). So at this point the array looks like this: [1, 3, 4, 4]
        nums[uniqueLength] = nums[i];
        // we incrememnt uniqueLength by 1
        // --> loop 1: uniqueLength is now 0 + 1 = 1;
        // --> loop 3: uniqueLength is now 1 + 1 = 2;
        // --> loop 5: uniqueLength is now 2 + 1 = 3;
        uniqueLength++;
      }
      // if the number at index i IS equal to the previous number and i is NOT 0 (meaning: we've found a duplicate)
      // we do nothing, because the duplicate will be overwritten by the next unique number in nums. 
      // --> loop 2: nums = [1,1,3,4] -> nums[1] (1) IS equal to nums[0] (1).  
      // --> loop 4: nums = [1,3,3,4] -> nums[2] (3) IS equal to nums[2] (3). 
      // --> loop 6: nums = [1,3,4,4] -> nums[3] (4) IS eqial to nums[3] (4), 
    }
    // at the end our nums array looks like this [1,3,4,4]. The first 3 numbers are unique, so the uniqueLength is 3. We (and Leetcode) don't care about the last duplicate number if there is one. 
    return uniqueLength;
  }
};
