# Intervals

Working with `[start, end]` ranges — merge, insert, and remove overlaps.

## What to Learn

- Sorting intervals by `start` (sometimes by `end`)
- Detecting overlap: `a.start <= b.end` (and the reverse check when needed)
- Merge Intervals and Insert Interval
- Counting rooms needed / minimum removals for non-overlapping intervals

## Problems

| # | Problem | Difficulty | Links |
|---|---------|------------|-------|
| 1 | 228 — Summary Ranges | Easy | [LeetCode](https://leetcode.com/problems/summary-ranges/) · [sol](228.%20Summary%20Ranges/) |
| 2 | 56 — Merge Intervals | Medium | [LeetCode](https://leetcode.com/problems/merge-intervals/) · [sol](56.%20Merge%20Intervals/) |
| 3 | 57 — Insert Interval | Medium | [LeetCode](https://leetcode.com/problems/insert-interval/) · [sol](57.%20Insert%20Interval/) |
| 4 | 435 — Non-overlapping Intervals | Medium | [LeetCode](https://leetcode.com/problems/non-overlapping-intervals/) · [sol](435.%20Non-overlapping%20Intervals/) |
| 5 | 253 — Meeting Rooms II | Medium | [LeetCode](https://leetcode.com/problems/meeting-rooms-ii/) · [sol](253.%20Meeting%20Rooms%20II/) |

## Interview Favorites

**56** and **253** show up a lot. After sorting, a single linear pass is usually enough.
