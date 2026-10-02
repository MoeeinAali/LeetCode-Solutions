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
| 1 | 70 — Climbing Stairs | Easy | [LeetCode](https://leetcode.com/problems/climbing-stairs/) · [sol](70%20—%20Climbing%20Stairs/) |
| 2 | 746 — Min Cost Climbing Stairs | Easy | [LeetCode](https://leetcode.com/problems/min-cost-climbing-stairs/) · [sol](746%20—%20Min%20Cost%20Climbing%20Stairs/) |
| 3 | 198 — House Robber | Medium | [LeetCode](https://leetcode.com/problems/house-robber/) · [sol](198%20—%20House%20Robber/) |
| 4 | 213 — House Robber II | Medium | [LeetCode](https://leetcode.com/problems/house-robber-ii/) · [sol](213%20—%20House%20Robber%20II/) |
| 5 | 91 — Decode Ways | Medium | [LeetCode](https://leetcode.com/problems/decode-ways/) · [sol](91%20—%20Decode%20Ways/) |
| 6 | 322 — Coin Change | Medium | [LeetCode](https://leetcode.com/problems/coin-change/) · [sol](322%20—%20Coin%20Change/) |
| 7 | 518 — Coin Change II | Medium | [LeetCode](https://leetcode.com/problems/coin-change-ii/) · [sol](518%20—%20Coin%20Change%20II/) |
| 8 | 139 — Word Break | Medium | [LeetCode](https://leetcode.com/problems/word-break/) · [sol](139%20—%20Word%20Break/) |
| 9 | 300 — Longest Increasing Subsequence | Medium | [LeetCode](https://leetcode.com/problems/longest-increasing-subsequence/) · [sol](300%20—%20Longest%20Increasing%20Subsequence/) · [sol2](300%20—%20Longest%20Increasing%20Subsequence/sol2.ts) |
| 10 | 416 — Partition Equal Subset Sum | Medium | [LeetCode](https://leetcode.com/problems/partition-equal-subset-sum/) · [sol](416%20—%20Partition%20Equal%20Subset%20Sum/) |
| 11 | 72 — Edit Distance | Hard | [LeetCode](https://leetcode.com/problems/edit-distance/) · [sol](72%20—%20Edit%20Distance/) |

## Solution notes

### 70 — Climbing Stairs · [sol](70%20—%20Climbing%20Stairs/)

**Problem:** `n` stairs; each step you climb 1 or 2 stairs. How many distinct ways to reach the top?

**Approach:** Ways to reach step `i` = ways to `(i-1)` + ways to `(i-2)` (choose last step size). Same as Fibonacci: `dp[1]=1`, `dp[2]=2`, fill to `n`.

**Complexity:** O(n) time, O(n) space (can compress to O(1)).

---

### 746 — Min Cost Climbing Stairs · [sol](746%20—%20Min%20Cost%20Climbing%20Stairs/)

**Problem:** Array `cost` where `cost[i]` is the cost of stepping on stair `i`. You can start at stair 0 or 1, and climb 1 or 2 stairs at a time. After paying `cost[i]`, you may climb. Find the minimum cost to reach the top (past the last stair).

**Approach:** Append a free top stair (`cost.push(0)`). `dp[i]` = min cost to stand on stair `i` = `cost[i] + min(dp[i-1], dp[i-2])`. Answer is `min(dp[n], dp[n-1])` after the padded top (or equivalently the last computed values).

**Complexity:** O(n) time, O(n) space (can compress to O(1) like Fibonacci).

---

### 198 — House Robber · [sol](198%20—%20House%20Robber/)

**Problem:** Non-negative money in houses in a line. Rob max total without robbing two adjacent houses.

**Approach:** `dp[i]` = max money from first `i+1` houses. Either skip house `i` (`dp[i-1]`) or rob it with best up to `i-2` (`dp[i-2] + nums[i]`).

**Complexity:** O(n) time, O(n) space.

---

### 213 — House Robber II · [sol](213%20—%20House%20Robber%20II/)

**Problem:** Same as House Robber, but houses form a **circle** — first and last are adjacent, so you cannot rob both.

**Approach:** Reduce to two linear House Robber runs: rob houses `[0 .. n-2]` (exclude last) and `[1 .. n-1]` (exclude first). Return the max of the two. Edge case: single house → return that house.

**Complexity:** O(n) time, O(1) space with rolling variables.

---

### 91 — Decode Ways · [sol](91%20—%20Decode%20Ways/)

**Problem:** A message is encoded with `A=1 … Z=26`. Given digit string `s`, how many ways can it be decoded? Leading zeros are invalid (`"06"` is not valid).

**Approach:** `dp[i]` = ways to decode the first `i` characters. `dp[0]=1` (empty). For position `i`:
- If `s[i-1] != '0'`, add `dp[i-1]` (single-digit decode).
- If the two-digit number `s[i-2..i-1]` is in `10..26`, add `dp[i-2]`.

**Complexity:** O(n) time, O(n) space (can compress to O(1)).

---

### 322 — Coin Change · [sol](322%20—%20Coin%20Change/)

**Problem:** Coin denominations and amount `A`. Minimum coins to make `A`, or `-1` if impossible.

**Approach:** Unbounded knapsack-style DP. `dp[0]=0`, `dp[i]=∞` initially. For each amount `i` and coin `c`, if `i >= c`, `dp[i] = min(dp[i], dp[i-c]+1)`.

**Complexity:** O(amount · |coins|) time, O(amount) space.

---

### 518 — Coin Change II · [sol](518%20—%20Coin%20Change%20II/)

**Problem:** Number of **combinations** (order does not matter) to make `amount` with given coins. Unlimited supply of each coin.

**Approach:** `dp[0]=1`. Outer loop over **coins**, inner over amounts `coin..amount`: `dp[i] += dp[i-coin]`. Coin-outer order ensures each combination is counted once (not permutations).

**Complexity:** O(amount · |coins|) time, O(amount) space.

---

### 139 — Word Break · [sol](139%20—%20Word%20Break/)

**Problem:** Given string `s` and a dictionary `wordDict`, can `s` be segmented into a space-separated sequence of dictionary words? Words may be reused.

**Approach:** `dp[i]` = whether prefix `s[0..i)` can be segmented. `dp[0]=true`. For each end `i`, try split `j < i`: if `dp[j]` and `s[j..i)` is in the dictionary set, set `dp[i]=true`.

**Complexity:** O(n² · L) time in the worst case (substring / lookup), O(n + dict) space.

---

### 300 — Longest Increasing Subsequence · [sol](300%20—%20Longest%20Increasing%20Subsequence/) · [sol2 — patience sorting](300%20—%20Longest%20Increasing%20Subsequence/sol2.ts)

**Problem:** Length of the longest strictly increasing subsequence (not necessarily contiguous).

**Approach (sol.ts — O(n²) DP):** `dp[i]` = LIS ending at `i`. For each `j < i` with `nums[j] < nums[i]`, `dp[i] = max(dp[i], dp[j]+1)`. Answer = max of `dp`.

**Approach (sol2.ts — O(n log n)):** `tails[k]` = smallest possible tail of an increasing subsequence of length `k+1`. For each `num`, binary-search position in `tails` and replace or extend. Length of `tails` is the LIS length.

**Complexity:** O(n²) or O(n log n) time, O(n) space.

---

### 416 — Partition Equal Subset Sum · [sol](416%20—%20Partition%20Equal%20Subset%20Sum/)

**Problem:** Can the array be split into two subsets with equal sum? Equivalent to: does a subset sum to `total/2`? If `total` is odd, answer is false.

**Approach (0/1 knapsack):** Let `target = sum/2`. `dp[j]` = whether sum `j` is achievable. Start `dp[0]=true`. For each number `num`, iterate `j` from `target` down to `num` and set `dp[j] = dp[j] || dp[j-num]` (backward to use each number once). Answer is `dp[target]`.

**Complexity:** O(n · target) time, O(target) space.

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
