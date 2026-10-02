// Time Complexity: O(n log n)
// Space Complexity: O(n)

function lengthOfLIS(nums: number[]): number {
    const tails = [];
    for (const num of nums) {
      let left = 0;
      let right = tails.length;
      // lower_bound: first position where tails[pos] >= x
      while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (tails[mid] < num) {
          left = mid + 1;
        } else {
          right = mid;
        }
      }
      tails[left] = num;
    }
    return tails.length;
  }
  