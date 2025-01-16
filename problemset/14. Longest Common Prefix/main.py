class Solution:
    def longestCommonPrefix(self, strs: list[str]) -> str:
        ans = ""
        for l in range(0, len(strs[0])):
            for s in strs:
                if not s.startswith(strs[0][:l + 1]):
                    return strs[0][:l]
            ans += strs[0][l]
        return ans
