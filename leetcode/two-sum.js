// LeetCode 167. Two Sum II - Input array is sorted

/* 
Two Pointers Technique Exlanation 
This technique is very useful on sorted arrays and arrays whose elements we want to group.

The idea is to use two pointers to split the array into different areas or groups based on some condition. For example, elements smaller than, equal to and greater than a certain value. Or elements whose sum is too small or too large. 

*/

var twoSum = function(numbers, target) {
  // numbers is the array of the numbers that the function received, for example [1, 5, 6, 8]
  // target -> we need to find the two numbers in the array that when added up are equal to the target number. For example, our target could be 11.  

  // we need to return an array with the indices of the correct numbers, which I am storing in 'solution'. In our example, the correct numbers are 5 and 6, which are at numbers[1] and numbers[2]. We need to add 1 to each index (because 'the indices should not be zero-based', meaning we should start from 1 and not from the usual 0). So the correct 'solution' is [2, 3].
  var solution = [];

  // in order to find these numbers we first set two pointers. 
  // leftPointer starts at the index of the first element of the numbers array.
  var leftPointer = 0;
  // rightPointer starts at the index of the last element of the numbers array, which in our case is 3. 
  var rightPointer = numbers.length - 1;
  
  while (leftPointer < rightPointer) {
      // loop 1: sum = 1 + 8 (numbers[leftPointer] = 1 and numbers[rightPointer] = 8)
      // loop 2: sum = 5 + 8 (numbers[leftPointer] = 5 and numbers[rightPointer] = 8)
      // loop 3: sum = 5 + 6 (numbers[leftPointer] = 5 and numbers[rightPointer] = 6)
      var sum = numbers[leftPointer] + numbers[rightPointer];
      
      // loop 3: since the target (11) is now equal to the sum (11), we can set the solution and can break out of the while loop.
      if (target === sum) {
          // we add 1 to each pointer, because we should start counting from 1 and not the usual 0
          solution = [leftPointer + 1, rightPointer + 1];
          break;
      // loop 1: since the target (11) is bigger than the sum (9) we move the leftPointer 1 step to the right. So leftPointer = 1. 
      } else if (target > sum) {
          leftPointer++;
      // loop 2: since the target (11) is now smaller than the sum (13) we move the rightPointer 1 step to the left. So rightPointer = 2.
      } else {
          rightPointer--;
      }
  }
  // we have found the solution ( [2, 3]) and can return it. 
  return solution;
};
