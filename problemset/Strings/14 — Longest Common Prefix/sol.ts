function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return "";

  const first = strs[0];

  for (let i = 0; i < first.length; i++) {
    // every character in the first string
    const char = first[i];

    for (let j = 1; j < strs.length; j++) {
      // every other string
      const char2 = strs[j][i];
      if (char2 !== char) {
        return first.slice(0, i);
      }
    }
  }
  return first;
}
