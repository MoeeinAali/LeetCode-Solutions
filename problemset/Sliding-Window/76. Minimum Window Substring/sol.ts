// Time Complexity: O(n)
// Space Complexity: O(1)

function minWindow(s: string, t: string): string {
  const sLength = s.length;
  const tLength = t.length;

  if (sLength < tLength) return "";

  const map = new Map<string, number>();
  for (let i = 0; i < tLength; i++) {
    map.set(t[i], (map.get(t[i]) ?? 0) + 1);
  }

  let left = 0;
  let right = 0;

  let have = 0;
  let need = tLength;

  let minLength = Infinity;
  let minStart = 0;

  while (right < sLength) {
    if (map.has(s[right])) {
      const count = map.get(s[right])!;
      if (count > 0) {
        have++;
      }
      map.set(s[right], count - 1);
    }

    while (have === need) {
      const windowWidth = right - left + 1;
      if (windowWidth < minLength) {
        minStart = left;
        minLength = windowWidth;
      }

      const leftChar = s[left];
      left++;
      if (map.has(leftChar)) {
        const count = map.get(leftChar)!;
        map.set(leftChar, count + 1);
        if (count === 0) {
          have--;
        }
      }
    }
    right++;
  }

  return minLength === Infinity
    ? ""
    : s.substring(minStart, minStart + minLength);
}
