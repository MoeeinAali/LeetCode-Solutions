class Solution:
    def removeDuplicates(self, nums):
        cnt = 1 
        ptr = 1
        index = 1
        while ptr < len(nums):
            if nums[ptr] == nums[ptr-1]:
                ptr += 1
            else:
                nums[index] = nums[ptr]
                cnt += 1
                ptr += 1
                index += 1
        return cnt 


