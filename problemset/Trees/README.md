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
| 1 | 104 — Maximum Depth of Binary Tree | Easy | [LeetCode](https://leetcode.com/problems/maximum-depth-of-binary-tree/) |
| 2 | 226 — Invert Binary Tree | Easy | [LeetCode](https://leetcode.com/problems/invert-binary-tree/) |
| 3 | 102 — Binary Tree Level Order Traversal | Medium | [LeetCode](https://leetcode.com/problems/binary-tree-level-order-traversal/) |
| 4 | 98 — Validate Binary Search Tree | Medium | [LeetCode](https://leetcode.com/problems/validate-binary-search-tree/) |
| 5 | 124 — Binary Tree Maximum Path Sum | Hard | [LeetCode](https://leetcode.com/problems/binary-tree-maximum-path-sum/) |

## Solution notes

### 104 — Maximum Depth of Binary Tree

**Problem:** Maximum depth (root to farthest leaf) of a binary tree. Empty tree → 0.

**Approach:** DFS recursion: `depth(node) = 1 + max(depth(left), depth(right))`. Base: null → 0.

**Complexity:** O(n) time, O(h) space (recursion height).

---

### 226 — Invert Binary Tree

**Problem:** Mirror the tree: swap every left and right child recursively.

**Approach:** At each node, swap `left`/`right`, then recurse on both children (or recurse first then swap — same result).

**Complexity:** O(n) time, O(h) space.

---

### 102 — Binary Tree Level Order Traversal

**Problem:** Return values level by level as a list of lists (BFS order).

**Approach:** Queue BFS. For each level, note `size = queue.length`, pop that many nodes into a level array, and enqueue their children. Push level array into result.

**Complexity:** O(n) time, O(n) space for the queue/result.

---

### 98 — Validate Binary Search Tree

**Problem:** Check whether the tree is a valid BST (every node’s left subtree < node < right subtree, recursively).

**Approach:** Pass a valid `(low, high)` range down. Node value must be strictly inside; left child gets `(low, node.val)`, right gets `(node.val, high)`. Alternatively: inorder should be strictly increasing.

**Complexity:** O(n) time, O(h) space.

---

### 124 — Binary Tree Maximum Path Sum

**Problem:** Maximum path sum anywhere in the tree. A path can start/end at any nodes (need not pass through root); each node used at most once.

**Approach:** DFS returns the best **downward** gain through this node for the parent (`node.val + max(0, left, right)` — discard negative branches). Meanwhile update a global answer with `node.val + max(0,left) + max(0,right)` (path that bends at this node).

**Complexity:** O(n) time, O(h) space.

## If You Learn Only One Thing

**Really understand tree recursion** — what each call returns from a subtree, and how the parent uses it. Hard problems like 124 are the same idea, pushed further.
