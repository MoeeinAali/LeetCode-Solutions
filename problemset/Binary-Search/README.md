# Binary Search

Binary search over a sorted space — not only finding an element in an array, but finding the smallest/largest feasible answer on a range.

## What to Learn

- Classic binary search on a sorted array
- Boundaries: `left`, `right`, `mid`, and exit conditions
- Rotated sorted arrays
- **Binary search on answer**: guess a value, check feasibility, shrink the range

## Problems

| # | Problem | Difficulty | Links |
|---|---------|------------|-------|
| 1 | 704 — Binary Search | Easy | [LeetCode](https://leetcode.com/problems/binary-search/) · [sol](704%20—%20Binary%20Search/) |
| 2 | 35 — Search Insert Position | Easy | [LeetCode](https://leetcode.com/problems/search-insert-position/) · [sol](35%20—%20Search%20Insert%20Position/) |
| 3 | 33 — Search in Rotated Sorted Array | Medium | [LeetCode](https://leetcode.com/problems/search-in-rotated-sorted-array/) · [sol](33%20—%20Search%20in%20Rotated%20Sorted%20Array/) |
| 4 | 153 — Find Minimum in Rotated Sorted Array | Medium | [LeetCode](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/) · [sol](153%20—%20Find%20Minimum%20in%20Rotated%20Sorted%20Array/) |
| 5 | 875 — Koko Eating Bananas | Medium | [LeetCode](https://leetcode.com/problems/koko-eating-bananas/) |

## Solution notes

### 704 — Binary Search · [sol](704%20—%20Binary%20Search/)

**Problem:** Sorted array and `target`. Return index of `target` or `-1`.

**Approach:** `left = 0`, `right = n - 1`. While `left <= right`, `mid = floor((left+right)/2)`. Compare `nums[mid]` to `target` and narrow to left or right half.

**Complexity:** O(log n) time, O(1) space.

---

### 35 — Search Insert Position · [sol](35%20—%20Search%20Insert%20Position/)

**Problem:** Sorted array and `target`. Return index if found; otherwise index where `target` would be inserted to keep order.

**Approach:** Same loop as 704. If not found when loop ends, `left` is the first position with value ≥ target — return `left`.

**Complexity:** O(log n) time, O(1) space.

---

### 33 — Search in Rotated Sorted Array · [sol](33%20—%20Search%20in%20Rotated%20Sorted%20Array/)

**Problem:** Sorted array rotated at an unknown pivot, distinct values. Find `target` index or `-1`.

**Approach:** Binary search on indices. At `mid`, one half `[left..mid]` or `[mid..right]` is always sorted. Check if `target` lies in the sorted half; adjust `left`/`right` accordingly.

**Complexity:** O(log n) time, O(1) space.

---

### 153 — Find Minimum in Rotated Sorted Array · [sol](153%20—%20Find%20Minimum%20in%20Rotated%20Sorted%20Array/)

**Problem:** Rotated sorted array with distinct elements. Return the minimum element.

**Approach:** BS with `left < right`. If `nums[mid] > nums[right]`, minimum is in `(mid, right]` → `left = mid + 1`. Else minimum is in `[left, mid]` → `right = mid`. Answer is `nums[left]`.

**Complexity:** O(log n) time, O(1) space.

---

### 875 — Koko Eating Bananas

**Problem:** Piles of bananas and `h` hours. Koko eats at speed `k` bananas/hour (one pile per hour, leftover takes a full hour). Find the **minimum** `k` so she finishes all piles in ≤ `h` hours.

**Approach:** Binary search on answer. Search `k` in `[1, max(piles)]`. Feasibility: hours needed = `sum(ceil(pile / k)) ≤ h`. If feasible, try smaller `k` (`right = mid`); else `left = mid + 1`.

**Complexity:** O(n log M) time (M = max pile), O(1) space.

## Tip

Do not stop at classic binary search. **875 (Koko)** is the textbook binary-search-on-answer problem — a pattern that shows up in many Hard questions too.
