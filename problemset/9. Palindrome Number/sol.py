class Solution(object):
    def isPalindrome(self, x):
        """
        :type x: int
        :rtype: bool
        """
        numSTR = str(x)
        return numSTR == numSTR[::-1]