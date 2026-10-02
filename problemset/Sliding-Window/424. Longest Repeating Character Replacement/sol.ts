function characterReplacement(s: string, k: number): number {
  const counts = new Array(26).fill(0);
  function getIndex(str: string): number {
    return str.charCodeAt(0) - 65;
  }

  let maxCount = 0;
  let maxLength = 0;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    const index = getIndex(s[right]);
    counts[index]++;
    maxCount = Math.max(maxCount, counts[index]);

    while (right - left + 1 - maxCount > k) {
      const leftIndex = getIndex(s[left]);
      counts[leftIndex]--;
      left++;
    }
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

s = "AABABBA";
k = 1;
console.log(characterReplacement(s, k));
