// Time Complexity: O(n * target)
// Space Complexity: O(target)

function canPartition(nums: number[]): boolean {
  let sum = 0;
  sum = nums.reduce((acc, curr) => acc + curr, 0);
  if (sum % 2 !== 0) return false;
  
  const target = sum / 2;
  
  const dp = new Array(target + 1).fill(false);
  dp[0] = true;

  for (const num of nums) {
    for (let i = target; i >= num; i--) {
      if (dp[i] === true) continue;
      dp[i] = dp[i - num];
    }
  }
  return dp[target];
}
