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
| 1 | 228 — Summary Ranges | Easy | [LeetCode](https://leetcode.com/problems/summary-ranges/) |
| 2 | 56 — Merge Intervals | Medium | [LeetCode](https://leetcode.com/problems/merge-intervals/) |
| 3 | 57 — Insert Interval | Medium | [LeetCode](https://leetcode.com/problems/insert-interval/) |
| 4 | 435 — Non-overlapping Intervals | Medium | [LeetCode](https://leetcode.com/problems/non-overlapping-intervals/) |
| 5 | 253 — Meeting Rooms II | Medium | [LeetCode](https://leetcode.com/problems/meeting-rooms-ii/) |

## Solution notes

### 228 — Summary Ranges

**Problem:** Sorted unique integers. Summarize consecutive runs as `"a->b"` (or just `"a"` if alone). Example: `[0,1,2,4,5,7]` → `["0->2","4->5","7"]`.

**Approach:** One pass. Keep start of current range. When the next value is not `prev + 1` (or end of array), emit the range string and start a new one.

**Complexity:** O(n) time, O(1) extra space excluding output.

---

### 56 — Merge Intervals

**Problem:** Given intervals, merge all overlapping ones and return the non-overlapping result covering the same ranges.

**Approach:** Sort by start. Track current merged interval. For each next interval: if it overlaps current (`next.start <= current.end`), extend `current.end = max(current.end, next.end)`; else push current and start a new one.

**Complexity:** O(n log n) time (sort), O(n) space for output.

---

### 57 — Insert Interval

**Problem:** Non-overlapping intervals sorted by start. Insert a new interval and merge if needed so the result stays sorted and non-overlapping.

**Approach:** Three phases in one pass: (1) push all intervals fully before `newInterval`, (2) merge all that overlap `newInterval` into it, (3) push the rest after. No full re-sort needed.

**Complexity:** O(n) time, O(n) space for output.

---

### 435 — Non-overlapping Intervals

**Problem:** Minimum number of intervals to remove so the rest are non-overlapping.

**Approach:** Greedy — sort by **end** time. Keep an interval if it starts after the last kept end; otherwise remove it (count++). Prefer ending earlier so more room remains for later intervals.

**Complexity:** O(n log n) time, O(1) extra space.

---

### 253 — Meeting Rooms II

**Problem:** Given meeting intervals, find the minimum number of conference rooms required (max concurrent meetings).

**Approach:** Chronological sweep — create events: +1 at start, −1 at end. Sort by time (if tie, process ends before starts). Scan and track running count; answer is the max count. Alternative: sort starts and ends separately, or use a min-heap of end times.

**Complexity:** O(n log n) time, O(n) space.

## Interview Favorites

**56** and **253** show up a lot. After sorting, a single linear pass is usually enough.
