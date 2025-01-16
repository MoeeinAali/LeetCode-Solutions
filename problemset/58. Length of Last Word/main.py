import re

class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        return len(re.split(r"\W+",s.strip())[-1])

