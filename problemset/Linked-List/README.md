# Linked List

Pointer (`next`) manipulation and traversal patterns — no random access, everything moves node by node.

## What to Learn

- Reversing a list with three pointers (`prev`, `curr`, `next`)
- **Fast / slow pointers** (cycle detection, finding the middle)
- Merging two sorted lists
- Structural rewiring (Reorder, Merge k lists)

## Problems

| # | Problem | Difficulty | Links |
|---|---------|------------|-------|
| 1 | 206 — Reverse Linked List | Easy | [LeetCode](https://leetcode.com/problems/reverse-linked-list/) |
| 2 | 21 — Merge Two Sorted Lists | Easy | [LeetCode](https://leetcode.com/problems/merge-two-sorted-lists/) |
| 3 | 141 — Linked List Cycle | Easy | [LeetCode](https://leetcode.com/problems/linked-list-cycle/) |
| 4 | 143 — Reorder List | Medium | [LeetCode](https://leetcode.com/problems/reorder-list/) |
| 5 | 23 — Merge k Sorted Lists | Hard | [LeetCode](https://leetcode.com/problems/merge-k-sorted-lists/) |

## Solution notes

### 206 — Reverse Linked List

**Problem:** Reverse a singly linked list and return the new head.

**Approach:** Iterative with three pointers: `prev = null`, `curr = head`. While `curr`: save `next = curr.next`, set `curr.next = prev`, then advance `prev = curr`, `curr = next`. Return `prev`.

**Complexity:** O(n) time, O(1) space.

---

### 21 — Merge Two Sorted Lists

**Problem:** Merge two sorted linked lists into one sorted list.

**Approach:** Dummy head + pointer `tail`. Always attach the smaller of the two current nodes, advance that list. When one list ends, attach the remainder of the other. Return `dummy.next`.

**Complexity:** O(n + m) time, O(1) space.

---

### 141 — Linked List Cycle

**Problem:** Does the linked list contain a cycle?

**Approach:** Floyd’s tortoise and hare — slow moves 1, fast moves 2. If they meet, there is a cycle. If fast reaches null, no cycle.

**Complexity:** O(n) time, O(1) space.

---

### 143 — Reorder List

**Problem:** Reorder `L0 → L1 → … → Ln` into `L0 → Ln → L1 → Ln-1 → …` in-place.

**Approach:** (1) Find middle with slow/fast. (2) Reverse the second half. (3) Merge the two halves alternately (first from left, then from reversed right).

**Complexity:** O(n) time, O(1) space.

---

### 23 — Merge k Sorted Lists

**Problem:** Merge `k` sorted linked lists into one sorted list.

**Approach:** Min-heap (priority queue) of current heads keyed by value. Pop smallest, append to result, push that node’s `next` if any. Alternative: divide-and-conquer pairwise merge (like merge sort).

**Complexity:** O(N log k) time with heap (N = total nodes), O(k) heap space.

## Tip

Get solid on **fast/slow pointers** and `next` manipulation — almost every linked-list problem reduces to those two skills. Drawing the links on paper helps a lot.
