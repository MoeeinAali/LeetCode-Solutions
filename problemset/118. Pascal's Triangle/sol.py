class Solution:
    def generate(self, numRows: int) -> list[list[int]]:
        nums = [[1] * (j + 1) for j in range(numRows)]
        for row in range(2, numRows):
            for col in range(1, len(nums[row])-1):
                nums[row][col] = nums[row - 1][col] + nums[row - 1][col - 1]
        return nums