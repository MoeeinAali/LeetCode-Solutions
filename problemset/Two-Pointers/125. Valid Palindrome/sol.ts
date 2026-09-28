function isPalindrome(s: string): boolean {
  const filteredString = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  
  let left = 0;
  let right = filteredString.length - 1;

  while (left < right) {
    if (filteredString[left] == filteredString[right]) {
      left += 1;
      right -= 1;
      continue;
    } else {
      return false;
    }
  }

  return true;
}

s = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s));
