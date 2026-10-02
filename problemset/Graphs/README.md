# Graphs

Graph traversal with DFS and BFS, then patterns like topological sort.

## What to Learn

- Graph representation: adjacency list
- DFS and BFS on graphs / grids (e.g. islands)
- Path finding and cycle detection
- **Topological sort** (Course Schedule)
- Layered BFS for unweighted shortest path (Word Ladder)

## Problems

| # | Problem | Difficulty | Links |
|---|---------|------------|-------|
| 1 | 1971 — Find if Path Exists in Graph | Easy | [LeetCode](https://leetcode.com/problems/find-if-path-exists-in-graph/) |
| 2 | 200 — Number of Islands | Medium | [LeetCode](https://leetcode.com/problems/number-of-islands/) |
| 3 | 133 — Clone Graph | Medium | [LeetCode](https://leetcode.com/problems/clone-graph/) |
| 4 | 207 — Course Schedule | Medium | [LeetCode](https://leetcode.com/problems/course-schedule/) |
| 5 | 127 — Word Ladder | Hard | [LeetCode](https://leetcode.com/problems/word-ladder/) |

## Solution notes

### 1971 — Find if Path Exists in Graph

**Problem:** Undirected graph with `n` nodes and edge list. Is there a path from `source` to `destination`?

**Approach:** Build adjacency list. DFS or BFS from `source` with a visited set; return true if you reach `destination`. Union-Find also works.

**Complexity:** O(n + e) time, O(n + e) space.

---

### 200 — Number of Islands

**Problem:** Grid of `'1'` (land) and `'0'` (water). Count islands (4-connected land components).

**Approach:** Scan the grid. On each unvisited `'1'`, increment count and DFS/BFS flood-fill marking connected land as visited (or flip to `'0'`).

**Complexity:** O(m · n) time, O(m · n) worst-case recursion/queue space.

---

### 133 — Clone Graph

**Problem:** Deep-copy a connected undirected graph (each node has a list of neighbors).

**Approach:** HashMap `old → new`. DFS/BFS: if node already cloned, return the clone; else create clone, map it, then recursively/iteratively clone neighbors and fill `neighbors`.

**Complexity:** O(n + e) time, O(n) space for the map.

---

### 207 — Course Schedule

**Problem:** `numCourses` and prerequisites `[a, b]` meaning “b before a”. Can you finish all courses? (detect cycle in directed graph)

**Approach:** Build adjacency list + indegrees. Kahn’s algorithm (BFS topological sort): queue nodes with indegree 0, reduce neighbors’ indegrees. If you process all nodes, no cycle. DFS coloring (visiting/visited) also detects cycles.

**Complexity:** O(n + e) time, O(n + e) space.

---

### 127 — Word Ladder

**Problem:** Shortest transformation sequence from `beginWord` to `endWord`, changing one letter at a time; each intermediate word must be in `wordList`.

**Approach:** BFS from `beginWord`; each step tries all one-letter mutations that exist in the word set. First time you reach `endWord`, that level is the shortest length. Remove used words from the set to avoid revisits. Bidirectional BFS is a common optimization.

**Complexity:** O(n · L · 26) roughly (n = dict size, L = word length), O(n) space.

## Learning Order

Solidify **DFS** and **BFS** first, then **topological sort**. Word Ladder is an excellent BFS practice for shortest paths.
