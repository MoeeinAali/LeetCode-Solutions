# Heap / Priority Queue

A data structure that always exposes the smallest or largest element in O(log n).

## What to Learn

- **Min heap vs max heap** — and when to use which
- Top-K pattern: usually a min heap of size k
- Streams: keep only what you need, not the whole array
- Two heaps for the median

## Problems

| # | Problem | Difficulty | Links |
|---|---------|------------|-------|
| 1 | 703 — Kth Largest Element in a Stream | Easy | [LeetCode](https://leetcode.com/problems/kth-largest-element-in-a-stream/) |
| 2 | 215 — Kth Largest Element in an Array | Medium | [LeetCode](https://leetcode.com/problems/kth-largest-element-in-an-array/) |
| 3 | 347 — Top K Frequent Elements | Medium | [LeetCode](https://leetcode.com/problems/top-k-frequent-elements/) · also in [Hash-Map](../Hash-Map/) |
| 4 | 973 — K Closest Points to Origin | Medium | [LeetCode](https://leetcode.com/problems/k-closest-points-to-origin/) |
| 5 | 295 — Find Median from Data Stream | Hard | [LeetCode](https://leetcode.com/problems/find-median-from-data-stream/) |

## Solution notes

### 703 — Kth Largest Element in a Stream

**Problem:** Design a class that maintains a stream of integers and returns the k-th largest after each `add`.

**Approach:** Min-heap of size at most `k`. Root is the k-th largest among candidates. On `add`, push the value; if size > k, pop the smallest. Return heap root.

**Complexity:** O(log k) per add, O(k) space.

---

### 215 — Kth Largest Element in an Array

**Problem:** Find the k-th largest element in an unsorted array (not the k-th distinct).

**Approach:** Min-heap of size k over the array (same idea as 703), or Quickselect (average O(n)). Heap is simpler; Quickselect is faster on average.

**Complexity:** O(n log k) with heap, O(k) space. Quickselect: average O(n), worst O(n²).

---

### 347 — Top K Frequent Elements

**Problem:** Return the `k` most frequent numbers.

**Approach (heap angle):** Count frequencies, then min-heap of size k keyed by frequency (or max-heap of all). Bucket sort by frequency is O(n).

**Complexity:** O(n log k) with heap, O(n) space. See also Hash-Map solution (sort entries).

---

### 973 — K Closest Points to Origin

**Problem:** Return the `k` points closest to `(0,0)` (Euclidean distance). Order of output does not matter.

**Approach:** Max-heap of size k by distance² (`x²+y²`) — keep the k closest (evict farthest). Or min-heap of all / Quickselect on distance.

**Complexity:** O(n log k) with bounded heap, O(k) space.

---

### 295 — Find Median from Data Stream

**Problem:** Support inserting numbers and returning the median of all numbers so far (average of two middle if even count).

**Approach:** Two heaps — max-heap for the lower half, min-heap for the upper half. Keep sizes balanced (`|lower| - |upper| ≤ 1`). Median is top of lower (odd) or average of both tops (even).

**Complexity:** O(log n) insert, O(1) median, O(n) space.

## Tip

Min vs max heap is the key mental model here. For “k largest,” a min heap of capacity k is often enough — the root is always the smallest among the current candidates.
