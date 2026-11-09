# Backtracking

Build a solution step by step, and undo (backtrack) a choice as soon as it can no longer lead to a valid answer.

## What to Learn

- The template: **choose → explore → un-choose**
- Subsets vs permutations vs combinations (what you iterate over, and from which index)
- Skipping duplicates by sorting + `if (i > start && nums[i] === nums[i-1]) continue`
- Pruning early to avoid exploring dead branches

## Problems

| # | Problem | Difficulty | Links |
|---|---------|------------|-------|
| 1 | 78 — Subsets | Medium | [LeetCode](https://leetcode.com/problems/subsets/) |
| 2 | 46 — Permutations | Medium | [LeetCode](https://leetcode.com/problems/permutations/) |
| 3 | 39 — Combination Sum | Medium | [LeetCode](https://leetcode.com/problems/combination-sum/) |
| 4 | 79 — Word Search | Medium | [LeetCode](https://leetcode.com/problems/word-search/) |
| 5 | 51 — N-Queens | Hard | [LeetCode](https://leetcode.com/problems/n-queens/) |

## Solution notes

### 78 — Subsets

**Problem:** Return all subsets of a set of distinct integers.

**Approach:** DFS with a `start` index. At every call push a copy of the current path, then for `i` from `start` to end: push `nums[i]`, recurse with `i + 1`, pop.

**Complexity:** O(n · 2ⁿ) time, O(n) recursion space.

---

### 46 — Permutations

**Problem:** Return all permutations of distinct integers.

**Approach:** DFS building a path; a `used` array marks which numbers are already in it. When `path.length === n`, record a copy.

**Complexity:** O(n · n!) time, O(n) space.

---

### 39 — Combination Sum

**Problem:** Combinations of candidates (reusable) that sum to `target`.

**Approach:** DFS with `start` and remaining `target`. Recurse with the same `i` (reuse allowed) so each combination is generated once in non-decreasing index order. Prune when remaining `< 0` (sort first to break early).

**Complexity:** Exponential; roughly O(2^(target / min)).

---

### 79 — Word Search

**Problem:** Does the word exist in the grid using adjacent cells, each cell used once?

**Approach:** DFS from every cell that matches `word[0]`. Mark the cell visited (e.g. set to `'#'`), try 4 directions for the next char, then restore the cell on the way back.

**Complexity:** O(m · n · 4^L) time, O(L) recursion space.

---

### 51 — N-Queens

**Problem:** Place `n` queens on an `n × n` board so none attack each other; return all boards.

**Approach:** Place one queen per row. Track used columns and both diagonals in sets (`row - col`, `row + col`) for O(1) conflict checks. Backtrack when a row has no safe column.

**Complexity:** O(n!) time, O(n) space (excluding output).

## Tip

Draw the recursion tree for a tiny input (e.g. `[1,2,3]`). If you can say what each node represents, the code is just that tree.
