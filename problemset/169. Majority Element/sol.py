class Solution:
    def majorityElement(self, nums: list[int]) -> int:
        major = nums[0]
        cnt = 0 
        for num in nums:
            if cnt == 0 : 
                major = num 
                cnt += 1 
            elif major == num:
                cnt += 1 
            else: 
                cnt -= 1
        return major 
