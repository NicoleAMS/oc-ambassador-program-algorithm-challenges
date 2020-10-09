// Solution using two pointers at different speeds 

// example input: head = [3,2,0,-4], pos = 1
var hasCycle = function(head) {
  // the head here is basically the first node in the linked list (see below)
  // we create two pointers which are both equal to the head
  var slowPointer = head;
  var fastPointer = head;
  
  // as long as there is a fast pointer (which will be forever if there is a cycle)
  while (fastPointer) {
      // we set the slow pointer to the next node
      slowPointer = slowPointer.next;
      // and the fast pointer to the next node
      fastPointer = fastPointer.next;
      
      // if there's no fast pointer anymore because there's no cycle and we're now beyond the last node
      if (!fastPointer) {
        // we break out of the loop and return 'false'
          break;
      } 
      
      // otherwise we set fast pointer again to the next node
      fastPointer = fastPointer.next;
      
      // if the slow pointer is the same as the fast pointer (meaning we're now at the same node so there must be a cycle) we return 'true'. If there is a cycle, eventually slowPointer and fastPointer will be the same. and h
      if (slowPointer === fastPointer) {
          return true;
      }
  }
  return false;
};


/* NOTES
Linked List in JavaScript -> https://code.tutsplus.com/articles/data-structures-with-javascript-singly-linked-list-and-doubly-linked-list--cms-23392

if the example input is [3,2,0,-4] with the tail connecting to the second node, I imagine in reality the linked list looks like an array of linked nodes, like this:

[
  {
    val: 3,
    next: [2,0,-4,2,0,-4 etc...]
  },
  {
    val: 2,
    next: [0,-4,2,0,-4,2 etc...]
  },
  {
    val: 0,
    next: [0,-4,2,0,-4,2,0 etc...]
  },
  {
    val: -4,
    next: [-4,2,0,-4,2,0,-4 etc...]
  },
  {
    val: 2,
    next: [0,-4,2,0,-4,2 etc...]
  },
    {
    val: 0,
    next: [0,-4,2,0,-4,2,0 etc...]
  },
  {
    etc...
  }
]

*/