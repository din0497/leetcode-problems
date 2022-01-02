// 1) You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list. Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]
 

// Constraints:

// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.

// first solution!

var mergeTwoLists = function(list1, list2) {
    if(list1.length === 0 && list2.length ===0){
        return []
    }
    return list1.concat(list2).sort((a,b) => a-b)
};

// second solution

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function(l1, l2) {
    let dummyHead = new ListNode(0);
    let currentNode = dummyHead; 

    while(l1 !== null && l2 !== null){

        if(l1.val < l2.val){
            currentNode.next = l1;
            l1 = l1.next
        } else {
            currentNode.next = l2
            l2 = l2.next
        }

        currentNode = currentNode.next
    }

    if(l1 !== null) {
        currentNode.next = l1;
    } else if (l2 !== null) {
        currentNode.next = l2
    }

    return dummyHead.next
}