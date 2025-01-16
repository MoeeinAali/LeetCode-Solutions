class Solution:
    def romanToInt(self, s: str) -> int:
        translations = {
            "I": 1,
            "V": 5,
            "X": 10,
            "L": 50,
            "C": 100,
            "D": 500,
            "M": 1000,
            "IV": 4, "IX": 9,
            "XL": 40, "XC": 90,
            "CD": 400, "CM": 900,
        }
        result = 0
        i = 0
        while i < len(s):
            word1 = s[i]
            word2 = s[i:i + 2]
            if word2 in translations:
                result += translations[word2]
                i += 2
            else:
                result += translations[word1]
                i += 1
        return result
