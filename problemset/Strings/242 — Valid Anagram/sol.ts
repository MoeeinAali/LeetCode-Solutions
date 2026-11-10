function isAnagram(s: string, t: string): boolean {
  const map = new Map<string, number>();
  for (const char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  for (const char of t) {
    map.set(char, (map.get(char) || 0) - 1);
  }
  for (const value of map.values()) {
    if (value !== 0) {
      return false;
    }
  }
  return true;
}
