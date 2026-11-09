# Greedy / Kadane

Make the locally best choice at each step and prove (or convince yourself) it leads to a global optimum.

## What to Learn

- Maintaining a running best (Kadane's algorithm)
- Tracking a reachable range / frontier (jump problems)
- When greedy fails and you need DP instead
- Intervals-style greedy: sort, then pick by earliest end (see also [Intervals](../Intervals/))

## Problems

| # | Problem | Difficulty | Links |
|---|---------|------------|-------|
| 1 | 53 — Maximum Subarray | Medium | [LeetCode](https://leetcode.com/problems/maximum-subarray/) |
| 2 | 55 — Jump Game | Medium | [LeetCode](https://leetcode.com/problems/jump-game/) |
| 3 | 45 — Jump Game II | Medium | [LeetCode](https://leetcode.com/problems/jump-game-ii/) |
| 4 | 134 — Gas Station | Medium | [LeetCode](https://leetcode.com/problems/gas-station/) |
| 5 | 763 — Partition Labels | Medium | [LeetCode](https://leetcode.com/problems/partition-labels/) |

## Solution notes

### 53 — Maximum Subarray

**Problem:** Largest sum of a contiguous subarray.

**Approach:** Kadane: `cur = max(x, cur + x)`; `best = max(best, cur)`. Drop the running sum when it becomes worse than starting fresh.

**Complexity:** O(n) time, O(1) space.

---

### 55 — Jump Game

**Problem:** `nums[i]` is the max jump length from `i`. Can you reach the last index?

**Approach:** Track `farthest` reachable index. If `i > farthest` you are stuck; otherwise `farthest = max(farthest, i + nums[i])`.

**Complexity:** O(n) time, O(1) space.

---

### 45 — Jump Game II

**Problem:** Minimum number of jumps to reach the last index.

**Approach:** BFS-style greedy by "levels": keep the current range end and the farthest reach within it. When `i` hits the range end, take a jump and extend the end to `farthest`.

**Complexity:** O(n) time, O(1) space.

---

### 134 — Gas Station

**Problem:** Find the start station that lets you complete the circular route, or -1.

**Approach:** If `sum(gas) < sum(cost)` the answer is -1. Otherwise scan once keeping the tank; whenever it goes negative, reset the start to `i + 1` and the tank to 0.

**Complexity:** O(n) time, O(1) space.

---

### 763 — Partition Labels

**Problem:** Split the string so each letter appears in at most one part; maximize the number of parts.

**Approach:** Record the last index of each char. Scan, extending `end = max(end, last[c])`. When `i === end`, cut a part and start the next.

**Complexity:** O(n) time, O(1) space (26 letters).

## Tip

If you cannot explain why the local choice is safe, test a small counterexample — that is usually how you discover you need DP.
