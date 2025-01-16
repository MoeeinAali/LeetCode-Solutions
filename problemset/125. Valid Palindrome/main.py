class Solution:
    def isPalindrome(self, s: str) -> bool:
        si, ei = 0, len(s) - 1
        while si < ei:
            while (not s[si].isalnum()) and (si < ei):
                si += 1
            while (not s[ei].isalnum()) and (si < ei):
                ei -= 1
            if s[si].lower() != s[ei].lower():
                print(s[si].lower(), s[ei].lower())
                return False
            si += 1
            ei -= 1
        return True
