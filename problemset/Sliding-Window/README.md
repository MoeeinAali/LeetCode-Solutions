# Sliding Window

Maintain a window over a subarray/substring and grow or shrink it to keep the problem constraint valid — typically O(n) instead of O(n²).

## What to Learn

- Variable-size window (`left` and `right`)
- The validity condition, and when to advance `left`
- HashMap/Set for counts inside the window
- Maximum window vs minimum window

## Problems

| # | Problem | Difficulty | Links |
|---|---------|------------|-------|
| 1 | 121 — Best Time to Buy and Sell Stock | Easy | [LeetCode](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) · [sol](121.%20Best%20Time%20to%20Buy%20and%20Sell%20Stock/) |
| 2 | 3 — Longest Substring Without Repeating Characters | Medium | [LeetCode](https://leetcode.com/problems/longest-substring-without-repeating-characters/) · [sol](3.%20Longest%20Substring%20Without%20Repeating%20Characters/) |
| 3 | 209 — Minimum Size Subarray Sum | Medium | [LeetCode](https://leetcode.com/problems/minimum-size-subarray-sum/) |
| 4 | 424 — Longest Repeating Character Replacement | Medium | [LeetCode](https://leetcode.com/problems/longest-repeating-character-replacement/) · [sol](424.%20Longest%20Repeating%20Character%20Replacement/) |
| 5 | 76 — Minimum Window Substring | Hard | [LeetCode](https://leetcode.com/problems/minimum-window-substring/) · [sol](76.%20Minimum%20Window%20Substring/) |

## Solution notes

### 121 — Best Time to Buy and Sell Stock · [sol](121.%20Best%20Time%20to%20Buy%20and%20Sell%20Stock/)

**Problem:** Daily stock prices. You may buy once and sell once (sell after buy). Maximize profit; return 0 if no profit is possible.

**Approach:** Single pass: track the minimum price seen so far. At each day, profit if sold today is `price - minPrice`; update global max profit. You are implicitly choosing the best buy before each day.

**Complexity:** O(n) time, O(1) space.

---

### 3 — Longest Substring Without Repeating Characters · [sol](3.%20Longest%20Substring%20Without%20Repeating%20Characters/)

**Problem:** Longest substring of `s` with all distinct characters.

**Approach:** Sliding window `[left, right]` with a `Set` of chars in the window. Expand `right`; if `s[right]` is already in the set, remove `s[left]` and increment `left` until the duplicate is gone. Track max window length.

**Complexity:** O(n) time, O(min(n, alphabet size)) space.

---

### 424 — Longest Repeating Character Replacement · [sol](424.%20Longest%20Repeating%20Character%20Replacement/)

**Problem:** Longest substring where you can change at most `k` characters so the whole substring becomes one letter.

**Approach:** Window counts per letter; `maxCount` = frequency of the dominant char in the window. Window is valid if `(right - left + 1) - maxCount <= k` (replacements needed). If invalid, shrink from `left` and decrement counts. Maximize window length.

**Complexity:** O(n) time, O(1) space (26 letters).

---

### 76 — Minimum Window Substring · [sol](76.%20Minimum%20Window%20Substring/)

**Problem:** In `s`, find the smallest substring that contains every character from `t` (including duplicates). Return `""` if none.

**Approach:** Map of required counts for `t`. Expand `right`: for needed chars, decrement map and count how many requirements are satisfied (`have === need`). When valid, repeatedly shrink `left` while still valid and update best start/length. Restore counts when `left` leaves.

**Complexity:** O(|s| + |t|) time, O(|Σ|) space for the map.

## Most Important

**3**, **424**, and **76** — these three cover nearly every Sliding Window pattern you will see.
