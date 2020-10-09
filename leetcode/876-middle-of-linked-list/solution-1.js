// Solution using two pointers at different speeds

// example input: [1,2,3,4,5];
var middleNode = function(head) {
  // the head here is basically the first node in the linked list (see below)
  // we create two pointers which are both equal to the head
  var slowPointer = head;
  var fastPointer = head;
  
  // as long as the node of fastpointer has a next node that's not null and a node after that which is not null
  while (fastPointer.next && fastPointer.next.next) {
    // the slowPointer is set to the next node in the linked list, so if slowPointer is the first node ({val: 1, next: [2,3,4,5]}), then it's now set to the second node ({val: 2, next: [3,4,5]})
    slowPointer = slowPointer.next;
    // and the fastPointer is set to the node after the next node, so if fastPointer is the first node ({val: 1}, next: [2,3,4,5]), the it's now set to the third node ({val: 3, next: [4,5]})
    fastPointer = fastPointer.next.next;
  }
  
  // when the loop ends (because the fastPointer doesn't have a node after the next one), we return the node at slowPointer if the linked list is uneven and if it's an even-numbered list, we return the node after slowPointer's node.
  // so when fastPointer is the fifth node, slowPointer is at the third note, and since it's an uneven list, that's the node we should return 
  return fastPointer.next ? slowPointer.next : slowPointer;
  
};

/* NOTES
Linked List in JavaScript -> https://code.tutsplus.com/articles/data-structures-with-javascript-singly-linked-list-and-doubly-linked-list--cms-23392

if the example input is [1,2,3,4,5], I imagine in reality the linked list looks like an array of linked nodes, like this:

[
  {
    val: 1,
    next: [2,3,4,5]
  },
  {
    val: 2,
    next: [3,4,5]
  },
  {
    val: 3,
    next: [4,5]
  },
  {
    val: 4,
    next: [5]
  },
  {
    val: 5,
    next: null
  }
]

*/