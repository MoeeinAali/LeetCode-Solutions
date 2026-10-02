# Hash Map / Hash Set

Average O(1) lookup, insert, and delete — used for counting, grouping, and existence checks.

## What to Learn

Hardness matters less here than deciding **what to store** in the map/set:

- Value? Index? Frequency?
- A normalized key (e.g. sorted string for anagrams)?
- Existence only (Set) vs key → value (Map)?

## Problems

| # | Problem | Difficulty | Links |
|---|---------|------------|-------|
| 1 | 217 — Contains Duplicate | Easy | [LeetCode](https://leetcode.com/problems/contains-duplicate/) · [sol](217.%20Contains%20Duplicate/) |
| 2 | 1 — Two Sum | Easy | [LeetCode](https://leetcode.com/problems/two-sum/) · [sol](1.%20Two%20Sum/) |
| 3 | 49 — Group Anagrams | Medium | [LeetCode](https://leetcode.com/problems/group-anagrams/) · [sol](49.%20Group%20Anagrams/) |
| 4 | 347 — Top K Frequent Elements | Medium | [LeetCode](https://leetcode.com/problems/top-k-frequent-elements/) · [sol](347.%20Top%20K%20Frequent%20Elements/) |
| 5 | 128 — Longest Consecutive Sequence | Medium | [LeetCode](https://leetcode.com/problems/longest-consecutive-sequence/) · [sol](128.%20Longest%20Consecutive%20Sequence/) |

## Solution notes

### 217 — Contains Duplicate · [sol](217.%20Contains%20Duplicate/)

**Problem:** Return true if any value appears at least twice in the array.

**Approach:** Iterate and insert into a `Set`. If `num` is already in the set, return true. End of array → false.

**Complexity:** O(n) time, O(n) space.

---

### 1 — Two Sum · [sol](1.%20Two%20Sum/)

**Problem:** Unsorted array and `target`. Return indices of two numbers that add up to `target`. Exactly one solution; same element cannot be used twice.

**Approach:** Map `value → index` while scanning. For each `nums[i]`, check if `target - nums[i]` is already in the map; if yes, return both indices. Otherwise store `nums[i] → i`.

**Complexity:** O(n) time, O(n) space.

---

### 49 — Group Anagrams · [sol](49.%20Group%20Anagrams/)

**Problem:** Group strings that are anagrams of each other.

**Approach:** Anagrams share the same multiset of letters. Use sorted letters (or a 26-count signature) as map key; append each word to `map[key]`. Return all groups.

**Complexity:** O(n · k log k) time with sort-per-string, O(n · k) space (k = max word length).

---

### 347 — Top K Frequent Elements · [sol](347.%20Top%20K%20Frequent%20Elements/)

**Problem:** Return the `k` most frequent integers in the array (order of output does not matter).

**Approach:** Count frequencies in a `Map`. Sort entries by frequency descending and take the first `k` keys. (Heap/bucket sort are common upgrades for better bounds.)

**Complexity:** O(n log n) time with sort, O(n) space.

---

### 128 — Longest Consecutive Sequence · [sol](128.%20Longest%20Consecutive%20Sequence/)

**Problem:** Longest length of a consecutive integer sequence (e.g. 1,2,3,4) using elements from the array. Must run in O(n) without sorting the whole array.

**Approach:** Put all numbers in a `Set`. For each `num`, only start counting if `num - 1` is **not** in the set (start of a chain). Then walk `num+1, num+2, ...` while in the set. Track global max length.

**Complexity:** O(n) time, O(n) space.

## Tip

Before coding, write one sentence: “My map goes from ___ to ___.” If that sentence is unclear, you have not modeled the problem yet.
