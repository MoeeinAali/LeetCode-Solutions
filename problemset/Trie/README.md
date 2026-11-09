# Trie (Prefix Tree)

A tree where each edge is a character, so words sharing a prefix share a path. Great for prefix lookups and word-search problems.

## What to Learn

- Node shape: `children` (map or array of 26) + `isEnd` flag
- `insert`, `search` and `startsWith` all walk the word char by char
- Wildcards (`.`) need DFS over children
- Trie + DFS on a grid to search many words at once

## Problems

| # | Problem | Difficulty | Links |
|---|---------|------------|-------|
| 1 | 208 — Implement Trie (Prefix Tree) | Medium | [LeetCode](https://leetcode.com/problems/implement-trie-prefix-tree/) |
| 2 | 211 — Design Add and Search Words Data Structure | Medium | [LeetCode](https://leetcode.com/problems/design-add-and-search-words-data-structure/) |
| 3 | 212 — Word Search II | Hard | [LeetCode](https://leetcode.com/problems/word-search-ii/) |

## Solution notes

### 208 — Implement Trie (Prefix Tree)

**Problem:** Implement `insert`, `search` and `startsWith`.

**Approach:** Each node holds `children: Map<string, Node>` and `isEnd`. `insert` creates missing nodes along the word and marks the last as an end. `search` requires a full path with `isEnd`; `startsWith` only requires the path.

**Complexity:** O(L) per operation, O(total chars) space.

---

### 211 — Design Add and Search Words Data Structure

**Problem:** Like a trie, but `search` can contain `.` matching any letter.

**Approach:** Normal insert. For `search`, DFS from the root: on a letter follow that child; on `.` try every child and return true if any succeeds.

**Complexity:** `addWord` O(L); `search` O(L) without wildcards, up to O(26^L) worst case.

---

### 212 — Word Search II

**Problem:** Find all words from a list that exist in a grid (adjacent cells, no reuse).

**Approach:** Build a trie of the words, then DFS from every cell following trie children. When a node ends a word, add it to the result and clear it to avoid duplicates. Prune trie branches that are exhausted.

**Complexity:** O(m · n · 4^L) worst case; the trie prunes heavily in practice.

## Tip

Be ready to write the Trie class from scratch in under 5 minutes — it is a common live-coding warm-up.
