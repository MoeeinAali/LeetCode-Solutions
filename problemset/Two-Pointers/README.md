# Two Pointers

Two indices move over an array (usually from both ends, or one slow and one fast) to shrink the search space without brute force.

## What to Learn

- `left` / `right` movement from both ends
- Working on **sorted arrays** (Two Sum II, 3Sum)
- Skipping duplicates and dead branches
- Greedy pointer movement: when the condition fails, which pointer should move?

## Problems

| # | Problem | Difficulty | Links |
|---|---------|------------|-------|
| 1 | 125 — Valid Palindrome | Easy | [LeetCode](https://leetcode.com/problems/valid-palindrome/) · [sol](125.%20Valid%20Palindrome/) |
| 2 | 167 — Two Sum II | Easy | [LeetCode](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/) · [sol](167.%20Two%20Sum%20II%20-%20Input%20Array%20Is%20Sorted/) |
| 3 | 11 — Container With Most Water | Medium | [LeetCode](https://leetcode.com/problems/container-with-most-water/) · [sol](11.%20Container%20With%20Most%20Water/) |
| 4 | 15 — 3Sum | Medium | [LeetCode](https://leetcode.com/problems/3sum/) · [sol](15.%203Sum/) |
| 5 | 42 — Trapping Rain Water | Hard | [LeetCode](https://leetcode.com/problems/trapping-rain-water/) · [sol](42.%20Trapping%20Rain%20Water/) |

## Tip

Before moving a pointer, ask: “If I advance this one, can the answer still improve?” That greedy check is the core of most problems in this section.
