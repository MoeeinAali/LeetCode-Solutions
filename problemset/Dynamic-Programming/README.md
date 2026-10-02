# Dynamic Programming

Break a problem into overlapping subproblems and store answers so you do not recompute them.

## What to Learn

- State definition: what does `dp[i]` mean?
- Transition (recurrence)
- Fill order (bottom-up) or memoization (top-down)
- Classic patterns: knapsack-style, LIS, edit distance, house robber

## Problems

| # | Problem | Difficulty | Links |
|---|---------|------------|-------|
| 1 | 70 — Climbing Stairs | Easy | [LeetCode](https://leetcode.com/problems/climbing-stairs/) · [sol](70.%20Climbing%20Stairs/) |
| 2 | 198 — House Robber | Medium | [LeetCode](https://leetcode.com/problems/house-robber/) · [sol](198%20—%20House%20Robber/) |
| 3 | 322 — Coin Change | Medium | [LeetCode](https://leetcode.com/problems/coin-change/) · [sol](322%20—%20Coin%20Change/) |
| 4 | 300 — Longest Increasing Subsequence | Medium | [LeetCode](https://leetcode.com/problems/longest-increasing-subsequence/) · [sol](300%20—%20Longest%20Increasing%20Subsequence/) · [sol2](300%20—%20Longest%20Increasing%20Subsequence/sol2.ts) |
| 5 | 72 — Edit Distance | Hard | [LeetCode](https://leetcode.com/problems/edit-distance/) · [sol](72%20—%20Edit%20Distance/) |

## Solution notes

### 70 — Climbing Stairs · [sol](70.%20Climbing%20Stairs/)

**Problem:** `n` stairs; each step you climb 1 or 2 stairs. How many distinct ways to reach the top?

**Approach:** Ways to reach step `i` = ways to `(i-1)` + ways to `(i-2)` (choose last step size). Same as Fibonacci: `dp[1]=1`, `dp[2]=2`, fill to `n`.

**Complexity:** O(n) time, O(n) space (can compress to O(1)).

---

### 198 — House Robber · [sol](198%20—%20House%20Robber/)

**Problem:** Non-negative money in houses in a line. Rob max total without robbing two adjacent houses.

**Approach:** `dp[i]` = max money from first `i+1` houses. Either skip house `i` (`dp[i-1]`) or rob it with best up to `i-2` (`dp[i-2] + nums[i]`).

**Complexity:** O(n) time, O(n) space.

---

### 322 — Coin Change · [sol](322%20—%20Coin%20Change/)

**Problem:** Coin denominations and amount `A`. Minimum coins to make `A`, or `-1` if impossible.

**Approach:** Unbounded knapsack-style DP. `dp[0]=0`, `dp[i]=∞` initially. For each amount `i` and coin `c`, if `i >= c`, `dp[i] = min(dp[i], dp[i-c]+1)`.

**Complexity:** O(amount · |coins|) time, O(amount) space.

---

### 300 — Longest Increasing Subsequence · [sol](300%20—%20Longest%20Increasing%20Subsequence/) · [sol2 — patience sorting](300%20—%20Longest%20Increasing%20Subsequence/sol2.ts)

**Problem:** Length of the longest strictly increasing subsequence (not necessarily contiguous).

**Approach (sol.ts — O(n²) DP):** `dp[i]` = LIS ending at `i`. For each `j < i` with `nums[j] < nums[i]`, `dp[i] = max(dp[i], dp[j]+1)`. Answer = max of `dp`.

**Approach (sol2.ts — O(n log n)):** `tails[k]` = smallest possible tail of an increasing subsequence of length `k+1`. For each `num`, binary-search position in `tails` and replace or extend. Length of `tails` is the LIS length.

**Complexity:** O(n²) or O(n log n) time, O(n) space.

---

### 72 — Edit Distance · [sol](72%20—%20Edit%20Distance/)

**Problem:** Minimum insert, delete, or replace operations to transform `word1` into `word2`.

**Approach:** 2D DP on prefixes. `dp[i][j]` = edit distance between first `i` chars of `word1` and first `j` of `word2`. Base: empty ↔ prefix costs = length. If chars match, `dp[i][j]=dp[i-1][j-1]`; else `1 + min(insert, delete, replace)` from neighbors.

**Complexity:** O(m · n) time and space.

## Tip

Before coding, write these three on paper:

1. What is the state?
2. What is the transition?
3. What are the base cases?

If those are clear, implementation is usually straightforward.
