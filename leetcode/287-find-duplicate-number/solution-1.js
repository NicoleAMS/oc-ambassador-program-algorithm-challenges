// Solution using nested for loop and 2 pointers 

// example input: nums = [1,3,4,2,2]
var findDuplicate = function(nums) {
  // first pointer/index is 'slowPointer' -> we're looping through the nums array 
  for (var slowPointer = 0; slowPointer < nums.length - 1; slowPointer++) {
    // second pointer/index is 'fastPointer' -> we're starting at the next index (so if slowPointer is at index 0, we start at index 1), then loop through the nums array
    for (var fastPointer = slowPointer + 1; fastPointer < nums.length; fastPointer++) {
      // if the number at index of slowPointer matches the number at the index of fastPointer
      if (nums[slowPointer] === nums[fastPointer]) {
        // we have found the duplicate number and return it 
        return nums[slowPointer];
      }
    }
  }

};