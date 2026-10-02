# Stack / Monotonic Stack

LIFO for matching parentheses, evaluating expressions, and finding the next greater/smaller element with a monotonic stack.

## What to Learn

- Classic stack: Valid Parentheses, RPN
- Min Stack: track the minimum alongside values
- **Monotonic stack**: always increasing or decreasing
- Next greater / next smaller element patterns

## Problems

| # | Problem | Difficulty | Links |
|---|---------|------------|-------|
| 1 | 20 — Valid Parentheses | Easy | [LeetCode](https://leetcode.com/problems/valid-parentheses/) · [sol](20%20—%20Valid%20Parentheses/) |
| 2 | 155 — Min Stack | Medium | [LeetCode](https://leetcode.com/problems/min-stack/) · [sol](155%20—%20Min%20Stack/) |
| 3 | 739 — Daily Temperatures | Medium | [LeetCode](https://leetcode.com/problems/daily-temperatures/) · [sol](739%20—%20Daily%20Temperatures/) |
| 4 | 150 — Evaluate Reverse Polish Notation | Medium | [LeetCode](https://leetcode.com/problems/evaluate-reverse-polish-notation/) · [sol](150%20—%20Evaluate%20Reverse%20Polish%20Notation/) |
| 5 | 84 — Largest Rectangle in Histogram | Hard | [LeetCode](https://leetcode.com/problems/largest-rectangle-in-histogram/) · [sol](84%20—%20Largest%20Rectangle%20in%20Histogram/) |

## Solution notes

### 20 — Valid Parentheses · [sol](20%20—%20Valid%20Parentheses/)

**Problem:** String of `()`, `[]`, `{}`. Determine if brackets open and close in valid order.

**Approach:** Stack of open brackets. On open, push. On close, pop and verify the pair matches. Invalid if stack empty on close or wrong type. Valid iff stack empty at end.

**Complexity:** O(n) time, O(n) space.

---

### 155 — Min Stack · [sol](155%20—%20Min%20Stack/)

**Problem:** Design a stack supporting `push`, `pop`, `top`, and `getMin` in O(1) per operation.

**Approach:** Main stack plus auxiliary `minStack`: on each `push(x)`, push `min(x, currentMin)` onto `minStack`. `pop` pops both. `getMin` reads top of `minStack`.

**Complexity:** O(1) per operation, O(n) space.

---

### 739 — Daily Temperatures · [sol](739%20—%20Daily%20Temperatures/)

**Problem:** For each day, how many days until a **warmer** temperature? 0 if none.

**Approach:** Monotonic **decreasing** stack of indices (temperatures on stack are non-increasing). Scan left to right: while current temp is warmer than temp at stack top, pop index `j` and set `result[j] = i - j`. Push current index.

**Complexity:** O(n) time, O(n) space.

---

### 150 — Evaluate Reverse Polish Notation · [sol](150%20—%20Evaluate%20Reverse%20Polish%20Notation/)

**Problem:** Evaluate postfix expression with `+`, `-`, `*`, `/` on integers (truncate toward zero on division).

**Approach:** Stack: numbers push; operator pops `b` then `a`, pushes `a op b`. Final stack top is the answer.

**Complexity:** O(n) time, O(n) space.

---

### 84 — Largest Rectangle in Histogram · [sol](84%20—%20Largest%20Rectangle%20in%20Histogram/)

**Problem:** Bar heights; find the largest axis-aligned rectangle area under the histogram.

**Approach:** Monotonic **increasing** stack of indices. Append sentinel height 0. When `heights[i]` is lower than height at stack top, pop index `j`: width extends from previous stack index + 1 to `i - 1` (or full width if stack empty). Area = `heights[j] * width`, update max.

**Complexity:** O(n) time, O(n) space.

## Most Important

**739** and **84** — these two lock in the monotonic stack idea. Master one deeply and other next-greater problems become much easier.
