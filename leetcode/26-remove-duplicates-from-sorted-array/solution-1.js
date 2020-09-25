// LeetCode 26. Remove Duplicates from Sorted Array

/*  Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length. Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory. */

// Solution 1: Two Pointers Technique -->
// remove duplicates from the numbers array with splice and return the length of this array.

// version without explanation
var removeDuplicates = function (nums) {
  if (nums.length === 0) {
    return 0;
  } else {
    var i = 0;
    while (i < nums.length - 1) {
      if (nums[i] == nums[i + 1]) {
        nums.splice(i, 1);
      } else {
        i++;
      }
    }
    return nums.length;
  }
}; 

// version with explanation
var removeDuplicates = function (nums) {
  // if nums is an empty array, there are no duplicates and the length of the array is always going to be 0
  if (nums.length === 0) {
    return 0;
  }
  // if the array is not empty, but for example [1, 1, 3, 4]
  else {
    // we set an index of i = 0
    var i = 0;
    // then we loop through the array with a while loop up to (but not including) the last item
    while (i < nums.length - 1) {
      // if the number at index i (pointer 1) is the same as the next number (pointer 2)
      // --> in our example nums[0] === nums[1] (both are 1)
      if (nums[i] == nums[i + 1]) {
        // we remove the first number with splice
        nums.splice(i, 1);
        // in that case i stays the same, because now the next element has this index.
      } else {
        /* if the number at index i (pointer 1) is NOT the same as the next number (pointer 2)
          --> in our example nums[1] and nums[2] are not the same, because nums[1] === 1 and nums[2] === 3
          we don't change the array and therefore have to increment i by 1 to go to the next number 
        */
        i++;
      }
    }
    // we now have an array with all the duplicates removed and can return its length
    return nums.length;
  }
};

// NOTE: the reason we cannot use JS .filter() method, is because it returns a new array. For this exercise we are not allowed to use an extra array, but have to modify the original one.

