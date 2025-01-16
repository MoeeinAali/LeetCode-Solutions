class Solution:
    def longestCommonPrefix(self, strs: list[str]) -> str:
        ans = ""
        for l in range(1, len(strs[0]) + 1):
            look_for = strs[0][0:l]
            for s in strs[1:]:
                if len(s) < l or s[0:l] != look_for:
                    return ans
            ans = look_for
        return ans
