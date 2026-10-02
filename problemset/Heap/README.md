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
| 1 | 703 — Kth Largest Element in a Stream | Easy | [LeetCode](https://leetcode.com/problems/kth-largest-element-in-a-stream/) · [sol](703.%20Kth%20Largest%20Element%20in%20a%20Stream/) |
| 2 | 215 — Kth Largest Element in an Array | Medium | [LeetCode](https://leetcode.com/problems/kth-largest-element-in-an-array/) · [sol](215.%20Kth%20Largest%20Element%20in%20an%20Array/) |
| 3 | 347 — Top K Frequent Elements | Medium | [LeetCode](https://leetcode.com/problems/top-k-frequent-elements/) · [sol](347.%20Top%20K%20Frequent%20Elements/) |
| 4 | 973 — K Closest Points to Origin | Medium | [LeetCode](https://leetcode.com/problems/k-closest-points-to-origin/) · [sol](973.%20K%20Closest%20Points%20to%20Origin/) |
| 5 | 295 — Find Median from Data Stream | Hard | [LeetCode](https://leetcode.com/problems/find-median-from-data-stream/) · [sol](295.%20Find%20Median%20from%20Data%20Stream/) |

## Tip

Min vs max heap is the key mental model here. For “k largest,” a min heap of capacity k is often enough — the root is always the smallest among the current candidates.
