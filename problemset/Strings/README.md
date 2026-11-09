# Strings

String manipulation questions — very common in frontend interviews. Most reduce to a hash map of char counts, two pointers, a stack, or a sliding window.

## What to Learn

- Strings are immutable in JS/TS: build with an array and `join('')`, not repeated `+=` in a hot loop
- Char counts with a `Map` or a 26-length array (`charCodeAt(i) - 97`)
- Two pointers for palindromes and in-place style reversals
- Stack for nested structure (decode, parentheses)
- Know the built-ins (`split`, `slice`, `trim`, `localeCompare`) — and be ready to do it without them

## Problems

| # | Problem | Difficulty | Links |
|---|---------|------------|-------|
| 1 | 242 — Valid Anagram | Easy | [LeetCode](https://leetcode.com/problems/valid-anagram/) |
| 2 | 14 — Longest Common Prefix | Easy | [LeetCode](https://leetcode.com/problems/longest-common-prefix/) |
| 3 | 151 — Reverse Words in a String | Medium | [LeetCode](https://leetcode.com/problems/reverse-words-in-a-string/) |
| 4 | 443 — String Compression | Medium | [LeetCode](https://leetcode.com/problems/string-compression/) |
| 5 | 647 — Palindromic Substrings | Medium | [LeetCode](https://leetcode.com/problems/palindromic-substrings/) |
| 6 | 394 — Decode String | Medium | [LeetCode](https://leetcode.com/problems/decode-string/) |
| 7 | 22 — Generate Parentheses | Medium | [LeetCode](https://leetcode.com/problems/generate-parentheses/) |

### Already solved in other topics

- 125 — Valid Palindrome · [Two-Pointers](../Two-Pointers/)
- 3 — Longest Substring Without Repeating Characters · [Sliding-Window](../Sliding-Window/)
- 424 — Longest Repeating Character Replacement · [Sliding-Window](../Sliding-Window/)
- 76 — Minimum Window Substring · [Sliding-Window](../Sliding-Window/)
- 49 — Group Anagrams · [Hash-Map](../Hash-Map/)
- 20 — Valid Parentheses · [Stack](../Stack/)
- 5 — Longest Palindromic Substring · [Dynamic-Programming](../Dynamic-Programming/)

## Solution notes

### 242 — Valid Anagram

**Problem:** Do `s` and `t` contain exactly the same characters with the same counts?

**Approach:** If lengths differ, false. Count chars of `s` (+1) and `t` (−1) in one `Map`/array; every count must end at 0. (Follow-up: Unicode → use a `Map`.)

**Complexity:** O(n) time, O(1) space for a fixed alphabet.

---

### 14 — Longest Common Prefix

**Problem:** Longest prefix shared by all strings in the array.

**Approach:** Take the first string as the candidate; for each other string shorten the candidate until it is a prefix. Or compare column by column and stop at the first mismatch.

**Complexity:** O(total chars) time, O(1) space.

---

### 151 — Reverse Words in a String

**Problem:** Reverse the order of words; drop extra spaces.

**Approach:** `s.trim().split(/\s+/).reverse().join(' ')`. Be ready for the manual version: scan from the end, collect each word, join with a single space.

**Complexity:** O(n) time, O(n) space.

---

### 443 — String Compression

**Problem:** Compress an array of chars in place (`"aabbb"` → `"a2b3"`), return the new length.

**Approach:** Two pointers: `read` finds each run, `write` writes the char and then the digits of the run length (if > 1).

**Complexity:** O(n) time, O(1) extra space.

---

### 647 — Palindromic Substrings

**Problem:** Count all palindromic substrings.

**Approach:** Expand around each of the `2n − 1` centers and count every successful expansion (same idea as 5).

**Complexity:** O(n²) time, O(1) space.

---

### 394 — Decode String

**Problem:** Decode `k[encoded]` patterns, e.g. `3[a2[c]]` → `accaccacc`.

**Approach:** Stack of `(prevString, repeatCount)`. On `[` push the current string and count and reset; on `]` pop and set `current = prev + current.repeat(count)`. Digits build the count, letters append to current.

**Complexity:** O(output length) time and space.

---

### 22 — Generate Parentheses

**Problem:** All valid combinations of `n` pairs of parentheses.

**Approach:** Backtracking with counts of `open` and `close`: add `(` while `open < n`, add `)` while `close < open`. Record when the length is `2n`.

**Complexity:** O(4ⁿ / √n) time (Catalan number of results).

## Tip

Say the constraints out loud first: ASCII vs Unicode, case sensitivity, empty string. Interviewers notice that.
