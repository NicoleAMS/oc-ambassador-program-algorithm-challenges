// Solution using a Set and for loop

// example input: nums = [1,3,4,2,2]
var findDuplicate = function(nums) {
  // first we create a set 
  var set = new Set();
  
  // then we loop through the numbers of the array
  for (var i = 0; i < nums.length; i++) {
    // we check if the set already includes the number at the current index 
    if (set.has(nums[i])) {
      // if so, we return that number because we found the duplicate
      return nums[i];
    } else {
      // else we add the current number to the set 
      set.add(nums[i]);
    }
  }
};

/* NOTES
A javaScript set -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

On every loop iteration the set grows like this:
Set(1) { 1 }
Set(2) { 1, 3 }
Set(3) { 1, 3, 4 }
Set(4) { 1, 3, 4, 2 }

The last time we loop, (when i = 4), the set already contains a '2', so we go to the 'else' block and return the number
*/