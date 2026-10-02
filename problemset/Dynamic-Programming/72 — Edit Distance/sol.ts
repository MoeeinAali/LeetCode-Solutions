function minDistance(word1: string, word2: string): number {
  const dp = new Array(word1.length + 1)
    .fill(0)
    .map(() => new Array(word2.length + 1).fill(0));

  const m = word1.length;
  const n = word2.length;

  for (let i = 0; i <= m; i++) {
    dp[i][0] = i; // word1 to empty string
  }
  for (let j = 0; j <= n; j++) {
    dp[0][j] = j; // empty string to word2
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        const insert = dp[i][j - 1];
        const remove = dp[i - 1][j];
        const replace = dp[i - 1][j - 1];

        dp[i][j] = 1 + Math.min(insert, remove, replace);
      }
    }
  }

  return dp[m][n];
}
