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

## Solution notes

### 125 — Valid Palindrome · [sol](125.%20Valid%20Palindrome/)

**Problem:** Given a string, check whether it reads the same forward and backward after keeping only letters and digits and ignoring case. Punctuation and spaces are ignored.

**Approach:** Normalize with `toLowerCase` and strip non-alphanumeric characters. Use two pointers from both ends; compare characters and move inward. If any pair differs, return false; if pointers meet, return true.

**Complexity:** O(n) time, O(n) extra space for the filtered string (can be O(1) space with pointers on the original string skipping junk).

---

### 167 — Two Sum II · [sol](167.%20Two%20Sum%20II%20-%20Input%20Array%20Is%20Sorted/)

**Problem:** A sorted array of integers and a target. Return the 1-based indices of two distinct elements whose sum equals `target`. Exactly one solution exists.

**Approach:** Two pointers at `l = 0` and `r = n - 1`. If `nums[l] + nums[r] === target`, done. If the sum is too large, decrement `r`; if too small, increment `l`. Sorted order guarantees we never skip the answer.

**Complexity:** O(n) time, O(1) space.

---

### 11 — Container With Most Water · [sol](11.%20Container%20With%20Most%20Water/)

**Problem:** Vertical lines at indices define a container with width = distance between lines and height = min of the two line heights. Maximize area.

**Approach:** Start with widest window (`l = 0`, `r = n - 1`). Record area, then move the pointer at the **shorter** line inward. Moving the taller side cannot increase height (still limited by the other line) and only shrinks width, so it is safe to discard.

**Complexity:** O(n) time, O(1) space.

---

### 15 — 3Sum · [sol](15.%203Sum/)

**Problem:** Find all unique triplets `[a, b, c]` in the array such that `a + b + c = 0`. No duplicate triplets in the output.

**Approach:** Sort the array. For each index `i`, skip duplicate `nums[i]`. If `nums[i] > 0`, break (no non-negative triplets can sum to 0). Run two pointers on `i + 1 .. n - 1` like Two Sum II: on zero, push the triplet and skip duplicate left/right values before moving both pointers.

**Complexity:** O(n²) time, O(1) auxiliary space excluding output and sort.

---

### 42 — Trapping Rain Water · [sol](42.%20Trapping%20Rain%20Water/)

**Problem:** Elevation map as an array of bar heights. Compute total water trapped between bars after rain.

**Approach:** Precompute `maxLeft[i]` = tallest bar to the left of `i` (excluding `i`) and `maxRight[i]` similarly to the right. At each index, water level is `min(maxLeft[i], maxRight[i])`; add `max(0, level - height[i])` to the answer.

**Complexity:** O(n) time, O(n) space. (Two-pointer O(1) space variant also exists.)

## Tip

Before moving a pointer, ask: “If I advance this one, can the answer still improve?” That greedy check is the core of most problems in this section.
