// Time Complexity: O(n)
// Space Complexity: O(1)

function lengthOfLongestSubstring(s: string): number {
  let left = 0;
  let right = 0;
  let maxLength = 0;
  const seen = new Set<string>();

  while (right < s.length) {
    while (seen.has(s[right])) {
      seen.delete(s[left]);
      left++;
    }

    seen.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
    right++;
  }

  return maxLength;
}
