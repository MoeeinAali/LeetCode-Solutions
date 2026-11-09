# Trees — DFS / BFS

Binary trees traversed with recursion (DFS) or a queue (BFS).

## What to Learn

- Recursive DFS: preorder / inorder / postorder
- BFS with a queue: level-order traversal
- Recursive definition: what the left and right subtrees return
- Validating a BST with allowed value ranges per node

## Problems

| # | Problem | Difficulty | Links |
|---|---------|------------|-------|
| 1 | 104 — Maximum Depth of Binary Tree | Easy | [LeetCode](https://leetcode.com/problems/maximum-depth-of-binary-tree/) · [sol](104%20—%20Maximum%20Depth%20of%20Binary%20Tree/) |
| 2 | 226 — Invert Binary Tree | Easy | [LeetCode](https://leetcode.com/problems/invert-binary-tree/) · [sol](226%20—%20Invert%20Binary%20Tree/) |
| 3 | 102 — Binary Tree Level Order Traversal | Medium | [LeetCode](https://leetcode.com/problems/binary-tree-level-order-traversal/) · [sol](102%20—%20Binary%20Tree%20Level%20Order%20Traversal/) |
| 4 | 98 — Validate Binary Search Tree | Medium | [LeetCode](https://leetcode.com/problems/validate-binary-search-tree/) · [sol](98%20—%20Validate%20Binary%20Search%20Tree/) |
| 5 | 124 — Binary Tree Maximum Path Sum | Hard | [LeetCode](https://leetcode.com/problems/binary-tree-maximum-path-sum/) · [sol](124%20—%20Binary%20Tree%20Maximum%20Path%20Sum/) |
| 6 | 100 — Same Tree | Easy | [LeetCode](https://leetcode.com/problems/same-tree/) |
| 7 | 236 — Lowest Common Ancestor of a Binary Tree | Medium | [LeetCode](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/) |
| 8 | 230 — Kth Smallest Element in a BST | Medium | [LeetCode](https://leetcode.com/problems/kth-smallest-element-in-a-bst/) |
| 9 | 105 — Construct Binary Tree from Preorder and Inorder Traversal | Medium | [LeetCode](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/) |

## Solution notes

### 104 — Maximum Depth of Binary Tree · [sol](104%20—%20Maximum%20Depth%20of%20Binary%20Tree/)

**Problem:** Maximum depth (root to farthest leaf) of a binary tree. Empty tree → 0.

**Approach:** DFS recursion: `depth(node) = 1 + max(depth(left), depth(right))`. Base: null → 0.

**Complexity:** O(n) time, O(h) space (recursion height).

---

### 226 — Invert Binary Tree · [sol](226%20—%20Invert%20Binary%20Tree/)

**Problem:** Mirror the tree: swap every left and right child recursively.

**Approach:** At each node, swap `left`/`right`, then recurse on both children (or recurse first then swap — same result).

**Complexity:** O(n) time, O(h) space.

---

### 102 — Binary Tree Level Order Traversal · [sol](102%20—%20Binary%20Tree%20Level%20Order%20Traversal/)

**Problem:** Return values level by level as a list of lists (BFS order).

**Approach:** Queue BFS. For each level, note `size = queue.length`, pop that many nodes into a level array, and enqueue their children. Push level array into result.

**Complexity:** O(n) time, O(n) space for the queue/result.

---

### 98 — Validate Binary Search Tree · [sol](98%20—%20Validate%20Binary%20Search%20Tree/)

**Problem:** Check whether the tree is a valid BST (every node’s left subtree < node < right subtree, recursively).

**Approach:** Pass a valid `(low, high)` range down. Node value must be strictly inside; left child gets `(low, node.val)`, right gets `(node.val, high)`. Alternatively: inorder should be strictly increasing.

**Complexity:** O(n) time, O(h) space.

---

### 124 — Binary Tree Maximum Path Sum · [sol](124%20—%20Binary%20Tree%20Maximum%20Path%20Sum/)

**Problem:** Maximum path sum anywhere in the tree. A path can start/end at any nodes (need not pass through root); each node used at most once.

**Approach:** DFS returns the best **downward** gain through this node for the parent (`node.val + max(0, left, right)` — discard negative branches). Meanwhile update a global answer with `node.val + max(0,left) + max(0,right)` (path that bends at this node).

**Complexity:** O(n) time, O(h) space.

### 100 — Same Tree

**Problem:** Are two binary trees structurally identical with equal node values?

**Approach:** Recurse on both trees together: both null → true; one null or values differ → false; otherwise both subtrees must match.

**Complexity:** O(n) time, O(h) space.

---

### 236 — Lowest Common Ancestor of a Binary Tree

**Problem:** Find the lowest node that has both `p` and `q` as descendants.

**Approach:** Post-order DFS. Return the node if it is `p`, `q` or null. If both left and right calls return non-null, the current node is the LCA; otherwise bubble up the non-null side.

**Complexity:** O(n) time, O(h) space.

---

### 230 — Kth Smallest Element in a BST

**Problem:** Return the k-th smallest value in a BST.

**Approach:** Inorder traversal of a BST visits values in ascending order. Walk iteratively with a stack and stop at the k-th visit. (Follow-up: augment nodes with subtree sizes for frequent queries.)

**Complexity:** O(h + k) time, O(h) space.

---

### 105 — Construct Binary Tree from Preorder and Inorder Traversal

**Problem:** Rebuild the tree from its preorder and inorder arrays.

**Approach:** Preorder's first element is the root. Find it in inorder (use a value → index map): everything left of it is the left subtree, right is the right subtree. Recurse with index ranges instead of slicing.

**Complexity:** O(n) time, O(n) space.

## If You Learn Only One Thing

**Really understand tree recursion** — what each call returns from a subtree, and how the parent uses it. Hard problems like 124 are the same idea, pushed further.
