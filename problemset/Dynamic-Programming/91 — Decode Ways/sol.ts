// Time Complexity: O(n)
// Space Complexity: O(n) --> Like fibonacci, we only need to store the last two values (O(1) space)

function numDecodings(s: string): number {
  const dp = new Array(s.length + 1).fill(0);
  dp[0] = 1;
  for (let i = 1; i <= s.length; i++) {
    if (s[i - 1] != "0") {
      dp[i] += dp[i - 1];
    }
    if (i >= 2) {
      const twoDigits = parseInt(s.slice(i - 2, i));
      if (twoDigits >= 10 && twoDigits <= 26) {
        dp[i] += dp[i - 2];
      }
    }
  }
  return dp[s.length];
}
