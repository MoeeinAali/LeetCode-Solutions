function isValid(s: string): boolean {
  const stack = [];
  const chars = s.split("");
  for (const char of chars) {
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else {
      if (stack.length === 0) {
        return false;
      }
      const last = stack.pop();
      if (last === "(" && char !== ")") return false;
      if (last === "[" && char !== "]") return false;
      if (last === "{" && char !== "}") return false;
    }
  }
  return stack.length === 0;
}

const s = "()[]{}";
console.log(isValid(s));
