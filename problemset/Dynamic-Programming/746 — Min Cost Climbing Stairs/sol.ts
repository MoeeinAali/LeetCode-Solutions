// Time Complexity: O(n)
// Space Complexity: O(n) --> Like fibonacci, we only need to store the last two values (O(1) space)

function minCostClimbingStairs(cost: number[]): number {
  cost.push(0);
  const dp = new Array(cost.length).fill(0);
  dp[0] = cost[0];
  dp[1] = cost[1];
  for (let i = 2; i < cost.length; i++) {
    dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i];
  }
  return Math.min(dp[cost.length - 1], dp[cost.length - 2]);
}
