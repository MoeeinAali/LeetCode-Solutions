class Solution:
    def removeElement(self, nums: list[int], val: int) -> int:
        l = len(nums)
        cnt = 0
        pl = 0 
        pr = len(nums) - 1
        while(pl < pr):
            if nums[pl] == val:
                cnt += 1
                nums[pl] , nums[pr] = nums[pr] , nums[pl]
                pr -= 1
                continue
            else:
                pl += 1
        if pl==pr:
            if nums[pl] == val:
                nums.pop(pl)
        return len(nums) - cnt

