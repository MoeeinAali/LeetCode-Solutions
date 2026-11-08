function uniquePaths(m: number, n: number): number {
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(1));
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[m - 1][n - 1];
}
